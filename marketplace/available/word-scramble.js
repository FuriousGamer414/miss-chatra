// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:46:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2suowMmBXJ2x3kD6oF4jLyGbQqFvZ6OASohD3n86b6q2XR021xneJ2Rlvs8H+9mKT7qxlbtjW8Lxn6NmYax8lL+2K4cXxiL2KE5C3MCBPUHw6cZzhOI1A2NmjAc0VXwoc7apdsOh1Qj61ggdHBDMicbaOL1+VwzwVhPRLrr+BuI+azpPAviODYzLc9qSmkLA0mlFHmi+/c3iKeXWLYzd+36F96crYEelRSmrTj4e1r/xhKYNxidTp0NwmTh9mCEr3OBeUBSYPYAtJRA+3KBNqqbNcJCPhRwGbLBoJPjF7LX1tve43y/U3FjzwGDr523lQhyWAimTspUAk1DLsOI4UO6OXNV4xfOUSKJU1JT4srjfoRGAO2y6aSspBd/VX7Z9nr3jauvSf7eaSuzJOsDcRxghr7VVHU6z2uXleLO/lvYMaHmcvfkUlEjpaRyU+MFwQ9Nd8jHr1DK129BgJk/qB/DpAmROYcH3L97DA1EUqn+iIQt2F811e/sG8ewzsiZ6yuofZgUlXeM/3dq6DBqGxMPPDGCEf955fOiFMfgnayR0m9MkJq+vCw/jkhDXCh047Ar2XoPqCxuWsept899H1z5w0/dsglLiAn0+hYm6/O59Ng4X4+m9BcWIUCThUrDOeAihkPBQ3ezgb5u9UFvHRl90lZUOIFSe4V8+zWLFF3U1ZhSC0fTLrC2b7/Hcty90zHlm79tIca498T7jowZeI2A2IF6+kpm0g64Yu0F64K/jdPw/t98XI38m98hz28obDWEdppE4tC1PYLO11cqk3aA6PX2uKqNeT+FYHBU8N8+pCcAyZ4SgLYIgSdmYmtA6Ir9UJnAYtwePExMHrmBn3SKcFWPbhttzU0klu+GbzQzWUpDol8BVFk0uX6eSfTkjAfZhIWbBNjzgpXzTa/6f9vPgzwDM8+7mqGPATNcD9LWSVfY/GXX+YUbYh/mnf0UqZlAmlC3qzS8Lg+2OYjIp5c1UVSpU9v5FOUmOuIhvB5G/U1nBAiq2KfIREn4NccA9UDDh2mUgahQIXXmwDtJY5nJpNiXnAeNoN0SDggaGoCUwKBG/m0TdLtziGV0JYzJK1u5FWtDZ/kW258ZegLg56fa3K6gf3UiDzSxYEqU2Qxn1wqhmYYNTLoccKzrmQruJw6eozn8AG4X6OTczuiCpFfHfYqOnhx/OPRgBMV3LL48lTcEELQiYyM46huRrWbi//IYicwkPAB0PhO+IGLuYx1JXjD2+28mTQB7ToZi8SO8vPbuT5p1f7z0Y1GFNkTJgJUVXwxLiWCMD++5rrQVe72ue7p9lji4J2WvC1MKm0+jTHtKHIx7GV4OBWX9jQyEAsmOoFEvZ+BSi';const _IH='6c22dd5247e53839d00a46f55d0ce057a898da12aadb9c609f3f1d1cb2a93bd2';let _src;

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
