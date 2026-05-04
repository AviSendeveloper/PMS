const LoginForm = () => {
  return (
    <form id="loginForm" noValidate>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="form-control-custom"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <div className="error-msg" id="emailErr">
          Enter a valid email address.
        </div>
      </div>
      <div className="form-group">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 6,
          }}
        >
          <label htmlFor="password" style={{ marginBottom: 0 }}>
            Password
          </label>
          <a href="#" className="forgot-link">
            Forgot password?
          </a>
        </div>
        <div className="input-wrapper">
          <input
            type="password"
            id="password"
            className="form-control-custom"
            placeholder="••••••••"
            autoComplete="current-password"
            style={{ paddingRight: 36 }}
          />
          <button
            type="button"
            className="toggle-pw"
            id="togglePw"
            tabIndex={-1}
          >
            <i className="bi bi-eye-slash" />
          </button>
        </div>
        <div className="error-msg" id="passwordErr">
          Password is required.
        </div>
      </div>
      <button type="submit" className="btn-primary-custom" id="signInBtn">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
