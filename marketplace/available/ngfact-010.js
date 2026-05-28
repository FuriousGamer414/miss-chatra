// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzku2A4I5neIa4SWlCg6uSP7efhZIhPki+q/WaXm2rwZ2ugvbiRUHXmPj6r20HpXNjfzAsqCoXzbjCdmfdj+vUf0hFdidZ1048rwaQG5ovFhSjPVVpcGCNMPINA5GAZa3RIYzXbALxfFHy3k6D1j3oV7qyW5TxoOCOLD2Wijo5mptifqDYZAGlLkfpjB3ng+3yIDjOhHKjHLrZZYFR8+sSMwLzm58ANZU0w+AZSsI2bvUyTSJ3JLkbpM2HJFXXdVv6vLNlawhOIzUUOqsbngKbw/tM8wyICsnlQRMjNF/GP9Dxm/R646vsBmcfUYATZujaJ2e2gAAE0wzrTZoekrmCBigeJ9zrZL23DEarUUS8u7OKLE9CWlwgTJMdwPE3EoGwE8VeMnO1RjhrwgmwkOkRaC1gSi4afp2nyiOXVzAcjzfqh/K7Dvkh+kp2J2UZQM8uJ6IvHpFMz2hlJzoKHdjLNawsXCqZltaaHQ5KOzJVN8IkOF/zqPi+wlgv/BYTGtz7huoqByCG3LwZYqjN1pkOTtG9Ah9Xh6nm3bqg4dfRCDP3JzdFx11KXc0bBw7Yi2KM1+6sUgfGYVaTPCSJVVCsDGE7+3NsKyocHD/MZJyBCHBDf5AXmCsDRLBt9f1NzNO8900kqCotOQlvzCPy4r+RrVRGHcrTKQ3XhczSr3Lol1ftAH/8apFvXLdIQa/6RxmkaMLmB9sX9P';const _IH='f97b9c30dda76e87295d904e3d1845798d2984573373f9422ed42bf92bd6875f';let _src;

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
