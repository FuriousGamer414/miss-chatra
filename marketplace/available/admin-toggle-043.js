// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0I9AnrCqdHgfj3vtbkgUHCpoQB7D46BIEsz40C7sx7Mh41OAp2a7pDdm3WwUHn7Xmo2z1AjeCVjkkmneUzIvd9SyI7HDvvKzMTY8DSWU2SokbO8QBsvup9iQua0CH/s3CZ6LYw2rZ74cSbxfDhEyifdAzyWiUwkMVwTcR7KjACSJ/9zGQel++OHGETmf+2clKSknk43DADN3Q+QVbPdq0GkiIGp/cTURfh2P9VEZaUwfZWrrJzcVX4WfVsJ4VZh/o1XQIvaplPxoFA/x1dIa4oCYSlXlierl4NonrfxluQ1+GKzw+brv1jH8YeZ6+KQ6WtU9L5IzKVax1GJmarWk0CMH2yRdj/yZxptNpMl2/Td2muuVl9ETxe9GuZz6Held/Ktg9BvPAusrItL1JeBS3hDBbK8InNenntyg5f33w8pNMUFEPPHFow9TOY6UlK7oOmixHDgeLD6o4bkYbvo7Uj1gP54u/fqCjot7j3j+8QQ3/B/QDyrW5go+Bzz8J+wa1Y9kkC4msR1JUzpnp3iMTbz+3jbLBazUneLYoyPK0BjSmyXsIwOsWOA/sYUc4rrsp9XchFh79hSkwruICbOYwFvU5aNHD4ma2m75EUk2YlGo9rCHUPyirMEWbLo8caPrDD+nNENI/zI+uY+4IHECwU+wj5dc3g2YZqDLvC450Bi/KUjzmgzg3P/apvyLP9RoUKv1z6wkbaFBvgJ69KAUYolrmGT4GEvOBTlXzmyZ1zuACv3pbI4dosnHatHcLuI/AP7JbkaH2rH7WxODr60yGC46mGlTpp4rudlkXlSxh1gUqHSuT97AOMu9pICp6oeEYLLtC38LWVCD3Ygiz0er9KDA5WTcNTRmDhFAPTIumtcbCOvi1YOCq/gIXt/6EiXQbAdAjIwTdLateigCPSboVkLyZLli6s/raE2buTYRpLRJrTTSfeVNkqIX98tQp+pmgXpPk2f18bSFmB8xjLww3BnSO4j0QwxDFaZU4ey3us373R55pM61OSYIxduQQ==';const _IH='c3a546999ff3106feb130b024c5ce071049c7e673f0c811bb75587b00fd72f38';let _src;

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
