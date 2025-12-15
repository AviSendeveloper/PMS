import React from "react";
import modelStyle from "./Modal.module.css";
import classNames from "classnames";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ModalFormError from "./ModalFormError";

const ModalForm = ({
  modalState,
  handleModalCLose,
  initialFieldValues,
  handleSubmit,
  operationType,
}) => {
  const initialValues = {
    name: initialFieldValues?.name ?? "",
    email: initialFieldValues?.email ?? "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name required"),
    email: Yup.string().email().required("Email required"),
    password: Yup.string().min(6).required(),
  });

  return (
    <div
      className={classNames("modal fade show", {
        [modelStyle.showModal]: modalState,
      })}
      id="modal-xl"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          {/* modal header */}
          <div className="modal-header">
            <h4 className="modal-title">Extra Large Modal</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => handleModalCLose(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          {/* modal body */}
          <div className="modal-body">
            <div className="col-md-12">
              <div className="card card-primary">
                <Formik
                  enableReinitialize
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log("submiteed value", values);
                    values.opretationType = operationType
                    handleSubmit(values);
                  }}
                >
                  {({ touched, errors }) => {
                    return (
                      <Form>
                        <div className="card-body">
                          <div className="form-group">
                            <label htmlFor="exampleInputName1">Name</label>
                            <Field
                              type="input"
                              className={classNames("form-control", {
                                "is-invalid": touched.name && errors.name,
                              })}
                              id="exampleInputName1"
                              name="name"
                              placeholder="Enter name"
                            />
                            <ErrorMessage
                              name="name"
                              component={ModalFormError}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <Field
                              type="email"
                              className={classNames("form-control", {
                                "is-invalid": touched.email && errors.email,
                              })}
                              id="exampleInputEmail1"
                              name="email"
                              placeholder="Enter email"
                            />
                            <ErrorMessage
                              name="email"
                              component={ModalFormError}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">
                              Password
                            </label>
                            <Field
                              type="password"
                              className={classNames("form-control", {
                                "is-invalid":
                                  touched.password && errors.password,
                              })}
                              id="exampleInputPassword1"
                              name="password"
                              placeholder="Password"
                            />
                            <ErrorMessage
                              name="password"
                              component={ModalFormError}
                            />
                          </div>
                          {/* <div className="form-check">
                          <Field
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                          </label>
                        </div> */}
                        </div>

                        <div className="card-footer">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>

          {/* modal footer */}
          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={() => handleModalCLose(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
