import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

function App() {
  const [user, setUser] = useState("octocat");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getRequest = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/${user}`);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRequest();
  }, [user]);

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h4>devfinder</h4>
        </div>

        <div className="search" id="search_container">
          <img src="./assets/icon-search.svg" alt="" />
          <input
            id="input"
            type="text"
            placeholder="Search Github username..."
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <div className="search_btn">
            <button id="search">Search</button>
          </div>
        </div>

        <div id="error">
          <p>User not found</p>
        </div>

        <div className="content">
          <div className="profile">
            <div className="profile_frame">
              <img
                id="avatar"
                src={
                  userData.avatar_url
                    ? userData.avatar_url
                    : "./assets/profilePlaceholder.png"
                }
                alt={userData.name}
              />
            </div>
          </div>

          <div className="user">
            <div className="user_info">
              <div className="name">
                <h3 id="name">{userData.name}</h3>

                <div className="username">
                  <p id="login">{`@${userData.login}`}</p>
                </div>
              </div>

              <div className="date">
                <p id="date">
                  {moment(userData.created_at).format("MMM Do YYYY")}
                </p>
              </div>
            </div>

            <div className="bio">
              <p id="bio">{userData.bio}</p>
            </div>

            <div className="stats_container" id="statistics">
              <div className="stats">
                <p>Repos</p>
                <p id="repo">{userData.public_repos}</p>
              </div>

              <div className="stats">
                <p>Followers</p>
                <p id="followers">{userData.followers}</p>
              </div>

              <div className="stats">
                <p>Following</p>
                <p id="following">{userData.following}</p>
              </div>
            </div>

            <div className="links_container">
              <div className="left">
                <div className="info">
                  <img src="./assets/icon-location.svg" alt="" />
                  <p id="location">{userData.location}</p>
                </div>
                <div className="info">
                  <img src="./assets/icon-website.svg" alt="" />
                  <a href={userData.blog} id="blog">
                    {userData.blog}
                  </a>
                </div>
              </div>

              <div className="right">
                <div className="info">
                  <img src="./assets/icon-twitter.svg" alt="" />
                  <p id="twitter">
                    {userData.twitter_username
                      ? userData.twitter_username
                      : "Not available"}
                  </p>
                </div>
                <div className="info">
                  <img src="./assets/icon-company.svg" alt="" />
                  <p id="company">
                    {userData.company ? userData.company : "Not available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
