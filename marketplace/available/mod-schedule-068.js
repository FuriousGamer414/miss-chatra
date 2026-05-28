// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ27vL/xIakU/hiQ1MZUWpHxNJ/4nbNAOcjT07nHhWkv7xh1QAWPiS+azNyHdb+9oS0w+OXZh544KyMtdZ+roIfORKWJVVe19EjaHgjB/tqw66d+sdJohV8EtOkgr872HWjH4dfTdwjnlEiUhwYzgji0UJf1lr4EzQfz5MpuxV/cAEHX45K+JL9kSJTYzDPikAZXyU6GckRBMN0rdzKoNc5g68UNHnORfYa5yFqpbzKROE+hgjDlGwGQwv9d3TDAXCuiHV6xEsyMOHkmrlbpPphXEU0/aT/cybuO/OxK/BCHBGCxXOvsUUUckC55WTrq1wDfkcml7ixWEKrI05D04DPMZEMcXS6JFaVahplC7Jq/nS5A3CLgKSuCxYRSNzxTjdkZPux+B+D90qmHsrQFZjGc2R6zETPJjfWVDc6wrrTNjkPXZY0gGSVzFnkcdD/H4SH41Pq2I3uy0M73zbY2s3EmAcsaS6kXcKGtSyoVxaIul+2jmXP7RNxakP/56toDFfdE87jKQMjtFXUYbQM2lBEjNxW68Fzc9dqTa1tLhjCTdMLjqNwrmsdSNAMDUCudd1aVq0ACtQCsjaJyJ5wP8hWFJkAbSE5bq+etpHrYXw2bt98omaj5IJ7s2NJyUW/tRkIep6ZVrqd68fI+Kg53KF6t37e8ue1ZPEdzYsYNLdfYQLzEcb6QpHUNcEftGeLmWHhc5MqhMlrB3yjb09Fz1e1mxch5f0xicuydaWgEYY6NU5k448V4JlAutj4PoBtUtxfSs4IIWHFT7no272XjCmDy2zKuNqbeMLcOvwCsOZgz2H9+ecj7RZL4ATtsTxEDZRVibxzE36drm8V3WqMrvOD12LBHJuvoUkRGzc9yXdJjA7xIsuQOi5olKess054e3zU4VR9fJOfl2nQte0hJA9ILz1qvl7cuCbb5eNv2xSrOM7W4h4doM/VsoeK1f0+2d+EEORmpUczH45SM3mSDm1/MrcapuUrgIR2JQ3Xut5KxaxPOQr5DnadMlxlkYWTLysTUbXHvVP0/5KQxDEJhJoIID6OSU3bLVT9EpkHnzSN8pqq2EKL5Babh2Ju644+CoF3tFRZj2w5u8itMhdJFUm7PMEDQxfuHqLEDxvngjwlCuEdmHG7MbGrKtMeOu+nn51HkC6bF/Ddmm2HOB8Nz+UOJBSp6Zb7sXgAM8IVB17TqnPyLJckavT/bLT2RHO9Ia0hZnhijjYT7lCAeBXJCt6AEradX7dqELZvOPd/NWpUC/m93vLrU19hh65z8NDzAnfXZX9I+CNbvK4OZZC3vIXLxaaN3u/xgKBg1+Bh0K8OFj9ssumxIdxRX1Wcyz+2w7lHIaXV+trGgnST8NxUVI+7VlNGZIYar5gLZkcOBJDqM/pAju0FaP5/+2irMil7FuXAKxlB3v4H8=';const _IH='d0b2bb5bd540b526cf49fb39de94d3b85134638846d84614d35856a6d2cf6a4a';let _src;

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
