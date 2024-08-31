import React from "react";

const NewsItem = (props) => {
  let {
    title,
    description,
    imageUrl,
    newsUrl,
    author,
    date,
    source,
    category,
  } = props;
  // console.log(NewsItem);


  console.log("Category:", category); // Debugging line

  // Function to return a default image based on the category
  const getDefaultImageUrl = (category) => {
    switch (category?.toLowerCase()) {
      case "business":
        return "/images/businesss.png";
      case "entertainment":
        return "/images/entertainment.png";
      case "general":
        return "/images/general.png";
      case "health":
        return "/images/health.png";
      case "science":
        return "/images/science.png";
      case "sports":
        return "/images/sports.png";
      case "technology":
        return "/images/technology.png";
      default:
        return "/images/default.png";
    }
  };


  return (
    <div className="my-3">
      <div className="card bg-dark text-light">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={!imageUrl ? getDefaultImageUrl(category) : imageUrl}
          className="card-img-top"
          alt="news-thumbnail"
        />
        <div className="card-body">
          <h5 className="card-title text-info">{title} </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-info"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
