import "../style/AcceptInvitePage.css";
import { Link } from "react-router-dom";

const AcceptInvitePage = () => {
  const isExpired = false;

  const MOCK_INVITE = {
    workspace: "Acme Corp",
    role: "Manager",
    invitedBy: "Sarah Chen",
    invitedByEmail: "sarah@acme.com",
    isNewUser: true,
  };

  return (
    <>
      <div className="auth-logo">
        P<span>M</span>S
      </div>
      <div className="auth-card" id="mainCard">
        {isExpired ? (
          <ExpireWarning />
        ) : (
          <div>
            <div className="invite-banner">
              <div>
                You've been invited to join{" "}
                <strong>{MOCK_INVITE.workspace}</strong> as a{" "}
                <span className="role-badge">{MOCK_INVITE.role}</span>
              </div>
              <small>
                Invited by {MOCK_INVITE.invitedBy} ({MOCK_INVITE.invitedByEmail}
                )
              </small>
            </div>
            <h2 className="mb-1">
              {MOCK_INVITE.isNewUser
                ? "Create your account"
                : "Accept Invitation"}
            </h2>
            <p className="mb-4">
              {MOCK_INVITE.isNewUser
                ? "Set up your account to join the workspace."
                : "Click below to accept and join the workspace."}
            </p>
            {MOCK_INVITE.isNewUser ? (
              <AcceptInvitatioNewUser />
            ) : (
              <button
                className="btn-p"
                id="acceptBtn"
                // onclick="accept()"
              >
                Accept Invitation
              </button>
            )}
            <a
              className="decline-link"
              // onclick="if(confirm('Decline invitation?'))window.location.href='auth-login.html'"
            >
              Decline this invitation
            </a>
          </div>
        )}
      </div>
    </>
  );
};

const AcceptInvitatioNewUser = () => {
  return (
    <div>
      <div className="fg">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          className="fcc"
          placeholder="Jane Smith"
        />
      </div>
      <div className="fg">
        <label htmlFor="pw">Password</label>
        <div className="iw">
          <input
            type="password"
            id="pw"
            className="fcc"
            placeholder="Min. 8 characters"
            style={{ paddingRight: 36 }}
          />
          <button
            type="button"
            className="tpw"
            // onclick="this.previousElementSibling.type=this.previousElementSibling.type==='password'?'text':'password'"
            tabIndex={-1}
          >
            <i className="bi bi-eye-slash" />
          </button>
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
          <button
            type="button"
            className="tpw"
            // onclick="this.previousElementSibling.type=this.previousElementSibling.type==='password'?'text':'password'"
            tabIndex={-1}
          >
            <i className="bi bi-eye-slash" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ExpireWarning = () => {
  return (
    <div className="error-card">
      <i
        className="bi bi-clock-history"
        style={{ fontSize: 36, color: "var(--danger)" }}
      />
      <h2 className="mt-3">Invitation Expired</h2>
      <p>This invitation has expired (48h limit).</p>
      <p>Contact your Admin to request a new invitation.</p>
      <Link
        to="/"
        className="btn-p"
        style={{
          display: "inline-block",
          width: "auto",
          marginTop: 8,
          textDecoration: "none",
        }}
      >
        Back to Login
      </Link>
    </div>
  );
};

export default AcceptInvitePage;
