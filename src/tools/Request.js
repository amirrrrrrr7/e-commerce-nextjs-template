
import axios from 'axios';

import cookie from 'js-cookie';
// LocalStorage
import SetAttribute from "dataPreper/LocalStorageSetData";
// request makers
import {
    refreshUserToken,
} from 'tools/ReqServices/authServices'
// import { message } from 'components/antd';


axios.defaults.headers.common.Accept = 'application/json'
axios.defaults.headers.common['Content-type'] = 'application/json'

const requestInstance = axios.create()

requestInstance.interceptors.request.use(function (config) {
    // trying to get accessToken
    let accessToken = '';
    try{
        accessToken = cookie.get('access');
    }catch (e){
        accessToken = null;
    }
    // set access token to the header if it is exist
    if (accessToken) {
        config.headers.accessToken = `${accessToken}`;
    }

    return config;
}, function (error) {
    return Promise.reject(error);
});

requestInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    // Do with other response error status

    if (error.response.status !== 401){
        return Promise.reject(error);
    }
    // start commentable section
    return new Promise ((resolve , reject) => {
        const originalReq = error.config;
        // every time server return 4O1 status ,
         // the access token will replace with previous one using `refresh-token` that stores in the cookie.
                if ( error.response.status === 401 && error.config && !error.config.__isRetryRequest ) {
                    console.log('unAuthorized action')
                    originalReq._retry = true;
                    // NOTE:
                    //     you should `Not` use your customized request module to send this request.
                    let res = refreshUserToken().then(res => res.json())
                        .then(res => {
                            //re new stored access token here
                            cookie.set(
                                'access', res.data.accessToken
                            )
                            // set new accessToken in axios header
                            axios.defaults.headers.common[
                                'accessToken'
                            ] = `${res.data.accessToken}`;

                            return axios(originalReq);
                    }).catch(function (error) {
                        // when refresh token could not re-new the accessToken :
                            // remove related LocalStorage user's data
                            SetAttribute('is_logged_in', false);
                            SetAttribute('user_detail', null);
                            // remove related cookie user's data
                            cookie.set('access', '')
                            cookie.set('refresh', '')
                            console.log(error);
                            return axios(originalReq);
                    });
                    resolve(res);
                }

                // return Promise.reject(error);
            });
    // end commentable section
});

export const request = requestInstance
export default request