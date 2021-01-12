// let content = document.URL;

const { MTProto } = require('@mtproto/core');

const phone = {
  num : '+5545984055504',
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
    phone_number  : '+5545984055504',
    current_number: false,
    api_id        : 2860757,
    api_hash      : '85cdd6933cead8841ab4da6a3d66da43'
  });

}

connect()
