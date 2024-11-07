import "./App.css";
import { useState, useEffect } from "react";
import SocialImage from "./assets/images.jpeg";

const Links = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
  },
];

// const socialUrls = [
//   {
//     name: "Facebook",
//     imgUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
//   },
//   {
//     name: "Facebook",
//     imgUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
//   },
//   {
//     name: "Facebook",
//     imgUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
//   },
// ];

const socialUrl = {
  name: "Facebook",
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s",
};

function App() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log("useEffect called");
    // return () => {
    //   console.log("cleanup function");
    // };
  }, [count]);

  return (
    <div className="container">
      {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStygZ8XFCUEhXmS1MmfMKkxKHbkLC4WsRUGENF57C43h-dIUl4_IUze3ueClifOW_F9Te */}
      <div>
        <img className="img-cover" src={SocialImage} alt="Social Image" />
      </div>
      {/* <a href="https://facebook.com">Facebook</a> */}
      <h1 className="header">Mark Zuckerberg</h1>
      <p className="bio paragraph">
        Founder and CEO of Facebook adskjfadas das dasd sd sddsdsa asdasd
      </p>
      <div className="links-container scrollbar">
        {Links.map((link, index) => (
          <a
            href={link.url}
            target="_blank"
            className="link-btn gap"
            key={link.url}
          >
            {link.name}
            <img src={link.imgUrl} className="link-cover" alt={link.name} />
          </a>
        ))}
      </div>
      <div className="flex">
        <img src={socialUrl.imgUrl} className="social_url" alt="Social Image" />
      </div>
    </div>
  );
}

export default App;
