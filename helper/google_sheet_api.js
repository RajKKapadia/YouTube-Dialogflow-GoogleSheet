const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

const { RESPONSES_SHEET_ID } = process.env;
const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

const getSimpleResponse = async (intentName) => {

    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    let sheet = doc.sheetsByIndex[0];

    let rows = await sheet.getRows();

    let response = '';

    for (let index = 0; index < rows.length; index++) {
        let row = rows[index];
        if (row.intent_name == intentName) {
            response += row.response;
            break;
        }
    };

    if (response === '') {
        response += 'We are unavailable at this time. Try after sometimes.';
    }

    return response;
};

module.exports = {
    getSimpleResponse
};