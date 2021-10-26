
import { useEffect, useState } from "react";

import Head from 'next/head';
import Link from "next/link";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { Form, Button, message, Spin, Row, Col } from 'components/antd';
import { Text, Submit } from 'utilsCmp/Field';
import  { LockOutlined, LockFilled } from "components/antd-icons";

import request from "tools/Request";
import dataMaker from 'dataPreper/AuthJsonBody';
import GetAttribute from "dataPreper/LocalStorageGetData";
import SetAttribute from "dataPreper/LocalStorageSetData";
import { FORGOT_PASS_URL } from 'authURL/index';
import ReCaptcha from 'components/generic/ReCaptcha';
import { GenerateRecaptcha, ValidateRecaptcha } from 'tools/ReCaptcha';

export  default function Forgot () {

    const [form] = Form.useForm();
    const [loadingPage, setLoadingPage] = useState(true);
    const [loading, setLoading] = useState(false);
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

        //only generated forgot password token could stay in this page
        //else redirect them to generate forgot pass activation page
        if (!GetAttribute('reset-password-email')){
            router.push("/forgot-password-activation");
            setLoadingPage(false)
        }
        GenerateRecaptcha();
    }, []);

    useEffect(() => {
        if (counter >= 3) {
            setActiveReCaptcha({
                visibility: "visible"
            })
        }
    }, [counter])

    function req (values){
        setLoading(true)

        //add entered email in previous section from localStorage to the request data
        values.email = GetAttribute('reset-password-email');
        delete values.confirm

        //set request body json format as ideal for the server
        let body = dataMaker(values);
        //Start the request
        request.post( FORGOT_PASS_URL, body )
            .then(function (response) {
                const msg = response.data.msg

                message.success(msg.title + " " + msg.message);
                //remove email from the localStorage
                SetAttribute('reset-password-email', "");

                //redirect to user to Login
                router.push("/login");
                setLoading(false)
            }).catch(function (error) {
            setCounter(counter +1)

            if (error.response.status === 400)
                message.error(t('invalid-token'));
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
                    <Row>
                        <Col span={12}>
                            <Text
                                name={'new_password'}
                                rules={[
                                    {
                                        required: true, message: t('password-message'),
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (value.length >= 10) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error(t('length-error')));
                                            },
                                    }),
                                ]}
                                placeholder={t('password-placeholder')}
                                hasFeedback={true}
                                inputType={'password'}
                                icon={<LockOutlined />}
                            />
                        </Col>
                        <Col span={12}>
                            <Text
                                name={'confirm'}
                                dependencies={['new_password']}
                                inputType={'password'}
                                rules={[
                                    {
                                        required: true,
                                        message: t('password-confirm'),
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('new_password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(new Error(t('conflict-password')));
                                        },
                                    }),
                                ]}
                                hasFeedback={true}
                                placeholder={t('confirm-placeholder')}
                                icon={<LockOutlined />}
                            />
                        </Col>
                    </Row>
                    <Text name={'password_token'}
                          rules={[{required: true, message: t('token-message') }]}
                          placeholder={t('token-placeholder')}
                          hasFeedback={false}
                          icon={<LockFilled />}
                          inputType={'number'}
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
    top: 110px;
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