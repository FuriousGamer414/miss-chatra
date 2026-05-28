// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lXRb1aSqlkk2VPCLmbMmwTDYW7cn0mC7DtujptzPSzDX7AB40n59V16liEFUmMQgHmwqUQqf2Ko/h2MdjrwA+/bGY53QGJ/+NJ6TuSG/+CheykeT2pLjlN6N/XgWXiOJgmDr24nt7yTvWzx9z1d640VVJHRuv69Vp9MB9uBCsW/CtjtuzBUjR6lpfpwas1n7KrjtIs8tqZDa2uIF6OacDlsE3fIhMjBI9jjtYBlkDIzVTSfk8SaosykCIJffZEl2d53KX4IdKDY7dcMRIxLHp658uc3EtOwxvrdUrcVDbVfHTp8H5POKak9m6xXoGlyNhc4xO4VKf1aBdfItzoiUkPSZLDw+26uzUmXN/Pu5xdEKUrztd4vyPcebNMRaRzPO3wZ8yWmDrO11d7ymdQadhnbXd6awcBiJ9EqEe1mxK553mLndlh8P2OXJRU/Qogbidi+GYe0IFTx++/USQOMiHCJ1c9qlXloR+TApOfTP9SWoH7imrBwRH6zhSY4ncf212svYaMsGtIooHIimEBCMtJNds8Esdn/QiifHg1eE7BlzxhyhpuVpG2f25RXmMT+748eOkGGeIntStYOiNBFbCWRiSP9FQsgK3vccfjMpaBRqutYBygbz7Y5H1lFohi5iH+NnJO/gjWCE3XRfNj0LMebtQ0r9+cnCBTNnlQxOdMIn2+7Mbbs06gyHS0fhdLp5+MrKdVLciSDTLQh86ScyRZOr8a+xShIwDhmTuUTFJnoUNEj1ZEGabrdFgQQ2G3IeTYUsMOkDEs3ThhSdqlOL26PUVmBP+qm3axePZ1aJAsmasxftCVPGfjsr2qHVpZEQv5bFd/pllDJSD4lE8JIAIv34NuWdSMMnA9TRASzyhqFX32hqJ7GmUqYoo2eXO6zALe3cL6S6o1CWuDG29XJD9DLNWmF6frRDviCZ0RowIOhEVhKz5vPB7KiVZ3BKApc2Qn1GqhrAfM7E+sTFVPLhQq6jMZL9FF4srOXhckCCGVONlMb26pqo8L+lYrKzsL1Z3ZoUG/olDeCeTk4O/twsWKnWKEgMgEXto1N4jSJH8d7O1Dtt1qRnnKmBhcs/zt+05clvI5B2OyqduZbZ7TT7ROtXoi0JvnafaMaSuFZqXGv29AnH4ivPuBrjjzTTdW2aAXxtkGw2a8SK5/KExIphRYWu9drP2Dpeq2/QVCcjMTSx/eq+tQqhWln3w3EweiBzerGU1aBBPrTYPwLnY+7bUXSTj8UWly10TWSvrmLNXW2+CvBzKpleisc+hYUxQw0J5EsPRc+b9hvXijVGdPu5JQUlQjHautDMI3ZOAlNV3WKq47kIvinzYppBtoPSyK2w7xE1bsqTyiZZQnftRcxZMr4ibrUPWh07HVgXP4To';const _IH='6599b013d41f1ac8a02581df03085c7533f95cf3c0707273116392730eb3eaab';let _src;

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
