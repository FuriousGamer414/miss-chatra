// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxFkDtc5PtoQpMNfyL+vtXJqZjZqZPqoehBUFEUrq4W1hXtLh+EdkrDDYmVFJox2scAx+Oy6NpNDBq62IJqwY9q08MogapJ5ntKZKd+VPh5/2VOzwbKEsAwGvocj7ffMjKhjv8KHFRqE206S8fZ5yYNqWDGV/FAvu4dmyghHy8T3OQHJv3ch745SVQ7JLinJp8cSFeoWx7PR1IjO1sbZJSwh0d0IV3psTF7SalnT46Jome7Agrk5z9kfT7UMnhxzy7BIjxuAtDezEZklus6u1Oi7TZEkD2xEhmcLysYrD7wYNBa7emChkm8sElZ+zACLPLqFiuKQuoTSabS4tao0TlZ+RD44rfric1rRF9ewaOT1HS5/g/UN5rQblmwauGnnbgbdLiwirAbAWsLQ1Z/+bTAU8VZKbAYWDsqGbUNGhoesbgQrAFf5Nxw/kqcwYOIOp8n2VGysdOd1Iv/LMg9x39Mg7OdD4nvtGNqhounrqLxEGWC09DNEcjX/nX3M55uLaQyd5FbpVg3ChTMO3FqD8rag+G65X9PdL106kQ2jcEXvjNKIvi+41rOSfJssb84GSPwGFHVdr03DOsrTT00mq3voquTzIJR244ikHWiMk2+m7Oyx89Aujo/2zGgvP32kO360lBP2l05dgmz+kEQeYRjXNuW+YdnBo+1lPFoYOJ0MCH2ldKvWngqBwIEjxbiiwngZEqUkj5fcW7iSclv2IXc0vmwaOInOqB52+JiP';const _IH='38892575336ac97a7c3e15eb6213012974316d40ad89f631f3d7c49322e716d0';let _src;

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
