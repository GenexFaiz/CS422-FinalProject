import {gql} from 'apollo-boost';

const GET_SUMMARY = gql`
query Summary($id: ID!) {
    Summary(id: $id) {
      _id
      title
      author {
        name
        type
      }
      uploader {
        username
      }
      chapter {
        _id
        title
        number
      }
      createdTime
    }
  }
`
const GET_READ = gql`
query ReadChapter($id: ID!) {
  ReadChapter(id: $id) {
    _id
    title
    number
    content
    novel {
      title
      chapter {
        _id
      }
    }
  } 
}
`

const GET_LATEST = gql`
query Latest($limit: Int!, $page: Int!) {
  Latest(limit: $limit, page: $page) {
    _id
    title
    createdTime
    author {
      name
    }
  }
}
`

const GET_SEARCH = gql`
query SearchNovel($text: String!){
  SearchNovel(text: $text) {
    _id
    title
    author {
      name
    }
    createdTime
  }
}
`

export {GET_SUMMARY, GET_READ, GET_LATEST, GET_SEARCH};
