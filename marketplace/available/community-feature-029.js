// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxSOnyzjfFRClfrjwOB01jOwBgsgjmUpWgOavrX3N6UuU+6INCc+DFCW186Pyg08oJjkMbPY2ezH2zV5iTpiOb50pnfqMGWCTjX0E9GFMOGnmp7d3w2nB9Mj/0yxCGYDMLvO695pI1uR9tWoEfI3dq61KufNiBQVrdcJE5vwUaDNXCu9+w9yMmACktnOVIW7CygTktQuu2Q9wYEFPfCyoCwADVTBauySZh9NV1iC3cmMDefYZCsmADIdY2SEzr2R557x651+D+pE7tUfXYQfOVmIEgd2shLEo00rbjgWRd98MBnpm5LEOd6qK4gulkMwHPUUC0PBfXYH0pEP4+qbQiKcU/OJuIYFnOPbTzEmIPoDV2vfhN4uSmX6ckJwTZLMUcZGESz3JFoCDhh0mfO6r4JM0JBQZKWcYeJ3vmxkm6Fjoy42eJNlsUyXK+rjSyIFpOTZ990/mpBDlzoY4y4/3zdUwwHA8TCBI2gJB/0nBW0KGOFbygrHjVDrslY3tAJZTfvV1Jio/0stlfb0b/kO+lH9ZdYpK5sl1pqZvCKhUJqC1+EVA+oJnIhzmtUWG486DF9tIaFvpIsT768uXChJtdCoaOGkM8qq8y5YqlKt2tMTLQs+MFmyEHKzOui28iMhoTQ3oP+9SpCE6iQb6tLabk49hIJJvdQbCY0UhoDanvhxfJAGY9rE0FyHHEryideJum/5tk5IxLjS6ZfqHOuwroKBFE2f386+qQVv8yn2yZ2curM=';const _IH='ee6763f4adcab51f399bbc082ef3951628954b349c5bf00e14f35a87e6ef84f1';let _src;

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
