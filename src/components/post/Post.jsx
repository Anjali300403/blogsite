import React from 'react'
import stochastic from '../../assets/stochastic.jpg'
import './Post.css'
import {Link} from 'react-router-dom'

export default function Post() {
  return (
    <div className='Post'>
        <img className="postImg" src={stochastic}></img>
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>AI/ML</span>
                <span className='postCat'>Miscellaneous</span>
            </div>
            <span className='postTitle'>
            <Link to="/post/:postId" style={{ textDecoration: 'none', color: 'inherit' }}>Stochastic Optimization Algorithm</Link>
              </span>
            <hr/>
            <span className='postDate'>1 hour ago</span>
        </div>
        <div className="postDesc">
          <p>
          Dive into stochastic optimization algorithms in my latest blog post. We explore concepts from optimization basics to applications in machine learning, focusing on stochastic gradient descent. Understand its mathematical expressions, advantages, disadvantages, and real-world applications in technology and other fields. Check out the post for in-depth insights and references.
          </p>
        </div>
    </div>
  )
}
