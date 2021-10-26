
import { Row, Col, Typography, Rate, Progress, Button } from 'components/antd';

const { Title } = Typography

export default function Rating (){

    const format = percent => `${percent/10} `
    const originFormat = percent => `${percent}% `

    return(
        <Row style={{padding: "20px"}}>
            <Col span={8}>
                <Row>
                    <Col style={{ textAlign: "center"}} span={12}>
                        <Title>4.5</Title>
                        <Rate allowHalf disabled defaultValue={4.5} />
                        <Button type="link">14 product ratings</Button>
                    </Col>
                    <Col span={12}>
                        <span>Label</span>
                        <Progress percent={30} size="large" status="active" format={format}/>
                        <span>Label</span>
                        <Progress percent={10} size="large" status="active" format={format}/>
                        <span>Label</span>
                        <Progress percent={50} size="large" status="active" format={format}/>
                        <span>Label</span>
                        <Progress percent={70} size="large" status="active" format={format}/>
                    </Col>
                </Row>
            </Col>
            <Col span={8} offset={1}>
                <Row style={{textAlign: "center"}}>
                    <Col span={8}>
                        <Progress type="circle" status="normal" percent={80} format={originFormat}/>
                        <br />
                        <br />
                        <Title level={5}>Something</Title>
                    </Col>
                    <Col span={8}>
                        <Progress type="circle" status="normal" percent={100} format={originFormat}/>
                        <br />
                        <br />
                        <Title level={5}>Something</Title>
                    </Col>
                    <Col span={8}>
                        <Progress type="circle" status="normal" percent={40} format={originFormat}/>
                        <br />
                        <br />
                        <Title level={5}>Something</Title>
                    </Col>
                </Row>
            </Col>
            <Col span={3} offset={3}>
                <Button size="large">Write a review</Button>
            </Col>
        </Row>
    )
}