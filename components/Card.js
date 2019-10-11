import React from "react";
import Badge from "./Badge";
import { Link } from "../helpers/routes";

const Card = ({ blog }) => (
  <div className="my__card col-md-4 col-sm-6">
    <img className="img-fluid" src={blog.thumbnail} alt="" />
    <div className="content">
      <Link route="blog.detail" params={{ id: 1 }}>
        <a className="text__weight_600 text__size_18 text__white">
          {blog.title}
        </a>
      </Link>
      <div className="row m-0">
        {blog.tags.map((tag, index) => (
          <Badge key={index} text={tag.text} color={tag.color} />
        ))}
      </div>
      <p className="text__size_12 text__white mt-10 text__justify">
        {blog.desc}
      </p>
    </div>
    <style jsx>{`
      .content {
        padding: 16px;
      }
      .img-fluid {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 150px;
        width: 100%;
      }
      a {
        color: white;
      }
    `}</style>
  </div>
);

export default Card;
