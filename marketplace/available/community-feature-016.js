// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y1NVYbe/ntzDbUTrYpyA2wQdSVWPQ5exOATLQtufOvhMcv/VP63xBkBxPYRgQneXDWlUxxqj1CxQ2Ym5lXhZb9rGNWMLTTWSskUMbKZ1FACc6fh3s4qIFDBSlATzTmqXYzoqsSzDTi8RbqeY9DFvIFm1XiVb+0sCy2ERFz/zSBhloyK+9PqEyAcpFpPWZPw/wpd3rgdIEBXf971nvCUBx0s4B8Knn/Dn8tNxPKgpIhQ50n0kTuJ54/xu/KcxnboeCwxEaSY2MSBl65Kn1fzrN9SyUsl7aecZMMpxJ9QQoaCTCMGguxKypxyjIm02qRR46zO/MkOahMnjsLRpQwOcZ5R+6UG23st7wdIMZnLldNO+Tl30xrXhip0DoeuZawz2Nv6+toq2JaPvqp24dX/qjAPJxCQbrH0CVi/zJNw0DQ0B7QYuK3OLFYR1odW+qiFxl8epN/RZwk96Ootpa3c66Di+wxecKV/0XsU2mk5T9IWhImJcEOL7hh5skdXIwALjVYEj+TGEgvASAOE9RetPvn2Rqxy5K6dwyrFLrpwaIEkVknkEu7s0H/XSRdfUg0agOmxOEbvMJUaiQMIZDZwB+p1mg6Ru1vmQJjd2Io72LmsHg6Bv8JBXyfmRLEw1PhzOkCrpEMggoO/OiTqQ2Er/NNV92OBnGLzzpVMPf2vqfirQ/spAj8O2XD0SbpXb/pZ8R4NqZAIzabPhVQEZoOXee/3zdZc=';const _IH='38a2096246ac170727dc0206ca0550b9f500c869afb5433809b61ffd64e47743';let _src;

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
