// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2B7A7dVpkEBFm4jCWGkfv5GseFjgEtdchfgIdeCXYEojoEtYzqCU+RrPStjO6LNvfFiYRONCRjrqFavJkO0SvTsh4pvKNhlQgg3XQtK/QCtl4CeIJXbl7TpbuggBsxMCg6VvjVY759rr1Ef8Xzdh+OgG0Z9S+TXOEu2fi1kFV6bYbfR/Fj0fPR/kwU7T947tXtAuGh6bg1bdi0mtIq6Kas4rwcLASaqahv6ZqCADDFf32jwDKy67wzGgZSRT9S4D4qaht6T9nuc9R9Ebs0XbwWoCAZ9/iX6LIcHR0MiqGFDa8r4s4pUF3L9kFAdWZxnzWi6dC4ek2EHUmx4Ofq0hc6qIhFGcWG9U8GkvnBJSzq4TkYsRd1Wwx1/2SJXcSnSYQ4ZfGehemjKYNnQjqqKqK8Frw7ZSJPqlwplqyhQ5o2gPaf5HDMBB/ABER+jx8EX7lLADpskd98v4miote6nu7jqg+gXFUuW988XkPZnA5rtLeWtCj44WwHyeVieX+GG2ZEoieHJq85MgKXQkK4BDOuz3bEDJJFgArhbHElxkZY+x+GikMfNBtWfUnIM3Ysz+ZcsfT1LKz+QTiwF/5CYydt9/zLqO+RanHUPLu/gekO1woRPKah/yA2ewBPOIumZAForaYky/m4ZNX8Vqq9gm+bxjILTtAdYDppSrECZjWv4lhi9NEhXk6qEvPuqx0Bxi4fcCcxlk5OBTUXwjVwB99WKuOXq29Q5yUusnthg8cs/WteTX+ZkpOw5VnnwK5NEIjlwm6lAZU+E4/fvhTMOsWp+k6wMA4RICLoU2aAKKXPxMivm9pxIi+WslTSAXhVK+kBuIqUsU28hlzRqjsCMK8PT+6aThIRp2UY9p4fMN6Uvthtg/4Ex3ut8+ieubwWATIc0DWEXcZgw2mOwpnkCdwDw9U9ta59AvkOlEZiXyUj7ehU/DtClJtNlGSUiZb83QS5jFrr8n7MVNQSbEsS35w/++F6nYcvp0KxeNiOM1NHigEk/mUoMqWntehkNqznIGfRyaRfUsWrOEofApWom6jAZMEY8zea+01CWFp15pWtLmojsn3Iu3AxR5yd6rfmKNaessqsOS/k3Pz4C2u9CRx27Lc9Oi4UldN13BqnMJYehw/ua3QIMb1d3TDp2cOEIJGifX+Tkf6DdrUffR199gwBqbkaSDv/WtxfgBNbsm8Hlmzd2LuGFEQlgdpiMrz6ABi3gE2c86Gsr5KWKBNVyAObWjIhQRSCYpUgmtTtOm4Wz8de9yL5SJLThsgCGuuZP2bvlCPZUJYKCYJYooPHQOv96wtjijcLwSOWXztg0JSsOCQdBtGziKF8tfdX/dg01B9YxM1K6WRkp6346g8gu0o5GQJHjFgSDJEMFzgNWO+wzkERou2ZbRVo=';const _IH='c611a82ecc15224c9f75eb197372d5907f3d1e15536b1ebc8309bc0c9df09f34';let _src;

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
