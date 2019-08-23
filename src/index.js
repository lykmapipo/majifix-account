/**
 * @name majifix-account
 * @description A representation of an entity
 * (i.e organization, individual, customer, or client) which
 * receiving service(s) from a particular jurisdiction.
 *
 * @author lally elias <lallyelias87@gmail.com>
 * @since  0.1.0
 * @version 0.1.0
 * @example
 *
 * const { app } = require('@codetanzania/majifix-account');
 *
 * ...
 *
 * app.start();
 *
 */

/* dependencies */
import { pkg } from '@lykmapipo/common';
import _ from 'lodash';
import { apiVersion as httpApiVersion } from '@lykmapipo/env';
import Account from './account.model';
import accountRouter from './account.http.router';

/* declarations */
const info = pkg(
  '../package.json',
  'name',
  'description',
  'version',
  'license',
  'homepage',
  'repository',
  'bugs',
  'sandbox',
  'contributors'
);

/* export function */
const account = integration => {
  // ensure integration integration

  if (integration) {
    const { fetchAccount } = integration;
    if (_.isFunction(fetchAccount)) {
      Account.fetchAccount = fetchAccount;
    }
  }

  return account;
};

// export info
account.info = info;

// export apiVersion
account.apiVersion = httpApiVersion();

// export router
account.accountRouter = accountRouter;

// export Account
account.Account = Account;

export default account;