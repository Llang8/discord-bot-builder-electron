
<h1 align="center">
  <br>
  <img width="100px" height="100px" src="src/renderer/assets/icons/png/logo-small.png">
  <br>
  DiscordBotBuilder
  <br>
</h1>

<h4 align="center">Build and manage Discord bots without touching any code.</h4>

> Discord Bot Builder is a tool for easily creating and managing discord bots without needing to touch any code. This project is for people who want a discord bot on their server but do not want to learn how to build one through programming.

<p align="center"><img src="https://media.giphy.com/media/1BcB9KCN9hgtCITLrS/giphy.gif"></p>


## How to Run

#### Build Setup

``` bash
# Clone this repository
$ git clone https://github.com/Llang8/discord-bot-builder

# Install the dependencies
$  npm install --runtime=electron --target=2.0.4

# Create a config.json file in the main directory and paste in this:
{
    "firebase": {
        "apiKey": "YOUR_API_KEY",
        "authDomain": "YOUR_AUTH_DOMAIN.firebaseapp.com",
        "databaseURL": "https://YOUR_AUTH_DOMAIN.firebaseio.com",
        "projectId": "YOUR_PROJECT_ID",
        "storageBucket": "YOUR_STORAGE_BUCKET_LINK",
        "messagingSenderId": "YOUR_MESSAGING_SENDER_ID"
    },
    "backendUrl": "BACKEND_HOST"
}

# Run the app
$ npm run dev

# For full functionality run backend at https://github.com/Llang8/dbb-backend
```
### Technologies Used

<b>Built with</b>
- [Electron](https://electron.atom.io)
- [VueJS](https://vuejs.org/)
- [Firebase](https://firebase.google.com/)
- [Discord.js](https://discord.js.org/#/)

### TODO

- [ ] Fix issue when logging in where the first attempt ALWAYS throws an error
- [ ] Setup popup modal for necessary user permissions
- [ ] Fix image uploading and sending
- [ ] Fix issue where bots that are running on hosted server cannot be stopped
- [ ] Confirm functionality of sign up feature
- [ ] Fix issue where the local store file structure is being ignored by Github (Github should still ignore any bot configs stored locally)
- [ ] Merge backend code to main repo
- [ ] Provide instructions for running backend with frontend
- [ ] Host backend
- [ ] Fix CSS for navigation on the bot builder page
- [ ] Add functionality to "Command Restrictions" and "Necessary Permission" input fields.
- [ ] Improve User Profile page
- [ ] Add indepth instructions on actually using the bot builder (Either on home page or link to it on home page)

---
