import {useTranslation} from "next-i18next";

export default function Vision (){

    const { t } = useTranslation('aboutUs')

    return(
        <>
            <p>{t('paragraph')}</p>
            <p>{t('paragraph')}</p>
        </>
    )
}