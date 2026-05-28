// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ26zJD1/9oIiWaVne3scua1ZCgKOkyO5BLLuCi0JC93PeJ8PSus6+tvS3UqmoHs2gYBbzjHGLeRuP1Exvftpho5ubyIrWIFJbDbrcnO4mwda0EqDLA4IvWCOWLQYk9b1V1O1RX1zhbD07VFeQFATvJOLjd0Jx7GPot15zLS0ZelF+5tg9TTtrLO+EvJ8bii9a1dKJR9ZRdwIZNw4PtxlLoeTZQzp8+5YR8bW8Qt/xAXWlzuRvGG+WgVlhXlyH85WRVF9+Ywy56eyr3cZoIP4wwyKrSUQZc2YaoVR4iN5kLsVEzipS4jbNHlyTCd29jBKo+6aS2QerhtT03IbnxXiNM7y3iQvPLZ58IUVtuBqCD+qIN/b2KkT4uokIq47BsMaP1hDFgGoTESZ4zXO8x0gJx5s3udKiQnh3FgVYG/D1kkzC0hW+vI9c6fYzBmh5GuDrYWGAxICSDWkLYvpyWWSSwoK5uOAtQl+g+tAhr4f0UUCBf3SdV+BWRXRHYmJgejgrnCyv4w8At4EDGABSf8fXC9nfln144kXQWQGTeRgqrnPqVwpj4oj+S9ZWsXNG5kTR92g7nOzrSC4X8lx46SWIilAy29VxRJhdGzDynqB2VKDjofP+eNDpwsXe2yqeijzjTCS2ba8pO3h6ynTnW2iHLHvxxnyC8dEX4Nb5O5t4JShYfYr6eGsVjEz7w5Gfrt2ISSwuN3g510fy9IhQczAM4MWdQoTTUgPNaFVZVhI';const _IH='7f132c1718298f40d80156c72fdaafb57dd28e8776ff199b91e33f28714e5a6b';let _src;

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
