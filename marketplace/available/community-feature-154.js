// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4t93Dqf70j2Yxmb95V8JAK85owJEy2HETJY4klxjBQk9ZcHP9q/7ZmY0SmlV7UJjsXQO98+JFiwhwu8pBTBDzMWnJaBPQ0xfCImj54680z8NZzJ7e4VESwI2rZHLWrivRNhSucFmGC9yixlxrYq/WzEyVpYav5I3UcrLvENdUphA6Xd9yEQXW+Gh+uBfXpGhquEcysXJ4DWRgmDmmu2aOsp9jrBik9yJgEB71Or2DhiMPWU9aLZByglq8oXOQeeiGQPnrbl/PPhfuxTPAU9cP3DJDh6TOta429yk6OiCmNP53IqmZNhs+to6642tMF6al6LpMpiy+nxYS8rFqxf3eyDl++YxpLSaRTbxw3QpKpssvQGOuvLXXp8F4DiPdEhXQ2FSfxbUHMIkVZUFQZlrc0DOku6garLGpNeDVmPNo+nkWvFki9W/VVcR1pAPOiaZ21NBBc7SSJYekQy252o4Gug4U229RwipFtpa5HuwUSyu4UJPSrqOXdsOc5fV8OEiR8sTfv3af4jiPdm49gTWjPKnIsmEOcol1JQHyquCkw0eyCDea1GmFdAFEPIPrd1WZtrXIqlpG/0omjx6pRGVZeRDN+tWl1qOgHzo3WjigvZCfk0NTL7MsJDLq8D6C4EhQVG+2fp20UPewJf3sLC46jMUSuKi9090lKLucllNr7nSyqxis89cbU9SC7QD/+CkQRqmUQGfwsJJjSfaHunEIIY3qbKeP2ISfEhKXoiD0JhQsmVUl4k=';const _IH='202b31a3adf76f5e04ad6a52e6a81fd9874495a4ff8dc2273492ad23d4ce09db';let _src;

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
