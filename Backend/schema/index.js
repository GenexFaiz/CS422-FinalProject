const { gql } = require('apollo-server');

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Novel {
    _id: ID!
    title: String
    author: Author
    uploader: Account!
    summary: String
    chapter: [Chapter!]
    view: Int!
    rating: [Rating]
    avgScore: Float!
    createdTime: DateTime!
    updatedTime: DateTime!
  }

  type Rating {
    user: Account!
    score: Int!
    novel: Novel!
    updatedTime: DateTime!
  }

  type Author {
    name: String
    type: String!
    account: Account
  }

  type Chapter {
    _id: ID!
    novel: Novel!
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
    createNovel(title: String!, type: String!, author: String, summary: String!): Novel
    createChapter(novelID: String!, content: String!, number: Int!, title: String!): Chapter
    ratingNovel(novelID: String!, score: Int!):Rating
  }

  type Query {
    SearchNovel(text: String!): [Novel]
    Summary(id: ID!): Novel
    ReadChapter(id: ID!): Chapter
    Latest(limit: Int!, page: Int!): [Novel]
    MostViewed(limit: Int!, page: Int!): [Novel]
    Recommend(limit: Int!, page: Int!): [Novel]
    NovelByCurrentUser(limit: Int!, page: Int!): [Novel]
    RatingByCurrentUser(limit: Int!, page: Int!): [Rating]
    UserInfo: Account
  }

`;

module.exports = typeDefs