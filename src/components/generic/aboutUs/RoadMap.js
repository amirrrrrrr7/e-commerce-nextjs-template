import { useTranslation } from "next-i18next";

import { Typography, Row, Col, Steps } from "components/antd";

const { Title } = Typography;
const { Step } = Steps;

export default function RoadMap (){

    const { t } = useTranslation('aboutUs')

    return(

        <div className="road-map">
            <Title level={2}>{t('road-map-title')}</Title>
            <p>{t('paragraph')}</p>
            <Row>
                <Col xxl={{ span: 6, offset: 1 }}
                     xl={{ span: 7, offset: 1 }}
                     lg={{ span: 7, offset: 1 }}
                     md={{ span: 12, offset: 6 }}
                     sm={{ span: 16, offset: 4 }}
                     xs={{ span: 3, offset: 4 }}
                >
                    <Title level={4}>{t('level1-title')}</Title>
                    <Steps direction="vertical" current={1}>
                        <Step title={t('Finished-title')} description={t('description')} />
                        <Step title={t('In-Progress-title')} description={t('description')} />
                        <Step title={t('Waiting-title')} description={t('description')} />
                    </Steps>
                </Col>
                <Col xxl={{ span: 6, offset: 2 }}
                     xl={{ span: 7, offset: 0 }}
                     lg={{ span: 7, offset: 1 }}
                     md={{ span: 12, offset: 6 }}
                     sm={{ span: 16, offset: 4 }}
                     xs={{ span: 16, offset: 4 }}
                >
                    <Title level={4}>{t('level2-title')}</Title>
                    <Steps direction="vertical" current={1}>
                        <Step title={t('Finished-title')} description={t('description')} />
                        <Step title={t('Finished-title')} description={t('description')} />
                        <Step title={t('In-Progress-title')} description={t('description')} />
                        <Step title={t('Waiting-title')} description={t('description')} />
                        <Step title={t('Waiting-title')} description={t('description')} />
                    </Steps>
                </Col>
                <Col xxl={{ span: 6, offset: 2 }}
                     xl={{ span: 7, offset: 1 }}
                     lg={{ span: 7, offset: 0 }}
                     md={{ span: 12, offset: 6 }}
                     sm={{ span: 16, offset: 4 }}
                     xs={{ span: 16, offset: 4 }}
                >
                    <Title level={4}>{t('level3-title')}</Title>
                    <Steps direction="vertical" current={1}>
                        <Step title={t('Finished-title')} description={t('description')} />
                        <Step title={t('Finished-title')} description={t('description')} />
                        <Step title={t('Finished-title')} description={t('description')} />
                        <Step title={t('In-Progress-title')} description={t('description')} />
                        <Step title={t('Waiting-title')} description={t('description')} />
                        <Step title={t('Waiting-title')} description={t('description')} />
                        <Step title={t('Waiting-title')} description={t('description')} />
                    </Steps>
                </Col>
            </Row>
            <style jsx>{`
.road-map {
    background-color: white;
    padding: 100px 200px;
}
            `}</style>
        </div>
    )
}