// Sending requests

import { LOGOUT_URL, REFRESH_USER_TOKEN_URL } from "authURL/index";
import cookie from "js-cookie";
import SetAttribute from "dataPreper/LocalStorageSetData";
import request from "../Request";
import GetAttribute from "dataPreper/LocalStorageGetData";
import {message} from "../../components/antd";

// Refresh User Token using refresh token
export function refreshUserToken(){
	return fetch(REFRESH_USER_TOKEN_URL, {
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                            'refreshToken': cookie.get("refresh")
                        },
                        redirect: 'follow',
                        referrer: 'no-referrer',
                    })
}

export function signOut (){
    SetAttribute('is_logged_in', false);
    SetAttribute('user_detail', null);

    cookie.set('access', '')
    cookie.set('refresh', '')
}