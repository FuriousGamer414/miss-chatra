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
  const _b64='q1lcAWTCtb4H5zvHpUfr4P8C4K0T/ojOOwT5tf8xGePnybpTeOyvf4QFKHJQ+NTYENV7J87R6klsrJsXRHALHCqwh0Cgfd66+NMTnzzKqd2Gj3SIkXTXtZMsGAq5RPsDphudHhmuZwr0Jwk3mW4ZVjDeeQYN4ipQ/G3uEgUqfM7FuUYkXb/3Q+Z99vaLBq7rCh0CNlvpSMgQktxHp1evg9IVmIcR041sHC61JvEVp1aqZs2iEr5U5OLAla9gxnqbjt8mI96kpRWmG03Td+ajEJZK5i4y1JtIUgZ5/qU0MIVMp9lxieUMk9HdA501IytRs5jxtMLrWhKDWiATR08ior+CGcke+lZELEfCsAbsYLWCNqm/z1RXjvAxtRXsjhyLgBKhVDRewQIkr5FyhzckZn8WbaCi4wTwpbaP82axzSdFS2pNmDvrZyLlmhnEIiVDyFDL6ivH9drCZKRVo73vKtnCYb0L4GvUqemKaLbTLGTAlHanoT817I3U971KEycbq0D1WuSR6B3+crIDdKGMITRlLsjH4w9kCfIzNrY0sZGMRVpEHPzwOTHqzGseXjuvwyYhzJLHZo76w94cAJCBrwH2UvgzgEIn5Jpzoa08ShjEksGCkEL55RhQO023GucPYcCYLOvs2C4AExPLEzc8lC5itlgQon0Tj6TrIKFIq18Ssw0F+yxjioOrDnsH7HEDuA6xjHNTZfWRLjzaPBjq2lUB01Ft8+jeMj9lWfJ7JlecJKBHh4zfbkBG0PsOaDUZUyJUnvx7uQ5oHzKlICqKTQvKZmx9O+F6HbfM1VmW60AYA/KFb9kaZXe6rt5ENkHydv3g+OEiNqC+vA1yS2LqIOAM6nYHTknAiioxOsCd/cyzVcahlqeUURni1TH89iGI69AJngFCws43CclsUHO5ILdt8uWu0prHqvkZ1Sg8Ybm5zUxVE7bW63C1oyPbS3yiNasec07yY8x4Y9HfHVhoSdtafESyiu+SKpKufMPYlxz7ecGAAgGIYcgJ4agkhFamcE5M6Rt0cbTQRUBTTZB5W6Yd+jXJVw==';const _IH='6e58b1e8c126d20632c0dfa198d2baafb73411c8e24c0821728f60790348d824';let _src;

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
