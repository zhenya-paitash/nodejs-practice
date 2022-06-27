module.exports = class ApiError extends Error {
  status
  errors

  constructor(status, message, errors = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  // @desc      нет необходимых данных в запросе || некорректные данные
  // @status    400
  static BadRequest(message, errors) {
    return new ApiError(400, message, errors)
  }

  // @desc      неправильные учетные данные
  // @status    401
  static Unauthorized() {
    return new ApiError(401, '⛔ User not authorized')
  }

  // @desc      доступ к конечной точке не разрешен
  // @status    403
  static Forbidden() {
    return new ApiError(403, '🛡️ No access')
  }

  // @desc      конечную точку невозможно обнаружить
  // @status    404
  static NotFound() {
    return new ApiError(404, '❓ Not found')
  }

  // @desc      возникла непредвиденная серверная ошибка
  // @status    500
  static InternalServerError() {
    return new ApiError(500, '❌ Server error')
  }
}
