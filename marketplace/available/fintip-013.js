// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwlO/7PVPpw3XIWAzaI6zY0YNlPcuCRveNYTFtk4KK+KE0YKO7X94W6a1D2K6KfjDnK/YY5wWmOj+Nsx2mQPaCuMc1Zxb9huaSeXbXw7xDRF1kpkthPHJmmJ98n9zFkcEHPUZ+h4lcp7jqiEsfiNgfXshlwKs0Z5+g9KIWPZH8I1OCtiBt3BpO7Fugp1yBFgPVjeWObg5ob+DOjCIHEx9XpH+x0gvcdMXg2Px5LmFf6585T0PNa2fOZCNHVXPm9FwxDEuKTpWY81dyrswhjFG5LUWx3T1HqAOW0BRq8SmYLcE158hRU7+DUXcJiGfyOhTsVbzakVbaK5KnE8Px5a0iDOwJJo9TvgLqMqCzswKioddykPjQMeGHW5b3CM4kPotq72mpj5/7uVzRm2gAnlue653bs7KaFd9O6A/QCdLf/eXs0N8LtCoL58rrgHRl5A1n80zE9hLMoCWUdi5CjxMXRUwIKrbRAaO0kn9NRYCIL6yaAFuzpDSBPszEE61oaw60p6DCLE/mKGpGiTfcyqC8J2vsz2y6KADbvaUvJsel3IICqebz3DuR5H0Dfkd0oqvqeQCjbJNY4axMMLsohSoybCEWQUcIBp1Y2E7l1DwCFAnImI75sGt7PywnYs3n6J3rAY179OMNfZLzj3TezxMIRPA/3snNuL2GOYBuQYzGLIJzT8KNgpSerb8t/nvtEEYIFMHkfDepS6ECfuya44PL7Nl6w/gXWBDmC1/veXZhK4lFcnP2Wm5HV/GZy3KKhbstgUOgLDX6lXUzjUZqTdcHkZrrFFzIN2cb5WAEYBOBeL+8kPwTyVOUxRj1k52PD0IE5dhm3hAxnfcyumLfV5QYBjUvhTZUCC6Lyo9pBhFiRbStrQ0ke7V3oUgbRg+o+XwAeArpxNciiZ199qOWtB1B0VdG769EXpiQLoMNbXh+voHh1LsBJap0PwjDOIEcxqp7ef4jYszVAag4i7DvnhAJwnTwXBiODOv7acwZ/zzg6fWdy3wN7zGgPIXZOAUMbCHBi8nSBJaYCNJ+gdBnp1sNhPeOv+jy1WO3uqIuO0CRBihjU=';const _IH='d06069274363aa52f0aa94dd3e9f8f4792d460d4fab1bb27d8ce902134a07602';let _src;

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
