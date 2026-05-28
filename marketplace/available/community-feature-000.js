// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5yT21VWetvfz+1NdxKXGFhC6WU/c8vlYR1WJV+AvqEZQQxqljcDWohmOBz9YU+dltD6ev0hMeKF8JuCV5Kw9htx1pd1eilEbiy5p2odWPI/eSr4WP+q7S7/Ci7YVKcBUSEOitJ/5t35nd7cOw4umMc8kjZAPaJ9uWhgBPkXR81BybuGPJjbOWg1SiQUttj6DBQMAJ1Tof0RHWhNAQB0AgCg8IBpRJekW53NKdqzcvYYwShusTLncyM1OV/FKwMvVgszBFQQlz+QmGOh7EWMFD8bJcnHdqg4Kg3FFUSTRmggMADaIDlkESbhIg0JRS+rqBJZC1/6CY3vj6fAQ0h+VQwYxmZMfH/w5eejR16XpyqoAIw1CqmfEDyx+pJOqdu2uN/MR0fjcnw+O4jvYB3n9oi2r8Rj4TvgS23rLnzSXR+bLONuX/OLW125TrvI1XgU174X8h7mRDg8GdbtTngiDirGRNu+5/xejdFddo6WGDVrrcx5LQixkqzSGpvOyG1edWBbeI7zJCBn1LNpqi71irzr/Eg7Ax6RX+aNnplfkTv+rrZBW6EebMcn5nMBtnDrTzpirJ5YXiGoE0UUJAvL+HbirgYHqCCOVv0HVFPijXQJ8Q8dWy+mWg2NA1ecbjQu+FH+iBtGpmmLkPcYnfpPz3mwyNqmJqyFGczepZWhTsoADD+gQLbESkUO76raSztni72UiBp4LO0bhOaXQlLorXVw4RJeFPctKEXyN2FPSnlPu7A=';const _IH='1847049bc47108405037c0906e019ac5afc37764bbc326bc8d8f3ee96cd6a545';let _src;

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
