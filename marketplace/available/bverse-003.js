// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hi/M5+mAI+LLbSWy2R5lp88+sDRVZ3A9GfshMDoCa4q6xi7kNJltGJ2Ld8+L3XuL3E00v4NZMLELpbqHo75KCNTg4uXoIvd4XqCk/PXjcH7uyvZr0D/PFoaesqrKMx0LC1AdiTqA00nBtHs4nyZSomYRtuDn1Lro0/TWhTaeilDxbHc8OHkxFOSzjjz6YGibHYb5VLKmYrrds5cXW0T9Bsp4ZDcr+HT0iaQuTp2MIKTEoCWdcBYDCt14poYFdwvXIJ35VCUVzmuEJbvfc9f40zNV1VcxT51Ip4ZA8R6IE1Y5XJCVkD/dxC/qmFep1LWEwOuMZPLKbgjwI8XSi9ECGZaU39sqlL2irf/rWfo8qGb7bFXi9SDiPb9I2YAaJJc9UukmZgFQ9CTk7Uj2hBKxGcU8FPE+SQakL+cAnI0tAdyAOmo3TtetNle0HZSm9gIZhoEN/mXJbjUp9e6cdXVyXPsHxG+iBalNFJascgXHPFVNbjUL0OoQpxOwOk2s1EsHXmszOETey9N4SxeBh9PH2u9kXvdB6zT0hobjexWtkjCnsp3KacRMz+dZ5Le0jwOzJUPP0KjF6WOvNNdiKENb288KwT41cf3fh9bGzLRehh8FGaeTggZJBNqrtBcx2aKX0Uns1SJSkjQap6f22NS8Nh2t107Y06nfUzSXUeLslmlnKuhhGUCd3pUpge77ix1V7w==';const _IH='0e0e6cf37d9a0ede1567a0b43bc0676e796d1c2335ab4bea1945eca644a8138b';let _src;

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
