import React, { Component } from "react";
import { PageHeader, Card } from "antd";

const content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat sem et turpis efficitur, aliquam vehicula augue auctor. Duis condimentum odio felis, ac placerat tortor fermentum sit amet. Etiam faucibus ultricies arcu. Quisque eget nulla dui. In sodales, magna id fermentum convallis, leo ipsum tempor erat, ut hendrerit est massa non turpis. Integer mi magna, ultrices vitae fringilla vitae, ullamcorper nec diam. Nam condimentum volutpat lobortis. Nulla facilisi. Duis efficitur risus nisl, nec tincidunt ante rhoncus at. Aenean ut viverra justo, quis viverra dui. Nullam malesuada a mauris id lacinia. Integer aliquet quis mauris in gravida. Integer purus nibh, sagittis non nunc vitae, rhoncus ultrices libero.

Cras convallis lorem purus, ut venenatis mi semper et. Ut condimentum ipsum odio, vel interdum dui auctor ut. Suspendisse egestas, dui vitae rutrum scelerisque, ex turpis hendrerit tellus, et porttitor ante lacus iaculis mauris. Aenean faucibus rutrum mollis. In et facilisis est. In ut vehicula libero. Nulla et aliquet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis hendrerit quam, in congue augue iaculis sit amet. Nulla vitae ipsum facilisis, accumsan nisi ac, ultrices ligula. Praesent lacinia in erat at rutrum. Vivamus et dolor ut dui auctor cursus.

Nulla facilisi. Cras porta dui ac nulla pharetra vehicula. Quisque rutrum aliquam ipsum id fermentum. Integer ac massa imperdiet, sodales lectus ac, rhoncus elit. Nulla vestibulum tincidunt justo, ut porta enim. Duis feugiat egestas tortor a elementum. In rhoncus imperdiet urna vel imperdiet. Morbi bibendum sem vehicula ex fringilla, ac malesuada orci laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus cursus sapien vel mauris malesuada lobortis. Morbi placerat euismod nisi et egestas. Nunc rutrum enim eget arcu convallis semper. Nulla in risus sit amet dui venenatis hendrerit eu dictum nisl. Maecenas ultricies diam fermentum blandit aliquam. Integer nec ligula nec erat vestibulum sodales. Etiam semper ante id sapien facilisis semper.

Morbi rutrum, felis nec porta finibus, risus sem eleifend elit, nec tincidunt lacus neque id lorem. Phasellus dapibus, sapien nec fringilla auctor, sapien dolor efficitur purus, eget convallis odio tortor id nibh. Vestibulum ut est tincidunt, facilisis lorem nec, accumsan felis. Fusce semper porttitor nisi, et ultrices eros aliquet at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla feugiat metus tortor, vel consectetur lectus consequat sed. Integer ac gravida risus. Nunc elementum sem vel nisi feugiat, quis euismod felis gravida. Quisque dictum mauris eget leo ultrices tempus. Suspendisse congue rutrum maximus. Nullam laoreet sem vestibulum, euismod odio in, mattis dui.
`;
const Post = (props) => {
  console.log(props);
  return (
    <div className="post_container">
      <div className="page_header_container">
        <PageHeader
          className="site-page-header"
          style={{ border: "1px solid rgb(133, 133, 133)" }}
          title="Post"
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
