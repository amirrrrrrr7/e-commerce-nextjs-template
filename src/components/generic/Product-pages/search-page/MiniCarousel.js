
import { useRef } from 'react'

import { Card, Carousel, Col, Row, Button, Typography } from 'components/antd';
import { LeftCircleOutlined, RightCircleOutlined } from 'components/antd-icons'

export default function App ({css, titleCss}){

    const carousel = useRef();

    const { Title } = Typography;

    const style = {
        padding: "0 0 45px 0"
    }

    const styleB = {
        position: "relative",
        top: "100px",
        right: "10px",
        zIndex: "2",
        fontSize: '36px',
        color: '#fefefe'
    }

    const handleNext = () => carousel.current.next();

    const handlePrev = () => carousel.current.prev();

    return (
        <div style={css}>
            <Title style={titleCss} level={3}>Title</Title>
            <Row>
                <Col span={1}>
                    <Button style={styleB} type="link" size="large" onClick={handlePrev}><LeftCircleOutlined /></Button>
                </Col>
                <Col span={22}>
                    <Carousel className="recent"
                              dotPosition="bottom"
                              style={style}
                              autoplay
                              ref={carousel}
                    >
                        <Carousels />
                        <Carousels />
                    </Carousel>
                </Col>
                <Col span={1}>
                    <Button style={styleB} type="link" size="large" onClick={handleNext}><RightCircleOutlined /></Button>
                </Col>
            </Row>
        </div>
    )
}

function Carousels (){

    const styles = {
        margin: "15px",
        height: "250px",
        textAlign: "center",
    }

    return (
        <Row>
            <Col span={6}>
                <Card style={styles} hoverable>
                    this is a product
                </Card>
            </Col>
            <Col span={6}>
                <Card style={styles} hoverable>
                    this is a product
                </Card>
            </Col>
            <Col span={6}>
                <Card style={styles} hoverable>
                    this is a product
                </Card>
            </Col>
            <Col span={6}>
                <Card style={styles} hoverable>
                    this is a product
                </Card>
            </Col>
        </Row>
    )
}