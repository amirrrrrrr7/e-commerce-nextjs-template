
import Head from 'next/head';

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import LayoutSite from 'components/layout';
import {Row, Col, Breadcrumb, Radio, Pagination } from 'components/antd';
import CategoryMenu from 'prductPagesCmp/CategoryMenu';
import Left from 'components/generic/Product-pages/search-page/CategorySection';
import Right from 'components/generic/Product-pages/search-page/ProductsRightGrid';
import Carousels from 'components/generic/Product-pages/search-page/MiniCarousel';
import { AlignLeftOutlined } from "components/antd-icons";

const carousel1 = {
    backgroundColor: "#F15C22",
    margin: "40px 5px 40px 20px",
    padding: "20px 5px",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px 0px #919191"
}

const titleCss1 ={
    marginLeft: "70px",
    color: "#fefefe",
}

export default function SearchPage (){
    return(
        <>
            <LayoutSite>
                <Head>
                    <title>search result</title>
                </Head>
                <div className="home-section">
                    <CategoryMenu />
                    <br />
                    <Row>
                        <Col span={6}>
                            <Left />
                        </Col>
                        <Col span={18}>
                            <div style={{padding: "0 5px 5px 5px"}}>
                                <Breadcrumb style={{padding: "0 20px 10px 20px"}}>
                                    <Breadcrumb.Item>parent</Breadcrumb.Item>
                                    <Breadcrumb.Item>child</Breadcrumb.Item>
                                    <Breadcrumb.Item>children</Breadcrumb.Item>
                                </Breadcrumb>
                            <span style={{padding: "0 20px"}}>
                                <AlignLeftOutlined style={{paddingRight: "5px"}}/>Sort by:
                            </span>
                                <Radio.Group defaultValue="a" size="medium" buttonStyle="solid">
                                    <Radio.Button value="a">price</Radio.Button>
                                    <Radio.Button value="b">date</Radio.Button>
                                    <Radio.Button value="c">rate</Radio.Button>
                                </Radio.Group>
                            </div>
                            <Right />
                            <Carousels css={carousel1} titleCss={titleCss1}/>
                            <Right />
                            <Row>
                                <Pagination
                                    style={{margin: "20px auto"}}
                                    defaultCurrent={1} size="large" total={50}
                                />
                            </Row>
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
            // String variant:            `/search/1`,
        ],
        fallback: true,
    }
}