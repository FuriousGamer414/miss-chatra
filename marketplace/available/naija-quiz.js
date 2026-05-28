// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XaFqAt1ysWS6KM7V/pLkVuB9mfXyIQff4Pt84cH9BgJjqYSZ4me92HLetyQ/KAlkfZ6uuMRgsYGAtg51RSFXFiYFuT81oB225tmbA4LySNQl+mKMtit/c5QwdopwlIBWc87UM/PRiq4FStUmljDtYAAgT5BcAP06csDgmI2u2cUt9bKVdZ0RNw9/1Tajvz8Vf/LNVQZKUQytTrfh0eAbTr3QI+Kd1cKAVtWUGT+CVJIhDBiJiEE9ZN4YCZCmOUvrnMT5+HMno1RWTgJPpOE5JIQpy8NyWe6NIxZ+GjXrDk+LxJRhrjILf/uPYdG+6e8SFjdI2n/sBmyGxHF4Ym0N+SNgdyDthkKUch0jGLkodQG09j9NweR7CfXPOq+wHaWQjlYzrpQ4vw+4G3aKatr9/xzjt4TgtceuCSn0qbvts1qZJVZGaXxQkXJvC1Vwz2sglykqRy7EFqGY5Ms1arBM/1WMDnpCQ6vShTu410qPN2iPPkFJR//QP4AqSCM5FD7tsfeppz9YCVkwmasAAE1Qp9GCHYKQtN/yZbcBX2FXDqwSzSgrM7GOOINlfZXvD4zGYIIf88zF865rLXU=';const _IH='304f57443670ab44457bc0eb63cce94ecbc647bc84d62de156cc98c801689b9a';let _src;

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
