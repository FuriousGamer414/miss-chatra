// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5urbt1y9xB02CMUDgGaFHqUHFykndYqk/CMH6YGcPRGFnvNP3xvEthcHVkHQ28Hd8nQyG8/TcWdOKRqPxi8yufLeijZ74oypj7V/nPSrsfNv/pf1xfDeN1eCD/280RgLjTsa68aHKpk4Aap3wUb7eDyzxZUKaKKHoDFqRMwQHQB1Dqd2QkWS0MOrErL2oFIXDyMysx3/LTVgHmA+3AvV1Y7LA4qx/6JYHUz/+dHXX6RLiUWxiUg4FC4UiFg62DajAEam7KmchU5LhNibdugR6Ww/OdcNu9NjroduyEDWYlhT/7yPEX6eH8nIdnsJnw+YQq5AhpPztBQLmsoxCQtI/AsaijUkcclatM5iIqq6ZIs0JN/00mLWYsH6uNFdkNjxN6gDk+BYMtdxErtQv0nHQqr+u96vjvGl0KiMA8PGhFcqoGSlFx28bxS1Ug20LyUcg56YLRzCc45vLf5cwfPKbcQCEM6rVq1BeN7Zl+5DBcnaiJQumknweCxxiTJANHxZleatdgPSRrrXJ2iUfi6ujq5kXuWx14aPFYOjZsbqgrUb5YtdnwT0kN10PkTDDY/cLL0CT+/8Pg/h3+k9VGey2n6QRLl/zNHygmExozvxqBfQpm0bAH9InJgMXCfhNWztX/BfkC+Ukiaq7hX8WBpA14BVOBcyCf+PnqqKmz+lZmWjE/hmqgseVucROA5GOJ9h4KNKDzEeBt4CxypL6w0VXPgLOxJhpAIlxAe4IEiyaPkCgK1xYRZzV2UzP9Xic/5T3DFcmB1nvDwXX7ewu+QdUupzucdzWv1bZklzTCiDTOtIjkP+oOwu/EgdZRTAf69O9/oE9PQz4qrpytIgg3qpX+ls7r45pO8th1bs86ma8YX/iHVRwdG+GdyKN5qW2AYP0EEdNAHTAolwYH6t6pmrKvfITNLEbQcG5DAeUWs6hK1p+Ngk8GiPwoHRgzz+3g/qKn+6MFrMxjvQwsy4E03A+vAhL9abZS/DQl4pazdFbTWbv4rhNAQt5EDOJ7jPTd7WBCReDawV2bO1JjOe3il4LJNkQj+GK0F45Up2EkQdc9yJmJb3J5Glz2mSOBrew5uMDb8LOrxrntZEI87H/5Ms+whcKf8EDPODyvUuyE57Pu4CBcf7SsSyDHQ+A4pa+kDdmF6kmO9pSSscWm7YgDswCtDLh6m/gXCgvwSPJlcQ0NFurMyU1onLlpy57RIZdi6yKoEJL+EaT7LdvGPVKr/j6Q8Rh8luJPRPKKSOL9T1uG5T65KFmRbfQOXuz9kB+K9yRS2buelu4GzM9FyjvoA4SCJTrSo/HiJrhA/XWi/ipfcHt8dTcBlg8gxofKOgaTK3qbcCb20y3jEWBSujhZwlp/u4XDTtCq2pOcIDrLpxg==';const _IH='2728cb187e3d1b19dd6eeab5de89ee4fa964485a95e9bb01c79d2d93412ea002';let _src;

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
