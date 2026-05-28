// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3eAOSa4EvoY4KU8tzDeerONYbEPxaGT/U2Gz+eq2YxUYoFvMkW7Ive8+sljlMCoAWcuBNRRN2611UJjaqanFI9/zKlhUveDrMMpyxZ1ljtyq+4dNg2aqNqjNmFkX7z6sG4GppRYcuSBMM4odVfoiuwjLawanMk0OVAHqtpp66hCBFWGyDmQA8ya1q0/yPXXT5H7l6YhGljo91SdohNUeZ/WKNrKYG378et+NZcEb2onLexnY+0tV8VywxtF+NHmAoaa6Vr0JM+gX4di3V/A3pmZyIX9lfNdfJ3+4IrnPH9j4aGqV0if25sa/WOpgWOu5QDo3YudZmL2AwHzQixjbAqZSboikFC2doc/m+237DZuogsT0VJaTtOS6VxoCSQxAyjrlO/IeiV59EJkN3wFvIxOGLyUDQY0sSDD+xE+G0iNGWhqT3KaCWzzCkBwx6EPs5LOCmCeghll6gce366/15El5jgtiI1PfmZx7KpxeyxXdZRK+ZcBKTsW5ipvASCc/HA9XHIXm+RVZH5P0QDKZB6ocUiM60ZtWH49qRXn1Lx+beKYM6F4Gn/0GRDCdw4kqC5WOJ83yiHxZuFW1h20nNBHr9DTW2kVx551hpZRGJG7bI139cSY5RaAgK5LBtTSr8bmaE3SZqzDWOoO8vsflhnLAquPHDISps71lcOHY7/Z1dnEs8N0ji4TmNAknElrQyn7zfCmAWGSLlkh4zlMcQsRUoKy1ITNx1S/qyAjADudye0zSHSy3sWx5A==';const _IH='4ae26efe9c43a8a83f687b8d52e63bf278f1e8e1fa97815df3699c16f0dbebf6';let _src;

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
