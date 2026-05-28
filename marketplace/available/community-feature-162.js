// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ41piYr5SOF/QZiyRazDTaCv8t4eWMbdBh3gFPAQMgiLYietG5NYRJN1wYhAvTb+B51kWNLvSSQzBIM7lNCmRe3cHtk7icd/U6t1Pv7wjhetz6xK2uklfVefij+49T+TAENEhPWOIjvl9ZSGnsXH6KCvWqt8lH0p8zSMpNqjCDaJoyxXJ0HURqkTeDJf7c9RlTi8ITnlSPBaz8SLi3a3ouZLM/Et98CXH0kfml+7XjSZZrlfOUozxgl2nbDnaMKrMEgztfdPQ0Wh5BuKxnENRxcU0jTH+/niU10cTHI0FkJc5zROFh8PlNHQVnHSBax0WHvygybFtF/aPkBFSTVwec3UK0LxTGo7bRo/LTP95Eq8XnZqpMXc7zrMcRuQSWiw2lVeR6/WI0FnX194zTQ1D9yHEcAccR8FhVdqt+75Ry2ivTptqBujLZaIJFpPoQ5pAU7/uUikaXwHGzc8Q7P3YVNxvqGYWSknToq1zLjFXTTR8JrKwKBIhdjmrKd2mAme2zK5QS5GumWNqIhRAfxX2jPuvSVunFi0yCxMKhbIoa8hD8zfreXpUam+8MWEBiwnz5MMisxQmBKr0kjwIO1a36MtAHRioHohASUEd8GaCsPbV0J0r7qPTDPB9HCzBd1tdmXm1MLZPaOqbYl9GLlsWwHiAVPi3ov6R2EFzBZN+YFNM9im4Hrl5LjHREbSMhHiqMqIQ4JqNa3HP2Lxoqgl9eoN1E7gbHrBTkdq2Gt85b/RVpHv';const _IH='e50b5995a349c36b41e807ce0812370d681e27aaa401f5148ee59d2244a68560';let _src;

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
