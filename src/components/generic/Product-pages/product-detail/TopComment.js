
import { useState } from 'react';

import moment from 'moment';

import { Typography, Comment, Tooltip, Avatar, Rate, Select, Button } from 'components/antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from 'components/antd-icons';

const { Title } = Typography;
const { Option } = Select;

export default function Top (){

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {action === 'liked' ? <LikeFilled /> : <LikeOutlined />}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {action === 'disliked' ? <DislikeFilled /> : <DislikeOutlined />}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return(
        <>
            <hr style={{ border: "solid 1px #d9d9d9", backgroundColor: "#d9d9d9"}} />
            <br />
            <span style={{marginLeft: "40px"}}>Sort by: </span>
            <Select
                size="large"
                defaultValue="Top"
                style={{ width: "200px" }}
                onChange={handleChange}>
                <Option value="Top">Top reviews</Option>
                <Option value="bad">Bad reviews</Option>
            </Select>
            <br />
            <br />
            <Title style={{ marginLeft: "40px" }} level={4}>top review from Uzbekistan</Title>
            <Comment
                actions={actions}
                author={<a>Akbar</a>}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <p>
                        <Rate allowHalf disabled defaultValue={4} /><br /><br />
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
            <Button style={{marginLeft: "40px"}} danger>report this review</Button>
            <br />
            <br />
        </>
    )
}