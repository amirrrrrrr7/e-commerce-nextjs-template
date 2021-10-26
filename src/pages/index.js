
import Head from 'next/head';
// React-Redux
import {
    useDispatch,
} from "react-redux";
// import {useSelector} from "react-redux";

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Redux actions
import { categoriesList } from 'redux/actions/category';

import LayoutSite from 'components/layout';
import { Typography } from 'components/antd';
import CategoryMenu from 'prductPagesCmp/CategoryMenu';
import Cards from 'prductPagesCmp/Cards';
import Carousels from "prductPagesCmp/Carousels";
import CategoryGrid from "prductPagesCmp/CategoryGrid";
import CategoryGridMedium from "prductPagesCmp/CategoryGridMedium";
import CategoryGridSmall from "prductPagesCmp/CategoryGridSmall";
// Static URLs
// import {
//     IN_DOCKER_CAT_LIST_HIERARCHY_URL,
// } from 'tools/URLs/categories'


function Home({data={}}) {
    const dispatch = useDispatch();

   // const categoriesHierarchyList = useSelector(state => state.getCategories);
    const { t } = useTranslation('common');

    const { Title } = Typography;

    const carousel = {
        backgroundColor: "#FFCE08",
        padding: "40px 40px 20px 40px",
        marginBottom: "40px",
        borderRadius: "15px",
        boxShadow: "1px 1px 15px #9f9f9f"
    }

    const titleCss1 ={
        paddingLeft: "60px",
        color: "#fefefe",
    }

    const titleCss2 ={
        textAlign: "left",
        paddingLeft: "60px"
    }

  return (
    <div>
      <LayoutSite>
          <Head>
              <title>{t('title')}</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="home-section">
              <CategoryMenu />
              <Title level={2} style={{padding: "20px", textAlign: "center"}} >{t('heading')}</Title>
              <Cards />
              <Carousels css={carousel} titleCss={titleCss1}/>
              <Carousels titleCss={titleCss2} />
              <CategoryGrid />
              <CategoryGrid />
              <CategoryGridMedium />
              <CategoryGridSmall />
          </div>
      </LayoutSite>
        <style jsx>{`
        
.home-section {
    width: 100%;
    padding: 0 50px;
}

.home-section h1 {
    padding:20px 20px;
}

.home-section p {
    padding: 50px 0;
}

            `}</style>
    </div>
  )
}

export async function getServerSideProps ({ locale }){
    // the category list have been fetch & set to the Redux state
    //    each time the Landing page is reLoading
    // const res = await fetch(IN_DOCKER_CAT_LIST_HIERARCHY_URL)
    // const data = await res.json()
    return {
        props: {
            ...await serverSideTranslations(
                locale,
                ['common', 'footer','header']
            ),
            // data,
        }
    }
}

export default Home
