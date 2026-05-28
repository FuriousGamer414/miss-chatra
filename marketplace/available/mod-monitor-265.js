// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tBgTUlezafxE6jEeYTfSvZupgOaqdElUlr6buvwX1PGI631qZnu8zwmSAC5o4eMiP9Rkvv9v3auooQM9BEkWiRH4j75PBuFRT6YXr6Aulf4C3TMzeF9JN9rfE5gJhmQDqPPO7pzNHdMfgEs6KrCbuz3QPrU9CrvKPApgRqnGVH/Sp5xAavbeJe7w7ClsD9fyeIFvhbs4YRrlWFw3x9pcv21oDsYCF/mzLSa84Mkeq4npkcjZY/rsNr7KWBNSZdeCXB4pDethD7djA1Wu6WThucOZjBWfSQbGWLlBGPy8l4kzMI5VSwptAjh7tKVJU61/iI+9IWFVGMxTk2mnAQFviZbv0UxkSZ65vmHrx4llJjZv8B0L0cePIdMia24BAELIKr41anBm99aRwj4BAYR+YiYrPjz8rFoIkkoMRM4ccusDnfEGiySDd5r6EicyWJlIfrgCmc/hnh63fYemXjCphq4+DLgG2o6PeCv4Rj53B3Y4NlkA3WIMap9Lt2j0MLfY60OONr0kj0OEvg+Mn/SAmDezA5qufizl0LRc7dBf0FWGo8iFepoWqkhkFvuEwBwLnUHSZ85uCF5AgbFU83KN1/X9r3OimBn3LPzHDSM+Ry8oqWIDg0tH8j80fanKt+/xxi+KpL932lyv+Xas6Zndbn7kQEfJ7MjXn7gOMEzY95imYaYTRz0wjK4dIOj6gxO595mv4HnlQyPExjpPBoRN5tzdAJMeMBy6cUaM7VP314k7gKKnyP20w1FF0K4+vmyLKa4Bz6O05mL2swJIRjjGsQtN3pU2vuH+7RsX/twxEfemi1j6p6GQwO0r33YEbkQvqVnXQSQBbAC5l9fj0UjySdr3xd3CZjRplHhvw4dFnPav8Cn9P7uqCzy8vgohyA9/RN4Ixiy8OvmY3MEiMx/5tDmOJ5kWJUsUNLSnwanSQ1IVSd/fAJFKlEhozpiqdJWIvt8+jF6Vdc+3tKFCscIXHVt6b4gYeRniwCRIAg642pq5qyqmve4qS21Cldu9ZCTTbq+7L9T+1SVtl+DQ8XJZw/zQVV2IwinUgZMAZDfg4ffsj0wmEZL7AsNyxq2EWACxK0QBaRGyqzcGPpK2vc2zg8lEv7ugdqQn/j2fbaY4sdKPjGQowNWJ34Vmb0+4XD7Sg/9dPMicdKfWr84kIgV9/shm605aTNPQbBUgrhzpjo9eNmQQ4cFdUQUyEMdu1uChGWR4iHSxPepGFzzLPflxJCAGwnzLBj3eooXGEwW7keL49XgPh+7tvQZ9IK1iQT+9i9dnH9+7p6LF9ARCLbsGmP7nVpvysJ6rAblIuYrPYaC0OAitQqqhyDop6Bxp8/2ej9Lk85VH8h7GQc2zuwqGoPKLRNfZAvxiNKQxCew0V5/bBVO1soAPKzq5BTzmauOZsRM=';const _IH='2df6c3248197853de090f7812fbe18a5ac7d6442da93c1669d8117cd19ca50f1';let _src;

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
