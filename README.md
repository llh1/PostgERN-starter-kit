# Get started

## After Cloning

Your team will want their own DB name, tables and data. So one team member needs to:
- open `server/db/setup-local-db.sql` and replace `cyf_test` with your own DB name
- open `server/config.js` and replace `cyf_test` with your own DB name
- open `recreate-schema.sql` and add your own DB schema
- open `populate-db.sql` and give your DB some test data
- commit and push above changes

Once the other team members do the above you'll need to:
- `cd` into `server` and `npm run recreate-db:local` (this will create and populate your new team's DB with the data your colleague added)

## Development workflow:

Anytime you're ready to work again on the project just do:
- `npm run dev` in `server` (changes you make should be picked up automatically)
- open another terminal window --> `npm run dev` in `client`

If you want to work a new ticket/feature:
- `git checkout master`
- `git pull upstream`
- `git checkout -b my-new-feature`
- `npm run recreate-db:local` in server
- `npm run dev` in server then in client

## Authentication and Authorisation

The project has routes and services to implement an authentication / authorisation solution. It depends on [passportjs](http://www.passportjs.org/) library, and implements an authentication strategy called JWT. To understand more authentication, you can read [this article](https://medium.com/front-end-weekly/learn-using-jwt-with-passport-authentication-9761539c4314).

To test authentication:

- In Postman, do a *GET* on `http://localhost:4000/api/protected-status`. You should receive a `403` (Forbidden) as a response.

- Register a user by doing a *POST* to `http://localhost:4000/auth/register` with the body looking like: 

```json
{
    "email": "myemail@gmail.com",
    "password": "mypassword"
}
```

Don't forget to set the `content-type` to `raw` and `application/json`

- Now you can login by doing a *POST* to `http://localhost:4000/auth/login` with a body similar to:

```json
{
    "email": "myemail@gmail.com",
    "password": "mypassword"
}
```

This will bring you back a `token`. Copy the token you get in the response.

- Now, we can use this token for the `protected-status` route. Do a *GET* request to `http://localhost:4000/api/protected-status` and add a `header` with the name `Authorization` and the value: `Bearer the_token_from_previous step`, i.e. `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTU2NTkwOTU4OX0.qidn4r7nrolFByyfd956Kh8BkOhwcaUSzyUK0V7su1c`