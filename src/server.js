const express = require('express')
const config = require('./config/config')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const errorMiddleware = require('./middlewares/error.middleware')

// Routes
const userRoutes = require('./router/user.router')
const genreRoutes = require('./router/genre.router')

app.use(express.json())
app.use(cors({
	origin: ['http://localhost:5100', 'https://audity.dtpf.es']
}))
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: [
        "'self'",
        "https://dev-yxiaxoiu73blg7k8.us.auth0.com",
        "https://lh3.googleusercontent.com",
      ],
      objectSrc: ["'none'"],
      scriptSrc: ["'self'", "https://www.googletagmanager.com", "https: 'unsafe-inline'"],
      styleSrc: ["'self'", "https: 'unsafe-inline'"],
      connectSrc: [
				"'self'", 
				"https://dev-yxiaxoiu73blg7k8.us.auth0.com/oauth/token",
				"https://region1.google-analytics.com"
				],
      "img-src": ["'self'", "https: data:"],
      upgradeInsecureRequests: [],
    },
  },
}))
app.use((req, res, next) => {
  res.header("Cross-Origin-Embedder-Policy", "cross-origin")
  next()
})
app.use(`/api/${config.app.API_VERSION}`, userRoutes)
app.use(`/api/${config.app.API_VERSION}`, genreRoutes)
app.use(errorMiddleware)

module.exports = app;