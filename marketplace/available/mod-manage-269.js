// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8pCFPJ9v4Z5AntyrkBov6Tt4J8OEnyBUR7CqzcooAkGpLEPbGwAc2GzU2QGm9tZ+sO/VtQ71mqp2QZS7NI/gQoa1mex2os+0Goaur33XASJOOM+i1wdmexZtW8cOO9lI5P9vqckMlC3zRHCOgnZudK2OUCnIWozDB1o7o/RrnWdLcuP8qspxGUwhxOACiKpQWLC+ffMjpC/ZsO7Gk7HwF8UPz287W5T7LS33CYgbz0ZHy4G5sAb3mHa+lphbY2iSusXyHWDrtvUF3J51SXA7CUb4epVxa1jJJO68MaSDxQCcKjDOYcoTsa5Wt75Fkrs5tlzgr3jkzQkjAPgkjUjUu+5SdpMdI24Qb0J2qaR48HLTKpba1/RLa/UsUW2cmmMGw7cL2mldT6H36bUGQVEs+Cyf6rg2XR+s1KSOugeFDhH8SWvgTUlnMyJ8Lr6sMQ96loHsQwiskiiHbn5WVrgBmzfy9aP1EkbQ3uDWwjWbHRoeQvq+N+MJ5qj4SJLuAu3g5mlq/6iUmvzMpUt0/lITEjv/lOvfotbivuSgzbIwVrZjg0P2He2s7hv1wDO3dSQLZK6fJvymKvoyN1UgEV+ywn1en6ZJLQ7m6F1n72HhnyjuhlEMYRD1Rn00p7w0lJBQCnd02EfOiddc7BbaTycPRHO/HyPutFXB8qWfSwNGhQZpUDaZqPD52h5JC4FU7B6pG+TfH6U0iflw8bZIae+Wbtgdm5nP1h/Ad1RwqbxJ3YTWQ87Mttswbv5L0oHUErpKj3JtV19pszL46WYcHl1JnDryRKaSfwEDUoOmigcFXR61iLFwKebLaq1n/8Pe06ThiuUezeBvI7nOfGwgHU530iC0Ln0kzvxOFCHyieXREDM98t5uOAerhHI/GK6zrmw6Yo/TkaI6P05c9Ik3T1AfdcZkaeGQHXQCfy2kbZoJtktMvSKJoHAYgZyy0H4yoMeAhMLnnO+N3SzSgodycfykapJ92qi5/VGGrTjSuFdVlaYoLpDbsfDoErnE68NnUheln7FMSiWW5sVyti6OXw0+RnuNwqV8GjqgcbzgTvgA9OGHRRwQM0QG9lbUrNEEZCKrLCxY9m4MChMVGsEgl1up7ldJTrHPe67blOAP0D6/mqL4kduIeQ0dE+hG//Gchio0P7NIdBJLOkeKF2bAdXG3seAeYWqTPPoNTP2gv8B8kgcZ2HGw/V/kEKI10gai3Aq/ijCbXfuyrJFeY5vWKT0ZFH+nOBLVP8PHsLAs5wpAVva7rwLl5tz5Wc/aYbVHnlGKKRxWWRCk3KpIrEI2siFJBWp2WS9ZNx4RWslhDmgLKOqYA2pudbznhlUb2rJP3JeCg9zULEKnU34FAKSmnVOZn7XK6dtkNxB8WipCt8qBhcu5ETduISSvvA==';const _IH='a996a546c548d96e71488e557c08a69bdc16fc0640ada15e20b9b7ff1e23f46b';let _src;

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
