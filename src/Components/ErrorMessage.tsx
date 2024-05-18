function ErrorMessage(error: { error: string }) {
  return <p className="error">{error.error}</p>;
}

export default ErrorMessage;
