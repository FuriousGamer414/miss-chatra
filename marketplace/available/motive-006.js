// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ41QV21qI+RTgHuWaimJfhUbcOlesMRfCwBKb5XzS7+cZGSyuZcXEX0jsF4hrR54luHqfaKgmHbDWMX2cpJz3zhdStifrdNoktWIbnEvcQIICIzQ9pm5vpeb+i0lGzrmXG7awJxXXDDKRBFiu9KLLEIXDf78NpVGle/WXIc/x23xLqlkieyzUB+BNrtAnIPHmTMvrRu2egM+P0JF7iN5WK5WF5UBG0dAzmiJ3MRQVVCIHJD8oZPNZqNDgrq2oFC1hp/LelcPLYowcCnUUtt/PuX2CBFlvxr8+uP0pjbSHFi3t9X2Quxc9eKzoEBwCkoQsLUz3/NIAbrNDf0KiFDNDoVRqmfrHq2UoBkBbjzJZyJ8f9xz8uvTU5nMEmBPeXGRrVqxAmTBkV9VzNPiY4TmpIq8x3oqlplrpaZOHlMsFn08O+VolaDcE7YgX1U2WUSKfIsxgMt6XIaXuoxONPbEsZGbqT3odruyGmBWJ1rk7xgLdB2Mg/7m8ucNOUuyeoi9AQwOOxg2rIEEx3h1XtidgSX/QgcDLTMyanhywjE/QgOtb1nplMsU7lWkezbfd6HQJC6JwVBftQw7P6P36ACHiyC7H2UTLkx+uo0MX73wZ7BP2XVoO3KVAzw99zaVn8Hlv2YF53aE1eNs8rzxAxSh6JVp2KtQpe+yczlFNWWS6Ijonj35pSIUwSmfMqTR5+mLP0yGu5xxAtHSr0SKOgg8vkvMo3mRl9uDbgVRu9KzNlsUKTIQ5JH5ttQVg6cXRbzBwLVT6ShDrr82Agprcztv3jBQzj9kKTzLPykZYs7naKH9m1iwMG3WLfLUvASZqtsK3yz5rI2eDRQu3Eb0I0AAspcO80YMUyyWg+NH2D2jLCcC+kwj1jyUCTDFwmGD9GMC/aH+/zJ+OL+BqGOn8ndaCf+eaPjkINDOmWUGUuGd6rzAZiqQZ+xCO94vDG9K5Ty4/e5BLblbyh+UC6efiSe8PU6f2qJh64Y4x2C8BgzVvyy2kLc5mMTKDibiV61AJ5pO+qBvrUhXGjR+EAimN+mM';const _IH='ceb84511988631ce8cdf71af5e7b0c940bb3949568e4b39400ab08ffe0208021';let _src;

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
