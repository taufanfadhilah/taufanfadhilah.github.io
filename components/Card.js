import React from 'react'
import Badge from './Badge'

const Card = () => (
  <div className="my__card col-md-4 col-sm-6">
    <img
      className="img-fluid"
      src="http://www.unoosa.org/res/timeline/index_html/space-2.jpg"
      alt=""
    />
    <div className="content">
      <a className="text__weight_600 text__size_18 text__white" href="#">
        Redux
      </a>
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