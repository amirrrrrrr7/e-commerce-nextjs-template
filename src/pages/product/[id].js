import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Row, Col, Typography } from 'components/antd';
import LayoutSite from 'components/layout';
import CategoryMenu from 'prductPagesCmp/CategoryMenu';
import Images from 'components/generic/Product-pages/product-detail/ProductImages';
import Info from 'components/generic/Product-pages/product-detail/ProductInformation';
import Rating from 'components/generic/Product-pages/product-detail/RatingSection';
import Buy from 'components/generic/Product-pages/product-detail/BuySection';
import Comments from 'components/generic/Product-pages/product-detail/Comments';
import Top from 'components/generic/Product-pages/product-detail/TopComment';
import Vertical from 'components/generic/Product-pages/product-detail/VerticalCarousel';
import Carousels from 'prductPagesCmp/Carousels';

const {Title} = Typography;

const carousel1 = {
    backgroundColor: "#FF4500",
    padding: "20px 10px 5px 10px",
    margin: "70px 0",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px 0px #9f9f9f"
}

const titleCss1 ={
    textAlign: "left",
    marginLeft: "70px",
    color: "#fefefe",
}

const carousel2 = {
    backgroundColor: "#579ccb",
    padding: "30px",
    margin: "50px 0",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px 0px #9f9f9f"
}

const titleCss2 ={
    textAlign: "left",
    marginLeft: "20px",
    color: "#fefefe",
}

export default function Detail (){
    return(
        <>
            <LayoutSite>
                <Head>
                    <title>product result</title>
                </Head>
                <div className="home-section">
                    <CategoryMenu />
                    <br />
                    <Title style={{textAlign: "left"}} level={3}>JavaScript Course</Title>
                    <Row>
                        <Col span={9}>
                            <Images/>
                        </Col>
                        <Col span={8}>
                            <Info />
                        </Col>
                        <Col span={7}>
                            <Buy />
                        </Col>
                    </Row>
                    <Carousels css={carousel1} titleCss={titleCss1}/>
                    <Rating />
                    <Row>
                        <Col span={17}>
                            <Comments />
                            <Top />
                        </Col>
                        <Col span={6}  offset={1}>
                            <Vertical css={carousel2} titleCss={titleCss2} />
                        </Col>
                    </Row>
                </div>
            </LayoutSite>
            <style jsx>{`
        
.home-section {
    width: 100%;
    padding: 0 50px;
}

            `}</style>
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['footer','header']),
    }
})

export async function getStaticPaths() {
    return {
        paths: [
            // String variant:
            '/product/1',
        ],
        fallback: true,
    }
}