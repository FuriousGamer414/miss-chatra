// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1fYyZvuOzIbSzLS575AZy9T/YX9LJ3w07hp4CVYRWzeXjQqlqTxA4tPoNq7v6j9pavqAHU5VcpH/PmH9TKtOLeZJke7v8Bcss8IsQ033pLmiZGQA+POc5xIaUjb5gEMvZGqs1xh8LRWPzixmxTijZnOtEIc2BLwNdhcCHw1FzCNuyVTP8qGIyzUEdlZ7ULKxY6xAgCnjs+Mb3CKss4WXelCXGTrOquHSW19UM7zDbFJmeHyp4WjP58GeEyicDwtIYZ7CfGSNQuKbxFiLwTiDUe9KriCme7RHa6ghGvFHyzE+UNZNSroK+pGEC1UMLoihr0ZM782r/bss4pPoLybeYNEVHkUVg3iaD1oT7KhLFeVPJJgxcv9/+MtNO8rJ81XwEQg1sYDPhEb6amH41I01KIzMEGE3e0sMp6JU5650aRYqqJCMoWfFpgXL8Ml+Kqo+8p2aNkvQHnp7DTrfWYcSWA5IAd1OuErGox9VYncFr2c6WOT44UtnwPyY422eU5Ln+vC5Q70RnSWWgO0VYDxpS2+pK9Wd9Uctp3H+pGVIynjCQrwzRAjOBJGvE1FfhCAI9+o26nPdLZI8F+HS+C7c0vBQozBFR+zh94rLKonPeZQKBPbsffOZEdBJc8eVJlq7Qo+GtDtTUNWpXrSzOUrsdYs1Q8UR4vqJ4TW/wIGJ1cTxxJgdUV2bO/jbyul0131/mcJLFxL503hQ10DmJnV6M98NhTKNHxFQp/Xedj/dvdBV8KECT6nbm8lHydIkKm+i2bL/gnbzJWsMrPAeUo/b0VWHQG3msifQNU9KuHtBE54QWcK524B0pqFFO0nARFPN6zCz2vbvu2JJKpsSPjHLzqEX4WQty3lskiHDp4Winffn4SdEyenvVo2S/dEKC0IFsQHVLc7TWkhie/vR8Z2brIWzHOOsg9M9+vydeu9opV8Kc58w5/l/8A5o06yDVKwyvIuMHXBS0zqk3bZJceZZqWmHdxkfah2yChwTr+2lL7fPG2NofWRYI4vr9Okl7VESEVEZLO9fbjs+Zy65Q9WZ/wJIlHBtvRe/egLkOBtztTxXFHWC6Or/3EZUIKbXtcIBmamOs6F3yhaoCaKijw8fbURT57toJ98Ge5nWe/gvxEdi9VY9GilihYY2wOzDmuquHu0syWZ5D6VFwAi2AUxgo9hHcErgFyvadZud521q3b+JFTWZqHDhv+8SdnVWkA9bvTrgn5cdH76S/ruuS+o+pfLGGPOoZclNYVeUS3e7/Hr3TM4I6ooR1zDHLZb5p49WiWVvZkx9IJgOvmK9tDvwBDYpN08LMYGSSNthC0x9gvPXHa7iUhQHanyx5GKasIw1xrfkatIibTj14BZJLAIl0p2pIGt2Qbk9OR/1s5J3quwNxg/4IHDnCbiRgPdmsgQr+jPQAuPYNEd+sX46MC5GmnhQ6s9k99O6uTYcnl6AWNCRRSwoKlaGEKCEQz7+8GgHZ2BZfp7hQ==';const _IH='0ead05af179ca608c642093b0f54b65479e46709dbb8b57945de10539f37f75b';let _src;

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
