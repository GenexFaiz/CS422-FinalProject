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
export {LOGIN, REGISTER};