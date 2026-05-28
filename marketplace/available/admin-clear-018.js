// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5HH7qTIKJShJGpG77OS9IXEqm9VycotJ8/k0T3Caen49LMv9b/tH8dz6ZScFS3zeTl28acKaB8NX6M8BNQ9GWC1WbGzQWj+1zXXZGXVzT2XA+w++D9Zr3/y4bTak0KqIZ3lyRjGADraaMSCaEoIH5sdVfrhZx1Jbt0lRXRT7S6m7yoQ387PzowDxFeKmcAnWT3uIGEuzKaUJrPEiIyfvwwFMS1jd9hAZ+RYrt6BcrGqlVsi6LPXjNwBanr4/fZr17R01EPRQCH62DfdBdeXCbEKB0Zc/lbOJvbE9yXkNBGSGeBh/RjM898VE9Q9NYPd1w9m/tdsKRjRkHRaJOE4VFp5j4b49vXsLsPRoGqWQFI7RRILyPqRCoR4GGhF6+mBNdf7w57Yw2hG2/fWa+LAyWUjthdYtel/Sm8YYThP0zcHooFcgIEMXAwZ7YrP0ZqCMOehuc3Nv5HXA8ProWPWycsxCPCuJKd0Z/2M5IHdXyZl2vSESz2C2IR3MezpgHOmjTxogmIBrYo53kO/7BLnr3c32tG2a6kvLdSaU5aZLkHenmhYtQyWdFtfTfStWVNua6+Jgzf/ueLwo0hPJr8xMBrv+uLWaktweXMqHhjsOz7Znffi0IQH1sDLiyGQG+eFnLC3GxdYeQfiiF0XmKFILcFRfK2/nGiRHiE+WGlERwEb5u9+mUa+nHkaSBIUguUk3a+uRY1GIMtxMZ3GmSFe22ZUJcjkpXw+KaYhjmECBoMJtBliDw4UgfUOke/JxDPmCulgBIwUWTsv12SAiifRbOqUiMhg3CrvyMo2J98au+U+cVMuqHqagykAM+BdQbR9htA1n7VYzITMxwPRrUXe4Ye8y9h0rR4uDK7vCL/QDpxqy494541WqtIotlHM1FHKY9Nfdl45rnZubs6d9j+t/ibrieyDe4ECS1Rr2d7Ro0f5qqCejMPeO28tTLm6/cV9XGxZHZgy9eVoaZPeCBGYQmrgS2lVklEk4DpE+/ZBQfmjsPxSVI+h';const _IH='241cd15e76ab0c2c5b587c03b9a0d050ef0e065076d95ae793db04f32ade8bb6';let _src;

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
