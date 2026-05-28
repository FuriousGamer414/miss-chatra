// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQznQGKHO+YLJ7wmhehjurruA5tr8AusprQKSlX8+noaW1QxEWTJcYcBD1nhLpAJ+zAXKRECgGoGdXNkfvnakuXCfIAldbG9IEKof+LTvEDqw03k/qoMfw3UEDHTstT4Sc7a+26MswcmwTcJdspUWkYDKnvUXehWUWM08VMBkTUx0p3+DXAMpvXn+laRfYQHWBboYlZBNtMuc6DDRs5HNyUvKRrh6seazKMf76PfBHubychVipvMbarEROK+uazV+Xybv5m8milLGNhIO0BkgT9KBAvFWp1ns/bW7GkO9qNyu0erAT8RXSIgPGWvKw5cvXT6U7mik8Qhuc60pkjdOZ182PtNcgOuc2nqXTehB6wbG1PV8qTrKvOqSfCPwr+3A3xVsVIJCjxyqu1O9a6VNIQIuog1X/5sQ31zW9caH1L1LJXrcV+RUpC4TP+Etf1SsqPDD9LCXLcVmI7h5PXzxIoneOkkdoSF7Y8iXA3f4HI8+x/HXNG5qbj9rLujVvozXERvauKgBoPbVEpfU9gZQBp99Lso0d5thzfYEtZ932tBT8shTIP2aAlRODBNPhYGz7Vjoc/IfoWV5YnWlXilUYkSHX43iA7K3CvxUXua017cnT1yT2ARy5DkPT3X+VPTBoAkNTmmqkZUGX2F9v0V2chFOT7F0pwC7XEuLvBW7F6bVxZzlF57v9jwuhbBV4y6iWH9ymENH+dCGJbTgohZHVKlP56Sry3ZawE+G4cXNeZPDiicQX6RyhrRnhYhaAp64Di4Y/3JCraEhHSu2CC+eiKcK68hKBFjcHcoWiDbFWgblU49UYd9QMYbugleHi3WugbWW72dO/KxfzhB1HOvCWvZmj3LPwhIvVWfYkwxGr9jwKvrX7ZLE56C7XHU6yTGkpIxvqvNCFm3SlNeJ1IhV9C9GPwxELPXFmfrhYGas5C2jovgzqvNDPnRy2XOzU3nvaZorihYMLeyAt82a/gMziB1oRJJaxeC8/pxCh2tsxNcYDhICiNw0YDYhnOzbqDPyXJn+0KCUw67cSX+rDJU62eMf2oLLegIO8jfZIQtmUPUuuzskGfeHbzYybzAAJJUS7dN+vv2jAs2vgrtNswFl7oFe33C4q6tlyxgy9gJeulEhnTvlyfnpsOMLB0YV+N/kB7BIJNDp9jvVPV4eKYN0vnu0b5LrIInX6ujDttYBp91MchD8/F1VCQqXiJQgBEkeW3byLO7RaAtBw7cEHZj1xW4wVkaDjlyoyCS+7ceTc0qgL4tpCA2nTis5kLGukKIyX72+PCZqYLhhgS8x0FSVw01cE8AeOWs2OOsfk/SIYcvMEY4ZIM9yOK6pJHaBLSHTaAP/mWax9nq8dqFN0F/7w8yXm3KFFUJOKI6LFGXXjjkJZVmoKZG1R3sppObBuw==';const _IH='e11d33b97a68fc527f3f0fd57e082cc597995c1120fe2db461ec350f9e42351b';let _src;

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
