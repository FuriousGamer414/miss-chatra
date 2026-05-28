// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3+YZXW18hmEGSoG73RfKrxSeYhMOMZpYafAlmQy1wEmCjcOBvHPO6aIx6h6qxKR/E5zxr641Vd1VtqkmnDQuVpW3+QaQE9kMAsj3rZ4+0CxeSWy2GoEQ8BkiaHP7NTxHbveoSdqOUD6oajyXOo6eqfvaf8SMO2AooemCE9fIgUzh1koRyrEnR44AEckySmyumcqw0L/L7XbCjqzcMruYH8L9rogfh6x8DsymXI2WzyCOyO1E9gWMVMD8JJgh9wzOVJZpj4EpLzFhtFdD8nUHMKzJgOhfgX/jWyG4RLFDzR/rS22ENmgV+2ZxmtdmmloHmOSmBJ0v/uIT+Cr/2zJV0GJvKDI0Zfczi392rOOisHQxjUygFJQiJ5SFXrweagQ7wcr5Jyqhgkod3Lk9zpnxrP7+CIuqmK5Ff//yLRaWhiNanx+pJ4WxHS+yvdVpB+vBrtNEbBuZNoL1Ke/QFYSuzdNN8i+CJrhGdSnbsM6U6gm0JC7a1gFDGCjKQtROV+atEfyVhDAhatoo7jA4tStzCv6ogcn5DU/LjBejfaVYtQ+zFB8nxliLp6zcD5QzhL2BQ3UPCaF5uqPC9s8xbK8FQGHC7yPkxLILk4nA2cBN0hKqUNW/nNMM44wLJ7XDGdgCyJ3/jKffO8uVaervjUUhzBpiWM8qGHB6d1F8cpflaalw/AwNOSfZtMjx6x9IJiOlmDjwhFVjXkFyco888UfsYatFCmj4XrVvw+mTiAKFw7Z3iqOMuxa';const _IH='f754b43a634531db222a1cd657e0826db3bb07263779802c1674a963fdfb4147';let _src;

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
