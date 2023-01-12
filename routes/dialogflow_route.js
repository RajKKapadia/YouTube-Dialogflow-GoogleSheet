const express = require('express');
const router = express.Router();

const { getSimpleResponse } = require('../helper/google_sheet_api');

router.post('/dialogflow', async (req, res) => {
    
    let intentName = req.body.queryResult.intent.displayName;

    let result = await getSimpleResponse(intentName);

    res.send(
        {
            fulfillmentText: result
        }
    );
});

module.exports = {
    router
};
