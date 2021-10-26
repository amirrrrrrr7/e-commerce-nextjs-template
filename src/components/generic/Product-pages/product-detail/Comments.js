
import { useState } from 'react';

import moment from 'moment';

import { Comment, Tooltip, List, Rate } from 'components/antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from 'components/antd-icons';

export default function Components (){

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

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

    function Actions (){
        return(
            <>
                <Tooltip key="comment-basic-like" title="Like">
                    <span onClick={like}>
                        {action === 'liked' ? <LikeFilled /> : <LikeOutlined />}
                        <span style={{marginRight: "10px"}} className="comment-action">{likes}</span>
                    </span>
                </Tooltip>
                <Tooltip key="comment-basic-dislike" title="Dislike">
                    <span onClick={dislike}>
                        {action === 'disliked' ? <DislikeFilled /> : <DislikeOutlined />}
                        <span className="comment-action">{dislikes}</span>
                    </span>
                </Tooltip>
            </>
        )
    }

    const data = [
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Hasan',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    <Rate allowHalf disabled defaultValue={4} /><br /><br />
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                    <br />
                    <br />
                    <Actions />
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(1, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Mahmood',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    <Rate allowHalf disabled defaultValue={4.5} /><br /><br />
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                    <br />
                    <br />
                    <Actions />
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
        {
            actions: [<span key="comment-list-reply-to-0">Reply to</span>],
            author: 'Ebrahim',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: (
                <p>
                    <Rate allowHalf disabled defaultValue={3} /><br /><br />
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                    <br />
                    <br />
                    <Actions />
                </p>
            ),
            datetime: (
                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().subtract(2, 'days').fromNow()}</span>
                </Tooltip>
            ),
        },
    ];
    return(
        <>
            <List
                className="comment-list"
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <li>
                        <Comment
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                        />
                    </li>
                )}
            />
        </>
    )
}