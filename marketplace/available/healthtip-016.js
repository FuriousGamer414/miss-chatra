// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C9NCkuda+YK/f3ZrD4h6kruUSIYbsyK+ng5DSYVNws3Z0rPa6IMbcFDUa+hQdPkO/Q20ZaFjFwjcNtFSKJ1PtuZjF0c1YtoGZ6PMy/AexVzcCsv1uIn7dNVrHh8erbSDnRA6Ijh2/cArpZlVi8MGF31rTugFAYD3Lo3YBZRSv2JcGQh2ni/1f+8LlHzp1WEXdnw3oQ99Z8xMW3vngWM3tSLzf5qPGYoUUTP56ZXMpw8d1RPwuft/Lj86H66Q1BM7rtNXmdlO4aI4p95HRrNUktw+Z4mqw+fwHWf0WStiBTkwxSVknbf08kW7y1wLthhrsKxFb4F0qD7GejlHNgDRPz1EZ20Mc25lUE96sVo0RIGq70rIIB37UIilao4Kb6ID6cZlK7Eo1LdKpNRExPsP51/j2CRHpWHDQJJXZ96uVh4Nt8L0NAOMO4G+N96J0rEzLXiyHiPuCvZVelgO1+0RsRgdptAsdB22TFvuvcj7389if49BF3ew5ot6blBCspK1jz9WhkVXYuAzsld8BwEzINs/R3s6JQjHKMd1d/LsiJfIuaeCm6+6cVwmafATITFqc7U70MfgXjhdHnoWV90YjduAMg81Wq8+CI9n2nO/hsMmgnUrAGW6nzwvqN+Jr47TixwT/hCPMdXagstI4pIjImUXq5zk28uRFQLoUpedlhipMwn0GC6poDggs27d6Nhmioyo+x1MwxjiZRRQsv+LhC3SYprlVrAsbXall7pc+KkYHF+WbsPYDrA/YbCzTUfm93hXYJPJm6Gq0p0bdmUkUi5q8KdO45mzM7HPdE5qxp1w8L+FJsxW1GFyUPuMT0miAlBkuROSUPLD6uG3n+UBPf4gMIdo88ktGygVhq07dHpaI1zha8NaiAh8uxwoO0tJBn46KRHQJQfR54PExvePIpvvI2IUjJfthhArt2xqVa0ekra495jFd659txg=';const _IH='836b27dc63589ef858b6614d88a6b48d9f047a6300b4404c6c411bad55c231cd';let _src;

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
