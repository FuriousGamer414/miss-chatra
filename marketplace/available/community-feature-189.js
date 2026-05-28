// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bXILOZ8PVvRbvlVBoXCp0TYaC8tCRiubdG2ejMPIjBMa0vNfVI1Hoyn/DeUISJwZziLegrnoJdNkt1lE4I7ZMB/9jx9mphq++XTHqQNF0B0L6XZG4xqqiRq84jsM55v38QgDhXcEqyD1JANl0VPcvMq9MXeJqx6fShiymUaKCN07ry3oV08r1NFXI15EscoDFgWi5NnuOvuynEVgZ59gJOuyAEKuiqbdSFWi4GH2vghdusPQp6sKqlxR1piS5BNJ1j0qgbROBl0j74lshCtRjSo1IV+Ft9zS7DJb0hDXrjyB+6XCWI+0R1pwdu/FSTlZ3zUoleVRtatvzElcNOqd5uYc9+GfXiwYPZSptMFBuJbzFn3vf2hZQ+l+43YFU1PbYGe2ejdJSXBHxQNxeXafT7UcSxsLKAVHRWbdBdGzK6Xoz6boEWwwkpOqKPlGl9yo4SGrIgbbsUsvOCG4m+A7BFAmSSzlQKiRP8SwYcu99bxYkjKG5uxFWHgDdHEb3jIw66UBWbtOSeEo71M6W9fDSaFV2qdTPzUSaQia2x1uzitCsiNe3Ir8ZJKUG0pDfxG0SxKt8PemTAFM6M7BEqtdvvwp/LGEvPkFSpWH1HV7vkhuOZrovHiYj9HeYHY3Ba7lGxCkxtTt1szl2YU6pTzsgeG9mjq1ebv4/q9L/GRqTYWOILL4iEHL6mXjJM7ZiryxPFJslKt2pw4tcRv6NYCHFr8zp3Y8U1rhzSbw6+KCBw9iRbPCvoQ=';const _IH='8a7ee1f3171f87053f6c351640e039fecbc20f3862d0803bd95f880bdefe8f13';let _src;

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
