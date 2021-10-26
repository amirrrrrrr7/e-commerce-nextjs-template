
import { createAction } from '@reduxjs/toolkit';

import cookie from 'js-cookie';

import { message } from "components/antd";

import dataMaker from "dataPreper/AuthJsonBody";
import SetAttribute from "dataPreper/LocalStorageSetData";
import GetAttribute from "dataPreper/LocalStorageGetData";
import request from "tools/Request";
import { LOGIN_URL, GET_USER_URL } from "authURL/index";

const getToken = createAction('GET_TOKEN')
const SubmitLoading = createAction('SUBMIT_LOADING')
const recaptchaCaller  = createAction('RECAPTCHA_CALLER')

export function getUser (){
    request.post( GET_USER_URL )
        .then(function (response) {
            SetAttribute('user_detail',response.data.data.user);
            SetAttribute('is_logged_in',true);
        })
        .catch(function (error) {
                message.error('something is wrong, please try again');
        });

}

export function login(data, router) {
    return (dispatch) => {
        dispatch(SubmitLoading(true))

        let body = dataMaker(data)
        request.post(LOGIN_URL, body)
            .then(function (response) {

                // JUST IN DEVELOPMENT MODE

                cookie.set('access', response.data.data.accessToken)
                cookie.set('refresh', response.data.data.refreshToken)

                // =========================

               /* dispatch(getToken({
                    accessToken: response.data.data.accessToken,
                    refreshToken: response.data.data.refreshToken
                }))*/

                getUser();

                setTimeout(() => {
                    if (GetAttribute('user_detail') === null) {
                        SetAttribute('user_detail',null)
                    }
                    const user = GetAttribute('user_detail');

                    if(!user.is_confirmed_email){
                        const msg = response.data.msg

                        message.warning(msg.title + " " + msg.message);
                    }
                    else message.success("login was successfully");
                    router.push("/")
                    dispatch(SubmitLoading(false));
                },3000)
            })
            .catch(function (error) {
                dispatch(recaptchaCaller());

                const msg = error.response.data.msg
                if (error.response.status === 400)
                    message.error(msg.title + " " + msg.message);
                else message.error(t('error-response-message-else'));
                dispatch(SubmitLoading(false));
            })
    }
}