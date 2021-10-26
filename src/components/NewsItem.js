import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl}= this.props;
    return (
      <div className="my-4">
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://st1.bgr.in/wp-content/uploads/2021/10/PUBG-New-State-1.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">
              {description}.....
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
