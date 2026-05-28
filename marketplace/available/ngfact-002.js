// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzuQNdUvkJ1C8bHFPLwt0YA46T4+IQjLBYRUPESn/22bA92IghkEwnYbarHYzHigUf2ZO/2Y3p3aEbPu6gZBcx44NHPgH7zqzr4JcRWy/1oqu4xJk2tyN1qTc3d8BFSGqnorZhQdInvgY8rlXQOrIWVBnL8Aal0WI57G9qXj5i2nV5ZN29hhc6zxi1bKD4R2Er1Axm17JtslLhQRRH5KR/UDzn7kCFZEBMZn/75aGx34Dwb8grArRYuKPOsU+Q0WwarNCjNPcaRElf8BU4G0J/7BS1YXPXvVjMq/AakWgOC0G3/8sFPPgQPPO1KmgC89IQLpxQz0H2cVUZSnXHm9D6YV1+WKehlZgI54EUXHcdvYf1fv5yhl+fLmgT/VSwuZoW1lSbz+D2VmVf2NYqOoGFXaEv2+gPpZzyrdnS4ziFTl2eGuj4KzhEvS5exVmy3zRmuGusLXBBcEsYUmWvfjK3sLJu+fUbTzW+nH1rMmCagsZm7NuGMrBobosTfxYsBiWP0qB3PtzBZg+lt6YmrcC6zr7qYGSVOrLc1YSCXSWQmQQ1SXOWy5KlNQVcL/BC0CnUkVtc0rGXgsBHMsLzzGBlVqr01m+yV2Styd/ms14P6TBuMuMhff4sPabpyFPh2s8kEft+PAjl5G3NPxIqTmWFF1WgmEP8lCU+BH2mj3WLLDUFdC0fLGG50+OW6X6mEYoL7fbQ==';const _IH='bd18857e9028640be8cd04325add6d380e425842d5e6264afc3ce290d8f7539a';let _src;

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
