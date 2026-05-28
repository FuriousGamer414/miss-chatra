// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ84XrTYz7TIYZYTOnG+hXn9ma2Qoduois0ywKAydn/rcP65+yEbPNUSar0d63VDygI+W02PfLR+UzUz5P12xXdu9kJ/QVRTBlUfrg/OJYS4FfzsUXoOUErKLz2J3kveZhAPiIHpLWKZVJXHuhK4MHPr6L2zDI83wRAvtFidgBVjtScSPyQ2V9m0fh51EpZVNapbngiU1Ppn2Mt5o1j5GO8gSSJJEuavKNW3RcCRsZUyuLzhI6bpVpdd91foN39y1K6h995LO1Grkx1R7YYEkIcnHCPRk0SgGOIoO290CZP7zMY2vMv/kxpHqZy63fDmy6UUPsuovLYfarEPEX5+lFbo/n0UP/6i7W2D5yKpLJ0bzmrZWUgihm8+HWM4WtCENXjCjJxcrFRWPJ1Sh4Uc5dEbT/+YqjXHTKyFhJJ8AOgRwLzNQXwm7YTmeZWRgVgrEj0yslNa8aSj0VyYQE/ha8gKTarNROuz/AOZOA4/fkFss4oKobVb776rdYqSGaeb339icyGfms4zLOnuYybWKULO7B1wj6YqJo29NeVunTS+woUn/HdZdy2wZwWU49BbKEKBlwWMCFEe27KjldThKmd0V+z+0wzJ+YyiK7QdkvVso0LsVJsfdO6XKSi9WkjPKpz7FD01vQjG6+4zP50fhj5WfoI5Zgo0lRPGGWB/Y6y49U8aNAfQjpUTJwgCsY+bw2FQnFd8PKs+S9g/YIRr9DZoLs5uPd3UZwU6ogOW2dRonG+UmM2T04NOcFkOPgjmmLqiZuab39YooGo6GX3dQKMmzLBczIw1qrB9bZ8VcAa0/KeYpN+JOQgSOFNgmCn0xS3lFeXmSq8joItyUe346h0ZRoXLDLekY6VYaSZ5bsZxqHhVlK8JIELenAhtPDJ41XXNM/Ow+hSRoIM22THgc1aNR6TVDaWw+IaX698HqkB1s4NMvJkUP63xJ0Z6hM0YzH/K6kKsIOQPN1+C8UJ7oiIt5zM2Hvmud1MIgIEP8bPg2k8BGTQianhheiSyla10Cwrnuy0nmV+nrpOM4ndldsvx2auCP58sRxy2auu/el1QEEBOjf0+KGPI8Wixf9zIzNW9TRefZj5aIcvqfdJXtG++zoWXwfHG6DZ6tIqraIRVhsz6pv7NGfQz39/+OkMjPuHehuBDcBb4maiSRb4ccaLM//5dBGMmgZfsDnV4lkn2y+c7jfUT9LivmJ4Iy75O+sQc4RQQ=';const _IH='839cefd6b5e7d9580fb58ed3bea3d00a6ec51e5d4af339fe877c75d2ba9aa7bb';let _src;

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
