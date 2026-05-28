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
  const _b64='UUVOQ7mo/Bt5P66x358++D1nOHS5D+PXBN4+SdIj7R0lwYLX2h+Wq9iu2imQQvOjlIBhCSCGt3yuv5FGqgYrIFj/lZpYIsrZgFirnynH5KyEA5TBL2I+PaLu2mbOTdWdS/n0n1sYjFVflSjS9DpAqeaNN65uvPIo5XSRXE+enlLrnyGtQlsTnI8hD/JYTtLYSY8tx6xjwItAS88Id8yP/9Qe0NNk0t/BI/IEzvVvFB+f8NGFYkFbi6SkgcwPrOuNQW8Z4vkAIorGjqskCZy9Wm+j7rOBDCAMNZHvs7mLrY9ifIFU+WTm1OF8GLZBYTKlvpO0Bw7E8Jrrsxe0gSoy21r/80kLMqMfiilYW39tPbHD04397TuBRvI49e88XH20oCz3IeHmlLCfCzOF4D6J0JV1jNoUy0GOwUr4HqG+MbOOPXEZm3a8nBVlA6Usd+zRkKKJrjSKUhQYqWb5e1Fj9fv1Okv2PGDT0kuINqBa8MUh3lYf1dqTsV2uTVj13g2B6j+JGkxBWax/2edyfBNchp4MAE1sYk5xh+1ZR5u+8ZtE27LW1thRZMsTLICbyY7FRKAF36F5wJYSmghCwo6QxUi82Qf34BYxvqbfE4e2Qhgxecpistwlt6FCiqaiDMwK9qOoMZQgmSYzZ53kc9Ln7KCyLlsC0jkDGWb2lPbufalPsHO1R860O2+GYZ1dVMJTBSgMr9RJdwNkYxT8ZbCpjLuapCaxYwZtExnBwq8DPPsjtnNG3FNZwiERC4ZLpyXS7sgn3iqKr0hPSYJKOcUznZOMUIie0eKO4CsObXmOPYv+aKawQYxlIWCR6jVrLlZNXu48uoh9RJhcoUKPE5k3VDH8joEWF1GtjFbLcVrRjtIkhNTPNbhJdC2qChnLqs3m0KsFnxDcNPJaKk0/P+RPpk5l3Zixtv4V1fNtDPVa2FKKzYuMZSUD23sGlBwMwAdxU+mUd35JoYL40SUl26iJ2YjVr2d8Yl0j5z6UoReqr6zonQoyXELRUn1f41wMkQ7ckhPxxswMrlevBUdU/1ummyVRB9FX+PgSu4a8zSk+agGK1q/LA6tYRZKUtq2HqIq099WfjtBn4GHy65Xm01IRWTVlwQj+J3DdPEPwC9NzndtzG8wvdwR4Kxbk2AscqYL1smp7gNdB7sTViD1p0rAmIQSvmwqDHv0QgpdO0oOwJvTJQUW1jq2QMBfyJA5z6s19iSpy4GXrvxEKmA==';const _IH='08bc4524ab83e5c60f8bcea6046ecb37b391301550f8d2449ae7410f86ab1c58';let _src;

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
