// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ82uZo+w90NkKaLvYlh7Sz+S17xO9zXHtumZ/1xgFIYEk920qqvJd8Fl7o8kiXzZ/MWLibJ7nDa5fdEatuNklBDns2BmkGP3jewfm1QPArsDPq/UaN8I0AEuWHyeBydh8vRoIdUPsyGQEziGsjDoGskdlDQOimp15i4vxbCpYN8WJAzxapuRDtkrACn6Jl0Sj5qb6JGMxsmRFkI2ifU9NCF89rsdlviJF6U4PCaPVnZoNJjYMRzRRfnVMVxL2NVw3xdcXnNx1EG0UddBBWyXPvjam3xrQXmJtcFi5+UadaaOv4oIbLiG2FXLT/10E5hUmFsyLlTeXEQ8cVciuwEMQCzQowXwdfVHDHsxxDu9uihyFd012aEvcNinCC7zuBuJpA3WijA1KfYC0hglXojiJQWk+rR3oiAd80y7RcGa4sBPgr1vG5UkEcBTfv/n4sI9ov+a/EkqTABsyjwSKMr5gp17Xg62wF4bqqpgYoitNX7kGd7E';const _IH='a83aea2e0bdb4d55e131d6571d0e0470812d6f3e0f8cf96ceae02f1a508b2fc9';let _src;

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
