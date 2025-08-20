/********************************************************************
 *  Copyright 2025 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  Adobe permits you to use, modify, and distribute this 
 * file in accordance with the terms of the Adobe license agreement 
 * accompanying it. 
 *******************************************************************/

module.exports = {
  name: 'emailConsent',
  api: {
    root: './src/api',
    importAliasRoot: '@/emailconsent/api',
  },
  components: [
    {
      id: 'Components',
      root: './src/components',
      importAliasRoot: '@/emailconsent/components',
      cssPrefix: 'emailconsent',
      default: true,
    },
  ],
  containers: {
    root: './src/containers',
    importAliasRoot: '@/emailconsent/containers',
  },
  schema: {
    endpoint: process.env.ENDPOINT,
    headers: {}
  }
};
