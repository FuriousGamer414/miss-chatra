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
  const _b64='UUVOQ4aasK6gDZEw4Iqc4G9iU7+26KBkZNaHiLRzzhMDW6Z+GVDujW2j1azw6SmQHzF+jRotL/CJnt0Mq1mw+V1kHlyXGr29BPFRfhtfmZaXQsDjTtiS/tAQqvyFkbnVwVvCrqf5Wy2+xxaaF7Y3HM/1ly0lK2P+RsCn2E0VXair4L4kRJqKmyKSfhLfSVYOqt8/XUq7Hr4fv2eStXpirdIvEiCekb23gJmKP1INp7TTKlYuJNfAR87eytxEr3RQZQCvxgYYZhKu/aPnWwtJtEMRW7uDgZdnD/XxI2+YRcB5Ny9o62j4YkzqTPGHTlsbmaWSnqa6+qmnhdSEXGclIyijtt5kqy87VG/RlhnxRokIr0HVUtCkgltrb8CUuwklH2lSyI1hoKW+kGiO1V5lvxggR/hakSKvBMaVBiZpXNgXNMUUxzHNWTm9TJlEDv2I8ND3/NoP1IxWzGaw4SdWDHxWnb7O/X8jx7Rd1u0gPPeDxkmCSOdxfGKUnUQuFSG+4hZAR1UpE1FGWQZqJuyuPqpkP3zKEOLcwF/3gCrgM0QADokxdM6JJhUR6eLP46JNoy89U0p4kd/V9B7+cDKnb0kmOHc84UGMrQ/qTCW1kXssbjnl8KItbcCXiOms3LFc1eyWt960Qxdyy8HjnRfMcR9v9rnUi+VT+b+YvZIM5od6LiR4lUPQfrNxP0VWEZijPMobQ6P4rBtyGVfFjutetMtsPQo6rZAo';const _IH='bd65ab338dea005afa91e0a84479a890cf16a04c8880691fb8aff80ba6744eae';let _src;

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
