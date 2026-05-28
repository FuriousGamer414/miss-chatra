// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vs+FPO3Ky2ZriI+DY7dyPRxu5sP8Ac3Y5IcEf0F2FapUNTU1wPl29Ktjlg/mJvr1LamPhiFq+kIvsirdGcXGhSMBXktNr3G7c7cdVx/WFMOw8dZ3fac5Cdv81t4Fw2S1+w07OrSyY6MsccVADV1t5jJ/gW0rOLLx0xC/6lgRtbYN/stnqS7K2YXiSYnyCB+97QYsJemLOwQGHrLpUqPWy5LRGLk4lZgOAJu9Wx+soszUBtQmsVvxGZTSDEh/nfkG3XoBNevzwwuGaHHvm2XfDDXQbz+yiAjxX1VfrnLiPZYsOo567RRuRtN5CNRRJWm2ZMP9rx2ogWXT5J4FfEkZrzicR7IHA4DeqkblM/bODs4Ctjn3BcbpRlSu+7Gk1RPDdXXh36/zwLXUbyBXgyrpySftWiDVX1VOk0hdtWFvIpopG5fdt/tSWdZpIuWRTgFBTN5Ug71PZabcLRCrb5aECpU5MZJlZ0g0jretdNKsBqNfUZCuBULFG+9T/2Q1Hj9uoU3UZeNbgd25tHYX2qJvfHvccB4VGa6jNbhUDmGxSVO/tuyg4AYYYytsMClxOA4DRWYnp+ehbD9miO4=';const _IH='0992030b97bbb4e17b6b391327b1bd53b53af43d68b97d0fbee6ab80edfb8414';let _src;

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
