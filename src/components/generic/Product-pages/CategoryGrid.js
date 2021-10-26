
import { Col, Row, Card, Typography } from 'components/antd'

export default function CategoryGrid (){

    const { Title } = Typography;

    const cards = {
        height: "125px",
        textAlign: "center"
    }

    return(
        <>
            <Title style={{ paddingLeft: "60px" }} level={3}>Title</Title>
            <Row style={{padding: "0 45px 45px 45px"}}>
                <Col span={4}>
                    <Card hoverable style={{ height: "250px", textAlign: "center" }}>
                        category
                    </Card>
                </Col>
                <Col span={20}>
                    <Row>
                        <Col span={6}>
                            <Card hoverable style={cards}>
                                this is a product
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card hoverable style={cards}>
                                this is a product
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card hoverable style={cards}>
                                this is a product
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card hoverable style={cards}>
                                this is a product
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card hoverable style={cards}>
                                this is a product
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card hoverable style={cards}>
                                this is a product
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card hoverable style={cards}>
                                this is a product
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card hoverable style={cards}>
                                this is a product
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}