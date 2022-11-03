import React from 'react';
import { Card, Navbar } from '../components';
import { posts } from '../data';

export const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home">
        {posts.map(post => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};
