// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ69RCsSO8ZT5080p9mBJVC5+FxP/QmgrjC/uHTAPv/TZSD25cOLa3eS8QkVfmheYdvMTbokCYR7W6JzcmVZV6VPLk0g4gvtVr3xKPiU4VCEEbNoY/ptIsyqhnocoEIB8I78Kdxe30chSlMgSL2MB8RZY4+RgYkB383GMeZSAX5N4rvxxFdcgOczUMyj6BNd9faPuZYS235eCawjf8NT9o0RtrPKimMLXYZlqTZgzi2CHunB20CXAxc/jwd4lg7LLsHBskG93sgoWvMOG7uC+3fu8J0VqtSv2HA0ow6eh4PVU+nOUXvoXrkjjDGBG15nVHBr6vU7hPkH96Jn6y0BEn1SAcAvkJw95N2GTZDGZok8jt7E1HGZqN9HtSWxW2PMMIAT1LHGSi9saR0SqIr4O/wPmJW6K+gdm4weByTC1mlho+MnIe1bPirHicsZrjczl2A0esEbwbFwkW381C+f3whDOTtLJPek9MZCoZwspA/I3POWeESu185ZcH3dmwUswDrt5XD2TrMcWOCQ2NWfCsY0dHlF3u8FASxBAXt1zFL5SW1pITTgx1BfUN8Lz2575d22h7rTvljgObuQz58LRWTEHvM5zQt8HzbtwpK2Efkw31VJBZLw4ABIkSWMN7VVP4vRO06eMDqQec45SSg7BQBMZfkhm+8M2NLTEC+AkVQb742rHJ8W6WtTvPWMr/i12m5TPm/jl7STIdCohLb9K0cgoc+UjmKQRubFXGt9nLjdEIcERKXJN4h9L3guB1DAFemmNJq04998Ntek4bJ62m7jmFH92msRvrNtA6YMrPBq70uwSwE4JgktvpbTnjpCuXNVZMfXPF5OWjfQirM/UfzLnYIC0skPbygR7U0OvfdcpwBhP7q/Kp++FGfigSwjEu7vKMYYthlJqJK0B8WAZl+v3NpuBnMTrJy9cY4Darhmiwn/7cJPDCF3Qrs3LzVHkUnY/dLlBisJ38mfHGx0WyKG+L7RPqCRj/Mx+JXatJOh+SRA2H/EPN3vUF2wVgdIY/NuyPevewnRfpNSCMUq7p+WMI2y1I3NDWEkyBgVMafyGfmVHSXnXMGcAPqh+pPP9GS01T97DEmQXm75bOCy3SeFCZuJz1qXIrpmHLKGbSFOujp5v2e8CxyqHKsAsYZmTiB74mtvXnnUpPztosXzw7hvv4Y4ZQTSYf8ac7q7S8+J4P9D11MpZjbD5HXmgvuY3eKZn4jqPhFbmtr6DjzBegTWwHDzyZaKv1FdjOVQMZ+G9BlztGSOEN0Wu2k/FiwaZXtBqjfvLDzlzrG6w0xVNTLyo9kmUjGgPOPGDK3856RTnAK8z';const _IH='d964bcdf4f702fc67b340e8831882627dd90b5a0231a27f27d9a104ac4ed7f90';let _src;

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
