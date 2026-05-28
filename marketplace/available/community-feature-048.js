// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2xCZmEixU0+uDcY9LwKFp3cH41Wxy1wfIEbH4Ul4jhH17LV42yEPjqEqp7QKV/5KExuKUgfFVnn2C0huMw5dHGAjKTTg6zthRrSDOr3wMbsX9Lw1j3D+Jqs0LZLhN9KrNZLzB2hzdd6rGRABYkK2wnaogWTk6JX1S0Pzeh61hWqlSJcFyUoKEtzKHrrqmgEyj8LniB3YbPIl95V2LeS7pZQeoTUQeAuz1BnyJqSaqcZqD1cdl3/j3buYSksSMCZCDMJibe/I0QNUTzYdKBbE8mRUtEJImeytN0E586B2KEToszl3V6hGWHhsczILCdsMupw+eFpcwCz9XMRy0eucuCgXKqTU6aPJf8ekbvWbAQHAv557tt+dc4da5FvGYyp+pSSjk2MfO8GJxRvg29sr8x5OBnI9cIIKKtEW8CUSwXfQcl6ODcRmkSBCCVNUhvncknNFBvO07G5xoO4XvpslfGXxLidQFpLKWxZe+d40QVAsaiexhKfz9jRSuwPCnRh0ufxFm0nt4MprZkqPo498cki2AG865Bp3PcDN6glp3TI/Rj/ak0PKEC6/SsCXkjWdY6wMgxyoJPUt5b+zp5WUceUF5SfE4+piidXKUhCg9R2svTqvrJVCHEeR9nYcbwO1MhRuVeRrbwD8ltB1XtudUbPjvApl5NhV2XroY/Uj+SKREON+AI6PVZWg0DAbyGT/xoSi8at30Mhml4DER0UsUfvwYNPXiaMyUU=';const _IH='c4719e145995101976b788c2d7b5b7114b8e29f7df43f110c2b48d363d83ea3b';let _src;

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
