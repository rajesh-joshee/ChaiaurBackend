class ApiError extends Error {
  constructor(
    statusCode,
    message = "Some Error occured",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.meassage = message;
    this.success = false;
    this.errors = this.errors;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
