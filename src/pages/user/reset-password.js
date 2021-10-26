
import { useEffect, useState } from "react";

import Head from 'next/head';
import Link from "next/link";
import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import {Form, Button, Spin, message, Col, Row } from 'components/antd';
import { Text, Submit } from 'utilsCmp/Field';
import { LockFilled, LockOutlined } from "components/antd-icons";
import ReCaptcha from 'components/generic/ReCaptcha';
import { GenerateRecaptcha, ValidateRecaptcha } from 'tools/ReCaptcha';

import request from "tools/Request";
import dataMaker from 'dataPreper/AuthJsonBody';
import { ifNotLogin } from 'tools/LoginChecking';
import { RESET_PASS_URL } from 'authURL/index';

export  default function Reset () {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);
    const [activeReCaptcha, setActiveReCaptcha] = useState({
        visibility: "hidden"
    });
    const [counter, setCounter] = useState(0);
    const router = useRouter();
    const { t } = useTranslation('reset-password');

    useEffect(() => {
        ifNotLogin(setLoadingPage,router);
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

        delete values.confirm
        let body = dataMaker(values);

        request.post( RESET_PASS_URL, body )
            .then(function (response) {
                const msg = response.data.msg

                message.success(msg.title + " " + msg.message);

                router.push("/profile");
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
    }

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
                                inputType={'password'}
                                hasFeedback={true}
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

                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
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
    top: 120px;
}

            `}</style>
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['reset-password']),
    }
})