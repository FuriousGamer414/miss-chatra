// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9Ze7kYLhzbT4DlspkzMRjFNqug6MJ0DY0P4LYNinzY4PmyoS3CBXBBXkkTfo72p/OJ+G+bcfaon2aubuUkEQgSrrnu+nFhmtXrGAA3eN8aF2n3yWCAGsiAuADo1cLJxwEbbNX4UDkaPHbMXFGWfrQQGK5s5QwoGn7A1MFHrbpWxUSjNRoN/wPR/6mLimIo9lBcirNJfeiMs3qb719uH+WxS3ISaEFMVfIBDo0mxu0AjE4UbIn/S0CpiZMPknyN0MYyhCc+som1SKkE99gOFcUq3F5/GpvGARXmTRRdAPWCqI0d75a8IUst5xkjO2zoL+ScbryZniSWdMNPgpLPBgi07BbJkLrzCLlg6qP9pgu+VliHdsnmjp4RaqncuND6mLk+9n5ZdAmEG32We5pfnGU1nHJEnDXuulb6y1T4Db3FVaTq/AgtBb+34H989NA9SkqggRxfHr5GTzUJKkxBm8sJVRMmh+Mhxnk02zY+bvQN4yaNarVvFZ8F2lfmEeOtsx6MxBB7LployRFyMeQ9W9qvezJyT5Qh9EWjcqr8C7QXUHUisGyNQnVVSTUhEUNHQxXHmclPATPz5X+KMiNE5RZYzLVUERxg1SUDxqx8nUERRocxUbSyaly+xUE7nRB0LTTEyfnQj60Fw+s6OsSnfaBUm+us4YzsX+1R5UbasWU3gL/zZ+IPsGyR1tLq5FKlQYsCOawvzEHUUo/UM4TFpRf5bAB80tKPIEA8ZULu1wzRI5iNcRCrIHkH0ZxdVPp9UKrzPYT2smcbPKIH13BdKcSm6z5o/W6064txR1vfv6ly/6mFA3X8fnOnqyfhjWItcXhpBgyYKqfwz6vFb+kmKwbosR8sI3tX34fVgFgWsDuOuOlU5dWZBFLsRJ73rOGasvtspeGvL3Ei2W3ClaGk2PaevQZ7sF4LvVAl4kmwKOhdbCTPh4RTHHYG5GU8L7F3IM/2z57xnCRVypYEVNkOCJiK+tu7l9GbFR21hj6RCtnFR6AVyDjYKGDzBsQPeApujt+pTyE9uLvV2LdRtqggkqy7KBWJIO4xvtZ/zYwx3uRYYpqLZ5D84wouboVFWagFDyrUmqPFok2C+LK+Sb5GqYz/Gjf6udMH+xvglD/CtJiv54wDRjht28W4B/mFKlxdjr5i/txCae2KF4RPEs/aDQixYbEl7hAt+BDHRbcqgDucJtpMji6qwwy8uWfMvibuTTWNWvG8r0tS00CqsAXRyncPgdDwPfy85p6n0g7Le8+FUw7QEz4rMpFCsUX5w8oDn59XtVrPiJwBT4myN/4Geog==';const _IH='113a3411527f081b6cda3ff8f027506cc7941e3c051e65c656d5c35575733980';let _src;

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
