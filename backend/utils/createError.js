const createError = (status, message) => {
  const err = new Error();
  err.satus = status;
  err.message = message;

  return err;
};

export default createError