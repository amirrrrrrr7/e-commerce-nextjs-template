import GetAttribute from "dataPreper/LocalStorageGetData";

// if user is logged in

export function ifLogin (setLoadingPage, router, destination="currentPath"){

    const isLoggedIn = GetAttribute('is_logged_in')
    const oldPath = sessionStorage.getItem(destination);

    if (isLoggedIn){
        if (oldPath === null)
            router.push("/");
        else router.push(oldPath);
        setLoadingPage(false)
    }
}

// if user is not logged in

export function ifNotLogin (setLoadingPage, router, destination="currentPath"){

    const isLoggedIn = GetAttribute('is_logged_in')
    const oldPath = sessionStorage.getItem(destination);

    if (!isLoggedIn){
        if (oldPath === null)
            router.push("/");
        else router.push(oldPath);
        setLoadingPage(false)
    }
}