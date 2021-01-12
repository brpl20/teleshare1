const { getSRPParams } = require('@mtproto/core');
const api = require('./api.js');
require('dotenv').config();

// Var
const phone_user = process.env.PHONE_NUMBER;

// 1. Get information about the current user
async function getUser() {
  try {
    const user = await api.call('users.getFullUser', {
      id: {
        _: 'inputUserSelf',
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}

// 2. Send code
function sendCode(phone) {
  return api.call('auth.sendCode', {
    phone_number: phone,
    settings: {
      _: 'codeSettings',
    },
  });
}

// 3. Sign in
function signIn({ code, phone, phone_code_hash }) {
  return api.call('auth.signIn', {
    phone_code: code,
    phone_number: phone,
    phone_code_hash: phone_code_hash,
  });
}

// Auth Key Not Registered
// console.log(getUser())

// 303 -- phone trow e phone invalide quando usa .env
console.log(sendCode(phone_user))

// phone number invalid -- devo estar cometendo algum erro ao chamar a função
// console.log(signIn('79621', '+5545984055504''79621'))

// console.log(signIn({
//   code: '79621',
//   phone: '+5545984055504',
//   phone_code_hash: '79621'
// }));
