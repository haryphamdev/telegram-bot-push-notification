# telegram-bot-push-notification
A simple Telegram Bot, push notification to a Telegram Group chat.

This is a project for beginner to build a simple chatbot Telegram from scratch with Node.js platform. In this project, you will learn how to use the Telegram bot to send a text message and an animation message to a group chat on Telegram.

- Backend: Express Framework
- Frontend: EJS view engine, Bootstrap 4 framework.

## How to setup this project:
### 1. Clone this project. Install dependencies (using the command:  npm install )
### 2. Copy the .env.example, create a .env file in the same folder (the root folder)
### 3. Create a Telegram Bot with Bot Father, create a Group chat, then add the bot to this group
### 4. Get the group_chat_id by using the api GetUpdates. 
- If the json array result is empty ( result = [] ), remove the bot from the group chat, then add it again. 
- Try again with the GetUpdate api.
### 5. Update the .env file, then run project with the command: npm start
### 6. Enjoy!

### 7. If you encounter any errors, watch my video: https://youtu.be/qjKYNYbw0WM

## Materials/References:
- Telegram APIs:  https://core.telegram.org/api
- Introduction about Telegram bot:  https://core.telegram.org/bots
- Send message API: https://core.telegram.org/bots/api#sendmessage
- Send animation API: https://core.telegram.org/bots/api#sendanimation
- Get updates API (for getting group chat id) : https://core.telegram.org/bots/api#getupdates

- Build an awesome bot with Node.js : https://www.youtube.com/playlist?list=PLNOjHC_BXrfB8DcOCHtKPWPMl4t9PG5cI

## Concepts Covered:
- Set up a Node.js server with the Express Framework
- Create a Telegram bot with bot Father.
- Get the Telegram Group ID with the "getUpdates" API.
- Send a text message, animation message to a group chat by using the Telegram bot.

## Find Me Here:

- Facebook Fanpage: https://facebook.com/haryphamdev
- Patreon: https://www.patreon.com/haryphamdev
- Twitter: https://twitter.com/haryphamdev
- Youtube channel: https://bit.ly/subscribe-haryphamdev
