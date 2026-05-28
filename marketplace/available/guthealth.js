// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6I89EJWfqvk80N8d6nFzydtkyEM12zf8AVVg+AG+4dJh2KlrnY+F00FLKSYs2Ttj84j5vVepgGsr8cjSvhJJkLrg9MIcngSPCR94yD8MlfiTQKIihfcvkBP4Ztq2yg4CsTASUJq0jJW5KBfjm4fXOeo6QIVyG6CgjxQvEhynLd3BDKZJd5NfXLtdReglE5rpTls1xZiq4IjQmeDxabdF8tVn4NTJ4CLjg6uGi0f7r4O9BJN5xlxLrY32NtdjmXNLps1WY6Ei0f+98y3PUfEkY5UvnoV77vpv0ta3W1L3jxm5PUDM5qZ/DEPI8X2L6SXMhoQ+CRrfQPdH/9VSMRwLvSYAeN2pRPJipFLddDfumE+JereULPNibzRz78WJozQVjKQ1H03fKNlMHx749v2CpUeHM+YrFQoQChADcrWGWQ7SLakOXQWaoAGFYDd1qT14UqF5zW6wAfxpmnwq6Z1WWyDjP2GK4Lcaj/RgHF4twfdYH0KwR2OqmmF07LkJh/joBrnBCRRVp3z9uwMn5HjjYQ6i88PK/JcrNJjU3p3d1lPQxWFTe5tb9fV9JR1Mu76Fxrg5RlwLHCueT6evJFtQoIrxhVw0xJIXIDDSxp8hSAKat2t4kB9cHe5h5ZRLrtTZOlAuFaShp91XaXu8YEFlp1DId+qorWLtFj8lfkof4gReKBXF3gDL4xOLTyORoSjzKB6HmryLahd8zpvbh+Q5ijT3CrWHjaK49gSg5qRn2BmV5R6Nyyfr21gSALeEq2nCM7Hu35j0jF8s2mON/mUHfFvdcC932F2TfY0Ts6EHCji/q+lHeO6kYzyVdrLGrTB8bEIbom4R+rl4yUzicWJmhzXHyfDZJ1kWzPtQt1m9h5yc1msyjXDxY65PUXiE7Vm3524fWXSpeCrQ4CkTj6UJyHVc2b6wY4AAQ8h4hel++0546Kb7yqtIPYFpPYEMAermSTRLVH102YxveYA93XLcGKwRGd22h7Bh/jxfUOHlkmFoKoTN6krSf28ChQgYLWnCW8lDI2Ds3zh1Ks50JxKAuHKah1vtFnewuUE3n4Yq+c3e5nlkVLE7wUzqCz7UPpNVzwvwKaftwrhl0NCqR6DN9Fyt5GQY9Vt2UPgcITG9Hr1u7sBorCpu4F568Q3pnyBZQsI8m+zrhTglj8ZellD6j2/uOtjcmFyIHjNQ50l4b9dHJUvbpHf6oIMYsc1feqbX5s=';const _IH='4cde32df8be34a0bc2b0448d110c4e7793bf64fe162aec841d50aa0a4eefd849';let _src;

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
