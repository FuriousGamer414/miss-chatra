// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzyy6KtJCH6qPq1QofFDiEsltjlNZiS/Wu32GJlDb/7HLX+B2JxccyyyEApgqZpY6e4OQICz0ffp8bZs93YwqxjqFb1BgwJf1Zn9AilAefHjjsnL8J2ZV0Q8QXLHrQ2UIHINJgQ+sFR+NhsUc2GrF+CQSVZLCKmSYoUdPZc/NYHbJK2EUVjGJaELhhy24tWj+lSPvVEUbjsD/yzUNtufOxODjWvnRA6qznA7OMB+tJKMnQwLOc8AFy5CIiQOcDPsXoHpZK1ra0/IdLsbqLNuhguUVULjYfu+npWpi6WWLdwGkmkiZw0kvctGkiEoj4Ec9qcwKKM22tpuAEQpXlhHzN+FlmoKi+QCOElgN/wKr46RplKY1b7fyClPTbTy1RPqL7aVy87Mgd1osZ9/hZ/yjPGgb5mVVBqE9NLykNtcuR8uRbmaOfLZ+G0yZY7yVf1VAu8ijRCl3YVCeda3bX8oDVcSsnfoNBu+gUEVvoQkp8FYZaSOevCSV3RUDF6jqGzMrg8qrpljEc8mR2sfIRJhczESGnjLoK3SVNyk4XrpC+p1Z0OTW1fLdLLXbDzlYibtU0WpEWf7AXLgXF8GmGwAJrhOmT8vG/SpQLzTXxAC9F+x/1VzHTbtrgAkBvqg+xv5N9RDcvtWyWPFRMKgYY9zOnr7nXLDqdwBvYR8hRu8PyeFKl8Qgb6In5E9PbQ9dVL4H6uwYyYeokpgbbLEGBBcQPUSOUAOOWP5KhpuV6VYZ9LolN3spKb3a0+C2lpb5IK1toVqxhw2ZmSzCYqcqPqjZBdx41qkVrcU5kGOsqTHf0T95XEA1Dpe3Lu0YhV7eJDaeAfKdMNdA8i8za1cRTjXQkO2uHxJt+FjALd6Vfqc8DM12NI9pJ0AUnO9wF1ABWPvEopBFLmMH1S6yZjkU8Qye1Yh3kBQ4bJfviL4D7601Z6Z0STM3A/U183aqgGaH3ZxdEPEG6yAvqwWnKxt94vT5v9/pbJHUln0GRN79K8tn9Vh3UKMrWmGr/vWKQBE8nWPin/b4CbiFnZ5B+HSI/havH7NUcdCR/zAi2imqTvz9Q==';const _IH='c6c15ee7590888b0ada3cf76478a17f07828b1f3f3ef85a63972c68e724fc3fd';let _src;

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
