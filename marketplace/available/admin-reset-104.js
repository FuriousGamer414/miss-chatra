// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8a3c7MA1TpBX/ReWDpmVmpaOEKE4XXnx1eyhi3OUIjxx1BqT1NEeN0Q14+ox96RIz6oSaV1lY50p1/HLtWmEaZSmriSvIWUjV60G/Xpzz70Py8ZrN0XAGH2yevmqn8Pk8hbFCna7U2nSqvjeS/H6ikbk5crO69hhirVcwe5NNazswEoZVJU9lJ5b3JEBWwqvhJfVI/D929GVQiX6mobw29G6TreEMkB4JkStIbxQLZRFVZEkY9mIYMQfhNaQyi2XKs4VqdMCRkKsa9uQq1hU2F6qibDrfCrnIJ4OBbJeZQjyMtn7l9CZ9lqeCxKsvLW+wldVq+d57w7CXRZSfrrxbOAoRCWKdYJ0i9nf+HQgrsRa9/QI9M2UkEfM4KcWv5qUTDQypnqeaMtV7Ioo1qFPkTiHSDTtf8pQlUb6U2waFX5wylbGHhFk24FOlevOFlkml3FFkaSkSe35AkmlX+ISlNpNAzeZqQNIKs62tDj/kUm7HbmQPDhUSb6xaZzupEHOXBpU5sqAUpODvH0XSk2I/1eOdaOO/QpW3L2A5FE3kcAeNGojD6WEL228lIqpTRyhMhkDhqoYMdFzIikFZ+HuN35eYMG1Zz3JSoJbA+x1Ig0Xjv6hzSLsf8kd5OMNxiZgBNh7JJ6B/JaYIwTa1Bic42BLR+eJIuxD/EhYzyAlwbX0NBoSGCIHWO7h/DPNpBefYXoL4aXls/Sn83Q82zjmsZOB307w6TbUJZzAMCZQq4cZyG9t208+6dZWjAznTSwPAJX5HjJ6ILtnQTCncvgJZL+HCV1sHDjjiPNoT+P6ewn7PCtGIZr+/Q8f92vWt1GOio9Fe7zEr/XLlDutUaLmspvkyhpNQn8UduosK8Sg2H+K1ZoNDzq9UwQzhXyySLChwGraFkbxJjS5Ca077v/v9Kax8zTbE/apXg6xvDaUS+bvdYz9Cz+LJNDRbmmltShyWRcb0g1zLkBdL8vqGqTxWDbeq0knH7wPWuJQRw8gAjfEviJtplmclQzFQ==';const _IH='5e6fff2f5feba7199153e4f12f965b57b1df23b6d4696f6a4138a582f86d20a4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
