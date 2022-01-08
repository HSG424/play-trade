import { Fragment } from "react";

import "./ChangePassword.scss";

const ChangePassword = () => {
  return (
    <Fragment>
      <h3 className="h3-layout ch-pass-margins">Change Password</h3>
      <form>
        <div class="mb-3">
          <label for="newPassword1" class="form-label">
            New password
          </label>
          <input type="password" class="form-control" id="newPassword1" />
        </div>
        <div class="mb-3">
          <label for="newPassword2" class="form-label">
            Re-enter new password
          </label>
          <input type="password" class="form-control" id="newPassword2" />
        </div>

        <button type="submit" class="btn btn-primary">
          Change Password
        </button>
      </form>
    </Fragment>
  );
};

export default ChangePassword;
