
import { useTranslation } from 'next-i18next';

import { Row, Col } from 'components/antd';

import Summery from './Summery';
import RecentPosts from './RecentPosts';
import EmailUs from './EmailUs';
import CopyRight from './CopyRight';

export default function Footer (){

    const { t } = useTranslation('footer')

    return (
        <>
            <Row>
                <Col xxl={{ span: 6, offset: 1 }}
                     lg={{ span: 7, offset: 1 }}
                     md={{ span: 12, offset: 6 }}
                     sm={{ span: 16, offset: 4 }}
                     xs={{ span: 16, offset: 4 }}
                >
                    <Summery />
                </Col>
                <Col xxl={{ span: 6, offset: 2 }}
                     xl={{ span: 7, offset: 0 }}
                     lg={{ span: 7, offset: 1 }}
                     md={{ span: 12, offset: 6 }}
                     sm={{ span: 16, offset: 4 }}
                     xs={{ span: 16, offset: 4 }}
                >
                    <h2>{t('recent-post-title')}</h2>
                    <RecentPosts />
                </Col>
                <Col xxl={{ span: 6, offset: 2 }}
                     xl={{ span: 7, offset: 1 }}
                     lg={{ span: 7, offset: 0 }}
                     md={{ span: 12, offset: 6 }}
                     sm={{ span: 16, offset: 4 }}
                     xs={{ span: 16, offset: 4 }}
                >
                    <h2>{t('email-us-title')}</h2>
                    <EmailUs />
                </Col>
            </Row>
            <CopyRight />
        </>
    )
}