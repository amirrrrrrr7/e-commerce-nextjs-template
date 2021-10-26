
import Head from "next/head";

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import LayoutSite from 'components/layout';
import { Typography } from 'components/antd';
import Vision from 'aboutCmp/Vision';
import RoadMap from 'aboutCmp/RoadMap';
import Team from 'aboutCmp/Team';

const { Title } = Typography;
const align = {
    textAlign: "center"
}

export default function AboutUs (){

    const { t } = useTranslation('aboutUs')

    return(
        <LayoutSite>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <div>
                <Title style={align} className="title">{t('header')}</Title>
                <div className="our-vision">
                    <Title style={align} level={2}>{t('our-vision-title')}</Title>
                    <Vision />
                </div>
                <RoadMap />
                <div className="our-team">
                    <Title style={align} level={2}>{t('our-Team-title')}</Title>
                    <Team />
                </div>
            </div>
            <style jsx>{`

.our-vision {
    padding: 100px 200px;
}

.our-team {
  padding: 100px 10px;
}
            `}</style>
        </LayoutSite>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['aboutUs', 'footer','header']),
    }
})