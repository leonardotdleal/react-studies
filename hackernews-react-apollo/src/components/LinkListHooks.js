import React, { Fragment } from 'react';
import Link from './Link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;

function LinkListHooks() {
  const { loading, error, data } = useQuery(FEED_QUERY);

  if (loading) return <div>Fetching</div>;
  if (error) return <div>Error</div>;

  return (
    <Fragment>
      <h2>Link list hooks</h2>
      <div>
        {data.feed.links.map(link => (
          <Link key={link.id} link={link} />
        ))}
      </div>
    </Fragment>
  );
}

export default LinkListHooks;
