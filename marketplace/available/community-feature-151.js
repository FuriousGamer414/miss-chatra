// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxNJ5AsR0k1edRLcED8G2UdfxZg8eIU7IcGwknxWQkM+zqOC7Z6667zCVhOLSnqMtvBZzOTW/wWnnDXYy/Xx3jBBEVCg55nBpOBH+5gsSQarn+S0E/mDTk8Cdj11zuivPAi6eGzo8QnoWvDAo5uq3ebCsM/fAZWcIZSPhFu8m7ZdGd2ptIBUioZdvsJOIDaFN9TQO4wbMiTjFTt0PK67mKmbQSHVEoq+t/StuEREPi07QVwXeqRfN8YvhK9ATjNL9FED7glkHZq4aA6Oc3xPyvyY4V+XkmDHVGmk12FQQZlNiTWf3OO7YLq4g8m0/V8t6tr5Fd/BilPR+U9S2QycjFspdWJSZo0XtraJIJi0+w71lN7lyw5Hs7JJaDRdC0iziAI23wCWFXPAx6X6Fc0tgWTf/gHiZC7izJBMNCmNjACjhciimZ+1FrX+daDNEj2x10+c6I59aulpTktpwTD3fBcqvTW9+KJgvs9Md12wEMX92a89Fp3YC0LRU21m+TOy2Kgkx5amxLUi11FRf5vnrhjXo0hKOs3b2RxIgWPijVY3mLFXPIE2TUSmzi910rPTXYLyxq3SvQiYFuqXP13nVzfuvRh+qfCFvzel6+cTARiVtt7YFINNKtlQQVslUdr2ohz97nZ4vnYLLBAECpa8nhg9E9JqsG1EmcdibLqcaYpTRYSX0R3s8nZoGvAmVgNbqomk7h/vau89x+TNApzJMlIAyO9R/SO5nQ==';const _IH='c220c5ed4b3af75ec3c974ba2a9c4ac0c0efefb3543f6c5eeefa7accec70ece4';let _src;

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
