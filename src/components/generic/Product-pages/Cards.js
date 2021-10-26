
import { Row, Col, Card } from 'components/antd';

const style = {
    margin: "10px",
    height: "150px",
    textAlign: "center",
}

export default function Cards (){
    return(
        <div style={{paddingBottom: "45px"}}>
            <Row>
                <Col span={12}>
                    <Card style={style} hoverable>
                        Card content
                    </Card>
                </Col>
                <Col span={12}>
                    <Card style={style} hoverable>
                        Card content
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card style={style} hoverable>
                        Card content
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Card style={style} hoverable>
                        Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={style} hoverable>
                        Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={style} hoverable>
                        Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={style} hoverable>
                        Card content
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Card style={style} hoverable>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={style} hoverable>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card style={style} hoverable>
                        Card content
                    </Card>
                </Col>
            </Row>
        </div>
    )
}