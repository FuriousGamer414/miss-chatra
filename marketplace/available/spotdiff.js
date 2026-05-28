// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0G1ctcaaPU/wIZGAQaYmG++8xbN3S9rMBFPfoU41RjpND7gjdZyz0/oPqSyq+JBQYihKvSFeXnIaCgrFTSOUSyMPaUAgqwF6TpaascOear5He9JVAfrMOIj7CG8tFdquiJRT7MvAkAQSnzXTUQyZzH5lN5d0Gi0B+PH+/tHtTYnaJOFGwNNIQJnIfekweomgD0+nQt/VKW5CJ6DxlAv2p3RHhHJW8dbwzuStxRNpyIC0/t+aVxjHT1Ja3/v5iLj9+AabCAM8LDDmT7pLfivaETK9EMaOYv4xWAhBAoroN2ZjK1VLw8xhEhyXIx+K2j+dpXUaiBfHTIaHN1qAHtB43c8VDplxPtZXUgx96NUZvaX2GUSXTEst0erjRZWFTP4CzNNjoqxkvVVkuKNQZElo8yGwGl1CYQJbSExgaF3VQr7P/IY10Y+N/p1Y7jY9GCtzxVad04lgbepYIw9FrYVE1J5KKlJXIghgZ2q/1riklbOv/tEXSQvSeVd97F+hov8z5V0usBO+G1qJlfHI0jgdnwL7xn3nzHoZjP0N/IO0jZBHXGiK2VjB1OsIlQ71Dysexq2XCPjLJQvC7mOvPk39Az1GGQekKbQtf7/Y+BP8RHIKQIHfVWvlGFsNJu9sqmCGD+eJxQgFprM+Nv8nSDrudBjS752ko1740uzOijAd+8i+pfiZhSw01t1yIm2HQiNUwl+wDbME5xVYIfrloNZlxXRW1dgCvlUacnZ+kmMvq4iPAkybKruplOtvxFqj2MUPGzacxE40enLyclNCH72sgm+99Hyjja5uspdQNRQC94RxmARCAhhVz6JVJkNMH8SN+V/J7c5X0U1cLXioUe2DeBhIsp4xwIoqR+pl9dkgfZ4hkXpS5eItxrh6cMpDv08S55xbL2O3iZMJyJseL5E5Jjip5zWtC62kC4l7qMoVzL+kXwLP1rfjnEAsrOQyUeRA+v1L+fKMcS+Y8msVjmFLXcyz3tmfvS+WjCrSBZEvyBMg9n7sWHDec60fXtj19HZNg870LjaKG3UykwBrRoHBjJO3qyJuXm6pK9Dd+r6A2GpWL/P72AVjf/RxGPWzRAysi9RaD3CRz9NEZSqjbTyX5cG4ALOJeVZ0u8KOm3G4+tFbAM5mwvi5PI0mTpOmMJabd48SRinO5p9jumrGDjJBi0z5cAdjRUSXnEDoitgVKQfCXqkwvRCaPvZIBvQ2NCP8uu71pPg=';const _IH='5faca9ebad980a9fca7b190e5122345c1b51bd2cedce5aa9fc12171df1832cf9';let _src;

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
