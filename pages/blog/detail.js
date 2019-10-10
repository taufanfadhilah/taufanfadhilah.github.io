import React from "react";
import Layouts from "../../components/Layouts";
import { Link } from "../../helpers/routes";
function Detail() {
  return (
    <Layouts>
      <div className="row">
        <Link route="blog">
          <a className="pt-1 mr-2">&larr; </a>
        </Link>
        <h3>Redux</h3>
      </div>
      <iframe
        src="https://medium.com/laravel-web-id/bagaimana-mengubah-format-tanggal-di-laravel-d5203acc4bf4"
        frameborder="0"
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

export default Detail;
