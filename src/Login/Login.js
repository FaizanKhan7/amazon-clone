import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import firebase from "../firebase";
function Login() {
  const history = useHistory(); // Allows us to programmatically change the url
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login stuff
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.mssage));
  };

  const register = (e) => {
    e.preventDefault();
    //   Do some Firebase register stuff
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth);  it will succesfully create a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInBtn" type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Alias nam animi eum nulla odit voluptatem ratione
          adipisci aliquid facere earum.
        </p>

        <button className="login_registerBtn" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
