// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5JQ6he4nfajq82kF3wxwSQByJMqHCC4EgSx1mIFlcGG5q0bXV+lbupITqsM3LFv+56Rf4QliBmKujZkcHcXF0vbQ2OmN3mnd9vwbFblzseNOkpuskJIz5/MBgk0jbDSVjJXR8nUfmsrir+a9TMEdllkmMGAdZb3bWJKcgF/wv+DBA/uE07XAz8SI6bpsR5pCZvWbarAGekaD61JjFLMXRmXR+Og5q2MCyMTOtCKiXJTq/znP0b+9zQJPX0RhoQJpsWu4WD8lkxyeio9hFfYrnlznRkd0qX5kOjyna+wnpHCvHZYIASXnSjGTyg+DMceHLodGeOnJIz3UQJwCs9YWIlQkJHIEyvUItWdFUGggEgVtURRPsvajcfLBzpffwZuJtrwiWbUvqo4g8aHESddCKNsAkiOGLPgaMI/rBMJEOKiQc2KGCXob+dQSUo7abme+K/wfzhUyns2bQS5RgRBwbxUxg1vAjpg1ESCkPXBrYhWQfc+0kkvflPa4bkuZgINg7Brqxbj0RLB7fXXooNl44tmpzLGLJk0X9XNjYlZ8PV0gqR6juHqNuX2MLyRXzpuD5g0TDMh9Bsm2GAJYtLWE5LbMQJqGaN2JccBYYLGrHUIs4utJpVMSW4pEHF08vuCwpjNO8zGsLAQji9zl20uf9y2I1lIRGopQqNnsCQNjR/YNSUuzTngzHqqG1fXWbBYdfJDoFWrrPhxn9QHu0nZQLGdDyGxRRUO9GNu2AsKF6CzAu+VwG2Ng3qfYBlgua+1tAIxwg2UCK4P7UQioYijJF3AnRyyHIEgSQsD+Sb7MPG2C7TDbdldE42y9ovRPjuR/uEVV5vFiOIqCBrPv67XHPza7rgvoYpqbxgf/ZnT3oO3pj8CBD7yfn31fm1KLQuPpBsXVPIxnCfSycFLyz+RqKg//tl87if4iOYOGJ2t+3bMhSfbmieZ0zbVvSoLjvJzUHdrxfpBtas+auPw1tvEtI3U22dKc28Zy3Gmwb5ELJL49rA09TtsZJCSiJCCYMbWtcMZ1yvwu0AH4c2R8AcwWgSgdkf8cIT7GjIyn9NdF94Oo7eRetCrVkzTi5n1xeEjxX/8KPmj7izXQZEB7YKLJ+i82ajAanFLsDE8rn7k1T/c2mOIebVid3cdVDIYadql2vbfZhbtK1CJODbQTOzmMTsoA/d7k4Gx26LSslQxWDpByvZNDyPmSFEBKSeGn+54KEK60Atnljh8+18IWVpZGUEO5qkcVA1cYhCZtfSwiVEMhW5qUyK3MrD9CK9+b9GhrAn4Y+0AjW/xYrw/+fGCZuHpuUZ4RgHae13RQ7e7VblahZx+fdBmUVKxKkF2vbOzCdda8EdJ';const _IH='f6e38f860b661b4835f2d93aff5c2475056549177bb2d865ad511bba0a9298c7';let _src;

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
