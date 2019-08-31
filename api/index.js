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

// REGISTER NEW USER
api.post( '/signup', ( request, response ) => {
  const user = {
    id:       users.length + 1,
    name:     request.body.name,
    password: request.body.password
  }
  users.push( user )
  console.log( users )
  let token = jwt.sign( user.id, 'secret' )
  response.json( token )
})

// LOGIN USER
api.post( '/login', ( request, response ) => {
  const userName = request.body.name
  const userId   = users.findIndex( user => user.name == userName )

  if( userId == -1 )
    return response.json( 'authentication_error' )

  if( users[ userId ].password != request.body.password )
    return response.json( 'authentication_error' )
  
  let token = jwt.sign( userId, 'secret' )
  response.json( token )
})

// SERVER
api.listen( port, () => console.log( `Server listening at http://localhost:${ port }` ) )
