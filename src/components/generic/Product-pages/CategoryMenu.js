import {
    useEffect, useState
} from "react";

// React-Redux
// import {
//     useSelector,
// } from "react-redux";

import {
    getCategoriesHierarchyList,
} from "tools/ReqServices/CategotiesService"
import {Menu , message} from 'components/antd';

const { SubMenu } = Menu;

export default function CategoryMenu (){
    // const categoriesHierarchyList = useSelector(state => state.getCategories);
    const [categoriesList, setCategoriesList] = useState([]);
    const [noContent, setNoContent] = useState(false);

    useEffect(() =>{
        // console.log("I am the menu:"+categoriesHierarchyList)
        getCategoriesHierarchyList()
             .then(function (response) {
                 // getting only the roots categories and their children.
                 const filtered_categories = response.data.data.categories.filter (function (x) {
                     return x.is_root
                 });
                 setCategoriesList(filtered_categories)
              })
             .catch(function (error) {
                setNoContent(true)
             });
    },[])

    // render the child of a menu if exist
    const renderMenu = (nodes) => (
        <Menu.Item
            key={nodes.id }
            title={nodes.name}
            id={nodes.id}
        >
            {nodes.name}
        </Menu.Item>
    );

    function handleClick (e){
        console.log('click', e);
    }

return(
    <Menu onClick={handleClick} style={{ width: '100%', marginTop: '10px' }} mode="horizontal">
        {
            categoriesList.map(nodes =>

                <SubMenu key={nodes.id} title={nodes.name}>
                    {
                        Array.isArray(nodes.children) ?
                                nodes.children.map((node) => renderMenu(node))
                        : null
                    }
                </SubMenu>

        )}
    </Menu>
    )
}
