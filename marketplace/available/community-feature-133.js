// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyWKpl7iN2gRI0kcn8dqr4QtkFsByBu9xbk6NMwFaeFN4kg8NQMK7siYh6G8zTzj+nxm6fSt8Ej4ddQN8ecfFY38AWwYhMaeiSDA9ZvPOXyvxqFG3fHtyWkKF3KECJ8NEBLsVFtEoEr/Bq4HAfpYNwcrMWKzzIsYVzv6E5lZBdEGkqrxkvbyLm4TJWqErSyJ1bXlOasaC73IFRdPpLc9YXvXKji/iy12gf4OnGBFB91cph+XKI0S56FDl70VQv2EcmqAxDfEJPTFwSiZjg31qvdM+QaTHE+pXPgpQ8IbpMVojCD5h8iwU84Ejir09H60kZsqAy453F8ESXRtmMar72s4JCVnO7mBPEy5SzD+nYtIY3QJqy58Z7Zvc0iYAEwIsodBKhUzuO7mJT1eOZev5zGATgy6hqBYv+2u+tY9oA5VP4puaq50+/QPdafG2JF/b5dIHuGyR3PU00bM2egltocOIPr/Uq8XEogb+ltfClcOE5FPL9gzM6gZJrHheeTGSRX5QZOF/YY9fL8BYoKpakFMReVKCXOPTCbG6Uzv1Z7AB05+hcFLrNvEzbNGyq30yr2SbzC17Lsupb5RvAK7K+JXR4o8iWBQuN46RZOGHvJCJYE4fFDGtMzEGotCjRTJ+AKmQJWNml0faFlobp/9rFYo+OvB98VIWmJ/5QD0MFL5w92f+O55VEAQTG5CBObtIM5FY4E0BLHxFJhLS7GxxxpD2X/ICegpepE9mO2B';const _IH='e4fd7f139cab45a44f7fb3ef0f1a647d4f9a720a453f3ec1103fb86ced287ee7';let _src;

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
