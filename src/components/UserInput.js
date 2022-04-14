import React from "react";

function UserInput({ changeTheme, userRef, setUser }) {
  return (
    <div className="UserInput">
      <div className="header">
        <h4>devfinder</h4>
        <div className="darkMode" onClick={changeTheme}>
          <p id="modeText">DARK</p>
        </div>
      </div>
      <div className="search" id="search_container">
        <input
          ref={userRef}
          id="input"
          type="text"
          placeholder="Search username..."
        />
        <div className="search_btn">
          <button onClick={() => setUser(userRef.current.value)} id="search">
            Search
          </button>
        </div>
      </div>
      <div id="error">
        <p>User not found</p>
      </div>
    </div>
  );
}

export default UserInput;
