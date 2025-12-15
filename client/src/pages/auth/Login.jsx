import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import ValidationError from "./ValidationError";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name required"),
    email: Yup.string().email().required("Email required"),
    password: Yup.string().min(6).required(),
  });

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="" className="h1">
              <b>Admin</b>LTE
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("submiteed value", values);
              }}
            >
              <Form>
                <div className="input-group mb-3">
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                  <ErrorMessage name="email" component={ValidationError} />
                </div>
                <div className="input-group mb-3">
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                  <ErrorMessage name="password" component={ValidationError} />
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <Field type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </Form>
            </Formik>

            <div className="social-auth-links text-center mt-2 mb-3">
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using
                Google+
              </a>
            </div>
            {/* /.social-auth-links */}

            <p className="mb-1">
              <a href="">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="" className="text-center">
                Register a new membership
              </a>
            </p>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};

export default Login;
