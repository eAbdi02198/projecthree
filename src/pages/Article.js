import React from 'react'
import './Article.css'
import { Link, Outlet } from 'react-router-dom'

export default function Article() {
  return (
    <div className='article-page'>
             
        <div className="container-articles">
        <Link to="/article/js" className="my-link">JavaScript</Link>
<Link to="/article/css" className="my-link">Css</Link>
<Link to="/article/react" className="my-link">React</Link>

        </div>

        <div className="article-content">
            <Outlet />  {/* اینجا محتوای child route نمایش داده می‌شود */}
        </div>
    </div>
  )
}
