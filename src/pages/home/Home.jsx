import React from 'react';
import Header from '../../components/header/Header.jsx';
import Posts from '../../components/posts/Posts.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import './Home.css';

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
       <Posts/>
       <Sidebar/>
      </div>
    </>
  );
}
