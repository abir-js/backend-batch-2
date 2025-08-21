## Types of Authentication

1. Stateful Authentication
2. Stateless Authentication

### 1. Stateful Authentication

- Session-based authentication (Session & Cookies)
  - Server stores session info in memory / DB
    - User logs in
    - Server creates session id
    - Server sends session id to client
    - Session id is saved in cookies
    - Client sends session id to server o each request

### 2. Stateless Authentication

- JWT (JSON Web Tokens)
  - No session stored on server
  - all info  encoded inside token
    - USER logs in
    - server generateds token
    - client saves it in cookies
    - on each req, clicent sends the token and server verifies it
  - Easy to scale
  - Stateless APIs
  - token revocation is tricky
- OAuth

### Oauth

- user logs in via 3rd party service like Google, GitHub, Facebook
- Oauth 2.0 is an authorization framework that allows app o get limites accress to a user's account on another service without sharing passwords.
- Instead of creating username and pass

**Working**
- user goes with login with google
- redirected to google login page
- google sends login and concent 
- google sends some code
- Server excanges code for token
- Google sends access token 
- User logs in with that token
