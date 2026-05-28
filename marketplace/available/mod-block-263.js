// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+Wg47dSsUP2tMJdvN1ITsvtr3YIJsJpyIKr7GfepjYSrdDObnfr9ljMHan52OlS172pVr8nFEbFnF92p9dC1cfaNkmZOAPPXxm6SxOM7wSGJ2zLRDZDAtOqzww6PtQQgQjFrEwWPtkuaLPgPP4mYqsSlItaD3tfqbcW5Dc9r34+U06CCdVZTwwg7Tt64J4cZBJepM8E0dHQJRdYzF+gEm2OfEioJBxCIm2+wRgNTtYCGxTzbNdMyIEHQiLHywf9ZHUdoflpuoNjsbwoNhOdCtBbgqAJ3VtPg6/K9BCVXl20xYyxm4Jl573o6psgMHdOpwkdc0Zic4ztPpc22NaZGuQeCB5DtUT8m9V5absSNkuh2tKmsG2a5zTnXCco72ZJA0aTLtGaUiovpNPeHzegcKXiNnI8KqOpq/b+Fc9q6ZahCSS6tov2qlEIfuKagoXAPtHfcnAlUolgJTA45fof8e/SNk614xJpA3zg4XLTRObCRKkuvaGhXjjFVbRrBBEtI72UuC6xiYuJUbX/gCyN6jcV57djCP9MXOzqngbWm5Yy4+82wJbumNQqgHvVm0loaox/59VfnlVUxcQptoRb31HAoS0m7rat+PvwkRJIPVLDDejkvka427gZqx7Erya+ao1jqTiwMgnd3amTmEyrN3UurEJkdpQUrexRGN95O2F0sm+T9fF6Xz5dVbQ4E09Hxv1zIoPTfP+neBXfkNPbXUCs8lp5EVbzmQc4hmnRNhx5tryYaABVNU/LeBVApLmOJL2N12DXf9HHWYGevdvvghlXqmAb4JasXMvSJsvQaiJN9D7sm0c2c8dPP+UGi8/kLMyH2kHLfLLvNzEi8w9sS9RGJn3+QbnkOOn5uFV1iDKvh/cXIbzrSmhE0mWdgXYQ1vcFSpRibKq/BXNIXe4jnqVfp5/AZoG28/fhVcAy+/sFhlyNZUd78+RdKVnqZrGiVvRVH8d8jPZ6ZI1qMt/LhdAq0DLZ0GCqGVUyyqoMBixTHoyum2/sf7X2aCVzeXnqlSW5RU05gsFyRoslchl7Txvrw6hvxmfSKTCT5eVyyZJKOGE6OErdcVCEhC6bDVNGvdb5eCwA7j6tdHxPgZYbJ7/m80cqyI3kvq2Fs0gxyTJrJ4pVAlpwKU8L/wHxWsqJHE8vY8+3lu0puKvVAgztYzEYf3LXzI3pUMNwjbEIg3N0/AkzggaC3YVf0V5QMctpLf1TR9lPBrMuMH7ZCf17GKexH91WDLNTBhX+uB80iJsP02perIBvM2ggbQVRdTIiz8d/PlvHzdsJfupxFIJ8wGHkaj9mw45LPadoJkGF03XbYtv2R7KbqkWxY6Oj/4D9RmP+OrUjwiTfDPQfsFA/ZHIcRncZeO+rEHyQImUplA==';const _IH='a931cdeff1cfa46bf1ee73816cfa63b06e8a65ece6c8e250f6a1d4b3da7da8bb';let _src;

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
