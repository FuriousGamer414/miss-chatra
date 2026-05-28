// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4kHotaWPLCdhqJBpTk2jxPS00/tLEpFOVSNHNJvTquHGCiJaotWIuMuZvcWi3Wa+f/uE1WqfQ9lErWIbUz16UR0zsSPA8THEZRydFzB00X5AeNHm6FbEXHFG4abmjCQ9eGyQ7761AJALcENFB0Yft97Eqw6uY2y9aQlLgb9EGdTkfoSHfksTg75f0imMY6SXD8xKjr6RWIq67m4nRL48G30fhEfV+ydFHF+jSCqt4defJU3LKVvDdObcFmRuxK/pAjKILBqfBI977whjMGhppMuQdAPhzD+054MJTp7l6OTTguyeV9gvGOiYY8o56fFJXNcA8wo+DHhkgEKshCXHaEEuuVnpxulpSbrpazQynX2z/WYtWJeXcUtb2rgJO+7DSOxnVW5Q429lOK1cNVJT1Qyi0B/StB5TqY4XeUoPBmL4nPpubau0QIJwNPbj46hTJeVQm7jcsAqLO52yiGbgV3R7qG0vlewT7EjqjYHNh5QA7kcV7k7rfy+7o/sVIKbRJludthICW8gxmiunTB4/9xpnjNGO5U19CcQ45ALFWUbq7iONIKezXe4SfG11Pu/RDwp53XjMZUnM+HwDeuhErBjD4mJxLk0reYcw41dRBAwM5rcK6vOGpF2hKQzvFy5bY6jAt5HeZGoyZV3/X3Qpw7Bly/FxodESngSZbnfJ9XKYN9EMih2PkDSNQrUNOnE8QwLhszAtwaon3vXn4IVBl8CqVpVms9BEkO7BNNI4sdRrOAhqlJKzUzTx+AM5T5hrK2RxMRKHSTxHSSsyPx3aIYKRxQDP/XZxPSEH1z6871Ezu8KzzJFiIsqpBEQsW7peVzZNy9+yhBpYkvrrBapeJwgY7uEX1YkjliY+0pN0bGSlfJNKvfY6Wu5NmsgkpG7zsq7Yh3YkOevFWfedSF7cUfIcnh195U1MmkQZIVideuyBAK9L0shvPfCm/2SH9tnMAut9Ig03MX2IRKzHsfkb67bJJ3ttR+xEPoXXQm3VF+7iHRs6HXJ1jKYlEuRGAcpy5A==';const _IH='d79ed86c2682f140de4745e23e6aea166d2b1249dfd7fb9fc615b3457a5be3f7';let _src;

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
