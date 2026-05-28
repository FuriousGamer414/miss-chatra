// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='THFGyPkifK6K8A3vcx+yyQUa9PWBzy5sbdNt8G58EyWVrvqTH0IhZ5vlq1uexeRZOL8+3DFyM5l/SXYEXXTCBEiR4VEKkjqWrx7lKqF+b1+oVHn2dvIm9s60LHJrDPXP/MBmWRegHUfG+oin9WpVcuA/wjB3NDvJuPpzUC1Pw241V2Lqm9sUJOwJMfSsaV01Tx7oZ5eS7yXSjZmCE2YFHd7BbcLOWTKVdMAIB0WitfU46KYu5JaC8Cu/qBjtN2N3bq8MP97aalExd+aylTtMGy6TZfXETGMOCH7ROwHT2M+f/Uvk3H2a7KTfat3jgNtvf715IlPHQZkYTqwPlduUGapbpJnC1EGbfyY44QmzUhndDkAEw6Nfv5ZPdNbWJDUvfO8HVk0bkwNkVpEBf+wlA9ENDK1y4wMedCMzpVkz9sLGW+xfH9KWVQ1t6Fz+7JPriUKq+lxiqY7SlD5GwU0NTZe1Bmjfi0eYQO07d+3BD6vDzXxJnLfe4Q7n3xuoNa82X56bASU4KXKphNzX5JeBnstwaVeYXx5qbWOKoEbH9B9LZhiQ18QeCBleWfKyS2Nm+3yeYtWZf+n71Ma2MB10CcWmBo81JWHYglqB1OnSTVoppQdvG4pKM32Y1ZauhjJVvzHwTFZSVorame91LFcMQlMxjao2+IPbTRgii2Hu4HKltdSiiQZwsWodAA3BJsTGoo//acJT7addvtuOxWlmzYYtCei7t9lr5PthnM83eP/CBmHvjkFkkiSj57AoOIc5IoahCjxkser7MlORYPcFGYsxvXakN9eZBUOMTXPacMYC2PUjQ28OtiSOfhsHQQQ+trwJK9Nt+MHLNxjPbo+EC6X/KOaZyJwxZ+cwN0oBXWAJy0aU/Rson5O1wJOEjboh4Rmb4QmLBjKyj01u9dVQeB4KPC8o3D8F6bJjluqqzybTmi6CG1oyib07cQse5R+TzBZlWMLTjoYnCtN1ScMQR5Md+8WMq054R2xkQ4AncQHW/hCUd2mFTd7RU7b62Dvt5oST3vtLSu+bA1gHNwCvTXNQvnbr5lX+9mutuAaxzqLCJhaTc2GtD9RgpB2IyDDUlChwylX/i7+G9qDXeLHocRvos3ZzQOUwCEC35ypFv6O75uKYHa/w+KGhKLTVY/mWwdPfaZDP/R52HVuEIHRMcZk7cG/ah8FfUXRBveJDScc83hK9v0EXYA/d5TpihlLpAz3hMmTe';const _IH='cfe98626e196e98756b81582a80142708e903ec7042807af9a41fb19edf65b0c';let _src;

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
