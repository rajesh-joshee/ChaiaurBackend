
const asyncHandler = (requestHandler) => {
  (re, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
    .catch((err) => next(err) )
  }
}

export default asyncHandler

// Higher order function, function passed as parameter to next function
// const asyncHandler = () => {}
// const asyncHandler = (func) => {}
// const asyncHandler = () => async () => {}

// Higher order function, function passed as parameter to next function
// const asyncHandler = (fn) => async (res, req, next) => {
//   try {
//     await (res, req, next)
//   } catch (error) {
//     res.status(err.code || 500)
//     .json({
//         success: false,
//         message: err.message
//     })
//   }
// }