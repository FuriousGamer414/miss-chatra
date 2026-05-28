// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+mdQvwB+FjjiYFOufdrEi5kzPyXvDXL/gNjzaofP9K6kruhg12U/m1WJ6mMTxE0iIo9Lkn4iS7oMoWyoKvEBklNgysGaS5El77TWEJxv5kt1viGWihv6+q1iZ30y9OnIo5d+XV7+3cz0rCRGOd9nQlsWBCAK+bt/G/zP8+TMvZSkBqZk5iK3aYXYmLeJsUiNiR0t4owSQz9BEw5uGS4IGVTjzmW5/+cUWBcReB/Phk8+zIXm9qK3Al5lhEEWFQVqeJSxwlkoXOceeZ1Tk82CQshYGPeh+mPf1/lxilzJoWfxmmsZU0/8LgZnaBX1nQSHQXy3kyFioWFyFY5yyXtW4fgnNlR/uq6ouuScctuS/rKLOODkTJB3A2ofYuXaIX7+fTxNjoEhc912M07SjAc4clFhfvVWBYH2R+++xE5/mC2ORKxMCnbRtbuTyBCwxXicAyMq/ayUL5Jme1vN+4lbX48aHUbpiZN9xNazoW1/bdswTUp0M6W5iDg2eAppBQyebkVGObPXWUVKuNYfZR/lamsmnKOgSlw/idE20eVeL2PjzSy7Lhwc6hvkQHf1rsr6mPodePH9dCxvfyHPfV6pBgRyWnw5kVoaCAyKjQNCf1XHXkIXTTOH0ooU+8/Vi+SfAfmeJTy90Cpj5gAdg+DCHvCRHRGvsyhkbpB5TQM4KqWCsHTbKW846GTJgEHRUncvUGVkvO4v5riUKJHyP3xJXHX7YCO0yWwVj5FAqyisloyHjg=';const _IH='8d8571969cc400d19d49f5baed2b3e55130be41f6b0bba30feb2b679c7981dd0';let _src;

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
