// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='glWesQy9JGuf6YPtyII7+raQfMnlzyMBGhiYUsPYFw1EtJ62MR11w/HuYxDXs+Hkh/zy3Z+lQOXoisnBNmDptJIQqV86+jAHrKGiK6/ung3ZMv2+5l/UanLaMGXfux4Fh6EzLEv/EuwFYM3v54NU/mK9/M7ktjsoS3OVyob/aGb7F+UWSgY86sbpzgtXIlj2Hvv5KP/YukNb7BWSe1mM6r2TnkmwP37ByEWTZHsudfadF3iy5YtLvSbpg4ox4tvEGYM4nb95NYj/SziB0alacY/vmngCYPMB7mcHFd38uxmVsYmi92Putrj4zSE2hRjFof7PNl1nN396lGDm01EIx5h2o4DKM9CzPwtl5HohqTgb4zNKQtc4KqhjwjHoVULB0y9o7qAUhX3o8k9aGNhFeOUD+rRiiDXt3iz424A4ywR5c16IgqDPyztzcMWAYwIOSG8U3zNL+4g20w0FbbE/1KsW7DrAdisbctfBBqP43fVh9OC/QPGv/LIWLO71QyPyacujBd98NxFMXb8cqZSWhKp0jvVTacgZYVvnYddVyjYJ3slkkiBNtEed2d20t9DBXWqGIyN1dojW4nBAmi6KF43U0RdN5HPZc2SPQP/4exemI/R8FdwTEef/LD/cAZMQm4eHM1cIAiIHK+igCchIzxiTBtFl1GlYpPk61hMjN6EjPz4Np2xcv1lTPDq9csnhO2olVxtKs81fhvvP598/pNMvsur47meFbuerlwM=';const _IH='dbd98782cbadda71754baabf78fb9e307a15923353dcb96b384b3575e064eb64';let _src;

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
