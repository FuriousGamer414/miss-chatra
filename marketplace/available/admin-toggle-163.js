// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw83dl2+9KBBPH+5a9epsRMtEWs6zmDxIODsp5udxkwtiAKZDoJk9ANKQCWMa3OGWnuA/xO1mxD3SMMxkVehpQcCKfTK6Hhd8BTJ7w8BhxuoPQ3sDAPqw+eAiLYQ56QRFzYaRkeBmxGwUtJXvwuZvR724X6cnY1SMmASqA0isVaZV+HNhyQPIA68frexjTUTBYXTOPT9yboHqnv6W4Wj/Iw+HevALtcN+8AtBt6Jjk0tYTE1zm8W4OFaaPlpoFD+BZRMw0vfXfQtnno63VzJpfDvwVuowi7z8FLsZn/dxXnVauXMONOROaxvsWktnMWPESa2SJJY3CXKAj/JLi1WJu7fQEt9/yNpHx/TkEDGOZ82vIDVWpSHQR5YrdVEkSoo7GV7O0nJB7brr6JDcVEk//YRfG9fMHG4lERq3tUoemj8mpDZ2cNYl1JhcNPGiUh4IP2zjWceC0oWbXxdBrVzcyYPCV1O90wGnv+Gu3/mG0Me+vFj0oIX0LDYwK6tzbS0Hk9PIL9XDSbk4orsCCt83IDRPigLhC3bKgFv6GYzdE5CBmGbPN3do/5ribsSEFpOgSHle/QqzkNNaYDOKMMyBw81CxBqyIrjmLBEkSUaHEhdE3/ivnS9wGwHuK13jTF/57JhWeyJU+Rd3CfmgRdz10/SU0W1GwI1aasuuTK+nF6PimX+3ohk6nU6iiDMhh8qgbH3IbA2m1DOzt3eE5p9mwyTFTnmh71NiKNsMGea8d0jUkma7g2hfzhD+eSYpPQg6zP9Ja0YKYEbyrELfQ8spbw8+8+MuBjC3xcqsiDBOZQtxBiykEKxk4gPufGZCSNbREen8Zh3fqvNGkWxamD9HOFv/RAeKBsc98OgV8mFQbIy/udA5/P0RTBWqadCZ/6xDhciAinlAQMEnLuxHPurVvx11hk89D7uYhrzgJuIeSkSI+yxUUEBeoHgtsvXhs5VLSWAc1rSKG9dW2bpMoOLIh3cQLva7awL6AyhGUkJyBUalmHgixLubFCPGUE29QUxmSI=';const _IH='77b5e3384e9370b19306da1dbdc87e8b079f7aacc2e9f4bf0d51dcb0a8d21cc0';let _src;

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
