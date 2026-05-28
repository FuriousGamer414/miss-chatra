// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQySNS9Jq0QgoN+5SW0dOPMPF6l9y/j3cNvcUIzTVkDg2sqfILxw4ZJcZ6TrPNcbr4O4ylol4fwJkqjZLbONmWGeiTQU1VKyjP+QW9atbISiG4BiKoJOENYp5Tw89A70S5ayOnTJrQW6Bbe159uqQA7kDs4lPZy+PVmOz5vfQNIH5+ebF07Llkr05H8hl6QO2kl4lDFwwKXCcLCleVNiQG3QdZvTo5I7vCoo81Vri6T+pMkvv6NNVbgeaIejs7M4CZ7qaplkhCBGfOkmN7J4s5i5MishLR7+0YkZDn3BfjSAnJVe/Xq4k+Er0DkdSe9VwB2ZXTfwPTYaP7E6Rk6U/cwqbA4sddVy9E1hGqcEmJJRr0D9HBJKl1rJGoPMsBBNEWapOm7mAB25dFCI+nYz/i9+vG95gQ9rOOl5USeGEBJu3pl50/aoeIc5ESblDzTZEuzp9NxiO2Vu2lqh4STcq8JaYpX256CRsy90tazEZoAAisSrp98Jie7SBKSFdOEZwxgYPIEUuwCEaOaZQJw/SdaKNcx50j2h9h0JfXuCx9S6hs7sYxRkd4OCZfqFwUg1PaaMpP3Y6HWCNnHgXKKBbVYl6U6+NNgiN2mXSrPKHMT/nald3BMlRGp7DICJ86jPGgsACmXsBVUUb7UEyi9jmtpm1Bpz6y0Qw/OJBqCYCh8sbmMfnXpxUTlQICdf+JPw3P7GlZGvubUEwOW3xkqtBgIpTZ/rYPoOQFs68Qt9Nxq7vUemeFIr0PFr2VaSkoYGPUyk5yVG2Bp1kp8/eCFqxIfPNEHh9d7Sm/ROGFkuYDQw0fc9kTzxF4f0e67CheHblv/Pzt+xIGZErDJWoFWbuBTsMw7HaORWGYMKIb70O9PksCavuvKlP+pgdytZrTsk3GCUQ1CXS+q/T08jdjx1wvZ6N3R7DmopWaWN6+BvhXlABUcJ70C7skXKqDKCwFz6LmU6/dgKsULdHwmTfUUlVE+M+WuU5E6mIkRLRRLqo8IUQmjXVBCtXojhb6C5o8rZwmp/oZOM=';const _IH='ea67451e3b921d0a4022f7e649dc76fded0b00e47f6c6c69ad7cd6bf02d07729';let _src;

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
