const getBody = body => {
  if (!body) {
    return null
  }

  try {
    return JSON.parse(body)
  } catch (err) {
    console.log('%cError parsing body', 'color: red; font-style: bold')
    return null
  }
}

const getHeaders = headers => {
  return Object.keys(headers).map(header => {
    return { [header]: headers[header][0] }
  })
}

module.exports = {
  getBody,
  getHeaders
}
