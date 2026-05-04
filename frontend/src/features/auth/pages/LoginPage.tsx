import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "../style/LoginPage.css";
import classNames from "classnames";
import useToggleLoginOption from "../hooks/useToggleLoginOption";

const LoginPage = () => {
  const { isOpen, toggleLoginOption } = useToggleLoginOption();

  return (
    <>
      <div>
        <div className="auth-logo">
          P<span>M</span>S
        </div>
        <div className="auth-card">
          <h2 className="mb-1">Welcome back</h2>
          <p className="mb-4">Sign in to continue to your workspace.</p>
          <LoginForm />
          <div className="auth-footer">
            No account? <Link to="/register">Create one</Link>
          </div>
        </div>
        {/* DEV ONLY — remove in production */}
        <div className="dev-panel" onClick={toggleLoginOption}>
          <div className="dev-panel-header" id="devToggle">
            <span className="dev-label">⚙ DEV: Sign in as...</span>
            <i
              className="bi bi-chevron-down"
              id="devChevron"
              style={{ color: "var(--text-muted)", fontSize: 12 }}
            />
          </div>
          <div
            className={classNames("dev-body", { open: isOpen })}
            id="devBody"
          >
            <div className="dev-btns">
              <button
                className="dev-btn"
                // onclick="devLogin('admin')"
              >
                👑 Admin
              </button>
              <button
                className="dev-btn"
                // onclick="devLogin('manager')"
              >
                🔧 Manager
              </button>
              <button
                className="dev-btn"
                // onclick="devLogin('member')"
              >
                👤 Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
