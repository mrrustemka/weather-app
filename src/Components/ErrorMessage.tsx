import React from "react";

function ErrorMessage({ message }: any) {
  return <p className="error">{message.message}</p>;
}

export default ErrorMessage;
