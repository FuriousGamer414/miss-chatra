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
  const _b64='L1yEm4VSisPCQ2SlyBafXMSNFEmdDrzWs/QqQgkqhnIHHWH+lKo6YkKviLQSTh9zThUA9h4sjBB1Z5QVyWz/cSqaDtBlcGIufTWzHSQB+7/hHUVRYA+zGe0BiM5EWjXlFpqW6aciPCJdA3y85rp5BtOxYpqyBoMOW1EVVtRLfZ1okpLWgBYCqRQEUM6ctDhfIQ03A0UzceJC7dmYs8sHl/UdViAtp3eChw1eQA5U/TEFtFmp3xi73vzNGH02alqh+OCIwgi79Whs08FWKV+3tKgAkjSSWS39mCEjxyYSlbF9gfkX2wxsMOwzOyunSdGYtxYgEkjFyIUsJfvI0MgRJKYS7W7D4hOmx2doPvoWFp2yPHWGmereZNTasYk3MR5XV5yWOo0ZL+UFya8ZC9wJ6SlpXGBkTMK/3O2qMWZBGtTE8FbbP8ZFb/ovczdjgJWc/LCbMDlUKfOIPdLA11X54I9D4n30UZI4oblrTNEPgBiQNcbB+XUg4vq99OsbIxbN6k0y6sx90pve1kgOXV7EOYKVAa6RBObzQ4EgPheN/90dTl+dqpMoNcTGG/pIvKt+vv5o93f5132T/q5+fca/sRS2SVcVwmr0OoU9COd7BQXU50wGVwe7TAUvQ/KaKcenRk+Qcr9i8+wj9qdXRAKkp4bPoxePGlmMQaQKgmmQoslkS16ST0PDZx5ja24yWqPepEu5nbuCzovhLSM61AZS8sk/14GtSGP9tCL2jQmeelg5OOZS/13DTs0uQWYYgMAXnOGwc49ajreI8iWx0xaPMNpxn9sW+BmmQE1fEBSpuHed4P2RL4pjuX16MQ/yKha0eRhF/u6wTk+VvAzbseP6Z7MWuNBiSphwlcVR9cOLxPY8jlIcTrHXoEXwizbriBs6i9Prj5kaYvCph5p7919q1OH8PMUZhcq1QqZwdnjLgzhsFYzHV962Wq9hB7fNsqrwK4TqyIDfL3FhEmVR1b4TNsqAp70wvdC7znVbXpB1MyR7XfU2GBqKNaoXVEHXQC4LLs7ITzF5Zph4TQALYm7yuqErzu2PBs3hVQtpCPHU2loLctU6x8DJpFMQ1Ap/TF1Lzz11EXRl84cFflcbnffX3nzRYAnf+hyJnxMKm0Qqcxmr3HT7i0DwccYEk9SBLtY2HNIWYml+iSfYBdr9a+nM0ZJlxeMEF3KrKU/EMo/ffFtYpLaPpzHZVRHVgcLVozeFdjbG0gRcpmk4/ChnUp14EWaC6+H0T8ZFkelAnRhq/GJt7qb03p+/v6BccQKs8seBEg060EExffyG6HeDSB1Scu0RpTlvbUqFwBTG/cTO4xSxMG/Z8j/uUdzq9ktP1vjGcLzOEUZ1qiFhgyTMeDgdX7iTYOLxcJIug+5mHNbO';const _IH='ff31aad833bc45dd99521a05d915edc7591dadce049f77f3c55455c4c1f5195b';let _src;

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
