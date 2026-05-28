// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1m3obhCyv0JjnStDcth/cTYIcsjdN5mvYOQe8KcVNarxxjeKjA++/qavLzVFOnDNuGok80B8+cJCd0K6LSJFWSgpVfD7IGIZRSHmQXcJUM3neY8cc6e9luGN7BlzaQG7c3prF7iQ2u41AbOzSckX2ricgi0Auz/x4IJsF2dOIylVs8mqSgEGrAvqb8PjPmP2w5+zGfpviSIuti0zWxUVUj8WBNiS8iq96LzhQl2MKWd6wnF9kOXQkK351GnJYhfQIQ0z1M03tRBBgjNIYMMgkxBTHM5lOAgN4vC3zFl47QIYM6UrfOxPGge9tRDXlvD53ykb/QgEs+z6cHXj0UrV/MVO//uVJ8ybXapbASnX6mbgbsetix1bBbsieozu0mpOnHDtvpPB8YgkEYxGXFsRR3fX3ctujHdDLTS+796E6MwdaVYGsIP8r9XgmMVz15jYaJsECx5RJ01PFumCZBL8WEOwd4L9LAM+AoQXHQLeR4BFdGdXDf86BUyXhKZU6Rlls/G1a80vlH7VWrEkTYH3cWInJwabMkpu8mie+tkON82tb6U0ikFhEl5e9FXa6mf+uVWLfuybadY4otGuSGacKlnh6dUyazcMX5jowNdWNQUCvAJb9qsSASrsOHx0i11gWFL14Fk7n7FteR2tCAA1p1jrSREJAwnDv0+VtlrwI184rB88/fi+6vBdvPMfmYQYkWeGKo7OsDBezhCb5s/3usvCMmGsKWcDn4C8qaMuQsqJjW/iOCNBtDb6Jo4+75pc8EXKk0bfkcxm2808KmmY5N4x2jk8idasZkb/qKT5LWDpgeZSe9JYzjTD9yyZcS6x9+MthBj66bn3e2P5KF2TolT43ddj3wJSyf3Rw5zZS+bOepkJmSJtH+Fa/7cE8HZXOiGxX+LQj28GJkIUYk3R+X2lyzAEXXNUzQch/seg2a4Tr35x4lrYzCHLeJoFNj9B+AM4SeKrZEAGnpFrG2v3mfAeQ2W85ziGDk46TXJPNsHmDn4Htzkq+n4wG9uxv+KzRQ==';const _IH='a915cced800ff9932df0c9ce932aeddc8595f950e56958c41be5d5ee28b9e86b';let _src;

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
