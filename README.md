# discordjs-v12-bot (OUTDATED WILL BE UPDATED)


# Installation & Setup

1. Clone this repository
2. Run `npm i` to install all dependencies
4. Create a "slappey.json" file and add the following;
  {
  "name": "NAME_OF_YOUR_BOT",
  "language": "javascript",
  "manager": "npm",
  "token": "YOUR_BOTS_TOKEN",
  "prefix": "YOUR_PREFIX"
  }

5. Run `npm run dev`

# Project Details

This project uses discord.js & a few other packages. 

# Getting Discord Credentials

Visit https://discord.com/developers/applications and click "Create Application"

Give your application a name and head to the "Bot" tab. Then click on "Add Bot" and then on "Yes do it!" Afterwards, you will see "Token" on the page. Copy and save it to the slappey.json file in the correponding environment variable.


You will need to go to the "OAuth2" tab and then copy the client ID. Slelect "Bot" in the scopes menu and then "Administrator". Now Open the link provided to you to invite the bot.


# Npm Packages and more
This is a list of all the packages used, with their verion number
Dependencies:
  discord.js: ^v12.5.3
  node-fetch: ^3.0.0
  reconlx: ^2.0.1
  
Dev Dependencies:
  nodemon: ^2.0.12"
