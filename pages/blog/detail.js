import React from "react";
import Layouts from "../../components/Layouts";
import { Link } from "../../helpers/routes";
import { useSelector } from "react-redux";
function Detail({ query }) {
  const blog = useSelector(state => state.blogs.filter(value => value.id == query.id));
  
  return (
    <Layouts>
      <div className="row">
        <Link route="blog">
          <a className="pt-1 mr-2">&larr; </a>
        </Link>
        <h3>{blog[0].title}</h3>
      </div>
      <iframe
        src={blog[0].link}
        frameBorder="0"
      ></iframe>
      <style jsx>{`
        a {
          color: white;
        }
        iframe {
          width: 100%;
          height: 95%;
          background-color: grey;
        }
        @media (max-width: 768px) {
          iframe {
            width: 100%;
            height: 600px;
          }
        }
      `}</style>
    </Layouts>
  );
}

Detail.getInitialProps = async ({ query }) => {
  return { query };
};

export default Detail;
