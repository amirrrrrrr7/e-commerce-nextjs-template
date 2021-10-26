import { Button, Rate, Descriptions } from "components/antd";

export default function  Info (){
    return(
        <>
            <Rate allowHalf disabled defaultValue={4.5} />
            <Button type="link">14 product ratings</Button>
            <span style={{color: "#579ccb"}}>|</span>
            <Button type="link">show rates</Button>
            <Descriptions
                style={{padding: "15px 3px"}}
                column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 2, xs: 2 }}
                title="Attributes"
            >
                <Descriptions.Item label="size">2GB</Descriptions.Item>
                <Descriptions.Item label="length">60h</Descriptions.Item>
                <Descriptions.Item label="language">English</Descriptions.Item>
                <Descriptions.Item label="quality">720</Descriptions.Item>
            </Descriptions>
            <Button
                style={{marginLeft: "-12px"}}
                type="link"
            >
                show more
            </Button>
        </>
    )
}