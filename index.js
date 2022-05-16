'use strict';

const { graphql, buildSchema } = require('graphql');

//Definir  el schema inicial
const schema  = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`);
//Definir los resolvers
const resolvers = {
    hello: () => {
        return 'Hola mundo'
    },
    saludo: ()  => {
        return 'hola a todos'
    }
}

//Ejecutar el query hello
graphql(schema, '{ hello, saludo }', resolvers).then((data) => {
    console.log(data)
});


