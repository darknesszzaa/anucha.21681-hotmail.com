const { parsed: localEnv } = require('dotenv').config()

module.exports = {
  env: {
    BASE_API_URL: 'https://authen-server.herokuapp.com/'
  }
}
