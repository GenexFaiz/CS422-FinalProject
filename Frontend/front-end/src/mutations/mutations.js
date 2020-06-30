import {gql} from 'apollo-boost';

const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) 
}
`;
const REGISTER = gql`
mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password)
}
`;
const CREATE_NOVEL = gql `
mutation createNovel($title: String!, $type: String!, $author: String, $summary: String!, $thumbnail: Upload!) {
  createNovel(title: $title, type: $type, author: $author, summary: $summary, thumbnail: $thumbnail) {
    _id
    title
    summary
    author {
      name
    }
    thumbnail
  }
}
`;
const GET_RATING = gql `
mutation ratingNovel($novelID: String!, $rating: Int!) {
  ratingNovel(novelID: $novelID, rating: $rating) {
    user {
      username
    }
    score
    novel {
      _id
      title
    }
    updatedTime
  }
}
`;
export {LOGIN, REGISTER, CREATE_NOVEL, GET_RATING};