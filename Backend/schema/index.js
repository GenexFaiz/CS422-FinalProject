const { gql } = require('apollo-server');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Novel {
    _id: ID!
    title: String
    author: Author
    uploader: Account!
  }

  type Author {
    name: String
    type: String!
    account: String
  }

  type Chapter {
    title: String!
    number: Int!
    content: String
    uploadTime: DateTime!
  }

  type Account {
    type: String!
    _id: ID!
    email: EmailAddress!
    username: String!
    createdTime: DateTime!
  }

  scalar DateTime

  scalar EmailAddress

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Mutation {
    login(email: String!, password: String!): String
    signup(email: String!, password: String!): String
  }

  type Query {
    SearchNovel(text: String!): [Novel]
    Summary(id: ID!): Novel
    ReadChapter(id: ID!): Chapter
  }

`;

module.exports = typeDefs