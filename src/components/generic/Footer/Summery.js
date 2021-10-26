
import Link from "next/link";

import { useTranslation } from 'next-i18next';

import { Button } from "components/antd";

export default function Summery (){

    const { t } = useTranslation('footer')

    return(
        <>
            <Link href="/">
                <a>
                    <h2 className="footer-col1">{t('slugy-hub')}</h2>
                    <img className="footer-logo" src="/images/logo/empty-logo.png" alt="img" />
                </a>
            </Link>
            <p className="summary">
                <b>{t('site-slogan')}</b> <br />
                {t('paragraph')}
            </p>
            <Button size="large" block>
                <Link href="/about-us">
                    <a>{t('about-us-Button')}</a>
                </Link>
            </Button>
        </>
    )
}