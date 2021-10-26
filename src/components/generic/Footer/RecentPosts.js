
import { useTranslation } from 'next-i18next';

import { Carousel, Button, Image } from 'components/antd';

export default function RecentPosts (){

    const contentStyle = {
        height: '280px',
        color: '#FFF'
    };

    const { t } = useTranslation('footer')

    return (
        <Carousel className="recent"
                  dotPosition="right"
        >
            <table className="articles">
                <tbody style={contentStyle}>
                <tr>
                    <td>
                        <Image
                            preview={false}
                            src="/images/article1.jpg"
                            alt="article image"
                        />
                    </td>
                    <td className="article-title">
                        {t('article-title')}
                        <span className="article-date">
                            <Button type="link">
                                 {t('article-date')}
                            </Button>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className="article-title">
                        <Image
                            preview={false}
                            src="/images/article2.jpg"
                            alt="article image"
                        />
                    </td>
                    <td className="article-title">
                        {t('article-title')}
                        <span className="article-date">
                            <Button type="link">
                                 {t('article-date')}
                            </Button>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Image
                            preview={false}
                            src="/images/article3.jpg"
                            alt="article image"
                        />
                    </td>
                    <td className="article-title">
                        {t('article-title')}
                        <span className="article-date">
                            <Button type="link">
                                 {t('article-date')}
                            </Button>
                        </span>
                    </td>
                </tr>
                </tbody>
            </table>
            <table className="articles">
                <tbody style={contentStyle}>
                <tr>
                    <td>
                        <Image
                            preview={false}
                            src="/images/article1.jpg"
                            alt="article image"
                        />
                    </td>
                    <td className="article-title">
                        {t('article-title')}
                        <span className="article-date">
                            <Button type="link">
                                 {t('article-date')}
                            </Button>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className="article-title">
                        <Image
                            preview={false}
                            src="/images/article2.jpg"
                            alt="article image"
                        />
                    </td>
                    <td className="article-title">
                        {t('article-title')}
                        <span className="article-date">
                            <Button type="link">
                                 {t('article-date')}
                            </Button>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Image
                            preview={false}
                            src="/images/article3.jpg"
                            alt="article image"
                        />
                    </td>
                    <td className="article-title">
                        {t('article-title')}
                        <span className="article-date">
                            <Button type="link">
                                 {t('article-date')}
                            </Button>
                        </span>
                    </td>
                </tr>
                </tbody>
            </table>
        </Carousel>
    )
}