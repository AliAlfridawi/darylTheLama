const env = require('dotenv').config();
require('@alpacahq/alpaca-trade-api');
const LongShort = require('./LongShort');
const ls = require('./LongShort');   

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;
const PAPER = true;

var lsi = new LongShort(apiKey,apiSecret,PAPER);
console.log(lsi);
