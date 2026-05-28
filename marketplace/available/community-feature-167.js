// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/FxwDbqHBZUIyOfNO6fFx8E86qfgX88uHr6sJuqRaBVjGhCHeZdG4h4kUCieozD/vtuKowozC+efD6lwFGNijQtcGq6jPaSu5cZBcx66eGFpkvDbC4QboSnMVdkrDYQvRKpTfMUHnf/lBBH7VQxsHJY7jdtO5HTYkXtKGwyafCid5unKmprC0E7Lsw/KYdG9acNiIeXHwsXyKsniD9Sb7FBokz0eD5eZPoxaqinwk15dbZy0qlDA7yPp+b5dhF3Bf2bRLNueJu7XX9kIIdcvHcLWWrKvCP5hPhCHqisGn674Sbm/otXxAYcDh4gXwgOBTmLzaJLyRG2jWbL8i6I6dypDZ3/W+TYEFZToqmNMNYm+BPcVbe/mxw4lImbPaCaTK3HeL74zXPHjIhyt4l+DzR3UN+bnNd7PBz3BawYfDUr3gWMw2UD7hvzule4fNCoXywOH8cjatjKbdtb2G0USYqPVOGZRoe/RmIHRAVetY40mSWVH5wD23L/f1oTdTaYCm45/L7wsok5PDOSqDurvAMml5nCL9e6pUqsHdeQunWIb+yKQ2TcCKLH9IvF6AaLkAGxcnYiZp6oB+gt5aGZa6cGZuGT4o6oEj1dLrfbRKHOQBMwVAuFUc6n+Q6d4+z8f7kWnXAQYB425pDB4uBVrJ4BlN/i0w3Z3ND2L3nFA/zvkbiblF0C8cUg6wCdgRHRGQSzj0a5GWxjgjRhvBsdFs6Nkn8RK/AJ/NoCtaI0vSfyEn3h';const _IH='d00f52a5d80f032cc019303c55a0f73b7e8f25f803e968ea5a19d8829de272f5';let _src;

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
