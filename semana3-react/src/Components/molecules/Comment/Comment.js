import React from 'react';


const Comment = ({ comment, data }) => {


    return (
        <div>
            <p>{comment}</p>
            <p> {data}</p>
        </div>
    );

}

export default Comment;