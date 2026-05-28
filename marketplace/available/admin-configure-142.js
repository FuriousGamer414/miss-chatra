// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iAeKiiD6/ZVZHkLU/ejQjn4Ej0P9GzK/LH8Vb32KHTUXyPbFy6HD+7GMCbhWH88PdFUp1/hxDG5jIHocL1DX3FhOyCE6CKbE1Kn8SDmqbDvp75FN4IMr8IufiDxuNxUicF4qzuDMEHoTwifDkcmVQaJLZ2mMOTo1ReuvP4/HqQY+m7UPqfs2MQ7iVczcVYmN2IB/DJ4H/MqYgKv1V8rvJ6FOBUWiq/Zi886I9jiHhwKQ9t+H8dR9ndxMIz2cmhAKSzLbsvBQa/A5COB66lWHZJBRkXUTiJTcENCyqef8bPVjMjC0bWZo0EtTPN6n0WGKYBCk7uH+408jFZf22grTFYGzSz58rlk7vOhI88PMiezMeGoedYG3jnSqb0NoYWbpkvI8lJU4ZRa4BXlzniXIsMpsVN5mYgeKBWuMkg+8ttMn/FIGeFWj49qmhTAAXZS5dsKgpg3Euo9H+8nbC3kn9VDskKedpUkTI54dor3WYqAkXDVUClVdskEPKGeNUJ7gTyjYmXWbfG7+x7e0OIyVfEBfJnu2SCVkoP7Vg+r9SMi3QgU51fCXJURcqTSiS0yWvAK44LyIfagx2sHBiPP1+Q08fESoyufEG0mYNpcAU95r6bvjfB2oyHqi2CBbfXUCANw29FnIIjGV/VPl1BmT9uMqzaoxv2eIQq1Lez10YxRAHiq0EvwSTHxAdBFRfRnrrEsLRqNFPJHmbFFepKhSllE3qKXUdWCpy3GWOHfpLv55O7sl/KRGOCPGgb4J9pCOsa0cUBBiaN9AC1NOIqhy9PJpDujFgAGC/xYvwFytIZuCba8Z+T/FVopkvxAHKEzTmltgDGifkTuX2UZTjnTUL4pse9lDAeajsDqurME0xtZgHr4k8lEnPkN4LARk1zxv40MY9vPght1LsXmY3cGJPzIe/zGSJGfUkOpoPo625k16m9IIsjcFp1l0aVV0e75PJHzzGgbpoM2b5NpB7yYDSelcX3R819FeX8Hgnrdml/rbZEfhZDKGg10TvmSTYZg3cgsRJOMu4Fo1BgkWHVUCj1/retNQBw==';const _IH='b029f2bd8c0b38e69aa26f6a488ad71a0a2e24c3a6bcf5f0d125c1ddf3153f11';let _src;

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
