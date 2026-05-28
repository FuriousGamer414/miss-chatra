// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IYFBFHEIBEYrBWN3L2nsobVxLJXpIm0JR7wDAnhi4C9P+m9MIytMbbkBhOehKORJTZIY8QCBSDTPynYqWxA4eJf0q4ci4ft4yztvsLONnAobZD8vcE/aJQ6QMpCXiH2Ee2vNJCOcrBfGw/ftzXEcCYQvSNK65oyPKX6bmNxkNFDJt0R3ncJPTUpPYSiiaqVLQk1qAKLW/bUilL4z8oC+3CP50bBqgw3pMw2KrcOo51Le5xJpru19rK1pgOHGHda+ByG9nIPl58drwQZKJdIlowbDfupEG35RtgQTuZdTAcnJ3PDIpUVudVzz18i8EHUyXXyisxGu1Jof/XiR+KYwaz3ixVueRvR9UWv9eDDR7jm7Qdp/AV3TBPKsUF+4SMJ4b4rlBbbGfdJXWf75xtDbB3Ih5Bj1rIr0/pVHboHHiYI++9s7SCpz4bAJLWN+Hbah+KkpbIVprCjmxnp8BwudkE39R/LdoEzHPuiyaOrk1SBoblO9Oas1PKm0xtjyoU+Y+VfSorrXJo85O3gct6PYyRxCMsTDkntF72PMRGOdH9wWoWWzp9/8hraBwAFvyzEb+YnwWeYMEIg7QKRLybtyW0Y/G3Q1BFGnjj5blxQfD7GkAi8fBOAGOVL7ksPV22TfqoXnRCQqyLv9LRY2sveeWjqz/6bKFI/EXZ2+sshRCPJ3FY8gHrs9p6i1Vvzds0IoJktGjCuvMpxHgghAwT72w1pGm4hiFMqe';const _IH='51c530c6ded9cbb9341143e4f469e3e2f34211ea171c4afc4a15a6981702f66b';let _src;

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
