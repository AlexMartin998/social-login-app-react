import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data';

export const Post = () => {
  const { id } = useParams();

  const post = posts.find(post => post.id === +id);

  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <div className="postTextContainer">
        <div className="postText">
          <h1 className="postTitle">{post.title}</h1>
          <p className="postDesc">{post.desc}</p>
          <p className="postLongDesc">{post.longDesc}</p>
        </div>
      </div>
    </div>
  );
};
