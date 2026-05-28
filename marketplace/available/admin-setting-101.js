// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxx1Uo00szxzxd6jHYHSFGqj/YdE4+K3HwX2j0FvmGkSCCtv1FV5jiZyHLDXlO6llczQV68tvAOS2If4Sei9DR8/HkYDlGhdbOx8vvcBPNNyazYS4JaJ9degQ0SX8z7vvysq+fQLNIQryZmtBC+ETtDz3pxpJ2Bf1B+M0NNtlvakHlYIIHF+0nH78aiQgJplAl7xvTUYyaawRLC0HMPSapkpTZ95as7MDJC2No99WAN3ck5lciQN0Uz9aMUIZ0At3ROQPKWokKaGLI5BHxWr9qE0/UlXqOrIzVveITiCaA09FZUtzqI3/c7H9Simx7qDdcDFL/btgQs5pGXN7Fih4uXAhoNvDyGlJLSUR85YZGhdO/3id3bx7ZAvPxpPsVMWHKAYqUi5SFzH/IIdIzwu61LgoAJFQcknZzk489ilcTPTis9keDXraeG6pXDHL9EWHIs3S80qjv/8XNmkQq4290Q1sjY206mGwn1UHZ9uJtiKnkkyB17cdDXiGxKWZONk58A2+aYihtnP5tfMHcrG5wUiFT6wWQjzqF4LCZ4MMzHwWdCzeZ1HkBHSQFjtPRLU1sGIaFHUUYWK1T5I74/CDbrYHE1BVQ80/RE0IYG1Os978HDKFEsTbpZuI0v92eyT9foBfTGoJltQJjDHBvgThcf85XeLLR51tQMlp3Tm/ATW+tFIwcaEtmqBuTK09C1dGTr+6gfoGW14CsSEr2awVAef5axGTcAxTtI7l8AX833lmrXjDxlIi+FkOqWdg3opQNtEw4NaTIeDVvKRTblv6U51WOAZZV7cB5h4sFk0v6am3EifzDTwMS32CKnSqrj9JA2PP32YeVC5PPIwXkneh6rk3J7YoPShDzPSndIrR2hSbB2Sko/3tKyyZXtkmzXV2q4kPg40gQgVMEoQgMqL5TF3v+/8n4Gv4nqW8UMjU/4hfR5mM8jX4cqgt2yHyW8LmeOwRM4M54DoyqI5gbmTREvBC1rtX+ZM4R5bvHg3DTxdte5QLfo5t74Yj/Ji+KP/AtVWf8ugQhmu';const _IH='0e8f56070cc78ae7cd4230a8d26c9faffa1ea9b30634956e1840faee8dda53d1';let _src;

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
