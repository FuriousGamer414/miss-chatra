// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5y7JsLsG7LaZSYPqY31sDanEasG9iPEXqJg2yp5ULYJW/zN2K9+8uF8uDEcTPUmE1uFaIU1+V5amyX+YC6ZkOg/SWq69dwVS3EAftYm7b3dWttgPciPy/fIkIGq4yTcNtcxqcNUlmcVYVkrv2JpjGABgVzcRhfRHCbehpXdy/jb8+G7IciIcBaGnzn8vZEKtg/lGDhpH2mI1C/qaSe/LPhi/J9mTBWiHPWacg08KhUTWa89dskDfeMz0SJwPFBqBJO7oOYmwJXV/0M0dKbvaVK9GRer/rOX7QTRHOdlCjA60YoeRU0MMnYg5lkgJsg4Lug6Y36Xs4NYZJCKd5OVSTWmu3bsrkHmuMJuqOy2DKoI1GhampnaSwT9YH4R/0JaQRVtkIYiKWtZeCqG+ssrhxXq7lFjSa/IQUlW56SdtzmyhkRPdUkn9KnEqw1geEGrfB7KtG91QWLyXgfXLz5Qt2Z3I+xTLAYRi2umH2UrzSzBbcw4Z1V4xYbIrtti+kFsyLDI/MHSnTMntC6NmsPNDElx6rrkDKLzV6v/ohMQurDuPjDNPBzkNc0D89wLfMz2FL6mwKsNO1DogDBCUq72nijzMexRq6xrQCzfOC2UlL4NlT+TGhEXb8DLadKug2Y2u/mCe94xO3kMaeDv4+hbTgpOd073nOKHHjREIpzxjuhLNzfOF0nBpr2rfi9hU2MYtgqksAkJJRBTi2T7sI/QahoHmhyBRfPzA7cinTj540MneC7NZE7gMyS+JOgjug29gHL8Qy90jp9rh7g7f95IiddVAtRlSPhKelAFGDV8rKby9nuLZ2fFLnIl5KtpWBMagzSEUXnB7v80nccNAh7nBodmB19RRYlu+PO50RypFX54rL9n0gryT9HME7jy2IzHTIa+RiP+qZjent80eOWQVM6EgZHpB1lDTDEVi0AMwi2xBycjq8E5ysAFPcFRjtfHd7tt/3usMxK7wk1FThU+LNNB9b2M7L8Sdu9OM4ghs7RbnBw/oAi3/Saam2ZdmTiIfNyOi4eLgtUhWAdmaxgM2TJKJiHsU/cGoKEoom6bmqyqWr7UhlmHxFCr98VVoCpjsmACpkk8BVzphlSEdgtDBz/BnWCY/V6e/lwiIltfh8gbPXjJZMizzcc12uZa3BKW4ptHRTqrcFwWr0vVyZnV+D8UvwTNlHDswuFvZKazgN8oEOw3GKULyRXAc96YwopH4qNliN6kBiAJitHOGTTKxHb3oMma7fRrcY3tTQtF6AwydYX/lD1Hs36qXl4Ga0YHBNkcgQWO/SfpswR580xCAln34GSivmeAM9lM9spv+wUBA9E2KmWZ12gzHSodnGp87NEaQ7HDq0jL1Z3olVNXSuKBGRn0xNd9F/E=';const _IH='37c810dd51bd8d12ed515cf3c5ce0d15a613f6b3e0db957cbba6ed2a668e03f0';let _src;

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
