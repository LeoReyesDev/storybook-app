import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyBtn from "./components/button/TextButton";
import { Button } from "./stories-default/Button";
import { Header } from "./stories-default/Header";
import { TextField } from "@mui/material";
import CustomField from "./components/textinput/TextInput";
import ImageList from "./components/ligthbox/ImageList";
import { sign } from "crypto";

type User = {
  name: string;
};

function App() {
  const [username, setusername] = useState<User>();

  const login = () => {
    setusername({
      name: "William Reyes",
    });
  };

  const logOut = () => {
    setusername(undefined);
  };

  console.log("Get Name: ", JSON.stringify(username));

  return (
    <div className="App">
      <Header
        user={username}
        onCreateAccount={() =>
          alert("We cant create new accounts for this moment")
        }
        onLogin={login}
        onLogout={logOut}
      />
      <header className="App-header">
        {/* <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        /> */}
        {username ? (
          <>
            <h2>List of users from API</h2>
            <ImageList apiUrl="https://randomuser.me/api/?results=10" />
          </>
        ) : (
          <h4>Please click on login button for enter to page</h4>
        )}

        {/* <CustomField
          label="Button"
          onChange={() => console.log("Text")}
          size="large"
          primary
          backgroundColor="green"
        />
        <MyBtn
          label="Button"
          onClick={() => alert("Hoal")}
          size="large"
          primary
          backgroundColor="red"
        />
        <Button
          primary
          backgroundColor={"blue"}
          size="large"
          label="TESTING"
          onClick={() => alert("click ME")}
        /> */}
      </header>
    </div>
  );
}

export default App;
