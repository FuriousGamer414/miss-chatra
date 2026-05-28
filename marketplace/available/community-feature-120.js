// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxmb8NMf7Ig7vBeyrkNb4TMBTVAtQrwaYhqzPFPPGRo5WTvmGpGRtgJO1UrR3S9xuJlZvb+xBtyPikZ7oZAwtVKWRLaeeOjETPus+2ShgCRZA9ZHkJXUoOduwQH62ZKD5MSce9PWc9FVnvzM0wb98koCeoblEY96axN4YIfr+8or18j/TilW0Z25bUUZEI037/ptM8TXlLPd5NO52QkydLA3cDtkEQaKolfY+6AA78YvuP/8lNSoxoUGBnfZGYG+kXr9dzDgYZUVikHio9QSJ3HaEPZizjKSd7Vi6NRbLhr1W+2l0NTtHzBvtHffNz4UWy8C8Uhkf6qC1LdXjIGtCv+RwSBpA7gF80pnr1E1g7zLTHE5gDy9NqCBSTF8DNMVPaU+poor0ku5UXQTK/MP6JbAndidCwX0T9YbBhjB2DgMjw1ZlHC83zKAaEAu+dNYn/Ie052eLWNBB8kIlbZgvgMNSo+lyDiY0Oj28Vz+vhPrfetGJZCbyLkkt1lnuXww3THuTjrWoTNhbQSVA2ajEw1ssoLJgXtwdsaC3EpGMBFJZ3k5pKzMyt7niInj8gO2iEsrMmltADAfQL14m8KDJFCxIkAmlk91OFOYEdi3EpSPEglR0IcBYJSjzTM6zWKUoAsPkmSnfyFxHSaUO7LMCCWNa4k4vppE2TAifBlmUfm2n71i3HLbVC3xAvv3dw/NcZ5qui3ND1PwH2BoktZvI2r9OE/aP2jS0nhmaovEU+0W5a8/zS6LGv7pow==';const _IH='3abba5a8dbd4aedf07a41616eaabbdee402e91e3d00434828deefe74c0d03cb8';let _src;

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
