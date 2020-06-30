import {gql} from 'apollo-boost';

const GET_SUMMARY = gql`
query Summary($id: ID!) {
    Summary(id: $id) {
      _id
      title
      author {
        name
        type
        account {
          username
        }
      }
      uploader {
        username
      }
      chapter {
        _id
        title
        number
      }
      summary
      thumbnail
      view
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
      view
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
      type
      account {
        username
      }
    }
    view
    thumbnail
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
      type
      account {
        username
      }
    }
    thumbnail
    view
    createdTime
  }
}
`

const GET_TOP = gql `
query MostViewed($limit: Int!, $page: Int!) {
  MostViewed(limit: $limit, page: $page) {
    _id
    title
    thumbnail
  }
}
`;

const GET_RECOMMEND = gql `
query Recommend($limit: Int!, $page: Int!) {
  Recommend(limit: $limit, page: $page) {
    _id
    title
    thumbnail
  }
}
`;

const GET_USER = gql`
query UserInfo {
  UserInfo {
    _id
    type
    email
    username
    avatar
    createdTime
  }
}
`;

const GET_NOVEL_USER = gql `
query NovelByCurrentUser($limit: Int!, $page: Int!) {
  NovelByCurrentUser(limit: $limit, page: $page) {
    _id
    title
  }
}
`;

export {GET_SUMMARY, GET_READ, GET_LATEST, GET_SEARCH, GET_TOP, GET_RECOMMEND, GET_USER, GET_NOVEL_USER};
