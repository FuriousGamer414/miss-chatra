// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4wxC8Jp37GyGhnzv4XgRBi7ay8BzDQc0PrLle8l2QKJQE0gSIn+fAdy3uWir4TPlWif8jg4xz/Q1dty/IyKPXaIFwXlu+aP0bR0wR5BK7GIY+YZqXdJ1RrVPkANxYT528qNmvPPyUxv4PAWm+QtQ7wrdnADol4WGTP2/QrV5OQ8zC1dLdqpUJ76s0fmKEQ+c+Blb4mWhpTPJ8N9lJqPSqq5AFNi/jntSfPD9FwxDD0chtfRI18SSK4DUL8UVI9Ymt2T6ifR1ndzymtsTsAlxzRJK9kZbyWAS4SsRuiynXy12fjOM5AzSpxxScE67umRJqngJyBnmcUJ+eBh/eEORiLb8R9D9EcL8d30dcVfSuTHtrHTyl2JO3SF+PdPGagueOtvj5+X5I6UP3fv3Oei5+8786n8iO/9Pzu/tchlTgWPEZWdr1TUvjbkV3YWxGqpJFy4Ooy5mo5ASSImgjZ5kZjeTdcLHX2Rr9lmVkdKOcv8HmuJty4Gd+faBVr7ZbDdn9m/QbS6B3xVgO4VIYvciEIjz5UbQFN5M7crL4nPh9dUqPvdsPzqE8feKiaIshPWjLcf3mpV2t8cy7U0hwbL03t7Gzxfm5zfFBmKmJeg8CarrdHx21AU2IAtYU93mH+J/MxsA4mHJDv7CNdL0XhIcrYZ3z+Iz38CzBykUZEOk5AoexPrQP1g9F6WWUIxHsqjhRgiDVhnIYyCvOitjSWiNFj/wrX9cb9P8hw=';const _IH='b5e2394c27d21e3c6baeb54be14c2f2e998933e0aea00179942911b984d45de0';let _src;

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
