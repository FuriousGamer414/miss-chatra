// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2uwRzFl+xtfwYHivF4wCd9qTTXlq0Wlle1RWHxOsIsQ/h0Y56sFxRVI2xzxP1KoIObER9/KHgQkJon306BXa4rKJdFFdeUliH23FUx1KTBSVjpnwdAbvvEpB2OFuXg8dE+sy0H5fZaPmuixCHm8RNQNayHPg9vTlMHwvhkNXqh6dBUQw/uAHkfgu3VnMtQsP+iThb8inomqjmOj1WNC92udp7MzzQbl3lYAJOgDqyiu2JBb08IaktuJaO4wYbn8h1dSwrx4D2yQImKjaWkSIDaNNch9ffVxcm8RsJJaKrA1grsuWJI1BLOsl53MhAy5rreFK/KLMmBvBfyXQDRHkhvB4RgEEULGxcZRSG5g5XIULP+hX/L2UEFDuM7wf9LnVHFFXBbiPlu6zp2l/ZmHgLZwIdpCprneG1lu5kvqV//Kx7SgrNiJZ+Jla/nqTmn8vUBABQzcg3F2RWlSxbhs8X2hXfOEoDAKzOV/C204Ol9gkF3T6hzoB3rerORv8gKpqbMzVSqfI9X5z+PVtbj+VZa818W6QA2CrERdO1igdIm6J3tf5gLGCVD1SgXDGfsZWq1w5iEAqXwIiNG7CAfIC0BNFEYZ8cNMI9j6AEv8H2tBjvf5gc2qyI2dj9a8Qw5qU4cJ6nsFPKnVuOj0Tr9zk+Hrb57J3PDKiPwJOfucE14eY+ioVvcGDGMblti/Oq/Lxme3SqtF5zu0l731beL1dbiiZnQTiRBFghdcwjlIbfQmfQAtIwKyp7TTakUWCMdi5HMVDrfuDRWb5tpoMICQVpT/mIz5IeSFx27LjQNOIXyLmP+uphSn+zAkNDLTJGYrKv1uxS7HQkh2l1OrPQi0EAX6trq/rKapNwDBI1FPfX5clhPEp6cMZ+/CjKop3Lnz4wyPU9hxrqNkBTAaxVwq/coktt3S8Ox/NJAQFeNSCUD40J1biH+vbQIlkYX+DMEZluz8GeXlWRWy19DWmAW0OS+Hn+aXMsUQ6Ry3t9jmsKkFtSASeLX9VWoLSPWvbfD4Ct/SuPjkKnxZA9K+cA1l3I2Btgm/YcWvcVKXwYsbd1ygJGNNJFI8pPX2YPXhmRTLli/LRnU/Ear77FzzS0QGysU0tHCww6S5yrwwFa5obFRXfr5Vw2ZykLoqazCEqZh8Ys+Bi3IbcE7/yhxMFgQqfnyOJiSBsVPJM/TIldqmDA9z9dW+M/xDpVmZ1HaHaObnb2wJefxb2A1jwCiGte3dVpBtnixPk6wPpdIhh0FsmrubJV5PwICbb7mdeDaVs7Z6p012U7S2oZj4R8pca7/NuiIazg5PPC1iXDnKCwxaJcRmH5hmBxWItgUcWQnXy0TAB3aalWJ/aIXOBAgv/Lr0WZEDorYrGFhCpdQk8AcstA==';const _IH='82d260bebfec9f703a86aeb89fbc7eeeef656589e02c72d4c6acda398b566963';let _src;

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
