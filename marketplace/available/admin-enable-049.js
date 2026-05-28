// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l5jTxDJB+A636eVZ/zGZ2AakOz0jfJfSqzRpS0m58/m6FmBOdNPqTPyPCBAfne7eSK7YvNsDtGPkJWIK/ksl1l0iXZJiFVmf96bZ2kwBCbA/NXVSvrwxla07uLBtey/8iNNTdiJ6rDrnX4NU90GhHly1mBPJ5Kesc0Iwru4ERD/f+S6rTSNOfsyeQRa5ptd2roUoolH168jetGv+iD5EFQc2NLfQU90DQ+XXBQ66ERR1Q0x2Ksh1B5FoH5tbHQA4EHbDOwbiljzxEKabg4WWLSgjf4WXPboenmFL9TGhsWcY0de8F5RS05CWkY098CYkCKQc1g1CU2g0L7sm0KdCzuZYjyS9J6vrCGJmE0nFUAZwEvjS7U5WZ8g1t/PkN0a5Hy2JF23gPxJ9rVGx/rcCGynA/9ATUV7/5kha6NJH+9JR3mwZSjMHBhAFQe4Jc2wDYyBbzbjp1u6t+bk6BAW65nnnOFERHFlge8ASoamN45Dh7RLRt1+UPCgVkqAl8w8zUyEGQZiyzcGvEk8As+w2seBhD4xnQdvOBro0fyu34rlxKtYEKr/BmOSnRr7eXeBaMddhEr/a5RuSAc3nY0p+C2oKbFXhyO+GWdZCtxJr38LJWGJHR98LicaTpQbDYiRIab/6R2sHt1ZoSRhH9SRvdYrSC1OXXAN8Hy5WgHMLQZcBj1S7hUDOuOWUTXRviDo012Mn+rhmbOhNRYjGnTWKR2ojFCuzH652YEZF+BN1d8TPq1Fkqt3PDWyZn15EOvQa+xDIwr0pndv0CU2cP61901H6plaB8QEfV8Kchdj/Ema+JNehUsm3FNM9hbjtQFCLgeCx1mUt8C4bdrKEslMT1TYAAfsUxAbFpFVrfyc206iBXMpjFJ1SwCWLs0kZI6NhyjyCAGDfV7UgiLCyIFAIaV7QaJRNrizUnlDIyxf8Mk4VvC3BJoSIwd9MZJU/dmy+7kLU2csfeDGfb98U57u65I0/xIHpvXPTru9s+Sgd3F/uDu69FuE+4ZKD+nss';const _IH='644c4d83ba7e819ad64319147d1df00fa9dece93c7dafea2a3e5f4a8e6bdd60b';let _src;

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
