
import { useState, useEffect } from "react";

import Link from 'next/link';
import { useRouter } from "next/router";

import { useTranslation } from 'next-i18next';

import {
    Menu, message, Progress, Rate, Typography,
    Popover, Col, Row, Avatar, Button
} from "components/antd";
import {
    LogoutOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    UnorderedListOutlined,
    UserOutlined,
    MailOutlined,
    LockOutlined,
    EllipsisOutlined,
    LockFilled,
    EditOutlined
} from "components/antd-icons";

import request from "tools/Request";
import { signOut } from 'tools/ReqServices/authServices';
import { GENERATE_EMAIL_URL, LOGOUT_URL, RESET_PASS_TOKEN_URL } from "authURL/index";
import GetAttribute from "dataPreper/LocalStorageGetData";

export default function Sidebar ({avatarSize, blockMessage, col2}){

    const {Title} = Typography;
    const { t } = useTranslation('sidebar')

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [username, setUsername] = useState('User Name');
    const [blockMessages, setBlockMessages] = useState(t('block-message'))
    const [rate, setRate] = useState()
    const [adminHide, setAdminHide] = useState({
        display: "none"
    });
    const [emailHide, setEmailHide] = useState({
        display: "block"
    });
    const [blockMode, setBlockMode] = useState({
        display: "none"
    });
    const [blockAvatar, setBlockAvatar] = useState("/images/members/amirMohamad.png");

    const router = useRouter();

    const adminMenu = (
        <Menu>
            <Menu.Item key="6">
                {t('block-Button')}
            </Menu.Item>
            <Menu.Item key="7">
                {t('suspend-Button')}
            </Menu.Item>
        </Menu>
    )

    useEffect(() => {

        const isLoggedIn = GetAttribute('is_logged_in')
        const user = GetAttribute('user_detail')
        const is_admin = false

        if (isLoggedIn){
            const is_active = user.is_active
            const is_blocked = user.is_blocked
            const is_suspended = user.is_suspended
            const is_confirmed_email = user.is_confirmed_email

            setUsername(user.username)
            setRate(user.rate)

            if (is_confirmed_email){
                setEmailHide({
                    display: "none"
                })
            }
            if (is_admin){
                setAdminHide({
                    display: "block"
                })
            }
            if (!is_active) {
                setBlockMode({
                    display: "block"
                })
                setBlockMessages(t('inactive-message'))
                setBlockAvatar(
                    <LockFilled
                        style={{
                            color: '#001529'
                        }}/>
                )
            }
            else if (is_blocked) {
                setBlockMode({
                    display: "block"
                })
                setBlockAvatar(
                    <LockFilled
                    style={{
                        color: '#001529'
                    }}/>
                )
            }
            else if (is_suspended){
                setBlockMode({
                    display: "block"
                })
                setBlockMessages(t('suspend-message'))
                setBlockAvatar(
                    <Progress
                        style={{
                            position: 'relative',
                            bottom: "3px"
                        }}
                        width={avatarSize}
                        format={() => <LockFilled
                            style={{
                                color: '#001529'
                            }}
                        />}
                        type="circle"
                        status="normal"
                        percent={60}
                    />
                )
            }
        }
    }, []);

    function email() {
        setLoading(true)

        request.post( GENERATE_EMAIL_URL )
            .then(function (response) {
                const msg = response.data.msg

                message.success(msg.title + " " + msg.message);
                router.push("/email-activation");
                setLoading(false)
            })
            .catch(function (error) {
                const msg = error.response.data.msg

                if (error.response.data.status === 400)
                    message.error(msg.title + " " + msg.message);
                else message.error(t('logout-message'));
                setLoading(false)
            });
    }

    function reset (){
        setLoading2(true)

        request.post( RESET_PASS_TOKEN_URL )
            .then(function (response) {
                const msg = response.data.msg

                message.success(msg.title + " " + msg.message);
                router.push("/reset-password");
                setLoading2(false)
            })
            .catch(function (error) {
                const msg = error.response.data.msg

                if (error.response.data.status === 400)
                    message.error(msg.title + " " + msg.message);
                else message.error(t('error-response-message-else'));
                setLoading2(false)
            });
    }

    function logout (){

        request.post( LOGOUT_URL )
            .then(function (response) {
                const msg = response.data.msg
                signOut()
                message.success(msg.title + " " + msg.message);
                router.push('/')
            })
            .catch(function (error) {
                signOut()
                message.success(t('logout-message'));
                router.push('/')
            });
    }

    return(
        <>
            <div className="heading">
                <Row>
                    <Col span={12}>
                        <Avatar
                            size={avatarSize}
                            src={blockAvatar}
                            style={{
                                backgroundColor: '#ededed',
                                marginTop: "8px"
                            }}
                        />
                        <span style={blockMessage}>
                            <span style={blockMode}>
                                <div
                                    style={{
                                        fontSize: "11pt",
                                        color: '#ededed',
                                        marginTop: "10px"
                                    }}
                                >
                                    {blockMessages}
                                </div>
                            </span>
                        </span>
                    </Col>
                    <Col
                        span={12}
                        style={col2}
                    >
                        <span style={adminHide}>
                            <Popover
                                placement="bottomRight"
                                content={adminMenu}
                                trigger="click"
                            >
                            <div
                                style={{
                                    textAlign: "right",
                                    marginTop: "-26px"
                                }}
                            >
                                <Button type="text">
                                    <EllipsisOutlined
                                        style={{
                                            position: "relative",
                                            left: "17px",
                                            fontSize: "18pt",
                                            color: "#ededed",
                                        }}
                                    />
                                </Button>
                            </div>
                        </Popover>
                        </span>
                        <Title level={5} style={{color: "#ededed"}}>{username}</Title>
                        <Rate allowHalf disabled defaultValue={rate}
                              style={{ fontSize: 18 }}
                        />
                    </Col>
                </Row>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<InfoCircleOutlined />}>
                    {t('personal-info-Button')}
                </Menu.Item>
                <Menu.Item key="2" icon={<EditOutlined />}>
                    <Link href="/profile/edit">
                        <a>
                            {t('edit-profile-Button')}
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                    {t('product-Button')}
                </Menu.Item>
                <Menu.Item style={adminHide} key="4" icon={<UserOutlined />}>
                    {t('admin-Button')}
                </Menu.Item>

                <Menu.Item disabled={loading2} key="5" icon={<LockOutlined />}>
                    <span onClick={reset}>
                    {t('reset-Button')}
                    </span>
                </Menu.Item>
                <Menu.Item style={emailHide} disabled={loading} key="6" icon={<MailOutlined />}>
                    <span onClick={email}>
                    {t('email-Button')}
                    </span>
                </Menu.Item>
            </Menu>
            <Menu
                style={{position: "relative", top: "17vh"}}
                theme="dark"
                mode="inline"
            >
                <Menu.Item key="4" icon={<HomeOutlined />}>
                    <Link href="/">
                        <a>
                            {t('home-Button')}
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<LogoutOutlined />}>
                    <span onClick={logout}>
                        {t('logout-Button')}
                    </span>
                </Menu.Item>
            </Menu>
            <style jsx>{`

.heading {
padding: 30px 15px;
}

            `}</style>
        </>
    )
}