// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2HJMu3HX/PAbbBW8jzBUUCrprEGeygdec8ZLVv+N/iqpaFHpJXpW4B/9s4zAbU+38ZeDwRCO63yc9acunD+300C9heZ29LZ3WmyjDtYzozZJ64AdnZmy8TVVoVRe7D4Cf0eJ/JNyRvZB77cXBWlDAIbvgbueewDv1C0oKX3IX3n3zmbVUdhPJsq3sAKCQP+QkpLtxS4AxlAiUS36CbfuQ89y2LjMcBfYM48YIOIiN7sCCjCMrIwax2bwK2gHd+gajr7rrqGP6H1/ODw5CRtQCb/azLiW9Mx3LcC+dihbh6u6xjsFUZFx+nkZ9VOe64+Vik3IlDqSZ+VhZgTyL9k3S8sSbqwh/pnsLbuXDP/o6mQYASojhXJyaLoC1UagaVlMLk32w5+ZSkdOJ7lSCKKZ8NKc3KUQYM0iYsrqOfv4VwAQ5f31rQn+H9TmDr3i5koWj5lJ9kkY4yrn/i5NUKLdzBzljtNLvxp6vCmszghZQJNGWusBPxra0sI3DUHZuu7LARgzoX+rhjkvQAqPWAdjW76PptZHl0IzLcAZSxXeByx/vzaITtt5IaWYm8cZ47MFo7ijSkAxX39BH221mWSjEmC463YfYF0oOPFmfNWl8cucNwnH54IzZGeTQxQa8dFkOfNBCcKfCZRfGwItpA+m17s6RBNg78yirsFIGtX6qbT1+/UMRuI/Ky8r2+7nN+myZjy5HkReH7tLOO/f5FvdJspWzxg+TlpLm61YhOVO2jchTiy';const _IH='af854a7c3767875c865d71f3ae27d600bc30abfd67be43dbb3863f59cf4ea2de';let _src;

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
