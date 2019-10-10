import React from 'react'
import Badge from './Badge'

const Card = () => (
  <div className="cards col-md-4 col-sm-6">
    <img
      className="img-fluid"
      src="http://www.unoosa.org/res/timeline/index_html/space-2.jpg"
      alt=""
    />
    <div className="content">
      <a className="text__weight_600 text__size_18 text__white" href="#">Redux</a>
      <div className="row m-0">
        <Badge text="React" color="blue" />
        <Badge text="Javascript" color="yellow" />
      </div>
      <p className="text__size_12 text__white mt-10 text__justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
        quibusdam ea. Ratione corrupti, veritatis iure atque facilis
        consequuntur nulla vel sequi impedit
      </p>
    </div>
    <style jsx>{`
      .cards {
        min-height: 300px;
        padding: 0px 5px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        position: relative;
        top: 0;
        transition: top ease 0.5s;
        margin-bottom: 16px;
      }
      .cards:hover {
        top: -10px;
      }
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

export default Card