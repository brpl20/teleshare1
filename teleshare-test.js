// let content = document.URL;

const { MTProto } = require('@mtproto/core');

const phone = {
  num : '+',
  code: ''
}

const api = {
  layer          : 57,
  initConnection : 0x69796de9,
  api_id         : 49631
}

const server = {
  dev: true //We will connect to the test server.
}           //Any empty configurations fields can just not be specified


async function connect(){
  const { phone_code_hash } = await client('auth.sendCode', {
    phone_number  : '+',
    current_number: ,
    api_id        : ,
    api_hash      : ''
  });

}

connect()
