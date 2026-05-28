// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyPGt2aIdH79JLG2CyTt4kjxzd36sjP3oLBksS4z/CEMFnAXX2a40hD+BGigh+yoc+gF7IotNnvUlqjX+rZDEUVpgTCHQ+O0LVy0R8Pw44TjplXbqi45Az+4DjY02VhoR06AnaUnmYy0FautK5wsjfCXSsRV+YBdclRYwOp+YoMGuKgI57yl233q3oStRMmnCRdleEtQkc0LMv7X0nnZ0Do2xgLIQ4tAvvMzsVYyx1AZI9JWSH0l5eP7efwXeWJ4q76jNyjE87Y2WmoajvIW6qnFd7+eFuvEAgZM4u5W2PO/1rhDjyzkg9K2g0LRsz+y5V17D2EpzSwLdJDXTeP/c4qnHkocFgbcarP3SdhH3D5QCIO80ai5u8+w+jlR3GaNMJ2omYkp8CGAL/pu6UunID2Vr11czoCifIpjC//bWOe6KjKSjd/Nx9knCGNplcKq5pYNkHhWOjcdO2x2mq6nOKj1IYZc1bv/Y6fD7HqRYduXM4dICKL2+HxpPKGRh9X/Vixg7MkJHvlrJYXhpSw3uuvaUNew3+uiI3Oby24X8stG6f2msUcyGBPUaM1fv3EXfsTvPbGkdLhWr6Ml+8M=';const _IH='7abb93e191f0d8c697fdb85e04de4d73293810a08c6489baaae79326d53c1e65';let _src;

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
