
import { Button, Typography, Card, Rate, Row, Col, Statistic } from 'components/antd';

const { Title } = Typography
export default function Buy(){
    return(
        <Card>
            <Title level={5}>
                Seller detail
            </Title>
            <div style={{}}>
                <h4>Name: <Button type="link">Morteza</Button></h4>
                <h4>Rate: <Rate style={{marginLeft: "25px"}} allowHalf disabled defaultValue={1} /><br /></h4>
                <Button style={{marginLeft: "-16px"}} type="link">More Products</Button><br />
                <Statistic prefix={<h5>Price: </h5>} value={18} /><br />
            </div>
            <Button
                style={{
                    backgroundColor: "#F15C22",
                    borderColor: "#F15C22"
                }}
                type="primary"
                size="large"
                block
            >
                Buy Now
            </Button>
            <div style={{textAlign: "center"}}>
                <br />
                <Row>
                    <Col span={6}>
                        <img style={{width: "45px", margin: "10px"}} src="/images/crypto-logo/BITCOIN-Logo.png" />
                    </Col>
                    <Col span={6}>
                        <img style={{width: "45px", margin: "10px"}} src="/images/crypto-logo/litecoin-logo.png" />
                    </Col>
                    <Col span={6}>
                        <img style={{width: "45px", margin: "10px"}} src="/images/crypto-logo/tether-logo.png" />
                    </Col>
                    <Col span={6}>
                        <img style={{width: "45px", margin: "10px"}} src="/images/crypto-logo/ethereum-logo.png" />
                    </Col>
                </Row>
                <span>
                    Guaranteed safe and secure checkout
                </span>
            </div>
        </Card>
    )
}