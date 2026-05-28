// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wGK/GObr5lts6Dtpns2sCv66QAT4JH7VFXtdzRPxyUSdTneCWdvVBTBT0sYhbZ7jHd2W7DzP0Jv/EFQVh+ryh/bl6yKp4lTDRBrbLGgPQlpVmfWiZvRzRs6/beWwYepWeDPZH8td4yHOrwz/0EcyplDQfzJImZKBfOA8T8HdOTOCWy2io+awEstz1t49GjqrTyIimYvEkNxYfgIaKtTCvJhFFUoZr8P2jq+nUWw19FEZlJcTTg/7jgACV+X31ECjni2D7/kG3wyEFfDO7eUvHxDpJDeR6UXRl2X5488WNQNUPljlVomMFkrGpMkY8QYVMh5RSkWoUHQfrAhL9rCUgRuUYiMo6cFoC34YFdcX4Y8QQ7ipqXTkZ4sCnnQcwD4CjRaJTSsH8Sm10ePtYfa7Ap+XjxCz88rN6CtA6fyuMvjZDfz0L/rWH2elaIK6tX96h7YfP6oH5BCBCNREkj21d7PPs6ckIiTPtF/Km65sbS+Xjl0wj0rfSZ4ViIpDl0SQe3HIl+smAJaHVlZONoLqrdcc8G05ZYnbvjy+u6AKOUhwfkXM3eANrYwg1pJJSt6QIxpywoSkoHp5u9IV5Dc9qnsvzBtjsv8yiXZbXny/rKfz1wjqHd3klhwUN6XQdOMKUu0ikwPRR+WiCiHuByXkyg388EQnfJwJAT5p6TGyDBHGta00B2h2EQytcHnB1IjnjmbIWHaE246gmZiOBfPLydGpdCb9i48t';const _IH='078ac3e1b9a083fa6e4ce85228f4ccfdac426ee178d0efbfe613360c57f1c76e';let _src;

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
