import React, { useState } from "react";
import "./css/content.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Content = () => {
  const [iData, udata] = useState({
    title1: "Hi 👋, I'm ",
    title2: "Abid Adhikari",
    subtitle: "A passionate developer/programmer and learner from Nepal.",
    instagram: "abid.adhikari",
    facebook: "abid_adhikari",
    twitter: "abidadhikari",
    stackoverflow: "abid-adhikari",
    youtube: "abidadhiakarics",
    aboutme: "I have 2+years of web Designing , web development & mobile application development experience. JavaScript and Python being my core technical Skill, I  don't limit within it. I do more study and research to keep updated with the latest technologies. Visit my Github Page to know more about my projects and skills. Link given below.",
  });
  const [aboutLength, uLength] = useState(0);
  const dataChange = (e) => {
    let val = e.target.value;
    let name = e.target.name;
    let length = e.target.value.length;
    uLength(length);
    // console.log(name);
    udata((pre) => {
      return { ...pre, [name]: val };
    });
  };
  const copyCode = () => {
    let code = `<h1 align="center">
    ${iData.title1} ${iData.title2}
  </h1>
  <br/>
  <h3 align="center">${iData.subtitle}</h3>
  <br/>
  <hr width="100%" />
  <br/>
  <h3 align="left">Connect with me:</h3>
  <br/>
  <a href=${"https://instagram.com/" + iData.instagram} target="blank">
    <img
      align="center"
      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
      alt=${iData.title2}
      height="30"
      width="40"
    />
  </a>
  <a href=${"https://facebook.com/" + iData.facebook} target="blank">
    <img
      align="center"
      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
      alt=${iData.title2}
      height="30"
      width="40"
    />
  </a>
  <a href=${"https://twitter.com/" + iData.twitter} target="blank">
    <img
      align="center"
      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
      alt=${iData.title2}
      height="30"
      width="40"
    />
  </a>
  <a href=${
    "https://stackoverflow.com/users/" + iData.stackoverflow
  } target="blank">
    <img
      align="center"
      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg"
      alt=${iData.title2}
      height="30"
      width="40"
    />
  </a>
  <a href=${"https://youtube.com/c/" + iData.youtube} target="blank">
    <img
      align="center"
      src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg"
      alt=${iData.title2}
      height="30"
      width="40"
    />
  </a>
  <br/>
  <br/>
  <h4>About Me:</h4>
  <br/>
  <p>${iData.aboutme}</p>
  <br/>
  <p align="center">Made with ♥ by <a href="https://abidadhikari.com.np">ReadMe Generator By Abid Adhikari</a></p>
    
    `;
    let hiddenBox = document.getElementById("hiddenBox");
    hiddenBox.value = code;

    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(code);
      toast.success("Code successfully copied");
    } else {
      hiddenBox.select();
      hiddenBox.setSelectionRange(0, 99999); /* For mobile devices */

      /* Copy the text inside the text field */
      document.execCommand("copy");
      toast.success("Code successfully copied");
    }
  };
  const clearAll=()=>{
    udata({
      title1: "",
      title2: "",
      subtitle: "",
      instagram: "",
      facebook: "",
      twitter: "",
      stackoverflow: "",
      youtube: "",
      aboutme: "",
    })
    toast.success("Cleared")
  }

  return (
    <>
      <div class="container">
        <div className="inputContainer">
          <div className="boxTitle">
            Editing Zone <i class="fas fa-edit"></i>
          </div>
          <div className="editTools">
            <label>Title</label>
            <div class="block block1">
              <input
                type="text"
                name="title1"
                value={iData.title1}
                onChange={dataChange}
              />
              <input
                type="text"
                name="title2"
                value={iData.title2}
                onChange={dataChange}
              />
            </div>
            <br />
            <label>Subtitle</label>
            <div className="block block2">
              <input
                className="longInput"
                type="text"
                name="subtitle"
                value={iData.subtitle}
                onChange={dataChange}
                // width="500"
              />
            </div>

            <label>Socials</label>
            
            <div className="block block3">
              <div className="socialBlock">
                <i class="fab fa-instagram"></i>
                <input
                  className="socialInput"
                  type="text"
                  name="instagram"
                  value={iData.instagram}
                  onChange={dataChange}
                />
              </div>
              <div className="socialBlock">
                <i class="fab fa-facebook"></i>
                <input
                  className="socialInput"
                  type="text"
                  name="facebook"
                  value={iData.facebook}
                  onChange={dataChange}
                />
              </div>
              <div className="socialBlock">
                <i class="fab fa-twitter"></i>
                <input
                  className="socialInput"
                  type="text"
                  name="twitter"
                  value={iData.twitter}
                  onChange={dataChange}
                />
              </div>
              <div className="socialBlock">
                <i class="fab fa-stack-overflow"></i>
                <input
                  className="socialInput"
                  type="text"
                  name="stackoverflow"
                  value={iData.stackoverflow}
                  onChange={dataChange}
                />
              </div>
              <div className="socialBlock">
                <i class="fab fa-youtube"></i>
                <input
                  className="socialInput"
                  type="text"
                  name="youtube"
                  value={iData.youtube}
                  onChange={dataChange}
                />
              </div>
            </div>
            <label>About Me</label>
            <div className="block block4">
              <textarea
                name="aboutme"
                onChange={dataChange}
                value={iData.aboutme}
              ></textarea>
              <br />
              <span>{aboutLength}</span>
            </div>
            <textarea className="hiddenBox" id="hiddenBox"></textarea>
            <button className="btn btn2" onClick={clearAll}>
              Clear All
              <ToastContainer />
            </button>
            <button className="btn" onClick={copyCode}>
              COPY CODE
              <ToastContainer />
            </button>
            <div className="block block2"></div>
          </div>
        </div>

        {/* here goes the output container  */}

        <div className="outputContainer">
          <div className="boxTitle">
            Output <i class="fas fa-laptop-code"></i>
          </div>
          <div className="output">
            <h1 align="center">
              {iData.title1} {iData.title2}
            </h1>
            <br />
            <h3 align="center">{iData.subtitle}</h3>
            <br />
            <hr width="100%" />
            <h3 align="left">Connect with me:</h3>
            <br />
            <a href={"https://instagram.com/" + iData.instagram} target="blank">
              <img
                align="center"
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                alt={iData.title2}
                height="30"
                width="40"
              />
            </a>
            <a href={"https://facebook.com/" + iData.facebook} target="blank">
              <img
                align="center"
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
                alt={iData.title2}
                height="30"
                width="40"
              />
            </a>
            <a href={"https://twitter.com/" + iData.twitter} target="blank">
              <img
                align="center"
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
                alt={iData.title2}
                height="30"
                width="40"
              />
            </a>
            <a
              href={"https://stackoverflow.com/users/" + iData.stackoverflow}
              target="blank"
            >
              <img
                align="center"
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg"
                alt={iData.title2}
                height="30"
                width="40"
              />
            </a>
            <a href={"https://youtube.com/c/" + iData.youtube} target="blank">
              <img
                align="center"
                src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg"
                alt={iData.title2}
                height="30"
                width="40"
              />
            </a>
            <br />
            <br />
            <h4>About Me:</h4>
            <br />
            <p>{iData.aboutme}</p>
            <br />
            <p align="center">
              Made with ♥ by <a href="https://abidadhikari.github.io/github-readme-generator-profile">ReadMe Generator By Abid Adhikari</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Content;
