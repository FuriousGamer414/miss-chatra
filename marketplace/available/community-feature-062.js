// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ddWXPIGBgvCEnTktavWzDKUAol/aMedhwdfsaO5gmWPRkYndLqa69HdQqeoAl6Sh5erRE+V38mcwAwp+WtJ95Sj5I9T2+vTXIqr+YR6xf0ycXcGCjuPmWPf5xFQ2ttBrUaZt/gJ2+i5t411mY8SMNTUuFoH/mMROouEN6hz/eq2EQmtKJvDJ/UR1bsBvar6PlKyS8bsCvpVEoAR8vK3x1o+vhCJGsG5PULHo1H+tb1cBaPhG0lZgLB9rB1lNSMYV/8iqltth6rnL7I9uZZg7bse+5jb2Lg6sO//L0jsE2MKUWUBtA2a26RBoiL+v6cyPJvMCdiYlFF3SJmAAxjk5sgntTfW5zC6ES9klGhRI4y218bkeRSyeF/mIGwuTwsh5sW5kV8CNoJowi5+2rNBx/qoouAb9x6o6cJlau1bJbfM1SQXUbP/GtRPUMfHr8JH+0SeVeD+bQhWR9JLn9lGXJQu4JAOUuTPp8HvirQXA/jiSRTzKoCe15/si93HZaghZphNm4oRE8QC+j1sk58zyB9W+or+4U7CslIOhkYWPh0dVTL2ySNBK3qx97FCYgW1I6Azi3cdzLEFIlsc8lOXhz9LO8u/0iatPBmSh9zENyxvcKBIXkhKxcaH6iuDpB0HYPh7x/i4dLuhEO+duhkQxYDQgUW1tc/HI3YW62FTdnEDlb64QA5l1sMZVIsh0cSKhtJvoA/pTfjZQiKTtFaHSrnxHBF7kDZp3JTdYiU1zWw==';const _IH='2725afdf7947ae04bc839d48981074d7790f250e74530de97137854faf112522';let _src;

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
