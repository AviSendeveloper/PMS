const RegisterForm = () => {
  return (
    <form id="regForm" noValidate>
      <div className="fg">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          className="fcc"
          placeholder="Jane Smith"
        />
        <div className="errmsg" id="nameErr">
          Full name is required.
        </div>
      </div>
      <div className="fg">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="fcc"
          placeholder="you@example.com"
        />
        <div className="errmsg" id="emailErr">
          Enter a valid email address.
        </div>
      </div>
      <div className="fg">
        <label htmlFor="password">Password</label>
        <div className="iw">
          <input
            type="password"
            id="password"
            className="fcc"
            placeholder="Min. 8 characters"
            style={{ paddingRight: 36 }}
          />
          <button type="button" className="tpw" id="tp1" tabIndex={-1}>
            <i className="bi bi-eye-slash" />
          </button>
        </div>
        <div className="pw-str">
          <div className="pw-str-bar" id="pwBar" />
        </div>
        <div className="errmsg" id="pwErr">
          Password must be at least 8 characters.
        </div>
      </div>
      <div className="fg">
        <label htmlFor="cpw">Confirm Password</label>
        <div className="iw">
          <input
            type="password"
            id="cpw"
            className="fcc"
            placeholder="Repeat password"
            style={{ paddingRight: 36 }}
          />
          <button type="button" className="tpw" id="tp2" tabIndex={-1}>
            <i className="bi bi-eye-slash" />
          </button>
        </div>
        <div className="errmsg" id="cpwErr">
          Passwords do not match.
        </div>
      </div>
      <button type="submit" className="btn-p" id="createBtn" disabled>
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
