import { Configuration } from '@azure/msal-browser'

export const b2cPolicies = {
  name: { signIn: 'b2c_1_susi_reset_v2' },
  authorities: {
    signIn: {
      authority:
        'https://testb2c01domain.b2clogin.com/testb2c01domain.onmicrosoft.com/b2c_1_signin',
    },
  },
  authorityDomain: 'testb2c01domain.b2clogin.com',
}

export const msalConfig: Configuration = {
  auth: {
    clientId: '5c172f61-1dec-4743-8583-28a2b0317f1e',
    authority: b2cPolicies.authorities.signIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: '/',
    postLogoutRedirectUri: '/',
  },
  cache: {
    // NOTE: cacheLocationは'localStorage'もしくは'sessionStorage'
    cacheLocation: 'localStorage',
  },
}

// NOTE: scopesについてはREADMEに記載
export const loginRequest = {
  scopes: ['openid', 'offline_access'],
}
