
import { useRef } from 'react';

import { Card, Carousel, Button, Typography } from 'components/antd';
import { UpCircleOutlined, DownCircleOutlined } from 'components/antd-icons'

export default function App ({css, titleCss}){

    const carousel = useRef();

    const { Title } = Typography;

    const style = {
        padding: "0 0 45px 0"
    }

    const styleB = {
        width: "100%",
        zIndex: "2",
        fontSize: '36px',
        color: '#fefefe',
        margin: "0 auto",
    }

    const handleNext = () => carousel.current.next();

    const handlePrev = () => carousel.current.prev();

    return (
        <div style={css}>
            <Title style={titleCss} level={3}>Title</Title>
                <Button style={styleB} type="link" size="large" onClick={handlePrev}><UpCircleOutlined /></Button>
                <Carousel className="recent"
                          dotPosition="right"
                          style={style}
                          autoplay
                          ref={carousel}
                >
                    <Carousels />
                    <Carousels />
                </Carousel>
                <Button style={styleB} type="link" size="large" onClick={handleNext}><DownCircleOutlined style={{position: "relative", bottom:"50px"}}/></Button>
        </div>
    )
}

function Carousels (){

    const styles = {
        margin: "10px",
        height: "250px",
        textAlign: "center",
    }

    return (
        <>
            <Card style={styles} hoverable>
                this is a product
            </Card>
            <Card style={styles} hoverable>
                this is a product
            </Card>
            <Card style={styles} hoverable>
                this is a product
            </Card>
            <Card style={styles} hoverable>
                this is a product
            </Card>
        </>
    )
}