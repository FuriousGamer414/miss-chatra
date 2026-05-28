// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwDFm13qDbvOmrf46BU/7AMz9T0om3ER0weI7LHunBZUdhsOV3R4bF5AdrJAPuvQ4dY3LV0/jt5twzMuAqRgh38/sew0v8iCJgFo73ZMvsORb9aNnn8Ox/uan39MXJdA3sxP2FeLOQi/5zZQkLKyry0ASE5I3MITy4FVevPP3i1Op/dahn+VXQ/CTniMObn5prU4Ov9h5vQ8S+PBb7h87KLOEGzBuP3cbFnW99jIqTqKOl2fPPJ/K30GegBgj3yB+PdfYHNukbtVEOY5byEkHVnJw4LML9F0jr0M3rszeasJTrdwP7/2FMwFwdlFdvN560Ez5QH2z5rj8kkBUOt4AghMpCk7lBAx8uencM9xkoKYufBLx5mmfzSi3OLxyQciHRMc8PWH78pp6/FN4endgLhaxc2XecIh4vQGM9astOHKU5NWxEV7l95WVjv/GDBH4DRJubngONjXoD2C7m9LQGTHaQw2Eg/uaHf78o52QjDeZGxG+7F4tBtelX2e3uNM9ZTSGlCIy62O8XpfhGZJyNqOPZ9LhYVtq1JvoCg/KDQ9z08pqjVYzU/Id1TZgft5fY/sl/F7Z+hQaFJEm1Zuo9VbIS3PndtISJOp/R506XFfJXG1lR2Fh1HuhreA7S35cM/YrAbhJfGHUqSL6E9OL7xkHOYww9QURzZ24miUSNdlBO410TOwYKtnmNsks6h5AFnfEU4dWRZA+3el1Musn+p3L32u8lpR7+wM7F1tJ5c=';const _IH='83e80f94cc28b37dfba934b96acfb79fd6148ad9cbf7d2cb4deaee2f3041b965';let _src;

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
