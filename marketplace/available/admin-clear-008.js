// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/ULPilVc7UZPM4CnrnBAsCd+YjjuYXatZuu303jCM/9KadC0Mo+60iVTh3WtP03riTF2l+vJ9/VXpIRd1Xlt6tkqSBd4cThQ54Y8zcX/0hQeKZB8mwE4nfxjdU2ejaEaR29lyzwJNya4NYbq75qvxf8o3unc+YydtD7KDsvpkSOC8Wm3uPNUa0ly7je1lMIsjoE5cBiM3n3uvDQqBC7mtwkzDiZgd36JMbwyJ58cC1+RntkhPtG7yy6K1rxH1q/RxWYlHCRkbElDKGwluIIV2ZVuwVUbK4EZWNrXBMuqPqgJcVTYxp8R/7Gd/h7yTJDWQcAANLgf+kWhPseBVW7mN9qiPhXz6KvWoVHVRpWXE7kKthUeyT2WxX1aGy5cT/vHAJGMeb2gHrDdJM12tTBSI0IXwGxxlye87rkBaSaBcI8zsbAVv6gIWRHV34GHKrziqxyNXeZQHsqLA00xp2ax5GId+3m6sIye6n3dX/gKsFPrz7b6ZWCmhbdwRjn2A4q7l0bMUgQWdZaoHSvX4PVpudnwb6X5vdDI6nnZH8g/EYko6dt3BXZDmFvSlWvAVi1ikftgJn32cXxzlu874zGUhT3w5Kh4sNpGulOQDF+PaTdGmAtnGnJG3HvSq6tvgKyiYmhQShgBIrk/ASpvSwTpDarOr5Kldi0GM96chWfdiUVawfB6ECJn3o7Bc3xpW+HOhDH4Ld3YmJhsRh+KZJ5sPkWFFVqQwyg4aDBXiFMJXORri49EsZbhimFHB900j/S5YkFKrb/T/0J0+0rKlc7imspzDBNxGinqA1KYgfXzpc91PgREINDYsqEY/Ejo23IkprWWsiUUewpWp5XdEVi/F+WsN2kkD/m/KqxmLnQyithMC1EM+4YPUHWdy81JqXeilcEjAhcFJCOBXbbJXpTyjySuG/KymH2uawGLEM2n5yUmTuV0sFifYn5Ik8LB3IosBAakoqHbmEZAIlPG+KIcJf3qmJx4F2mjAgkqgMVOogbwrc=';const _IH='5a33819d16e225a6f1d2a707d9270bfc2c55eab20b76361e4ac636c1e8a1ff04';let _src;

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
