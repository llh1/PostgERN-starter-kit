# Skeleton

## Get started

After Cloning

Your team will want their own DB name, tables and data. So one team member needs to:
- open `server/__db/initial-setup.sql` and replace `cyf_test` with your own DB name
- open `server/__db/db-config.js` and replace `cyf_test` with your own DB name
- open `recreate-db.sql` and add your own DB schema and give it some test data
- commit and push above changes

Once the other team members go the above you'll need to:
- `cd` into `server` and `npm run initial-db-setup` (this will create and populate your new team's DB with the data your colleague added)

Development workflow:

Anytime you're ready to work again on the project just do:
- `npm run dev` in `server` (changes you make should be picked up automatically)
- open another terminal window --> `npm run dev` in `client`

If you want to work a new ticket/feature:
- `git checkout master`
- `git pull upstream`
- `git checkout -b my-new-feature`
- `npm run recreate-db`
- `npm run dev`



