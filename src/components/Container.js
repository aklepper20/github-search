import React from "react";
import UserContent from "./UserContent";
import UserInput from "./UserInput";

function Container({ setUser, changeTheme, userRef }) {
  return (
    <div className="container">
      <UserInput
        changeTheme={changeTheme}
        userRef={userRef}
        setUser={setUser}
      />
      <UserContent />
    </div>
  );
}

export default Container;
