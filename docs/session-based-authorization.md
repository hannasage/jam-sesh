# Anonymous Session Authorization

Because the app doesn't want to store any user information in its database, sessions will not be linked to any user account or set of claims. Rather, the session will be stored as a cookie, and authorization will expire when the cookie expires.

> **Note**: Because session authorization information is stored in-browser, if in-browser data is cleared, you will lose access to your session authorization.

## What's in the cookie?

There's two values necessary to authorize an anonymous user: a `sessionToken` and `sessionId`. The cookie will look like this:

```typescript jsx
document.cookie="sessionId=<ID>; sessionToken=<TOKEN>";
```

## When is the cookie created?

As you navigate to the pin entry page for a Jam Session, and successfully authenticate with the right pin, the following data will be returned from the authentication endpoint:

```json
{
  "sessionToken": "123abc789xyz",
  "sessionId": "123abc"
}
```

This is taken and put into `localStorage` before navigating you to the Jam Session main page.

## When is it read?

When attempting to create and update your Jam Session contributions, your `sessionToken` will be passed via the `Authorization` header as a bearer token. Every contribution is authorized against claims available through the token.
