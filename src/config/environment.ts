const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY
const NASA_URL = process.env.REACT_APP_NASA_URL

const ENV: 'production' | 'development' = process.env.REACT_APP_ENV === 'production' ? 'production' : 'development'

export {ENV, NASA_API_KEY, NASA_URL}