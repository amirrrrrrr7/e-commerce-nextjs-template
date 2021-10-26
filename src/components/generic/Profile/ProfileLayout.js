
import { useState } from 'react'
import { useTranslation } from 'next-i18next';

import  { BackTop, Layout, Breadcrumb } from 'components/antd';
import SideBar from 'generCmp/Profile/SideBar';

const { Header: ProfileHeader, Footer: ProfileFooter, Content, Sider } = Layout;

export default function LayoutProfile({ children }) {

    const [collapsed, setCollapsed] = useState(false)
    const [avatarSize, setAvatarSize] = useState(90)
    const [blockMessage ,setBlockMessage] = useState({
        display: "block"
    })
    const [col2Style, setCol2Style] = useState({
        paddingTop: "26px"
    })

    const { t } = useTranslation('sidebar')

    const onCollapse = () => {
        if(collapsed){
            setAvatarSize(90)
            setCol2Style({
                display: "block",
                paddingTop: "26px"
            })
            setBlockMessage({
                display: "block"
            })
            setCollapsed(!collapsed)
        }
        else{
            setCol2Style({
                display: "none"
            })
            setBlockMessage({
                display: "none"
            })
            setAvatarSize(40)
            setCollapsed(!collapsed)
        }
    };

    return (
        <div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                    theme="dark"
                    width={280} collapsedWidth={70} collapsible>
                    <SideBar blockMessage={blockMessage} avatarSize={avatarSize} col2={col2Style}/>
                </Sider>
                <Layout className="site-layout">
                    <ProfileHeader className="site-layout-background">
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                    </ProfileHeader>
                    <Content
                        style={{margin: '0 16px'}}>
                        <div className="site-layout-background"
                             style={{margin: '16px 0', padding: 24, minHeight: 360 }}
                        >
                            {children}
                        </div>
                        <BackTop />
                    </Content>
                    <ProfileFooter className="profile-footer">
                        {t('copyright')}
                    </ProfileFooter>
                </Layout>
            </Layout>
        </div>
    )
}