import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import "../style/RegisterPage.css";

const RegisterPage = () => {
  return (
    <>
      <div>
        <div className="auth-logo">
          P<span>M</span>S
        </div>
        <div className="auth-card">
          <h2 className="mb-1">Create your account</h2>
          <p className="mb-4">Start managing projects with your team.</p>
          <RegisterForm />
          <div className="auth-footer">
            Already have an account? <Link to="/">Sign in</Link>
          </div>
          <div className="auth-caption">
            By signing up you agree to our Terms of Service.
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
