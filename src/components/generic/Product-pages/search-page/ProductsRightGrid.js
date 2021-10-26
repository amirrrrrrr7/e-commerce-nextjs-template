
import { Card, Col, Row } from 'components/antd';

const cards = {
    textAlign: "center",
    height: "250px",
    margin: "2px"
}

export default function Right (){
    return(
        <div style={{paddingLeft: "20px"}}>
            <Row>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={cards} hoverable>
                        this is a product
                    </Card>
                </Col>
            </Row>
        </div>
    )
}