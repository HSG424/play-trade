import { useState, useContext, useEffect } from "react";
import "./AuthForm.scss";
import AuthContext from "../../store/auth-context";
import logo from "../../logo.png";
import useHttp from "../../hooks/use-http";
import { FIREBASE_URL, FIREBASE_KEY } from "../../config.js";
import { useHistory } from "react-router-dom";

const AuthForm = () => {
  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const [contentIsLogin, setContentIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, sendRequest } = useHttp();

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const switchAuthModeHandler = () => {
    setContentIsLogin((prevState) => !prevState);
  };

  useEffect(() => {
    authCtx.isLoggedIn && history.replace("/");
  }, [authCtx.isLoggedIn]);

  const processAuth = (data) => {
    const expirationTime = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );
    authCtx.login(data.idToken, expirationTime.toISOString());
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let url;
    if (contentIsLogin) {
      url = `${FIREBASE_URL}:signInWithPassword?key=${FIREBASE_KEY}`;
    } else {
      url = `${FIREBASE_URL}:signUp?key=${FIREBASE_KEY}`;
    }

    sendRequest(
      {
        url,
        method: "POST",
        body: {
          email,
          password,
          returnSecureToken: true,
        },
      },
      processAuth
    );
  };

  return (
    <main className="form-signin text-center">
      <img className="mb-4 logo-img" src={logo} alt="logo" />
      <form onSubmit={submitHandler}>
        <h1 className="h3 mb-3 fw-normal sign-in-mt">
          {contentIsLogin ? "Please sign in" : "Please sign up"}
        </h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="Email"
            onChange={changeEmailHandler}
          />
          <label htmlFor="floatingEmail">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={changePasswordHandler}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        {contentIsLogin && (
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
        )}

        <button
          type="submit"
          className={`w-100 btn btn-lg btn-primary ${
            !contentIsLogin ? "mt-action-button" : ""
          }`}
        >
          {contentIsLogin ? "Sign in" : "Create Account"}
        </button>

        <button
          type="button"
          className="auth-mode mt-5 mb-3"
          onClick={switchAuthModeHandler}
        >
          {contentIsLogin
            ? "Create new account"
            : "Login with existing account"}
        </button>
      </form>
    </main>
  );
};

export default AuthForm;
