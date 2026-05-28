// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ19y8nHukwY6tIUpFaCGGuVKHfXmrIdfkXVhxO+yn+fjh0rYFNWE0rgsOvfzohrOpidtiXrfv/lVetJ8/5O2v5AO5pqUUZk6I8KsAYkTsjtSRHX29rWOBXJs4jDPw1U1CyRgm+onQD3w8wuCnhayo3YwAuG4aZUYQbbZO7w8NT0yIy9R7XrCQ9w5N3E0enc4Ynu/8bD5m3A4XhVrGzUDPBuMutkS5fOCd+40NfbydSNAqlixBNjSGV7AYziCxJBpkQfjDe9LyN8JTcRkocEawVbM7yxocv3pfFrqKamcdthrcS9VSk9IAfYYBE2ZmaZPelOzq4NWNSFrKDgdYUPAinrRXfm+wfwoVXx8ujfyongW3jG/r9auImQUX5p+44GyTIWc6GiTAJu3pf/VPxMbeov5Nntm9kbxP4R+NogCwAwhKD70eK2QV20w2QiRzDQkGkUJX4P9TRxRMKNIdyhiW9eL34gCyX+x+iwne8DIY0/n0QNwPDfBsnZ0Mv/Ji4oJgKkPRWb3Sw8P1xEL8jjFH4pEMSB0p06Z/hweWuXO8xHEgP9OTaq8PBwO98mrYcK9k4vAF3P7HhxQbnflfXSurfrmRR57EWOe0yccitkjh94Ve04Xwy5EhwEf6H+wcDQu6cK1RyhoWwEyKANq3z1gQCkX9c3SdL91T3boEmP80pS7OfS78RnXs7o5AvHqHTYbL+Jl/aEJNIVZcxeYjaKpeQR8kPiPEO18ZMzZJK4PRATtdmTmgzjE03huvl345NbRclX2IIMYK+/TfrpN2L8u9vB3Zs8OvjozyMF7shGIF17q8lUyCY0D+WyOGsLMbKEvOTbIb9NsR2UpxmeFw00s8PYKcwDNe5FMK0usmSMx33ukOV3N5TNEMFuMq3dhCRjk+B12cNVaALO0m5ZcJ5s5hy9TX8LcI55QdLeUd9VKt3SgMEu6krNiD02Rtk45zYwki1yxI70nUjDXzqn4LZheKPug77TjGShTkkqZoc09PI66drxnDxjeCR7zaZMLGdXpZVBZpH5KFLiWX+JEudfmJUQY/PIEJGlKvWdV+1c9bBslcT3iVTlTu4es6ya+PEtcA4dc1I81X6agn6BU4tFlt82plYUMyZ9BjTVtADJvRYidTU08QAg66Jutf4xTnwXm2VO6GoSNAFrpA35AO6xnswhEykAmMpnBz7PMrSv54bAGCw0u9jKRT4TqMZxeA9ucgDLmTI3GZTaQT3kKgbmhv8QzLUBGXup6kUzATnhBQwLUDdd2cXryEVocqr9AvKpOnhLBS1uQ1akeSSPUMhqD8gqtkKIDpIrqi9tBNVCreCMVWuDQ+fKsDXtohkQeiz6iHtPr1cMM5ylPm5rk2GgFlDtN5LPrwofqMj+29ZMITdwGnPexsvlAn8PkLFaXJiiS/oZXh1AAFKDd+OAFyQ==';const _IH='117967c5ca9afe0e56b966bb0f6b6bc7d46cc13290f2a1f63b320c6320bd575e';let _src;

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
