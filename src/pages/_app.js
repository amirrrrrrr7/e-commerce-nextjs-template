
import { useEffect } from "react";

import { useRouter } from "next/router";

import { Provider } from 'react-redux';

import { appWithTranslation } from 'next-i18next';

import { store } from 'redux/store';

import GetAttribute from "dataPreper/LocalStorageGetData";
import SetAttribute from "dataPreper/LocalStorageSetData";

require('antd/dist/antd.less');
import 'styles/footer.css';
import 'styles/general.css';

const MyApp = ({ Component, pageProps }) => {

    const router = useRouter();

    useEffect(() => {
        if (GetAttribute('is_logged_in') === null) {
            SetAttribute('is_logged_in',null)
        }
    },[])

    useEffect(() => storePathValues, [router.asPath]);

    function storePathValues() {
        const storage = globalThis?.sessionStorage;
        if (!storage) return;
        // Set the previous path as the value of the current path.
        const prevPath = storage.getItem("currentPath");
        storage.setItem("prevPath", prevPath);
        // Set the current path value by looking at the browser's location object.
        storage.setItem("currentPath", globalThis.location.pathname);
    }

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default appWithTranslation(MyApp)
