import React, { Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';

import CreateLink from './CreateLink';
import CreateLinkHooks from './CreateLinkHooks';
import LinkList from './LinkList';
import LinkListHooks from './LinkListHooks';
import Header from './Header';

function App() {
  return (
    <div className='center w85'>
      <Header />
      <div className='ph3 pv1 background-gray'>
        <Switch>
          <Route exact path='/' component={LinkList} />
          <Route exact path='/create' component={CreateLink} />
        </Switch>
      </div>
    </div>

    // <Fragment>
    //   <LinkList />
    //   <LinkListHooks />

    //   <CreateLink />
    //   <CreateLinkHooks />
    // </Fragment>
  );
}

export default App;
