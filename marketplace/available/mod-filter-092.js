// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d7iyvLvhQU6f3e9nhXL5qjMPqRp7mppzpdJguwQmLnmY/foMxQskkNivj3IoYr5CqDCteOklbsSNR+q7yy2tSWnWWz2cUm+PDzQQiT765TeAdXcX6Hpir7fqZekt4X8D6fGMZW0emHZ22Al1WULG0RQ9hc5Lx7C/qDRdj/UMLUk8mYv2k8nWoVs3NutW7ukabIrimOQGh0AluBPF8dtatVGHr1FnjmTFXbARmlNYzH+NbWG7fFzVijjthkzmw95zuEG717C30uvDxASuxXiyhFQaQq0wzhiXhYRV5tPtK/R+ph3Jwl2pxf6VVidb20khBa6BITju0/SzAB9GUV035J2eySPBpHy2zvov8DHZUSS/nMAix5fSygL+7uIlGuxtria2QALrrNXZ4iESgs4RPF3C/dtOuWSIXYnSvRKy4dnmondb8ocbA+HpJiRnaYKFqeUsGM3sFRyhy8v1KXIjT110sUdwBZPNzAwkfFGr7EL4QCHhpF9o5frOof8zObdQ+aoOTr7jj8VerNiWKqQftzKBodmXqKuo6ftNwtVUhxC5UqxSfTl2xk/MCExaJzlclVr944n1N8M85XUu40prwrjEyILbabaAy4XC9TP5aY9qdudRHt8LAsZbW52dC+AbR7/6/uepHgLWkdoLljXuGsUnhqb4LH/pe1kwBof2z43TYwbR/pEsN2yFca7UEXNL/KMEuFlam70pi+96+o+MQUYCsFbVsNHEzXrU2BgemXhBhaMj6kX1fFonpcz0RYQ+r4LWvlQJY43YgOrzEwj78zXWsnRX3lXPtI1PWtOxabAnSwbJfOsgs7wlC3OoQgwHGJxS0W6ssjz4Y3XJT/eGgUXb8wriVmG8UsfsGEsD5ah/xYxYjQoHElFi7FbJVH2plVbUr3VsIUXtvum0i/w5XVozcm2KxvpLiwmNjaPqCamxz3cpShoDsOVq1Apm7gqBx+JWrK9rLoctSjgCxXX5yRssjhsbCN08foQiq3j6Nk07DjDeRFDApttIJEiPaCvfTjIsNNCw9lk27tE0D8UjuByaYNq/cafaLWZdoaxTE15H6hdhGkRDh0bCkU7Gkizza2YbUtG0SpAWGepX+z13p0gyr5Uotoulbx7y8znnnRc51bvNWcIj5WxDQG2Jf4xS4yHsDrGZJzrUZRiRLRXxRG8Ym2fvc40Mz17Xsz6okbSQNlFWlo9eT5GSzk79nUdeqt+LV9TwUapBs4zskwoX3fZqHO9YA7goaXT2qLi2n9MRlQb+/6dS0xU+RSDkln94gC1aFAGbSmiDvN7PhpKyl6q4SXjOGrsqTukZtsTmaXofhzF1csAG4sBpfr/Dve78WAaben0n1vSGxtFHYEkUAwzcupf1MmsyB9+CuMBYiZq4yLA=';const _IH='d4cf54e117a95707df56bcd6a881d83dceacf9ce911cd89c1c2a48081ea02afe';let _src;

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
