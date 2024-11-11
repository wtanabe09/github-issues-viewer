import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

export const GET_MY_REPOSITORIES = gql`
  {
    viewer {
      name
      repositories(last: 10) {
        nodes {
          name
          url
        }
      }
    }
  }
`;

export const GET_PUBLIC_REPOSITORIES = gql`
  query GetPublicRepositories($searchWord: String!, $prevCursor: String) {
    search(query: $searchWord, type: REPOSITORY, first: 10, after: $prevCursor) {
      pageInfo {
        endCursor
      }
      nodes {
        ... on Repository {
          nameWithOwner
        }
      }
    }
  }
`;

export const GET_REPOSITORS_ISSUES = gql`
  query GetRepositoryIssues($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      issues(last:10) {
        nodes {
          title
          url
        }
      }
    }
  }
`;