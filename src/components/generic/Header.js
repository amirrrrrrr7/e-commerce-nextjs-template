
import { useEffect, useState } from "react";

import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import { Menu, message, Image, Row, Col, Popover, Button } from 'components/antd';
import {
    UserOutlined,
    CaretDownOutlined,
    LogoutOutlined,
    ProfileOutlined,
    UnorderedListOutlined,
    LoginOutlined
} from 'components/antd-icons';
import Search from 'prductPagesCmp/Search';

import request from "tools/Request";
import { LOGOUT_URL } from 'authURL/index';
import { signOut } from 'tools/ReqServices/authServices';
import GetAttribute from "dataPreper/LocalStorageGetData";

export default function Header (){

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('user name')

    const { t } = useTranslation('header')

    useEffect(()=>{

        setIsLoggedIn(GetAttribute('is_logged_in'))
        const user = GetAttribute('user_detail')

        if(isLoggedIn){
            setUsername(user.username)
        }

    })

    function logout (){

        request.post( LOGOUT_URL )
            .then(function (response) {
                const msg = response.data.msg
                signOut()
                setIsLoggedIn(GetAttribute('is_logged_in'));
                message.success(msg.title + " " + msg.message);
            })
            .catch(function (error) {
                signOut()
                setIsLoggedIn(GetAttribute('is_logged_in'));
                message.success(t('logout-message'));
            });
    }

    const title = (
        <span>{username}</span>
    );

    const content = (
        <Menu>
            <Menu.Item key="1">
                <Link href="/profile">
                    <a>
                        <ProfileOutlined style={{marginRight: "10px"}} />
                        {t('profile-Button')}
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link href="/">
                    <a>
                        <UnorderedListOutlined style={{marginRight: "10px"}} />
                        {t('order-Button')}
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <span onClick={logout}>
                    <LogoutOutlined style={{marginRight: "10px"}} />
                    <a>{t('logout-Button')}</a>
                </span>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
        <Row>
            <Col span={1} >
                <Link href="/">
                    <a>
                        <Image
                            style={{width: "75px"}}
                            src="/images/logo/white-logo.png"
                            alt="logo"
                            preview={false}
                        />
                    </a>
                </Link>
            </Col>
            <Col
                xl={{ span: 16 }}
                lg={{ span: 14, offset: 2 }}
                md={{ span: 12, offset: 2,push: 0 }}
                sm={{ span: 8, offset: 2, push: 1 }}
                xs={{ span: 8, offset: 4 }}
            >
                <Search />
            </Col>
            <Col
                xl={{ span: 4, offset: 1 }}
                lg={{ span: 6, offset: 1 }}
                md={{ span: 7, offset: 2 }}
                sm={{ span: 10, offset: 3 }}
                xs={{ span: 7, offset: 3 }}
            >
            {
                !isLoggedIn ?
                    <Menu
                        mode="horizontal"
                        overflowedIndicator={<LoginOutlined />}
                        triggerSubMenuAction="click"
                    >
                        <Menu.Item key="1">
                            <Link href="/login">
                                <a>{t('login-Button')}</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Link href="/signup">
                            <a>{t('signup-Button')}</a>
                        </Link>
                        </Menu.Item>
                    </Menu>:
                    <div style={{position: "absolute", right: "30px", bottom: "25px"}}>
                        <Popover
                            placement="bottomRight"
                            title={title}
                            content={content}
                            trigger="click"
                        >
                        <Button type="text">
                            <CaretDownOutlined style={{fontSize: "10pt"}} />
                            <UserOutlined style={{fontSize: "16pt"}} />
                        </Button>
                    </Popover>
                    </div>
                }
            </Col>
        </Row>
        </>
    )
}