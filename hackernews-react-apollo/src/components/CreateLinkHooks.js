import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

function CreateLinkHooks() {
  const [description, setDescription] = useState();
  const [url, setUrl] = useState();
  const [setLink] = useMutation(POST_MUTATION);

  const submitMutation = () => {
    if (description.value && url.value) {
      const variables = { description: description.value, url: url.value };
      setLink({ variables });

      this.props.history.push('/');
    }
  };

  return (
    <div>
      <h2>Create link hooks</h2>
      <div className='flex flex-column mt3'>
        <input
          className='mb2'
          onChange={e => setDescription(e.target.value)}
          type='text'
          placeholder='A description for the link'
        />
        <input
          className='mb2'
          onChange={e => setUrl(e.target.value)}
          type='text'
          placeholder='The URL for the link'
        />
      </div>

      <button onClick={submitMutation}>Submit</button>
    </div>
  );
}

export default CreateLinkHooks;
