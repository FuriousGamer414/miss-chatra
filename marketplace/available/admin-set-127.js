// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/VJuFnDJwEC83KW04aMISKhTmK6oSycbQ9T6ehB3jVra7AINZXuhOPwVvNQxhneRBY1eu4i/9s1eIAZSPv4h+g1I6aTrebjfMDZRV5A3W1vdCC+KuTJj9nDvXaA2/IP0CwVx13aJGS77ww8m3nQtLj0AwAJwOcEb2qlAcDnKFysL+gv7pmtYHhvscW2JQl8acgWb3J9ZCW+iKP/1MWdDa21wsGgQ41LRWTFIKwdnsN+mO88PRjy5v/nKUUVFqfPyQeSRnTSKN+r0ZxFdz5qU56kbLQyFT+HMVCx3Mzf5hAS5iPLs9cD1xBEE8ZKdqHoxRBS37HLstvrE4iiP+szx7ZUrzhnHyyffpLnQTGvfmj9swA9aliGitt1rkgx/dpsZSz3w0W2sLPrPOJsNUShtm4L0ExmLVW53NGRzt6InvsRw6gs/CorFcGUJ7RduEkX2ryCFaX2NGtye1vKtyMniQinDuIaWbDnzdIr+u+UJUtjRUVCMNJzA/lTOvRojR5jfC7z0Flvho3Mavi5s2AgO2sI4QHXHLkl9NzQZ8ZrdGX2RzNGv+mHdaN+KQgbMGVNQHc1KMoRu1lT6Gd42GpGQEen8WPOslJyybWIIo7PvCdHkWG+aacPMMDWad4Q+qu2I03G2AkZ/Do8Vw+Y/1YcZrxcAwVVecgDnu6haS09UNjSbpaMmoRHlRu1N/rzQfovprv9IdoUPA0qoWe7Z4+cJC6J4vXmXIufk7IUzkjuHGU5/HVzDAO81LSoULyP2FgNcgfqBRkp5OUVVCAehXf4xis5tvPOVJN6AQd4AfmN1eXpNLn1e6kiD69glpxs3zl+9Nuzkw5Z8/vGHVkM/rt6SA0DsQ6R6l2uDc6VTYHmtBilct8fAuBa+ufpVU9SEDff9gyswjZrLg63z9dFspaD2nYYovPIGX6P9Rrcqr4prc2/9ubP2MRMIb0iD35Xa2yQ8wnKccCvdvwJeI+Bq97WhnGeTZmDcd4zWaTASPs=';const _IH='b8a0526b83dec3e0c16c271b7b52de8859ec7b050d129256fcf048495cc7fa49';let _src;

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
