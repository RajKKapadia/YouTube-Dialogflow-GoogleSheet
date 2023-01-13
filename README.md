![GitHub User's stars](https://img.shields.io/github/stars/RajKKapadia?style=for-the-badge)
![GitHub followers](https://img.shields.io/github/followers/RajKKapadia?style=for-the-badge)

# Connect Google Sheet to Dialogflow
Hey everyone, if you are looking for a connection between Google Sheet and Dialogflow, then you are welcome read more. You will learn how to connect your existing Dialogflow agent to Google Sheet and generate Dialogflow agent response from Google Sheet...

So, what are you waiting for, let's get started.

## Youtube
I have recorded a quick tutorial on this topic, you can watch it [here]().

### Things you will need
* GCP account, a project, service account credentials for that project
* Enable Google Sheet API use from the GCP console, see the video for more details
* Dialogflow agent
    > some knowledge of Dialogflow agent
* NGROK for exposing our local server to internet for testing
    > get it from [here](https://ngrok.com/)
* NodeJS as a programing tool
    > install it from [here](https://nodejs.org/en/download/)

### How to use it
To replicate the work of this repository and run it locally, you need to follow these steps:
* create a `.env` file inside the root directory, create these environmental variables:
    ```
    CREDENTIALS=Service account credentials in one line, see the video as well
    RESPONSES_SHEET_ID=Your Google Sheet id, see the video how to get it...
    ```
* install all the required dependencies from the `package.json` file
    ```javascript
    npm install --save
    ```
* run the server with either of the following commands
    ```javascrip
    node index.js
    ```
* add the webhook url to Dialogflow

    > YOUR NGROK URL/dialogflow

# About me
I am `Raj Kapadia`, I am passionate about `AI/ML/DL` and their use in different domains, I also love to build `chatbots` using `Google Dialogflow ES/CX`, I have backend development experience with Python[Flask], and NodeJS[Express] For any work, you can reach out to me at...

* [LinkedIn](https://www.linkedin.com/in/rajkkapadia/)
* [Fiverr](https://www.fiverr.com/rajkkapadia​)
* [Upwork](https://www.upwork.com/freelancers/~0176aeacfcff7f1fc2)
* [Youtube](https://www.youtube.com/channel/UCOT01XvBSj12xQsANtTeAcQ)