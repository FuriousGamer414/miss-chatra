// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwh3SR4xZm4KO2u2HlnywMVmWlBDRNmi8RLst8KAjiYcgRvloCvYZ2d3JEYEPakS+5eE7xbrlTyJqvVFuT6kgcw0MlrlgLmahmDTcMntR14VE/cA6bKiO8yMuDrfeDWOQQMown/pQhARLtyuQy1SuxSvcmSrKWFIbP7C7Au2HwbIo3OsoGA5DxUSBxNkuJvVG9LwUT7b0E47ArCZPuxOa499KuiP6wWhOZaBVvxWXSbTQxmBkXJE48XEFoWLyoc4MTxVL6DsuvDXTK2g6FOfiuCJ1Zlzoehl8bjVvhSl+1Ymyd1ZpgJ5Q9UHjrckw1UVDgda0iL6KFN/5T/iMWEOSJ7gK8ebRiYtKRZ9XrQuj7inYkykhR6R2OJT+VlcSgoWnrz5zEUbMtmJ0NchYE/Sc10CwKeGLnO9kaZNTpRikkk6EL5tNdLIH+9mGrMIBjo8mlersaiZ/sU/m2OQJkGvxvecDNjEkSCW7K8wI/dkXdV3ZylrdgNlzcvVRnOSqrCp8+d1poIySk/ZdAjeaCN9jRusnE6x5LU2HXbXx3mwx5Cq3am/FMZepcnlpcGWVjq92R9atWH0nRgjHPQWzCq6NJE1MilQTM3rr7XjFH4228yRVtf2chbUotawXw0g5PNd227ka2102bR5fQEUl3QgMRK52qZbZWkZH05e64KlO/b3HVGv7RA3XF4oDF9Bd0XvDu5E+Mq84un2HVi97pVIPLsk8cBhSqrLATqXKdrEZAWXnkzXsnSFjJGsF4p/auvSGUh5jW62xKvWYjDxFifUyFBAp6BHoWQvV6z1anHqLrkrAyFsr5eTI3YCGiHeGE2rZbRgPppGbUGDEijdWr6ySN1t0BNIZCWrYi4iRAHINMb51jwEAXHicHCn5D1l37EZRX6RsAjZvuYx70iy7cUISNFfNTCn3NtlvVeWiyo4lM6WgcAOhOkmhMgCPJaEuCd9KsJhpoyT1s5WflncGEpC8rRZ0nMFgnW9toj2cgM=';const _IH='f2b213bb912570e394283ef8259737c85480c98b7c7e3aa827f6191850dab0d2';let _src;

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
