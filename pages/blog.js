import React from "react";
import Layouts from "../components/Layouts";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function Blog() {
  const blogs = useSelector(state => state.blogs);

  return (
    <Layouts>
      <div className="row">
        <div
          className="col"
          style={{ paddingBottom: 20, borderBottom: "1px solid #ffffff" }}
        >
          <h3>Blog</h3>
        </div>
      </div>
      <div className="row mt-3 p-3">
        {blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </div>
    </Layouts>
  );
}

export default Blog;
