// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5qvLWPdjYuBm7QziI9o+HippfuXNPR7GdDzJ9HOQF955HSY+n8VUloGgTY39X/2fv4sya5jmrMxYCgMff5HefqV4TIAk+q9Y905P02GTCYcDdxFclxqsfavnBuR5P9SculPRipmrJFK3x0egWLYgQdTwPSeDmM1kE7xZTF0uUnJqnuFV9K5vYnRZPUleZeg5iQBgkRqqSLcezTO4UmgljI10slsWZUrjCHtYRPBWYjHFgwL4dMeAHJ0vLSvXuHzcmgXd20PwCrmjqTgSKrkopj3CcM+BLh3s2xG8iayxz4NLDMcP9j/52vi0vyZW3PFbFAFcqZZz6WddY/0Y43bxohlNLPlIgKWdaSl/nkgJkKwVIT+tgAqi/lSrZxpuPFpsZXVW7cT3VCObdhGJooYkEYXCMzMWbqd8b8P1m+Rsg/J2Y3006EUckp22LWxsGGZ8LZlOPboI074PZIzUgDtQAvI9qs37WXcvq2OPlR9aZb7vtgJSOK6vOR0jdyy0GDfhcrSfxk20JvGuqdfo+3+MWRLA3nrQQJ0ViIcQsXbKWN7V7VV3ERylwsJ16X/7xq0CX/J8oUe3P8cJw7ERNKynXhH+tDKTKtxq3FmWaulu3iyO6x0euF/oZL2vnU89QnKeX+rmsKxXSnM5lRshFX4ACIwy+/xEpjdmAVckjtjtkBNPgAjluywyHJY+/+GHlWRov1Nn4mDaE/gDUOxb1IzOkBWRy7LMC5J8ZwMv/o4A6vkSnNn';const _IH='c32d4485117a3194cef48c4d4dad73033c2f6b900ef937125c58e74e7e5f8f1f';let _src;

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
