
import Link from 'next/link';

import { useTranslation } from 'next-i18next';

import { MailOutlined, TwitterOutlined, LinkedinFilled } from "components/antd-icons";
import { Button, Row, Col } from "components/antd";

export default function CopyRight (){

    const { t } = useTranslation('footer')

    return(
            <Row className="copyright">
                <Col xxl={{ span: 8, offset: 0, pull: 1 }}
                     xl={{ span: 9, offset: 0, pull: 1 }}
                     lg={{ span: 7, offset: 0 }}
                     md={{ span: 12, offset: 6 }}
                     sm={{ span: 16, offset: 4 }}
                     xs={{ span: 16, offset: 4 }}
                >
                    {t('copyright')}
                </Col>
                <Col xxl={{ span: 7, offset: 0, pull: 0 }}
                     xl={{ span: 6, offset: 0, pull: 1 }}
                     lg={{ span: 7, offset: 1 }}
                     md={{ span: 13, offset: 5 }}
                     sm={{ span: 16, offset: 3 }}
                     xs={{ span: 16, offset: 3 }}
                >
                    <MailOutlined className="social" />
                    <LinkedinFilled className="social" />
                    <TwitterOutlined className="social" />
                </Col>
                <Col className="copyright"
                     xxl={{ span: 9, offset: 0, push: 1 }}
                     xl={{ span: 9, offset: 0 }}
                     lg={{ span: 9, offset: 0 }}
                     md={{ span: 12, offset: 6 }}
                     sm={{ span: 16, offset: 4 }}
                     xs={{ span: 16, offset: 4 }}
                >
                    <Button type="link">
                        <Link href="http://0.0.0.0:8008">
                            <a>
                                {t('blog-Button')}
                            </a>
                        </Link>
                    </Button>|
                    <Button type="link">{t('Support-Button')}</Button>|
                    <Button type="link">{t('Privacy-Policy-Button')}</Button>
                </Col>
            </Row>
    )
}