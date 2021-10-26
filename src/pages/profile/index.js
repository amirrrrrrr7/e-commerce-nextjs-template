
import { useEffect, useState } from "react";

import Head from 'next/head';

import { useRouter } from "next/router";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from 'next-i18next';

import { Spin } from "components/antd";

import LayoutProfile from 'generCmp/Profile/ProfileLayout';
import { ifNotLogin } from 'tools/LoginChecking';

export default function Profile (){

    const [loadingPage, setLoadingPage] = useState(true);

    const router = useRouter()

    const { t } = useTranslation('profile')


    useEffect(() => {
        ifNotLogin(setLoadingPage,router);
    }, []);

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
                <title>{t('profile-title')}</title>
            </Head>
            hello
        </LayoutProfile>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['profile','sidebar']),
    }
})