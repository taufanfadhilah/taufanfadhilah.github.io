import React from "react";
import Layouts from "../../components/Layouts";
import { Link } from "../../helpers/routes";
import { useSelector } from "react-redux";
function Detail({ query }) {
  const experiment = useSelector(state =>
    state.experiments.filter(value => value.id == query.id)
  );

  return (
    <Layouts>
      <div className="row">
        <Link route="experiment">
          <a className="pt-1 mr-2">&larr; </a>
        </Link>
        <h3>{experiment[0].title}</h3>
      </div>
      <div className="row">
        <div className="col-md-12">
          <iframe
            src={experiment[0].embed}
            frameBorder="0"
            allowFullScreen
            style={{ maxHeight: 300 }}
          ></iframe>
          <h4 className="mt-20">Tools</h4>
          <ul>
            {experiment[0].tools.map(tool => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <h4 className="mt-20">Backstory</h4>
          <p className="text__size_12">{experiment[0].desc}</p>
          <h4 className="mt-20">What did I learn?</h4>
          <p className="text__size_12 mb-10">{experiment[0].insight}</p>

          {experiment[0].medium && (
            <p className="mt-20">
              Read more on <a href={experiment[0].medium}>Medium</a>
            </p>
          )}

          {experiment[0].code && (
            <a href={experiment[0].code}>
              <p className="mt-20">Get code here</p>
            </a>
          )}
        </div>
      </div>
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
