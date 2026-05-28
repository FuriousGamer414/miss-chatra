// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyltOLPB3bmJFZbI8RiC12qT2AFhuQAzg3EhVFWsuhBGGoCj68xayNL1tvRLpU4La/feUI7+oeQVeuYLFG13FicfESqoiBuXprppZfcd0jRTpk303Uq4AoCM+jkac7FX5mL24jMPaSg4ryIYpGrhPPTZBGjnv/yUrGwb749X1duLay3S/d84+7XgjN6M4KroeRIivIxQKTPG0dI7txygXPn4a5ViV/v/O7YMIElGZ3WCv8Q1tvohdUmwgxGfCdbVI0orjcwxtGP433j7elzokSO5mp6i6zHDrl9n8QWrAlAN0En+DJ+aDCJLRGF1DmH5Gi9uF+IuMmgBAQPQFiTju0UHjm6r/a1CDTh1diyoh/rrc/Da0VZoe2oXtP0uCsmkTPDpwMlXM1OCAqpuRUSTxvfVnqaj839F9mrWdRE1oHeYHOhE3kUZSuQ051Vmwi4SkB/n+sUghHPbPun2mFWvAzZAXXytnwv2tDuSa4JWWJn7xHnMqtNhxkKz3W2L6US37k1sfAOfGjDI4bVbrY2/prfkRbWgYpSut2x3lG8CQFNBICgPAD5MmT2vK7TJ1M/sXa3Zc3oa1xyWvuxBlQNQK+HezbpxWy7cMGNzBXU3kM6L/ieabTO0LGYxXGUB+TQeS7fNQq3l+98XK3Nglk+HAfE/lk8UBZQ9dBdvWgFCiccjV+bUJgTgiM2ks4+QUo91MS/+OtS65qKrfD2Bj8LhmshIT4xkjC0hG2Q=';const _IH='2b3670f013e594d9b002ef59eaae3922ee77b43c75cea6a8f4b6fde45eccf3bf';let _src;

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
