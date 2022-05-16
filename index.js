'use strict'

const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs');
const { join } = require('path');
const resolvers =  require('./lib/resolvers')

const app = express()
const port = process.env.port || 4000

// Definir  el schema inicial
const typeDefs =  readFileSync
(join(__dirname, 'lib', 'schema.graphql'),
'utf-8'
)
const schema = makeExecutableSchema({ typeDefs, resolvers})

// Definir el middleware
app.use('/api', graphqlHTTP({ //  '/api' Define  la  ruta
  schema,
  rootValue: resolvers,
  graphiql: true // entorno de desarrollo  graphql
}))

app.listen(port, () => {
  console.log(`Server  is listening at http://localhost:${port}/api`)
})
