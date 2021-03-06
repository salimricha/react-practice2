import React from 'react';
import faker from 'faker';

const CommentDetail = props =>{
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar}/>
        </a>
        <div className="content">
        <a href="/" className="author">
        {props.author}
        </a>
        <div className="metadata"></div>
            <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.textPost}</div>
        </div>
    );
}
    export default CommentDetail;