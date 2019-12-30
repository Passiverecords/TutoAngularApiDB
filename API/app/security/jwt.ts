var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

export var jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev--36fn6vi.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:3000/listeHeros',
    issuer: 'https://dev--36fn6vi.eu.auth0.com/',
    algorithms: ['RS256']
});
