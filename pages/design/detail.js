import React from "react";
import Layouts from "../../components/Layouts";
import { Link } from "../../helpers/routes";
import { useSelector } from "react-redux";
function Detail({ query }) {
  const design = useSelector(state => state.designs.filter(value => value.id == query.id));
  
  return (
    <Layouts>
      <div className="row">
        <Link route="design">
          <a className="pt-1 mr-2">&larr; </a>
        </Link>
        <h3>{design[0].title}</h3>
      </div>
      <img src={design[0].thumbnail} />
      <a href={design[0].link} target="_blank" className="my-2">Visit my Dribbble here</a>
      <style jsx>{`
        a {
          color: white;
        }
        img {
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
