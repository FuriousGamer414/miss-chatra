// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u8q9bKCZENaZVVnzSDCHcmVnqRW2rjx79q213EfZtbnNOCdA3cRrLjaALbUEhwu2Ei74QEklyvQgTVsFpgcN64S4gFzibNFUtAG3retQ4uHUEyTgj0z9WBF1CCUiJPq3Z3eDnvoDgozcRw4hkjbA362X7Yqd+SX2BKWBKwqa6cSgFatNyVTM/ADBC3yqkaMD/CkMaoBcL4G3IJSlOmVz4GQdPRI1K57NkXMAlkvknmt+HrZ9wC5rl15XVMWCcIu1BtB6nbM3l6nEg5/HvDWMPOgq4gkcL8GbxSlS60A/X/H2d+7TTkFDJqM185XwrqaYDdLaCOPO2qMYVmDevQztzbrmy7ApwelPp43qlC9mqQ1B/ZbEglGBWk57+rpbqhidLjjXcMkMeRMgu/ru3I6XIjmMp3TvbNLp3U7kgukAPwsH0A3X8Dy2+RuX3x9Q8KEhNTPg8oCDLV6pWFcy41gyWGYLHeiqiKp1w5nHGHVjsJimQoyNZxduoP5IQrj3CAI585oXZeEC1S/s7wqlZEp7khU3odgAPfgj4vE7Fkabtr/Cx+Tlpmvzazc9S/Qv+y5XxV17ymmI0IrgqVhEY5vJ6bh4XaTmblyFGqK2X+mCxnsNuDmCIqr1rIF01mAPqPMQcZFbTVQNKZ61lHKgOM3KdiAQvcySNK9BKWq9LzTGgZA6obtnetK5HOQ6NENCXmsx1BWMeABKHCESJiWVvKlmntAjrOVT6I2N5k9c9zSJtbtat4Aivfmt2UZwh3Ggb0ex0SRANoai3SkK6ic3pgI+bWNpK28NRLL6kFwq1UuVvNmXw0Imn+6ZNh/6xkYYHn9BARQ5TxWwwN+z3WiE/dLYFxE4nSQVCW1Iv+tsXd9ory12f0u2wLmL9qcOCHWvOpw7T+PGl4wX05wsqBpkOwbl8/fhO/38loitVNHb7S72NuN+EWkxgYgQrXrtZ7rvKH0Sc5al3uL9+FkM5dVaCmt1AJciMRKeEsJSMdFgJ6Jpmj3I8Qz58XJ4strkPgNbHGn00PRPELz0A9va8CG6VpPdt9mquWLnQT/DfkAkcX5+KV2FJLm8408/8PW+A4eDla88Sov9Qj+ak0m2d3r8zdODU9lskhtI993oRsUiCfVuFPSSFdClvZwvHYZc2/QpdVqeJ4CcLhQbiDq6ClbYEhkNSD7ZZghcIa1EsjkVay+56MYuGkCwrrbbcZII6ej6QdATGshIfjNLNEke7SgBmD/ri7UY9gLMybg485LPK2bSoSwmw3iMgfLLbuXV3sz9R1QlDYr/F63XGwnjgwaJA8/gfeEQsOTqfHsadMpngK7RFOVz3VpaPFOgJ/NSQFR7V2melxAXeh0Fems7CCD6u4EHzRYQFSs/SQ9XG/+MYjCG+MGU84NB9wMsFNxx/lqXHf1QialCKN2IjMW+JxsuqwxTtOjj71X0AERaZABi+98xv7zg55W9JNfvv1GQOItXcX8+ng5WX2mesOUyg6mkAw9zGyPVCN5sGGeO3gCc2eh5jGNznKla90H9IQZ4tkCEYKELrBq/U6BgMhAmydZIE7Lwq8GO6f1TsRGooo+eLaQ4hr9FM0BOA2wsppVQGG8/Ve59XZJPwz8TKmbMhHaGVV+PcS1XBhXEWulpIwKdaYKfaTPHDwhGp9AZCHAobc9evy5h82kLF0/Q7VXhB9EYjfW3rsA+FyDftFzYAFGGu1LuYZEckwIimRZWttQ=';const _IH='59b45ffe0b2395e372334f1b846596a2d2a08e397644757218206f1159f3803f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
