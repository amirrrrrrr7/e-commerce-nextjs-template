
import { Card, Tree, Typography } from 'components/antd';

const { Title } = Typography;

const treeData = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                    {
                        title: (
                            <span
                                style={{
                                    color: '#1890ff',
                                }}
                            >
                sss
              </span>
                        ),
                        key: '0-0-1-0',
                    },
                ],
            },
        ],
    },
];
export default function Left (){

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    return(
        <>
            <Card>
                <Title level={5}>Results Category</Title>
                <hr style={{
                    borderTop: "none", borderRight: "none", borderLeft: "none",
                    borderBottom: "solid 1px #e0e0e0",backgroundColor: "none"}} />
                <Tree
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={onSelect}
                    onCheck={onCheck}
                    treeData={treeData}
                />
            </Card>
            <br />
            <Card>
                <Title level={5}>something</Title>
                <Title level={5}>something</Title>
                <Title level={5}>something</Title>
            </Card>
        </>
    )
}