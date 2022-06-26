import "./post.css";
import { Link } from "react-router-dom";

import  positive  from '../../assets/icons/positive.png'
import negative from '../../assets/icons/negative.png'
import neutral from '../../assets/icons/neutral.png'

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <div className="Stats">
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
          <img
            src={post.rating < -2 ?
              negative :
              post.rating >= -2 && post.rating <= 2 ?
                neutral :
                positive
             }
            className="rating" alt="rating"></img>
          <p className="ratingPara">rating: {post.rating}</p>
        </div>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
