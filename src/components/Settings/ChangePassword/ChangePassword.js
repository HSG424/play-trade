import { Fragment, useState, useContext } from "react";
import "./ChangePassword.scss";
import useHttp from "../../../hooks/use-http";
import AuthContext from "../../../store/auth-context";
import { FIREBASE_URL, FIREBASE_KEY } from "../../../config.js";

const ChangePassword = () => {
  const authCtx = useContext(AuthContext);

  const [newPassword1, setNewPassword1] = useState("");
  const [newPassword2, setNewPassword2] = useState("");

  const { isLoading, error, sendRequest } = useHttp();

  const changePasswordHandler1 = (event) => {
    setNewPassword1(event.target.value);
  };

  const changePasswordHandler2 = (event) => {
    setNewPassword2(event.target.value);
  };

  const processChangePassword = (data) => {
    console.log("processChangePassword", data);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (newPassword1 !== newPassword2) return;

    sendRequest(
      {
        url: `${FIREBASE_URL}:update?key=${FIREBASE_KEY}`,
        method: "POST",
        body: {
          idToken: authCtx.token,
          password: newPassword1,
          returnSecureToken: false,
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      processChangePassword
    );
  };

  return (
    <Fragment>
      <h3 className="h3-layout ch-pass-margins">Change Password</h3>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="newPassword1" className="form-label">
            New password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword1"
            onChange={changePasswordHandler1}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword2" className="form-label">
            Re-enter new password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword2"
            onChange={changePasswordHandler2}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Change Password
        </button>
      </form>
    </Fragment>
  );
};

export default ChangePassword;
