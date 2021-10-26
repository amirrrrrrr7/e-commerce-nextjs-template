
import  {
    useState,
    useEffect,
} from 'react';

import {
    Select,
    Tag,
    Button,
    Row,
    Col
} from 'components/antd';
import { SearchOutlined } from 'components/antd-icons'

import {
    getCategoriesHierarchyList,
} from "tools/ReqServices/CategotiesService"

const { Option } = Select;

function tagRender(props) {
    // this function try to find the input value in the list of categories.
    //    if it can find this name,
    //          then label it with the ideal color
    //
    //    else do nothing.
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  let categories = [];
  try{
      categories = JSON.parse(localStorage.getItem('categories'));
      for ( let i = 0; i < categories.length; i++ ) if (label === categories[i].name) {
          return (
              <Tag
                  color="#cd993d"
                  onMouseDown={ onPreventMouseDown }
                  closable={ closable }
                  onClose={ onClose }
                  style={ {marginRight : 3, position: "relative", bottom: "2px"} }
              >
                  { label }
              </Tag>
          );
      }
   return (
      <Tag
          onMouseDown={ onPreventMouseDown }
          closable={ closable }
          onClose={ onClose }
          style={ {marginRight : 3, position: "relative", bottom: "2px"} }
      >
          { label }
      </Tag>
   );
  }
  catch (e) {
      return (
            <Tag
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={ {marginRight : 3, position: "relative", bottom: "2px"} }
            >
                { label }
            </Tag>
        );
  }
}


export default function Search (){
    const [categoriesList, setCategoriesList] = useState([]);
    const [noContent, setNoContent] = useState(false);
    const [value, setValue] = useState(undefined)

    useEffect(() =>{
        getCategoriesHierarchyList()
             .then(function (response) {
                 setCategoriesList(response.data.data.categories)
                 localStorage.setItem('categories', JSON.stringify(response.data.data.categories))
              })
             .catch(function (error) {
                setNoContent(true)
             });
    },[])


    const onChange = (value) => {
        setValue(value);
    };
    const handleInput = (value) =>{
        console.log(value)
    }
    return (
        <Row>
            <Col span={23}>
                <Select
                    style={{ width: '100%', marginTop: '10px' }}
                    tokenSeparators={[',']}
                    mode="tags"
                    placeholder={'Search your product..'}
                    showSearch
                    tagRender={tagRender}
                    size="large"
                    // onSearch={handleInput}
                >
                    {
                        categoriesList.map(nodes =>
                            <Option
                                key={nodes.id}
                                value={nodes.name}
                            >
                                {nodes.name}
                            </Option>

                        )
                    }
                </Select>
            </Col>
            <Col span={1}>
                <Button
                    style={{margin: '10px 0 0 10px'}}
                    size="large"
                    type="primary"
                    icon={<SearchOutlined />}
                />
            </Col>
        </Row>
    );
};
