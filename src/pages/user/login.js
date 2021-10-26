
import { useState, useEffect } from "react";

import Head from 'next/head';
import Link from "next/link";
import { useRouter } from 'next/router';
// import Image from 'next/image';

import { useSelector, useDispatch } from 'react-redux';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import {Form, Button, Spin, message} from 'components/antd';
import  { MailOutlined, LockOutlined } from 'components/antd-icons';
import { Text, Submit } from 'utilsCmp/Field';
import ReCaptcha from 'components/generic/ReCaptcha';
import { GenerateRecaptcha, ValidateRecaptcha } from 'tools/ReCaptcha';

import { login } from 'redux/actions/user';
import { ifLogin } from 'tools/LoginChecking';

export  default function Login () {

    const [form] = Form.useForm();
    const [loadingPage, setLoadingPage] = useState(true);
    const [activeReCaptcha, setActiveReCaptcha] = useState({
        visibility: "hidden",
    });
    const router = useRouter();
    const dispatch = useDispatch();
    const SubmitLoading = useSelector(state => state.SubmitLoading);
    const recaptchaCaller = useSelector(state => state.recaptchaCaller);
    const { t } = useTranslation('login');

    useEffect(() => {
        ifLogin(setLoadingPage,router);
        GenerateRecaptcha();
    },[])

    useEffect(() => {
        if (recaptchaCaller >= 3) {
            setActiveReCaptcha({
                visibility: "visible"
            })
        }
    }, [recaptchaCaller])

    const onFinish = (values) => {

        const validate = ValidateRecaptcha()
        if (recaptchaCaller < 3) {
            dispatch(login(values, router))
        }
        else if (recaptchaCaller >= 3 && validate) {
            dispatch(login(values, router))
        }
        else message.error("please check the reCaptcha")

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
                {/*<Image
                    src="/images/logo/login.png"
                    alt="site logo"
                    width={100}
                    height={80}
                />*/}
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
                    <Text name={'password'}
                          rules={[{required: true, message: t('password-message') }]}
                          placeholder={t('password-placeholder')}
                          hasFeedback={false}
                          inputType={'password'}
                          icon={<LockOutlined />}
                    />

                    <Form.Item>
                        <Button type="link">
                            <Link href="/forgot-password-activation">
                                <a>
                                    {t('forgot-password')}
                                </a>
                            </Link>
                        </Button>
                    </Form.Item>
                    <Form.Item shouldUpdate>
                        {() => (
                            <Submit
                                loading={SubmitLoading}
                                label={t('Submit-Button')}
                                disabled={
                                    !form.isFieldsTouched(true) ||
                                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                }
                            />
                        )}
                    </Form.Item>
                    <Button size="large" block>
                        <Link href="/signup">
                            <a>{t('signup-Button')}</a>
                        </Link>
                    </Button>
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
    top: 10px;
}

            `}</style>
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['login']),
    }
})