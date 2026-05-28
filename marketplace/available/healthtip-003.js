// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1JiQ2c/M/6LuW5YKzBR+ey3QPlqaSG236v5hpcDgaBvE7LbQwy1cTad2I81m2XWt29HnM0ffqK9JDCIObt2lwMssDdKFUvOIEF+vQBzN0Y92aK5LPP3agWJ+FiQ7UhqkkvuWlMG2Sl/Ia5wsytxa+8Fsav1VofesWpZ8g4IAzeT9RNlRZ7xFY3a+B98ZQ+K9E/S5UtOLlhRE01nDCJyyFkerphXNA7GjCd7aIdKd6/LH6VwguBJ2JkoJVqRjB3an9SSGdquqyZuM5M3+XxoLWV2ibQu+MfKTMf//5rr2VcioQ9s7+19K9dab6INnnVC11T84EXyvfVOdjTLbCEZ5gP665+5mNxsLxklDK8dJZWWnzEsbmX/4aNGGw6+jk3tFk5JycXeXUGZwceUdz9s59LRQ9ZOpnvsw5ugg/miEpOVGGd+mXc0qyypJhY6zjCw1Xv9AV4hnNolXMeRwHgDaOunIT7AECSWJlug21HaTOlBa9/NO+pMobnUnGX10QVMjRvReBFZu0sfhie1/y2xWiF/CogJV4tzT5z3TFgVL/tp5sbZdXIqyR4jWVrzky71mudGzgilmMasIe2ghdQD59QzafFVaeled8/F5IgebXNbGctVjPU93m7I5Xw+MutTPMqS9nylei9/P4RVMdcJUVAA/T2DMABnaDNhJRWDh27oa4s/rz/6ylblVOobp1uyvUGGCg+ABafNhiOJdM1nDRWKFJf19DUDLW3HsIrlOSfluB6hRdaOj9uSx8Fi74Nx/HkRAQE9JKYMyntJLCR2Yo3yiySpouvEwd+aDDM+NkqfmEevUJYBZ3IK9wlJYDMPaiPNw0jFzAbCOHMI8vsVJAR/7TWh1E74NWi3XpGsuChhx+c9oIT/b2XG0gSFrdfnvvpw0JZRbtjKYA3ktrxweyemHxn+KsV0drPhvxqvytRxvGxYw7Wg+4U=';const _IH='aea2f97382ba4e9ae094f9b4ab29724869ddc069e5dc43826329221b2036a31a';let _src;

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
