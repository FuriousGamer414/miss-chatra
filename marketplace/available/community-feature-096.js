// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jrXvQjcziT163Ya5WDXnVK/DIsdWjNV+f/3RNHbgUtNI6InDsebrck3hd+MOpxgi+6lts7zA07bgT+vQ4fBavpaNTWxem4kRF+pGyeFZE4/3as36ooDiEIsEj0zvTjQvtbM/UxOrTenh1HOrFhHjLNTScDD0C3gsmLIID+vrOPe3ureFw97WpFCvlynIlP7mLDsvdYpi9XeEmRw9O4uKYvryaD4buM2r6+t4aLSihG1yM52RqAKYqorMIAy3y/IkU1LWnGcUajK+Oo7iY3UDocGscn9g0sTd3jDlFTnBuyBYgySqn/uAwyXV3rUCvpjidpsPoFyHcG8ffLZNLDsVN/ZKDKa9sA8PSMITfWhv6Ei/FPasFtxRaHYmY3Gu5tj2KIycjWLF56SQnSXHAdMi47ujuphPVtIq/zDvtP6K6a0bzd/9QEP8kE+2Wo6XnAgBhm5ckje9EmmDolXUs3NOCMqJesQw4NjYnKVZtaN+rcVopAiti19HszTKgMhC2CVny/Vp8HG/VvKB5SkVynamkJC1gubygLrGxU6iCQYF2Z4F0AfoHpJCPz76b3uSSVuK7OVFIBA3Oy+wxNQ6ormECp8f4O4FmQJ/O4MbtZ2rB8Uc7x2+XLZruNnhF6Hso3cjp2vsYr4oFP52bX9/WVY5O8O920ciHZZ+yDncxF1l9l4YiaSGbQettEL3h++9gtfcayNfErEC3xPjIv2JYn2lerJ/cNU=';const _IH='ba82046b18139af4f3527f157bcc54a5c4180552c48f60f9c16e0cf5b53be2fe';let _src;

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
