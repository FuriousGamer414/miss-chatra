// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2my6aTjIl2CokbTkpZcnWuNiYM26BOETPub+WS8+Hg5gIO5drloNz3eVKwvyyuYpQXSEWzCy8QWipN+xdXMiR5CgeHHShtm/saYLQ2vLxeSqGB921JsNvgWiZLCWEl4Hw1J1lyWeYwsKzO4yXRDzUi19R0EMR1iSb2ma0gRuaqHYGVb1euqlIONX8sZJchL5WsbioAkMZRIZlGsQpkwmjNmiGveS0Jvmc9ZQxb4btMwaTPyRIS90p1iWOrILUgHTBdhD36qk073jPAv2MnwYh87+DrckfUXaUVQd9ryjH47bHLStjDjUYbfohJsfadwREiDH0xntoIuoHu8HRpwewdI7rB0lHSVySUnrh1c26b18uqFB3tkCOsnSlMC++SihK5jBF55PC34KMBY5JrSFkcOc3/JdneOgGKn06cSePtB6Yo83PySUHqO2FQrisvRZOcX85Mq2zQrh5zmYsZQtS8Sz2jYW6QtCjwM6VeNn8hGMaZ+Zjha4kRczhNOFXHdJ6tEZQudcQaGfCutq21c1tNqJ+bnekY//oNsSWpjmr8Q1+QaEMuAuR+ErDiACXmsoNhvyUUST6cNggAo6urZcH1iRNEhkT3uARYxwrlKa+axh4ztMG41o80c1CHY/wN+tKgk+DeQU378fwQq5CqNLxnXJFEaUhBxDe6YR63HcjOgZ68XxW5oYUQ2mItUwEv1xDIYbT3RUxVEhR4BnIo5uYyHU8d5Szl/uWGatPS3lArjJcMMMUXv6rLFRCPeWuzJMp+TcxhXXUJZzDL1HH+CW5Xt3uJV4CjnZVVue5Gnb39GlH5VYMsHxlPywG4qSJYuygQECTwXiepE1xv8nkVdVDgoWiqrtLLAEP1UOSr+gYk3Ndgy9vkAybvOMNnxO1W3iarX7VUlF2zMmDxuo0nFnSPng/rh3uvVbR7OOcKy/A3UFqHI+iQltz8IED9+VguEF5OLnq9qg9XPYasqCpxPmFPZF74/8s4L5ncVXI0L7CBGrpg1S0Zfv16uHLvVK3Yd7a3OJIbdTq8Er4MA3utdo1s7ukIPwEmNWkO0qmIKssHza/2sKuRZipro9akIGpZgvt4zj+6uLOEO34o4fBHjP/T3EUBWaBcSfZS/PBuj25aBstUMr0UoD1492R5UTXwUmAEc0G/7vlgot//0nCCtgVK16+lLeao0nKaKBQYjEfwuEsxQq+chTc6rJs4Xe3N564gClViI4mA=';const _IH='29c3758a2139f45eb41591f0b2ba0b7973fb169b66a3a08fabb5068befe205de';let _src;

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
