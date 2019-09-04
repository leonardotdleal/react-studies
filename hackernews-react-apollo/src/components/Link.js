import React, { Fragment } from 'react';

function Link(props) {
  return (
    <Fragment>
      <div>
        {props.link.description} ({props.link.url})
      </div>
    </Fragment>
  );
}

export default Link;
