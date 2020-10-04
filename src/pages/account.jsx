import React from 'react';
import { Router } from '@reach/router';
import { login, isAuthenticated, getProfile } from '../services/auth';
// import PropTypes from 'prop-types';
import { Layout, Container } from '../layouts';
import { Header, TagsBlock } from '../components';

// const Tags = ({ pageContext }) => {
const Account = ({ pageContext }) => {
  const { account } = pageContext;

  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>;
  }

  const user = getProfile();

  return (
    <Layout>
      <Header title="My Account">Edit Your Account</Header>
    </Layout>
  );
};

export default Account;

// Account.propTypes = {
//   pageContext: PropTypes.shape({
//     // tags: PropTypes.array,
//   }),
// };
