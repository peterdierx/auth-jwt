// MODULES
const cors    = require( 'cors' )
const express = require( 'express' )

// PORT
const port = 4567

// API
const api = express()

// BODY PARSER
api.use( express.json() )

// CORS
api.use( cors() )

// GET
api.get( '/', ( request, response ) => {
  response.send( 'Authentication API - Peter Dierx 2019' )
})

// SERVER
api.listen( port, () => console.log( `Server listening at http://localhost:${ port }` ) )
