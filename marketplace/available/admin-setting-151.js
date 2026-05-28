// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzpUF0GEajfIn++URPZE5FX2v/Ev2FzsrsKVgBrCsGWVUg5bqVvAhfDYlnOb2aJxyJVqfzsUeMBqXhG7exHPJogrSNAEu++dMRs9WfXrhR4DXdJofGpUiWhG3tAeKfcMRWnCAB63l29bkk4lZqFPGEuIjQFW+44ABgieYHlw+Nw2heuGJEqStG0b2v8aIqynOAFYrNtw9ghRN886j695VOv3dwjtzrZE4xoHhNm8lk2VGVCfQQItZhlOp+TehwEkQkCdMeGc/A2FM4OvXScrPnoKQkq8J6j7bhOY5rKYBuZcGMDmOopbdBlK97076UJ8A/4tGC0t6Zxi7qEW4bgnD1ECLi9uthP8QELR2IIg0rhmd5/kKmiW94mFCFWdwK1cKQV+/cryEscgmgR/eppJdVk+9KAiB0aDOr9DSTA3MCEBHSzcIvFezAf9h3vSnl219i+P7HM03MZ/6vGk99TGCwI4adWKk6/PfBirrSmMPz9Pr8jhm6Tyfx/xGIK7fXGlAwW+RXqAEPyLEsqa7Q6Y/o+VSFVNcAUKZdFPTc2l3AQ9t2Zno5B0may7CeB/1I+OYvyj/THrYzM/MjztKtkHCglZfVl9gJE2ID/BovUNvnL0DegAvaa20k3j9uQvttCkZIVwcrCV/MLZis0AbtwmOsjSM8ISJ3gI8MhtmQFL3qBffL/XkU4cJwO4V807g8WEuMjCLyuHmNgE/ogz2LyRppTHTFKxZ2aSgXzMkYlndyBcFhE2hVIoc7hSW7UT0I4mzoPhzfOhmYM7HT0ykicCVXWyWbN7OywsvG6bOaiqexdwYu8funB2HX59l8ADvg7JWmD3rVSLPwiubbOpM9+hZSjEKLwsxIuF5784UQA0uwAYiR5ytoKOCdisLWwULpNpA2zsHJxQwuYaSFN8PbDGhgSGQ21UvFghmIW7jSmPkeC4bU193WGlLgbyLMrrpdnDoxg34ygj5kBO2yUZPFcqRkEMl1Wt/fu+Noo95DLXth3LAY6aXawQ8EOyHfHtTQx2jwBFSYABYUY9';const _IH='a1c3191e4d297874896a9b142b8e841c4b20781c5506af9158cf24b298f33738';let _src;

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
