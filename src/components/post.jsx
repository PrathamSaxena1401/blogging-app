import React, { Component, useState, useEffect } from "react";
import { PageHeader, Card } from "antd";
import api from "../mock_api";
const Post = (props) => {
  const [title, setTitle] = useState("pratham");
  const [content, setContent] = useState("");
  useEffect(() => {
    let post = api[props.id];
    setTitle(post.title);
    setContent(post.content);
  },[]);
  console.log(props);
  return (
    <div className="post_container">
      <div className="page_header_container">
        <PageHeader
          className="site-page-header"
          style={{ border: "1px solid rgb(133, 133, 133)" }}
          title={title}
        />
      </div>
      <div className="Postcontent_container">
        <Card style={{ marginTop: "20px" }}>
          {content.split("\n").map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>;
          })}
        </Card>
      </div>
    </div>
  );
};
export default Post;
