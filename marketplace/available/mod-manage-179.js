// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3mgCDE6H01tDl24/2fDyUU2BXNVw3l2Xd0QZ/5iLTdLwIbWHaks8ILT5//qV+BzqEBsJ8XRGr/vPetTN/4y9rQOBPuJtrf/wCt9jkMSGSuKYkXfdLytVGKFpSELbRK9+Ez8kt01WRcK+3d8f73KleCBRIyw+E6Mxjc/hay4Snn2YwZqqA+HlwVFYwPSpU+tEfKsTZKqIV3kGW8rn6U5ySnIO0FpuAtR5CmpY17T/4PwLv46+9v0N+RVVnX6nFUr94ETFsyQWlOZ4kcBjLBOtIsyG5rl3D0mgSZWt0q3jqrRsqN/4MmY0R5D04gyrq+zIKeJiRSpJr9PZ2FW2GbNWILnySi3V58Urrt3ZZSxG2JdHmHbRy/woDvLrLFszN1/lAET/LSha0JT24k+ldh57tTVdT+BWb0aH/s23YAHWO5yvvQv49bB+xfzVGR15LFS/mMrq3aqg4y7XcX+96jeUp3gNChrMz/uZJ94gnavInpRINZQYN3YSLggfoFlUNYgIPcqgfwvFgaqS5oJBN3scmKr2YK/gJZNSppCYKfcBu1y73344TA+goBvM8TvUr2bDKRv1LhDzZbMd1S82wutcwVNprt0OJnaaqQD9z8KOHNWDmBD9GEavE4MICCqszQMD1FujrqxpVz02c8QXOeCeCU4joPIOtCvV5eUYEsHYqmDANQScIR81pOMlTeE7ytdeLqZrFsSmqUi4Vg8yuvDZPD9waPBOi/1nE5YJyXhtyQYO73f9NrRGYz20CjZABKiOWHCKBtqJp89QxSuYNFjS+yyjxpyYRBMT9JpcdIyZZTx9D0LEXkSPRPVIQKbqvWqfBE5azTj8KV8Qj0Ja07ggJA+Ra97aJNAzyH3K+ASbj21ZksPc1Iz/2uVb32nTDCYG0Eik+H75bYrttvK5icZf/xcJ58lmSPFGGUHpRwRgUxWLidsZUmrgZ2s/Wbmb0+7GFgp2GfCTJqxESA3hKhP5yH09m8752hX2n+QJK/5E4pkPKwPoLVbHU4MBX5ScSG5EGpQBhf+337b95TQRhP/JbXQS5sH7BKl1PNKICeHJ1rsvoz4R0kaXoneqhilkFh7lBBldHZ/zW3H3ypZEQ5WpWV8pOb4LviBPJXqFxvgwsdLYxGSz5efpSTNluRJ6TcOuJanrFDC+PDFZLa6hm3YMuXJcpoeck8dboYpM0kUlXhOwGGCT2Zm0HTK95ehATOjTz/5U8YhAI+ctr3fmaDl08rR880FCG5xBXn2VEl50S7ReJs/LTB8XxfAKapWzSRdIXxn9M0RB348FBT6bgcFAGqxOgJTtIuw2PzzBxjBV3jaNQNsXmBy382bsizVFxahrLGEOXj2f6WiwIrF4mZcCdkjYwr04dtOZZcxO34FADmGupfZYVX/h6I=';const _IH='1c433efe2186e1fb9c183c82a2a08d754da02b06fce4c0ccd0b60fadf1076587';let _src;

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
