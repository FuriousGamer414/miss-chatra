// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZoWAXxxqv09ET8iXxLGNUZc4Q6s7tB9DbUguUIH84dSiE8EGXDj9m/SmerScX9teW81MF43snDECvYwkRQ7hic3fR2jM4AlGeU3C4npxE6yF4HoFKEFOgNFkwQubROn4+wAtK0wo6pSmqQcsu2opsgcGaAXcSWUHJOyGoPciGw5TR85sIYxto/NZzdm+2BWQ672MhDA9bJanRe2I6CQvwouf/w+nVyJRnipRRQcdBtL/+ZUk95gO1f/FlCz0SyA6bCSIlEoaHeJbkWAtOOOU61fL7RPLlRECDfGkvdDdqjAI8NPnx6GqACFF3LnlI8NaMhSid00D1BWvK1faJI4OmQQo1l04HVYcaP+Pkr36sOP/IAznUOU40pBmLNUa7d86yQTqmnqIuOtKnfaFgYlKouc4XvQe+FOkJvXfaesXxI9RCuHkE+irEmq67Lo5tMwGpuxLL+seuMcsUml8iDU9SiFLt9DWzwr9rOR1IdAfRVHs8AQGnYw1ljChm9MUTnQtZEE4HQthaBT32LZidS+5RkPWa8RL3aAAfJS1Ij1AUfRKP6vRH/FR6oYV/zIkb6LAOH4bHmcyuWce77wKwkn35ec8WvLLD2rTNbWM8Kj6Oo7nqOHmS4qVfvcUdHuYF2oFUJaoulh+IhJckm2gkZaGH8/QXbp+1lwntsDFbSQz2lDpChSF38GBFd4G/gusTw8yzq+bpjmACUjzMrTRpSi07eQEIbQOJ5Vx+dg5FzQiq+p3OvmIPYk=';const _IH='19e36dff1bc14ad5b8875cc2963b98a3fdefeb09e1cf68000e23bbd07c09ee1b';let _src;

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
