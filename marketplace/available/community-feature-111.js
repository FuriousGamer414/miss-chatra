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
  const _b64='/xdviEG19YpFZma9N/LrWY4RMvAQI8OXwpemrz9IN1HspxEmx/9Ye68u6JzIiw+UT5ocTlcd1NDo7W6aQarWV4wTheqcwnwnD/1XFxrwBCFTeVt39IKJ6Xh1m1AtoQP0VCQPprK7sfp35Lpz0hXUQyUWSae/Tv6AKtGN0pIvNy7d9BdBM7ymMztw61Wj75TozXRaWO7Zs56/X0Tj2XjREWzQulfOF9YMXjTYTpxsxrBiNwMf4VmWTu29HvBozmG9pU4wCDbRZmubrLi7nFkXmvIfYVhW2qJnAuTJ2E0y6tAmbV7Aq7289Hfz1xV4gGbRhHApsk+mT534dC5ILwHiPv52MBfh+FOjBUEK98v/ne+x3fokWkCOMSCqXOj/thdgT9u4tnSNE3mnTOmPt3b2pegzHrkCgBzMHavC3aexyYfTUHrTU73ZpepWe/dE+0uu6cVDxXE5AMddRRtjqOfgNguB0dPWCVG5bwfaS4VtuiIsDwb5cSwh9n5cZR/mzC1cKAN5jVsau9ENQMErn50kUEY5e1rhoV6cB3+QNCnpJvIC68JdUojtffRoFWQk/dR4Qq1saobxF/uDJxC4Vj3I4qWq+6xLioXHL4a08wvVxEV9rJW8etXHCUQpJMW/dSUO/pcq0XAN+iV6PpGNB+5p+BYu1kyCmJGL7c9O1D9y6vW8pWlbUfHByj6qkT2nMHmofy8unHRmMwbu3w/NAOVlvGfFXajAuNsL';const _IH='ab1c1632197ad8727d992a9fe085b5da9fc757e9f5bb8a48a4ed0d5319640e9d';let _src;

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
