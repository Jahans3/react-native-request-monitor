const { getBody, getHeaders } = require('./helpers')

function monitorFetch () {
  const isFirstArgOptions = typeof arguments[0] === 'object'
  const url = isFirstArgOptions ? arguments[0].url : arguments[0]
  const options = isFirstArgOptions ? arguments[0] : arguments[1]
  const { method } = options
  const { rawBody = null } = options
  const body = getBody(rawBody)
  const headersMap = options.headers.map || options.headers
  const headers = getHeaders(headersMap)

  console.log('--------------')
  console.log({ url, headers, method, body, options })
  console.log('--------------')
}

module.exports = monitorFetch
