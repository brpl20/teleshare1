const { getSRPParams } = require('@mtproto/core');
const api = require('./api.js');
require('dotenv').config();

function getPage() {
  return window.location.href
};

function messages(peer, message){
  sendMessage({
  peer: 'pellizzeti_adv',
  message: getPage
  })};
