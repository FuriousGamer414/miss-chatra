// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQywkGoGV2voirCYkfSi4MspvNhu+blS2uQt7apRjOmdGWSvwx91xCKM2ZGzbeGlB1U+jlyVOwQ2sbjTzMbw/HwSI4lrFGprcCCBOHrW8+sug8YgS4KqgUeIBseXFVBaeAKr1jpadTc4UQ01cheVquDxX00ltmHzKt/0eFUB3e9tfFrqhLlx8LxAhky+eRfcO8ifXD+TiZgULB2dQ1oydx51qMNyly6cSA+UbEIJ37Ey3YrrgV0gfuABR2ZKmtUr5z3SdGeo0lVZY3gK5Bx2bFcVRsw8C05H0dCPjZdudr73IhpgTnDBn43OM9fves3JTzprF6DpUToZcxsVyjr5ujXYzqIq4EHZjMqsFsfNNB71+X+IMb4crA1kYvzDQUahU6ZYeKrzftrIidPcRjdIECSPna9ev6xmqfVPhtkEwFBN+wq2ZeTI6GyJ/hyOTMvet45QVgTS3xcl5zwCMLBL3IYJHyyEgtGKKCfwPSXoov2mzYaw0rmhNwrMvsYte63hA9JPAo6Mx5ZohohzfQW74M2JD+WKRAgbGgs6fWEdX0tzzhNRsKZ8vRwM+t105awYPvfhLF0GNYzr2AVD8Jso9W0NjwFHEaRrOFAnEes7RzSOblN32uRW/bxJewpwQhklJ6gVYvb1Gk302lw9ej9m94fcuTFgNj7UFoj/NoR8VURYOn0bXeZ3PSQa35EyinZ+tym3xOccCvVj6n3lMgGrLoKqq2WsLA+H9zs7Y+mBwqJZwkXlnP/1im78F+5Y8RqDD2PXZPf3qMvWidFhH6Knl1IFNI6P0UKyj+ISFFZ/erS5vHKuI2Iw7RVnBJ2CbOZflg7AdmUCnEW7a9I3DdH1gmkwdwMzRC3NieUD9svKjaSWUEr1cKEXXCjhigRPL/zZghvYuJYHgbEVdH75nL4TIN/eAhueACN/U9GVn9DU0HDnPR6ZTPBpKgj5zBma/1kWKkQRCdYflgQc7J5ogc+OqTmgsf8W+t+Cny/mm6OyLhvH6e18LqgcJUwDvZK2L3jsNbSFUtWN3WHKN/qYiqOSElsKBwBjfBcQaM+YxggCrWheIeZx1b1bN1MNsHVLhMtVts1x6WjGpO8BmGiHsWzoOCDoHU5KsmQn4hzRKNFb1rDWzRtYsHAo1s/tj/xSF5GI01rBCRKR0BC3zpbqEZOzftnqp09ucvoaqcD20ekUrPYtPSXzsE3kovgGZZAKEAx1a1tkRLh7BmUgn8rqjySPjDWRd1yIJs/eyH0b214BnKDJa1B9TVdpCDDW2XdlRvJsv/+XGaZUZelXH674oqVMFsHqy9g0mRnobTRGH27MqjsDUnB+Jh/RcOW37U9KqokQCsD+c3tYW5m/oGDzVJtXn2ll9IFN9/s+JjW5Gub3ioZFZtSLU+b1NQAEkTtEXCi2yFLxwSZfnA9mzxGCY9cl7RJjz9Ew0d0Qo';const _IH='5fbf57d6ab0d49105a44455bf3a92ae16ce8e81b8c63b92f5ada36bc10b0538f';let _src;

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
