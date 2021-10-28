import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-4">
        <div className="card">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-dark" style={{left:"90%",zIndex:1}}>
            {source}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://st1.bgr.in/wp-content/uploads/2021/10/PUBG-New-State-1.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}.....</p>
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
