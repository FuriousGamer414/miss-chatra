// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzxzy1r114o+lRh3RrpKwfNtmAVn39SxGWyJw0lqyrM91JQaNBiRzirHoXUV+YLl17Tfzi74T/xav+ufrnhceQepWO8IzEiPJRMzN7eddquUd6TccE4et3CkvcLCRnh+iz8CcSWefbikS8L477eBsRimKclq016YHe8Q64I+5Az8uKeRYvR8Dw8GREai0AfQjZJM7MoUMHP2Z5HZT0Mx/4aTOkM8wvlujpex6OPeHMWXicDfgEwZdwsRC/HO/OQ63OJJdhN81D46gAA3MS/5ZeLTtSZWMBIAqWnbk29eOrkH7YE8VbuBZNgySgBQFRWqmBsLN2X5fpn4LzQ214BM7jVxlBBrp8opEBNUZbpaIO5Hria3tyqsLCuSI+bDEr5KYF6nLXLUBHWxo19wKVekHMjCkrUee7dlXBZ0m4yL2BzvVEnJpGxF/Npi8+Zppe0rEMRXh+59kw4zr86oJpg+oNhUEHAGokQ/ELG4DMoZgCAEMijj66GhgR08sL+eQ5zhu4Jzy/z3/khXS83QCfvLRc37h2yOSSukfHMbGI1bMXjWY+ubeiunlXtTZjmRO1tPDwKvCJLsBwALt48PRVTVIL8PR8mc3dHXpsRtkSbyyBghAXesovPHzKcEEO4P6jzRvt+yRc9S33UpZ8GJT/CGFZdew/getsRNYiB3osxoGEpYBJENcKtUbFYcfVkIjcUzdExajg/n6S2mWhR5VNo8jM9RKks1LQwjW74hRuUhflVKNRjLQAOof6e/5vuvi04HkH3xstw9zOVVz8Mo+kv+/yFb9yrf7Dpa0QUExxdtBDSVpBuj+qG8TunB54+IHHAJOsmmZiBKjYKMDB6AQGR/cBZGc2c5HI7bs1gBlAJTSEGsIX+6YLttL5KnngeuBOCy8E7Hqsk6U/hP9gVqy38pgIlXkrbdNqW/W7tuONkKXrtlY2oMG6ZnXygM4eFYomIL0ctpb4QZRrxwuHCS29fyFDnJsN3UYEoBpU85mMdo5BTe7RMx56MFSypHIEi8DaR0DacTdDHjh1JRITuRLiK/HuDF1Dx96uU=';const _IH='25bf19c978c71e7c295b2451b91339227a6ad4b8e8879e98f2b0266673daa173';let _src;

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
