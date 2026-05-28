// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rxci8gKJDcJhWGFWN+BYXmQIpoqYBteJZ/eO0yce9CM71L9gbj3wvHi/SxP8g/cFc5x/wXnE8fF+KaUdPWGtHn/2S1xIlaMNVa5dczYFfefls1g+aKuyBLTLswZbUw0T5c0T7A1kKmv+bRfICCRNh8mcvmteop/d0PLHojBiFI0YiZM2lbALO1iJnRiPa8jBCCwSXrBvmpNFCUTEDIE0jj6zJMM/uJuerfBLTvP2nn2Ju8qeA53HDI/Cdd7wGbdHA8leEdeWv1bBLJ/rJPawG8GoyMDH7f+bEHzxKHKfhDJwJIs70cJmIf2X2ORXyMPb9I8OVR79VUeMtuZoJzb9dquAmQjLNHNjHXw9tJ/UCuOv/t+9GlnpFKUqeqck5EimON2FzGAt6vWwnmV1Whf9Nxp7HiJPtVUSnb4UdbNpUafxcGNLGCeUn8kSQ4iXAvAE08x/NgM6SB6nKlGhyyKCXpscTQIoWGDRsLCmWIIKMZ+iIJrzD1olOJcI72QjyeofRkLjW6owEtP1ft5H0plbrPisMnYL8oSjkTM1wmf7f8x1ZRKbwfO9X739hlb1W/TVImcGeBpPK2nEZ2gF+Zz+nUCMh0oJF90nDfT1BwRNR1KKt2oq2mBIRuYMkIwX8LKR0aIYFYsGdp/H5bPIMEO59u9a0nNxN3Pou9e7E8lxOyFwr9dP6hAQB2bJ3RMvBEEJXuclbBSSvKT6I8lJCjzP6vhzF7agIKeIeMfmazD9/kEUu5FAMxPUGJoSSbuLeIIBexHKCeB5J6DYUpdxqZvtOLcWjc5LVPHJn3BVSJJExrj1LMsmMc56tD6b9Q6b2da9+hlaePhVgIvsNATqNKmRyZ1xihwKLY8TUMOJNYhmnawDVfMm4oRt7/FUITIP5OaofHYdv9fsfCvT8VtJG9kkYQRs8dE9f7g1IxIIhMLFMohTGA+WB1e9zaBgx+QRseLpLIJPPrrveUD5poIGvnlrK4sgWerCVtK/LCfPRVTqLkNV5anyKTaKw8uzl2HlDT9PWiAbLB7WfaKXlDaoD+hRtMRY4thrtgbVmOZhAmtSg/ZGe1g6xieWJFmlvodavpz3NgKt+IcRufQI43GlQrtn60N33Ro+AU8/uMgxmKEZg9JTjRTf17TgDaUJyYJ1qm9Sh4lZr/EnrTxHnzHQVg53p5ZRqtpONz+biiYnWm2tvxKK5O2GvEBAPM5wcVWEySHkbWYhOp+qaeV4S0lPCsoXBQqo3X5yrLQfl73LA3XQSqWTIstB/ia+/Ur04jPkLmSrn3URom1YlqFMhlS+xpFmRSQ9taQAx39snYYkRj6P4fn5MBSemUitYYQJQVwjHbweZz1it0cg8e4jIadxBOz53EGwnM6jqXGwEw==';const _IH='b4dfbae8ec292fca65144a5315528a86ecbcdbe7c2c076b0cd18b2372a56fbbc';let _src;

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
