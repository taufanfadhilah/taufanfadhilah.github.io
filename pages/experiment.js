import React, { useState } from "react";
import Layouts from "../components/Layouts";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function Blog() {
  const blogs = useSelector(state => state.experiments);
  const [page, setPage] = useState(0);

  return (
    <Layouts>
      <div className="row" id="blog">
        <div
          className="col"
          style={{ paddingBottom: 20, borderBottom: "1px solid #ffffff" }}
        >
          <h3>Experiments</h3>
        </div>
      </div>
      <div className="row mt-3 p-3">
        {blogs.slice(page * 6, 6 + page * 6).map((blog, index) => (
          <Card key={index} blog={blog} type="experiment" />
        ))}
      </div>
      <div className="row text-center">
        <div className="col">
          <p>
            <span
              className="cursor"
              onClick={() => setPage(page - 1)}
              hidden={page == 0}
            >
              Prev
            </span>{" "}
            <a href="#blog">
              <span className="cursor" onClick={() => setPage(page + 1)}>
                Next
              </span>
            </a>
          </p>
        </div>
      </div>
    </Layouts>
  );
}

export default Blog;
