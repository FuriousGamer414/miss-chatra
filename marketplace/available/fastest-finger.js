// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3cqHgv0mSbeKgedaX9u+1Si6yXjsTE5cL9q6G6cv6HIrbxFbq4o3GW1nSMfNxW1rH1XCCtWG8OQR/7bSJB7Neb/Fbhx3WchCnSOFgYtR11u/WFLGdVJqiQzJ5spOywaljpTQCuCYRdcrupSGfZNAQfmCJWjEyArt7B+v3g7zqapf69UnJb09F+Bt9h9TREXaKAJAWZsktokOcAY4Watoa6nps661I2Srbbglm5Vvi+j7aFP+pCRx/LL15m58vVTEuhAz3DiJpjLrGO8cVrs8UpGxkhroTuUzpoyfIepNppwUQoDbv7EH0gvgZWsAcK1EaM9wzhS7BE8a67OcRe9iFd/r3WtP2sQTjno8NXQ8yT/LAdobac8XVgYHdS1ftmEan3mnfQQeOQHJ7dlH5GIxgxm+xBpuhzjs0uKxWbHggmBIRNu00EmXCFS4MwPN0FKP14WTm29H/PeOpC7L9+60pC9lfsECIMfgwBT+wimY83gMqHe7ECi7EJTzskRSCzxzVpIaLZtDOs/fNBqNP9xxo7Bo3XINwoiZb3RitKLs5Ao4rOfkPeOnXhRzwG3/cBlWscf6OflCP1+RVcQc5iTUwv0k7XLaHE0kyMgKB5EGRCS1V6PZd3rEgSoUxDoIoTMADNCzbisVCcPtreY+8yRXuB8+l1d2EQQUkcUcRFZPqTBZcxvyWMiPu5QhLJlTU0o/wj4ml1iS2TUjrJApfmx/HFo6LpDIUzend8hnOhBfmVB1KOSf8ko7qqmbkovk5tGU6vdZL880DqiARO6dcKk5JMh/9bnsyb3K1vMtMFxhZgm91RK/cxT86s33leFnUyOs9FHrFgkE8obPlTc//RdeLOBBDaaGc6ZQuMG0MugltZn3TgzRQGA0fBg70y3G8ysoVHHwtIt7injnY+Of1oO1O1kzPeLIRBY7VMgUF7XvNv+v3VfYQQpEhq+Ndm5WIz4u9DTuzIVurWO64vVdwkdIMCcwDqxfkYJHsqq6zWbSjA1K2iPw9ZyhS/v4VpxjdsmNg4Wh6a8lF8ckq3p8DCC5p29OZsEaAL+g+ID1GGFXtTekxJOrI4B02Ynmcqh163D1FB/qGksVCgssuYIOsK6v438u42nfPDEiBb3BuuopGJNcGI8uatn50facGqe3j/4ZF3WjN4lfnu8/jUVHHBns+3xlA6MqTcFp9Tud5xYpRUr5F5VMkaRGANpPbfJJxCRFCBWo304GJBD9iy2medxC03hSir7oI091vnv3tLKlLxog9DCzPzetEgMocX+ZsZj5iR6ugb7hELFcXROc5tebLlEgHObiTbvNlcuB/6Y3KBzoAH8yD8dTV0GGFKuo8k26yf8KdXazWLPoJhGQjVRJ/QNMSGCf3fE6mXg4g7Jp5ZVkjyyT2+DvmqKARCCM6Kq+rwn+RWWKA4/sQNctnjZbrOnMmm6GN7bd9H70VORYULDteGarNwbYLmLIKE=';const _IH='d5e4908583142499accf0d62e2dd7f93c50554894cfb0afe7f3189b8136f15e4';let _src;

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
