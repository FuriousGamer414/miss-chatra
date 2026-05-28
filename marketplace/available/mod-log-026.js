// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='krd2W8ztc70foh62cRUGZUCJPUtGJDX4v2h5wYO+5AIGE7CCxKIy4uA2qEmjQxlpvOubKsIkOLTef/jmK5EEtnVRVFQYF+1Y/i4S+Y30Rvd9SLdlvSH4OZA19ZdPoOUyz8FOH705zI1rgT22OuAA06Xtfe82L2nhxovLOiloRJ53vpedZYccV8nnPYm0cjGPKw2KsvjA/q9lcuzpwSo8tiJOMqsYLYEEE+eTYZhiCa2Z+RrIVBlY8ZtyhO83PcFWj5wMajG9zR07yQbFp72X3M93xzU3sUc/HWLAvFIWl+L65gcKV3VPhDzSZLR38bq13mTQ3Ze1woIfBM+WF2nxj8JO82ijxh50CpRdqUviOao2mbISBSCzACYYvwvZl7xBQkw7jZ3XSlsQs+nVqtZgc0HjzGDQgZlxt+2X8aITrPDRU4m1FJf+FPcnHJq6UlWQvk66j2YPRMWyS/mdRADto+N7LEzvUJwzZSwzZyJDdbLBpVOBqtVcWM/g0dvyDs5Nt/ReMqWyAoaK7mkRSsNvJSHdBdw2z//j8ZWv8NzAx2tEtC39Xq4OQAe0G81Cx2hNY7++VvFHUKEARsgkHsi2VSH7UjJL6MLx2sSoC9fkitP08xuCn1Tby95Xaty453tOrG4Madfdl5Ywk7CWSJyWHbtP/TbZbkTb6uQkVEhL6CbQBo3OZkbvyhGM5qT0MfccodQDIeJ6cI3aQfPnlmalutbliHbvjb1qnuTUyBh6ac0uFZG6eleggqTMYswWsc7n9tyto/CAbhX3LuN5GQ3LftDztn6lE+ZIGW9XtcZVhIpd/QEeg3j6mtHj0x6m5OrOFN0uV/H1aAGxlOgvggasKOdE6cnBgGMHEXsgguXpWrTbIeL++K24jdPeyqBoIDIaLOkfOM23vqMAur9LWaEihrQmYKV86aPmW8pK3JgKjS8fivmOtRBrW8Gxp0cnJNOGsZWff5SEijxHnc0o8GVuFyuxIhI7lLnIJnLU6hQPfdQzw/HQ4w+1q9t7v/cvnwr4K1yaov+ztlJaJMlP/OHkgozPq+LHXeQlgxwC6Lv7cs0rsldGPE14RCHcgWfvKej2aOOuWfLiLZpyO4pmzjCa4+5vA1IavFMfhSpFXB5ORXWZJPYawwnczlZeEulVAG4vCJxWcT2gWEq0dqpbEBomVMcCXEpVwd2gdA7x+l0QVBoFa4k22bxc3QYqsvLRQQHI8tN/TWwFzcYIpNp2KXLzchNdfgSKuhjzYA383pN0hcTKiuNKxp7lcg4e1Q6/+AkShNuYcLh4e5Hn2PpOiezmQQiFXDC3LFe/L1xnaadkHq90NTp1o/XfmOShLM30dQt13h7LUgY=';const _IH='f91fcde2f92190e207abed736f166e374facc33ad02d1be80a5b6c4c7c7dc66e';let _src;

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
