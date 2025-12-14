import React from "react";

const ModalFormError = ({ children }) => {
  console.log("form error", children);

  return <span class="error invalid-feedback">{children}</span>;
};

export default ModalFormError;
