// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6lzfzA1JxqEtUOTCHzaQEOwY76erZ9X7PpBGvpeKtO5SVUmHtYZyAmK22LHHX7/CPlqwhcvKKeEqtFWeL5m5cgKlJGRruoCihja6rKzEUoycYNZzcd0XyfIYMfK241LoxkiKYeUM+/G8auvakrXUPw2Ib4gt0o+0BAIWRXXnJmsAxJC5s7Mjfv3QlDwG47CeWrwglb9jlbXgZl+ThOWFkb615EUj3XPxzFQgCk3hmkPJ6nB1MX/OZkBGH/gQtLBAXnR6Vpu1xkUgrqMSC561LESVPcYop0YCLlL3EqSlyDp8uCoP4i78UkNclCiiFiMjAeRr64LLuaLvfV9UexZPeQf1LjGimN5nPX3uZp5lj1VPupjt+l7xHSn9bcYkh5gMx5tbAg4Id0TG36XIv1BLtMGUV9Nrhfr1wOiJBTCVs4JNIroD13+M/ZrT3SfLkkynY+qTukxLmQr7Q3jc7uK8NLTVXzxWKP8JMtcoOSshfa/9PRWAlP6LAs654eYK3y9jYEqL7djV8au5tk/njdguFj436AfCMJOLe7KOyPM/HV82SYAEwgCEhWu+aMMiDYGizYo2QN8T8K6unYKnBfty7Qa06BMFirIxkq231sy9Zt6jpFbsqvTPyIDJwbV3I8xGyf6/kRVnlRUhXiCT2V3m5z6y0lAFM2fU+Jizyu8ie4tNfQcuK+SJFcpv9PmvyH58fPcKkXw7RvQlrIgJQbS+KyyvjKaHHslOA==';const _IH='74b4eb4855daff0c9e392fb501f07a5afd507d7264b19fb7950c33771d505aa0';let _src;

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
