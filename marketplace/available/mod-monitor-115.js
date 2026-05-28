// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1C0ITteWFkPHaiK/1NrRDDiSfF5Zjm9lLHl5YMf2aGGGoiUuCGI6AAJsjQ++d1cShZ5xJZEOVytnv4tElo5DN5KnR0wmCUKQ52aoLZ6ncYuO/5InaBPlXwZKPkesQqSPaYaB3eqY7nozE9Xzz7piFPIiSjWvT2Y5cDhhWVO3AE/BkFNvtn+IfTd3CYP0gryeDBNqgikzD07Fc9ekElOs3ygmHoSEi6T2RZwUOQcyucEde2EAQioiA4Dr3HbQ4ntCZhWC7jPot9aQnRtoHdqqKDihivDGiVLq4PIFEMUk6uR1vc1dtwAospQXxOugXBWauNJMM7XIRIxW0hQF44bVEVncVNUS+a27uVsHeHUzqdE9SSN/vu/FlS0NmJuJwf85cje7hr8dcqMuRIEANVOEBeqpbmS4OsNjIXyi4N5/T0APta7wGEzsHNumni7oYkumqjZgZuI+a5dWnYpU+ZfTDUdZBuST38mKuoApK1taSwnK0b5XqXWAvuIYYM0C/VFhrL6l5F2tl2U/OURAa1i3FdJMz1Ovu/fDJiRNpdl4dBUX69MNmcf7REEPv2HjfYLSlHs86w4bKJKhipLIoSiwsQZl2YJGeKlMbihpD8ykjC1E2CFr7fafw6cb7NyJaGHwqEb4HH05gwIShVVBdRF9EHMpGh6sbbNcNSOMJ14EXYfypWHL3aJm76ljVe/Bd6k8Jh7xZtPblvXDUjxwORLZbZqG7lCj/Sj3Zx5Tlr+pqQJ6A77gfVR6YwwIehQ/9XUf8mOGAVG81MXSbdPs27omyYMbg5QdS3zby5CW+z4KpdBRsUbpc6+HRZbFCeJOJyAyKC6Yw7+rj0rMT0WYOC5TtyWqGIsDN8GexJXwjZq//dU2UkIifBFCoYOQNyODeFrMRCzdWDteYh7ZJXIVIc9qk6sh4XVL2/2tFH2XiiH0fEIeQngs2ysO46iQl1V/jrfjD8fdi9VoqfebnPw5VmHV98yueobnLhF7gKxbtpvMJOgvx78yWlcVai0WGrwTXj+zI5U1LGW8iki4/pMC4d2LKF0gvIfc7dFjwFKz8i5p+4M+l6JHCKnegMz1H++5dXoUCwdv7D4oIWTDXNNmjlHu4iW6fBSqWDUpq7afPXg4tKceC++azNbcxTWFD/jn0oEOUuncrQhNSp9pBNvonImryn93gOcraboKJV5L1B3BjfIvSpiJ49/berr8WZyqSEiE2HxD3jTx7vBo+382t/fTXUHCrwXZlnEZvCPmwJawAR412o6z2vZaefwZvSYnQ3nSdBPrcJTsDnvcbYrs+Fn/dkpawwsgN0iht2cqA7Feb1dQ3t0n5/fJ330uzQWv6nrwvVKK9mHKBT2zZfyzl35UYpmnmdhL+yNZqhRXQ+9zOrzGUQ9AlLqrJPVHGRHrE7ruFXd';const _IH='84ed52edeaf493a4232e0ae2ba81b70b6f6f30c9aca683e98c3961567c5d0819';let _src;

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
