import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./store/changeThemeDataSlice";

function UserInput({ changeTheme, userRef, setUser }) {
  const dispatch = useDispatch();
  const themeData = useSelector((state) => state.themeData.value);

  return (
    <div className="UserInput">
      <div className="header">
        <h4>devfinder</h4>
        <div className="darkMode" onClick={dispatch(setTheme(""))}>
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
