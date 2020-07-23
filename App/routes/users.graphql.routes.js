const express = require('express');
const router = express.Router();
const db = require('../models')
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`

    type User {
        id: Int
        userName: String
        email: String
    }
    type Query {
        getAllUsers: [User]
    }
    type Mutation {
        addUser(userName: String!, email: String!): User
        updateUser(id: Int!, userName: String!, email: String!): User
    }
`)

const rootValue = {
    getAllUsers: async () => await db.User.findAll(),
    addUser: async ({userName, email}) => {
        const userExists = await db.User.findOne({ where: { userName, email }})

        if (userExists) {
            throw new Error(`los datos del usuario ya existen en otro registro (id ${userExists.id})`)
        } else {
            return await db.User.create({ userName, email})
        }
    },
    updateUser: async ({id, userName, email}) => {
        const user = await db.User.findOne({ where: { id } });
        const userExists = await db.User.findOne({ where: { userName, email }})

        if (userExists) {
            throw new Error(`los datos del usuario ya existen en otro registro (id ${userExists.id})`)
        } else {
            await user.update({ userName, email})
        }
        return user
    },
}

module.exports = graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
})

