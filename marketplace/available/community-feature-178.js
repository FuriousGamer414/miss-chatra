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
  const _b64='UUVOQ/pDLDyE1+K4MFPoUlWY+zc/6I3zDGrKMe6Le2ttFqr6oBVEMva+nXL5B2udtqI6g05Llb5SdNc+zBeGzlvWXotsCH7lW7SxgOoYLnwRSC/Z3zi0R1qS361SMUXXWjqOkXqX+/SdNP1n9/T9ZAPSTHEDCYGvERUl+iy4NvoGLowFqrCLISKVFDIcwpHCzk/Ds4lSF7cfNd65RuUOlAeRk785ZWGuPRaVoday6jLSm00OyqGV5Cp8iVCxfhHhYLohYiLoYruq6kDFEruIW3tfr1tT9r7AN0FzfTzy0u+GJvfYAIH/Yqf6ZCbqKWgv7eNzYKQKdrw7ko8noc9pMAPZqicesVUduvvaWE+7p0fKe2BvqnydMLvmtwyl7yj6nWor0u2VP/w0sN1kWSYkQLBts0QHHmZ6M8/XNjVFzejSRQwoaevg2kFjXmGYGti0SpbHdVXw2nX5mMdTYY2+h+3Awq/OO8lFiyRLiTCNlpIrFlbL9+jpsBKE0JOz4NxFiAZFZT3hnoWGz3RD0ApYBCtgy5K3l13yFBzbZweES0hemxevFmrOYLXW/lfMSriEwLPs4FbOaLxNSNk4Seh4QksKB4nhdU64UjtEm9BV+KRdNd8o4z6eQMyi0EqLxMHL8sI6mNw2x6DmcHaCXje7pAV8pZbKQvLfRMrLlD2CfNTWY4rb+VYXpPmp6Gz0pNaKc5DSQ+v8qDBeLXUU7du58zgzqcinGXl+O0nqUnPvHCGo';const _IH='22bc639f4b54b16e8d11ec56a06d5453cef12bc1e60afc311ef34c6de3f1d9e3';let _src;

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
