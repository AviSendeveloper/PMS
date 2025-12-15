import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import ValidationError from "./ValidationError";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name required"),
    email: Yup.string().email().required("Email required"),
    password: Yup.string().min(6).required(),
    confirmPassword: Yup.string().required().oneOf([Yup.ref["password"]]),
  });

  return (
    <div className="hold-transition register-page">
      <div className="register-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="" className="h1">
              <b>Admin</b>LTE
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Register a new membership</p>

            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("submiteed value", values);
              }}
            >
              <Form action="" method="post">
                <div className="input-group mb-3">
                  <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full name"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                  <ErrorMessage name="name" component={ValidationError} />
                </div>
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
                    name="pasword"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                  <ErrorMessage name="pasword" component={ValidationError} />
                </div>
                <div className="input-group mb-3">
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Retype password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                  <ErrorMessage name="confirmPassword" component={ValidationError} />
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <Field
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        value="agree"
                      />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                  {/* /.col */}
                </div>
              </Form>
            </Formik>

            <div className="social-auth-links text-center">
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i>
                Sign up using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i>
                Sign up using Google+
              </a>
            </div>

            <a href="" className="text-center">
              I already have a membership
            </a>
          </div>
          {/* /.form-box */}
        </div>
        {/* /.card */}
      </div>
      {/* /.register-box */}
    </div>
  );
};

export default Register;
