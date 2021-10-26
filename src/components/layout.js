
import  { BackTop, Layout } from 'components/antd';
import Header from 'generCmp/Header';
import Footer from 'generCmp/Footer/index';

const { Header: AntHeader, Footer: AntFooter, Content } = Layout;

export default function LayoutSite({ children }) {

    return (
        <div className="App">
            <Layout>
                <AntHeader>
                    <Header />
                </AntHeader>
                <Content
                style={{backgroundColor: '#FEFEFC'}}>
                    {children}
                    <BackTop />
                </Content>
                <AntFooter>
                    <Footer />
                </AntFooter>
            </Layout>
        </div>
    )
}