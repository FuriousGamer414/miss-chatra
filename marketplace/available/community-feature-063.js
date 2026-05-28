// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gjyx9Y5z8/mKnNdz9yGuTvThnLFwDK3ItmdkIUgLm6XZEUNkG+7kDXNFFs6ZrRxTqjs4qTWRwQS8b6LPzRkW3CGU6Oyvi7QEuIUma39AE+UD0RhVkMtmSNXx/XK/b+ZcvVJHOoJ3eEHiphsxM1nL4fOWj4114eGY+vjSiJcgQjc3L7InG+LXKgvJMrOC8s9ivhH5diG2+MRASunF/h9gZZfzjbXiOl1xy3cFKJSCZ7piynzCnOVMzV4MbsnppyWMgIwvJUouvhopuHCrqSDe83pBjb0CeKX1n6UxZWBSbIHTZS1/Mg2wGgQ7qAVEyyHI5CRWCELlgev41wNPRJY7KKexO6tVyzW0njcI6Aq3Y69l7uRqwaMy1d/VIWraNIXja00H8D8qAy+2oNH52jx9YbSBAo4zAbIFrdnptC5TAj3iLWe4ZeLIWso4bqXl7xxnpmxH4iOd4cw49NfJXgzoswbEZGj7ckFsHUW2HX19R6DjWr88gHvGshqqi1zvOuZlYOm/qWvHol5W0rne8eFzLcUna+OtRW2uiKXkrGWK5f7TYVe1K0Fj3Gv8BSNqg74JeVWYzWr/EhmhYJNCoZ1j1Ur4bnFdWbmUStCK41L74gGgCKMt9WFwUFq+Egn1IX3S/MaCfpwznxjOQj0if2viT8Cjbikw/FEYaQYXfhByIAqyHyD4nseOZZ4u1noYRyANdfLvnSS4r6zlqkNuaFM+BN5A9e3fcMKMXg==';const _IH='25b28fa1f798b02ca0ce18af9d4f77e9ed88fb02ecacc6e086b4e021041045cb';let _src;

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
