import {useTranslation} from "next-i18next";

import { Row, Col } from 'components/antd';
import { LinkedinFilled } from "components/antd-icons";

export default function Team (){

    const { t } = useTranslation('aboutUs')

    return(
        <>
            <Row gutter={16}>
                <Col className="gutter-row"
                     xxl={{ span: 5, offset: 2 }}
                     xl={{ span: 5, offset: 1 }}
                     lg={{ span: 5, offset: 2, push: 0 }}
                     md={{ span: 7, offset: 2, push: 1 }}
                     sm={{ span: 22, offset: 0 }}
                     xs={{ span: 22, offset: 0 }}
                >
                    <div>
                        <img src="images/members/pedram.png" alt="img"/>
                        <h5>{t('pedram-name')}</h5>
                        <h5>{t('pedram-title')}</h5>
                        <LinkedinFilled />
                    </div>
                </Col>
                <Col className="gutter-row"
                     xxl={{ span: 5, offset: 0 }}
                     xl={{ span: 5, offset: 0 }}
                     lg={{ span: 5, offset: 0, push: 0 }}
                     md={{ span: 7, offset: 2, push: 2 }}
                     sm={{ span: 22, offset: 0 }}
                     xs={{ span: 22, offset: 0 }}
                >
                    <div>
                        <img src="images/members/samirsha.png" alt="img"/>
                        <h5>{t('samirsha-name')}</h5>
                        <h5>{t('samirsha-title')}</h5>
                        <LinkedinFilled />
                    </div>
                </Col>
                <Col className="gutter-row"
                     xxl={{ span: 5, offset: 0 }}
                     xl={{ span: 5, offset: 0 }}
                     lg={{ span: 5, offset: 0, push: 0 }}
                     md={{ span: 7, offset: 2, push: 1 }}
                     sm={{ span: 22, offset: 0 }}
                     xs={{ span: 22, offset: 0 }}
                >
                    <div>
                        <img src="images/members/amirMohamad.png" alt="img"/>
                        <h5>{t('amir-name')}</h5>
                        <h5>{t('amir-title')}</h5>
                        <LinkedinFilled />
                    </div>
                </Col>
                <Col className="gutter-row"
                     xxl={{ span: 5, offset: 0 }}
                     xl={{ span: 5, offset: 0 }}
                     lg={{ span: 5, offset: 0, push: 0 }}
                     md={{ span: 7, offset: 2, push: 2 }}
                     sm={{ span: 22, offset: 0 }}
                     xs={{ span: 22, offset: 0 }}
                >
                    <div>
                        <img className="mojgan" src="images/members/mojgan.png" alt="img"/>
                        <h5>{t('mojgan-name')}</h5>
                        <h5>{t('mojgan-title')}</h5>
                        <LinkedinFilled />
                    </div>
                </Col>
            </Row>
            <style jsx>{`

            `}</style>
        </>
    )
}