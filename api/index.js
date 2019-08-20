// MODULES
const jwt     = require( 'jsonwebtoken' )
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

// USERS
const users = []

// GET
api.get( '/', ( request, response ) => {
  response.send( 'Authentication API - Peter Dierx 2019' )
})

// NEW USER
api.post( '/users', ( request, response ) => {
  const user = {
    id:       users.length + 1,
    name:     request.body.name,
    password: request.body.password
  }
  users.push( user )
  let token = jwt.sign( user.id, 'secret' )
  response.json( token )
})

// SERVER
api.listen( port, () => console.log( `Server listening at http://localhost:${ port }` ) )
