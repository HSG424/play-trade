import "./Login.scss";
import logo from "../logo.png";

const Login = () => {
  return (
    <main className="form-signin text-center">
      <img className="mb-4 logo-img" src={logo} alt="logo" />
      <form>
        <h1 className="h3 mb-3 fw-normal sign-in-mt">Please sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="..."
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">
          Powered by <a href="#">Yahoo Finance</a>
        </p>
      </form>
    </main>
  );
};

export default Login;
