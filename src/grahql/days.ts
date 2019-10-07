import gql from 'graphql-tag';

export default gql`
  query AllDays {
    days {
        name
        lessons {
        name
        teacher
        type
        classRoom
        index
        }
     }
  }
`;