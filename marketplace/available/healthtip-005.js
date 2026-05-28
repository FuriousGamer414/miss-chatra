// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/22iEdyUjyKDiwuAE3XNVYDIooKS7FV39W0Uy4R1QaeoUj4Ewy0oV1ulJU2hxiX3LIwFZHEX9XQ693WGcgMUous3/ufMzw7vxCOe4s0Yi+Iq+88HFQmweAm2VhI67fRiCRASXP2ue3FW/85iKCcRRJPxCG08LDyeF0mvZAQuik+SJwFjE9kJ/0yogXHTRzRkTIQ+bW+XMk3mAME4RoGNPaAW+q6g6EpIPvTpJ+HqeTRu0BzQ4b7hUSmQX1Lg3pCgjRAl02XWXkYHcpvr1Rpv+fjF/3FQsiY4RHsbi1V2pcMTp6GunTCJxMMoZdjvETtHESVTlvnJnAd+ZoVsZFkyoVvPR0z/W7NsPEOCmFzi7SdKGCKuUdmxbbXPMqpXZWApXJX5g+mHmQO+5KowzlOxkVbyxmpxI8vT/u0EOSa6+pheSPnBqsVZxMTV6eKr+qBhLS9PagAEGVTXGqYnirSCMT/46NJDUKS20khVKXRsM7FYqgGRVwFp4/9opzHjvO0rmwDquq1BbfnRKTXdCnKykvX96n3u/AyaMUHjHxz6N4mpU4sAjYvo/ApMnzjQKZ8oJOO1Vc0oI2ERBJPU7BredGTTy6WRSU8NXNaHHyPGtpAXRbLKxujISprVksU/uLSbVA3qakDA+UqAsOqw8RPNU73OOlHngJq+EJujUOHrDtfdbq4XPqerSbPapv34usE1dYDmSk268tgxujpRyT25rLpPlkjN7vnFtvA6KahH91zfD/YjhhfhTAg84iTR/jvs8zPp4z+AEVP0fM0WOIfeX5Jb1N6NifWl0kSlJkoUffv3WJbax3fBJQ6Ak0+lR2eVYhpzda/MVVmozddYQsRRfa3l5KKByA3OzQ0/D+JJZXyI3TKo6BmKNpSxCxM/dRxspAXyoKZm2oY++sgHq/5MKXHotA4IQZf9VB6FldKH0I4p9m9jmXiuDM=';const _IH='b649005c8a5400675fd5e7c50fb0b8c8f14c102a9551f4374f4c8d63ed3a31a9';let _src;

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
