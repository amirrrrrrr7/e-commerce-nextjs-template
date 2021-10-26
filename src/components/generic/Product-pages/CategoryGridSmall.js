
import { Row, Col, Card, Typography, Button } from 'components/antd'

export default function App (){

    return (
        <Row style={{padding: "0 40px 45px 40px"}}>
            <CategoryGridSmall />
            <CategoryGridSmall />
            <CategoryGridSmall />
        </Row>
    )
}

function CategoryGridSmall (){

    const {Title} = Typography;

    const cards = {
        textAlign: "center",
        height: "120px",
        margin: "2px"
    }

    return (
        <Col style={{padding: "5px"}} span={8}>
            <Title level={4}>Category Title</Title>
            <Row>
                <Col span={8}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
            </Row>
            <Button style={{marginBottom: "30px"}} type="link">show more</Button>
        </Col>
    )
}