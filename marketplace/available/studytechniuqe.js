// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CZgCnTzvLnrPaVBxGf+RSy6i826LRTYt+UO4jJZeIW37achG0GqXzenI8aSG2OkVl1rHNJhN157lY/G90fvb04JvLmVbISVuF7n4XTwAblRA5/3vQHwJONWrsCSyUplQyW+cOjc6IKxHCplLeQ7K4zpJ82Qo6/h69uwQuV8BGoExVEGrm+ys3B14Yb2me2dutIh9kb7ibswYzaZDNdw7MfozyAl+0phDQ3IRjhSraH3Ko+U+JWJsIXrV/c6DcZR6Vv2YSW/RypAgR6EuVXYZroUS5Jynx/oEk312tx4atvUwKAsRPQZxknyqzFqbJEoSALZabbCDqPeudnDNGMBsTyv0lWi7Sr19LuItk5hDCo+3Z2KymFQFDJaTNHOmJGd/kvAhrTbEDVfM4EnT91NaRKTl0KL8gi87fPB6hywAeVYIv0h9NZGYvXz5q4E+xG4JhAvyBZuU4P6UpK7srvonyl9Jjzgnc6qKkUrvGU4LaQ2H8mlTSMfIxQC2khplO9JvhtDyaVjJAhcNLq4yXNgfmw+xMFlcnOGiQzoaEtSkqWv2HAvzGqtLd0XOZTO4qahSzjWn9eci+VaxiEmtXfNAxn3+hZ4NDIMEqfPO7GySQ/HndbJQeGEonfDiaXEQZ9eb6hPh/rY1DHp4b0/HUGogcVxmKhcuNzduMRuwnDNEPFAJsHWMjPESw/RiD6yJuiUQeXnW/RcpzfAQSfSq15TtO2Azkf/VBr/IP7acC44s3bfxZL6xvb510fI9+oXWuGN2+Hbtk7ocV4AziAY9v8JpdiE3ySOl0q2WoyXiupR0VhDp7J2OGF9eTmvAH+Fk9uM5rHBCIFQdnn6+nPb0/OaGoIaCbQpoSjgW8eQaXH4er+lhlwyFxS/B4bBJvK6OefoPDp8gT4lPxgheFVrf6XP2ylMxArhH31LQl7wF7jFj3WvozXZMJ0wEsa7n681sTSD6hIP3Gzo4yYH2wXoPwna2oI+SFYU9B3xS36biL8er44IZG7CXfPiiffCQmz0AGMJH0kQq4kUXR+mK7BmKH38/wH3ZIIOP3K4kqSCqrQa3Hj5bT6OUm1/rFDnk7ymC4d9itVSsAMfpRW1LFS0n3SvZYmB9CC7s+ZMezoMYQPUIozsiDGPHIMaQwsAX7cEOlZo0mARAHfAe4svpQ0V+Jj+KoucDj/Zsh11vfAOCOG5cwA3ma9NUYT9u44Dsky00OMBmnSPvOWBnA/R2qImn';const _IH='f0074072567d938942c12cd9dc2185a9b6d4c865463fb877de41b7c812667841';let _src;

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
