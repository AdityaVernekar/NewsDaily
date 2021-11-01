import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-4">
        <div className="card">
         <div style={{  display: "flex",
                        justifycontent: "flex-end",
                        position: "absolute",
                        right: 0}}>
         <span class=" badge rounded-pill bg-danger" style={{left:"90%",zIndex:1}}>
            {source}
          </span>
         </div>
          <img
            style={{ height: "220px" }}
            src={
              imageUrl
                ? imageUrl
                : "https://st1.bgr.in/wp-content/uploads/2021/10/PUBG-New-State-1.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title.length>70?title.slice(0,70)+"...":title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-primary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
