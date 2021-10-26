
import { useEffect, useState } from "react";

import Head from 'next/head';

import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from 'next-i18next';

import { Form, Button, message, Input, Spin, Col, Row, Upload } from "components/antd";
import { Text, Submit } from 'utilsCmp/Field';
import  { MailOutlined, LockOutlined, UserOutlined } from 'components/antd-icons';
import ReCaptcha from 'components/generic/ReCaptcha';
import { GenerateRecaptcha, ValidateRecaptcha } from 'tools/ReCaptcha';

import request from "tools/Request";
import dataMaker from 'dataPreper/AuthJsonBody';
import { ifNotLogin } from 'tools/LoginChecking';

import LayoutProfile from 'generCmp/Profile/ProfileLayout';
import Link from "next/link";

export default function Profile (){

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [loadingPage, setLoadingPage] = useState(true);
    const [activeReCaptcha, setActiveReCaptcha] = useState({
        visibility: "hidden"
    });
    const [counter, setCounter] = useState(0);

    const router = useRouter();
    const { t } = useTranslation('edit-profile');

    useEffect(() => {
        ifNotLogin(setLoadingPage,router);
    }, []);

    const fileList = [
        {
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            uid: '-2',
            name: 'yyy.png',
            status: 'error',
        },
    ];

    const onFinish = (values) => {

    }

    if (!loadingPage) {
        return (
            <div className="login-form">
                <Spin size="large" />
            </div>
        )
    }
    return(
        <LayoutProfile>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <div className="profile-form">
                <Form
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Text name={'username'}
                          rules={[{ required: true, message: t('username-message') }]}
                          hasFeedback={false}
                          label="User Name"
                    />
                    <Row>
                        <Col span={11}>
                            <Text name={'first-name'}
                                  hasFeedback={false}
                                  label="First Name"
                            />
                        </Col>
                        <Col span={11} offset={2}>
                            <Text name={'last-name'}
                                  hasFeedback={false}
                                  label="Last Name"
                            />
                        </Col>
                    </Row>
                    <Text name={'email'}
                          rules={[{type: 'email', required: true, message: t('email-message') }]}
                          hasFeedback={false}
                          label="Email"
                    />
                    <Form.Item
                        name="description"
                        label="Description"
                    >
                        <Input.TextArea
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    </Form.Item>
                    <Row>
                        <Col span={18}>
                            <Text name={'video'}
                                  inputType="url"
                                  hasFeedback={false}
                                  label="Your video URL"
                            />
                        </Col>
                        <Col offset={1} span={5}>
                            <Button
                                style={{
                                    position: "relative",
                                    top: "32px",
                                    left: "7px"
                                }}
                                size="large">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        defaultFileList={[...fileList]}
                    />
                    <br />
                    <Form.Item shouldUpdate>
                        {() => (
                            <Submit
                                loading={loading}
                                label="Update"
                            />
                        )}
                    </Form.Item>
                    <div style={activeReCaptcha}>
                        <ReCaptcha className="recaptcha" />
                    </div>
                </Form>
            </div>
        </LayoutProfile>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['edit-profile','sidebar']),
    }
})