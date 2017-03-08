/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Sequelize from 'sequelize';
import { databaseUrl, databaseName, databasePass, databasePort, databaseUser } from '../config';

const sequelize = new Sequelize(databaseName, databaseUser, databasePass, {
  host: databaseUrl,
  port: databasePort,
  dialect: 'mysql',
  pool:{
    max: 20,
    min: 0,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
  },
});


export default sequelize;
