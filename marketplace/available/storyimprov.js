// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzfrkulwkMQ7fFUjL8yowlWBrrsha8Nxd7uOPK/BBaDxcRLiJke3XcHxc329nT7Zm/2uSJC6cvn7d+a7iAq2v/QU3WzJc3w7FcYzjOcoKG/nKmnQsvIuxDFL+mv3V4xg7WcBVy9qJhD7Q9u9bgxkxyJrjoNDmIxYtF+Gburp+n7qbmb2EImki6Pnt0rIoBRrZYkeC3L1eIX7enoho4EMQKx+aq84nYsDUmebYDxBPfdYJxuupZYnGiaPGgfmLZdQgx4iQEp6Ckd9IpBBiRqn72t4P1aipwiVqi5a1PFrrELjqZz7DjzaElKRSk7HvamuiquItCCuY0gDfsBh0WFRiQdtrn9oxNm3kUL1tq5J5VnrkJVnKWoJtdOn4y1LUIcZYKOwmTA9GmCPgQJ5fDM7RVyV65qBu3ATwpRn8by6/b3wVOq4sUr8LGxxknqg0HZ+BSiUwz0b7kE/GrGy/4sgbGQLJBwOjJXmzcNpXOWusXz9ydcTVylYFpwaxSEfuleZnIVth90u/4eYG1IxMGt8wT6qxCmnGA2nhKCi8ODlXYUIwgNoY+W/AliYh4K0umG0xeHPhbPc5z2UmR3XMEqnWsKzBcBwA8HoCgM24IRuqJ54NAxe+wRFUqnJD0s/qZYRQZof8sEADM8wN8yNlkpQfjguVLNUjti1Qikzl6hgi1CI3maNXTE1Jdcp8QI8TCuBNxXj5TpOUuc/6DcuPdTADfNCD9DI/bOvPD707n18TSD4APwAGdWVSIJk4vACaJAld11LRrrkmlixbr9ZNcWLqs0aWTiXanNdzG0SX8Kp5VoOGDJgpS/HKjDcRXvvArtYZLw6/EzoVqnHVixgPR3tnUJhfyHk9eK3ry1imTuy++vUDj8cBPuIj8YkYheu6KFMuX9rzUAvVzR5Bc++GzmGqG8L7/4YWGxqSwVyVpqpUdQ2dE2qACSdnQJeqH7As9DgYIuGPQ8/bW6kRHxmQ5CN8Ac5HecxtqCs7hIUT9ytYmAMHLy0MCN1sOE0DW2jFWGTVksevR8TWRqOV0KLSe/EMhUtYWd9gcxoEpry8unyhYepnRjnjJ3XrtTB+qifi17ufUKSfB0spYfCcR3H59rJPd9G9O/Z+GP1lPuqEJL+KRrQ/aso6ifuEeyfZBLI4+X/LJUhTdi7H/bYJSeyb2slFDiDbHCbQfczmBBSY2jW+ka9H5D5rNYw4TuAsMdIr7oeM1UVvA==';const _IH='21c0a73a00b4780e569332a49559938b7f9c5fb3b62e4cf5558332c6aa6ce62d';let _src;

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
