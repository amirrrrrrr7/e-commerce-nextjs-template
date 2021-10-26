
import { useEffect, useState } from "react";

import Head from 'next/head';
import Link from "next/link";

import { useRouter } from 'next/router';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { Form, Button, message, Spin } from 'components/antd';
import { Text, Submit } from 'utilsCmp/Field';
import { MailOutlined } from "components/antd-icons";
import ReCaptcha from 'components/generic/ReCaptcha';
import { GenerateRecaptcha, ValidateRecaptcha } from 'tools/ReCaptcha';

import request from "tools/Request";
import dataMaker from 'dataPreper/AuthJsonBody';
import GetAttribute from "dataPreper/LocalStorageGetData";
import SetAttribute from "dataPreper/LocalStorageSetData";
import { FORGOT_PASS_TOKEN_URL } from 'authURL/index';

export  default function ForgotActivation () {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);
    const [activeReCaptcha, setActiveReCaptcha] = useState({
        visibility: "hidden"
    });
    const [counter, setCounter] = useState(0);
    const router = useRouter();
    const { t } = useTranslation('forgot-password');

    useEffect(() => {

        const isLoggedIn = GetAttribute('is_logged_in')

        if (isLoggedIn){
            router.push("/");
            setLoadingPage(false)
        }

        GenerateRecaptcha();
    },[])

    useEffect(() => {
        if (counter >= 3) {
            setActiveReCaptcha({
                visibility: "visible"
            })
        }
    }, [counter])

    function req(values){
        setLoading(true)
        //"/user/reset-password"

        //set request body json format as ideal for the server
        let body = dataMaker(values);
        //Start the request
        request.post( FORGOT_PASS_TOKEN_URL, body )
            .then(function (response) {
                const msg = response.data.msg

                message.success(msg.title + " " + msg.message);
                //save given email to the localStorage for further actions
                SetAttribute('reset-password-email', values.email)
                //redirect to user to insert her/his emailed Code to renew password
                router.push("/forgot-password");
                setLoading(false)
            }).catch(function (error) {
            setCounter(counter +1)
            const msg = error.response.data.msg

            if (error.response.status === 400)
                message.error(msg.title + " " + msg.message);
            else message.error(t('error-response-message-else'));
            setLoading(false)
        });
    }

    const onFinish = (values) => {

        const validate = ValidateRecaptcha()
        if (counter < 3) {
            req(values)
        }
        else if (counter >= 3 && validate) {
            req(values)
        }
        else message.error("please checked reCaptcha")
    };

    if (!loadingPage) {
        return (
            <div className="login-form">
                <Spin size="large" />
            </div>
        )
    }
    return(
        <>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <div className="login-form">
                <Link href="/">
                    <a><img className="login-img" src="/images/logo/login.png" alt="img"/></a>
                </Link>
                <br />
                <hr style={{ border: "solid 1px #d9d9d9", backgroundColor: "#d9d9d9"}} />
                <h2>{t('header')}</h2>
                <Form
                    form={form}
                    name="normal_login"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Text name={'email'}
                          rules={[{type: 'email', required: true, message: t('email-message') }]}
                          placeholder={t('email-placeholder')}
                          hasFeedback={false}
                          icon={<MailOutlined />}
                    />
                    <Form.Item shouldUpdate>
                        {() => (
                            <Submit
                                loading={loading}
                                label={t('Submit-Button')}
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            />
                        )}
                    </Form.Item>
                    <Button size="large" block>
                        <Link href='/'>
                            <a>{t('back-Button')}</a>
                        </Link>
                    </Button>
                    <br />
                    <br />
                    <div style={activeReCaptcha}>
                        <ReCaptcha className="recaptcha" />
                    </div>
                </Form>
                <div className="footer-login">
                    <Button type="link">{t('Support-Button')}</Button>
                    <Button type="link">{t('Disclaimer-Button')}</Button>
                    <Button type="link">{t('Privacy-Policy-Button')}</Button>
                </div>
            </div>
            <style jsx>{`

.login-img {
    margin: auto;
    width: 100px;
    display: block;
}

.footer-login {
    position: relative;
    top: 120px;
}

            `}</style>
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['forgot-password']),
    }
})