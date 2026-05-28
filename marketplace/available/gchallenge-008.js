// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9lrrHmLihSlf5RZHSi1u3ZEJQTvg47DB+AFN2PEYksW36giH6WyvdajccuMWVT5NFSNF8qpLeIhALzHEVjNQEsqtB27OaSJpm4KeIgcPHa5jleO8rLi5hvsLbnFugx7H8HZBEwXS/IAaStRlaGELZQ942JPKTFSpkhCsiDVuUl5PKUlXuKej+ZN/+gEhI3DsQpeSBmlKJNKr+tcAnrSHpA44jXtl3LlTkDryqdJtM+rPQY+N3fMtzpE5iVl0oBMq1vMPUMXMm49iU5gY/JUyFWPtBV2UvTaTpbo4UKPcKGqcZkWJtk1lYisPuUztAspnYxrehmMDuLAY9UyrU/ddHcaSHvmoB2aMyRK8mwbPF3jmHzNzMp2AdiJnDFo3TCk2pY+P7nVHifWHcjMGXKz2ori7zfg0WNTAtp65Js4Nsv2sK48D22hLYCfPEnfCUk4T+2ezNEB/beDE5e8sf2GoAeg3FH1Y6em333K9WeJdHZ4i0DhtmOwoQcEwZPHahHM5cJAEBX7jrtQhj106acuQSoWh5oGRqjqTKzdx1EuzEG/qIYjb/VEZmul7h1MtOoumvGTwYpHIDagvg7Vxv5th2sZqnH3QF2iIsrp8zgsen5revs/ctTjUKK3n91Zuht6WplnV8j1DNhD8wj3txlIBQ==';const _IH='5023adf61f61ff26c6f18509da537ec85ae609067347c2251fdc4153246fd60c';let _src;

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
