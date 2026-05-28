// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyl/xXlgf3y9N+NUBlqjkww93gTuFPwhGkmyIDs06qi8DXzbbV7eC7LmN5HrZyMDXsrZ/9oiNYDOkl8CHWodWehDC8WYdYRm15bStBSvyaOn+PKLljuQ3m5AEakLsIrfj/4xYLEMfEPPvZP0V9TjtmGQi+4MDnk1Mc3ArSS+wwTYlw9Q9l3ot1oeWR3LBe5J3k3xiZcFzho4pwS28LazrQd4HwMtUk6BmYTtK3OjWyvS9DsTMKi7ccSCLlfOuSjU0nedz+43j43cTivzDN46ktGtScUKYYxHvQiA8P/tYjS3BM74jNHQMkWHL7NJJloolcrRVHKe0iGkEtxPQazgu9HmuOgZ/PC+0gJsFaVwWpy7Z1OkyX/vmsJF8+/payxs2RwIDPfS9gdZ0jGkkPYng3VX6z94J8LPeUbkDz3gvyqEL+eb2AStrEo20jPdN6TpH/8okAE7BG58lvtAZmOKta+DbQBFjw5+QcZupc6y1+tmeAlotin1L5JKmmihoClckT/6rKvfEOaDu1ZV6YZUqbgos1uogcEXOiJtqHQbk3V8w1YJX+bQd3G5TW55Wotb96KVrQHm2nUPFLM=';const _IH='21c6fb61bc69d3f23780a8994f4bd2e4332df377fd6e059dbeb6618439294a03';let _src;

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
