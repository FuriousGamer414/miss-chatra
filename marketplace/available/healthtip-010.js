// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/yfT6Qdrh9x6WMxOpejpZF+54h/cgg7PHeOBdFwwHGalNAdvSonLAmpE8SRSzOe+creE4rSiOWoAab4CnwoDpA9aCB+qERmDvLgRCnC95yycpmiKcS8ZvX6mJNDhmMKPC/vg3GGBuQMp5qibQF2l2elVNN501BFEit9mdNR3uEFkxzpxGQB03gb0qixgYY80Ip6b614jrOKIyXgOGamHw2TghDrnriSdvKETdLrYThWO4yC6/Bwipq12pgTblJ5dpcHitd2YE/G5WaTN408B0xMlGA/cNPslkNTXVG5bgI5LsB3SscOOIokY9KTEfFTJh5uvE02AIrQF0DVgFFUvSgm86XgaleOij/f8Wp38BCaRidWv6MrDI1bYq0NJ4GtBsxLMxMqKUC+GUzXrd6/iXyElsFPtEVyZNTLPCdo0elSn7palwC1Q9LOJhIxklsCJeWrxSyLDZT35eXNTvmrpe4D/lAglBXbC6CnJFYhWI0zMmu+stdV5nC8uEdampIELzGzU+0bmr9rOLhIQtGUbKxVG1DmOCGV6r4AdAfyYPRltF5c7ldGUQ57jCiB2ysixEr5WHqSrMqbOrVd1WoqO7jmTqj/oTQuXepfnBsPVnNaE+jEWZApee2fsfvASXOutNXFHqhvQQ09idrcyVCsgNxCe93yXQWjVTS+tdD3bX7ACZlCWt8M2uPDPdNcpzQfEY/9TCRnvtxhL3ajk2wEm3UaMm5wxfMsSne8SscKstjLO+l631PELW4q5O26z2xINYlOekLSX7wpWGCoZQ67kC4vwim5GRJWurFYyznBOEQ4EzsqyeUXbZOdwYOMHefHtJ5UHavTQqUqDhhuhM7i4cnQjwFWV3t9niSacXzIhivD/5uWSVrAlQ/EeMgqDOalNF/UDt2xlWjBbiWW5mGrIcCj6conPEmkFGIrCNra12IA/ct2+IxO0J2mXSU=';const _IH='42c7ce1454d6da1d1be493fb70c045fd923157db623515368fe30055c97213e1';let _src;

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
