import { NodeEnvironment } from 'constants/node';

export default {
  apiBaseUrl: process.env.REACT_APP_API,
  isDevEnvironment: process.env.NODE_ENV !== NodeEnvironment.PRODUCTION,
};
