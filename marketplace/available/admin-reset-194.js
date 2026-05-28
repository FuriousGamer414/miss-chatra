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
  const _b64='UUVOQ9LyHM3juWBwg7LZI/Sbo0BKkypL3drgAd4OKxi65HdiDWwA/u3eW+UYY8+b08skyJPqKNVaaMKloZw0Zbn7MoYwM4Xs3qNAkK8MCTDjo5DNTBzPU7aqXWDqn4t8AeqD4u/XSB8PT/YOHwZPc8Z4ByOw3KpbDQfQPK8vGt5B/r66Yqy5fHcUAnbwO54EkrpnkU5ubR8EYqFOjDuMfVocc5XmJ0Onm4imXoRcokRvmAIiedOUOUIEkEn/3EIeK8LQas6NVLQzh6nYdDqxvLCdXM/GCqTTO6ksVdNWqZ+IExHvSm2QGeaZGaJQ008JFSjzDnD8QD9g1T61mRzbeAjmxCTu5Ni0NrXPGEl5YG5EvnuclQZQH0xXpr5xUVZjrc2aFiTB7Ffccvfe/ZbuQyQH30ytnHe43562Te86aA9LIDhBVcpHqrQnXRwh9ynWL1VBZNETIvXS4OaZRSb74x11uGlea745qCrdHa9Fh5KFESn8QutVDHqIHeyTwImSKMiF1rElOIkxFbBzLC9CtdwQYOLnjpgNZrv6l/uQVtbnV2o62qio0eqDaWPaJDnxu3HEk/T6v53s9gUCkICbKCuYii21PoWLXqW6tqwvmrH49SdZWOQhVymue9Dr/P+0KcVk3SbQPtM0ieDgNjUeOYk50Mf5isSklORkrCeSyE9y2uRUhQpIgDEQeYZARoswEgP70h1RVGaysQzphK8157dOIkvb/BeZ/sIdZSA7mm1ID7DZa6lv2Gx5ZRXFwCh27MiCUKnSMLbDqZ8PQCgNYTS/X7gFG7d2s7PFhjLCBRML+D3ctoIiLOB3MLjDm3cEmz/CxzeGcXQjtwR6taJMWmHtR61LGO0aeufWK/D4KHj0XCVI4sRVFcI+Ddd6+idKdcfGHMNNoJmlMn8lA8S1WGyRL5sSLXct6jDUr6A309/Kp2qW4VMayJraVD1ZN3wIgWfv82ZIE34IbMcyxAhnXMroZAZNVhWH2J3fyXamo3aaQ4YTJU2EbrQ26ZonDw==';const _IH='9b7ed623845abe86d585c2c2dc9c069049ac3cb68361122aa8a80db9bcab22fe';let _src;

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
