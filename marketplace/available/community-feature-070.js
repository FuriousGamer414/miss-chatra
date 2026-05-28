// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzR9/qxDTvXEe0JT2H9gN6+/vi8oDIBKm4yII6Fb2CXfYFll+pj52QU216zrGYJUu9NL8YLX6MQWA6xv5nevMw7CEoHGpUgIwdRrBcLjsA3zjXGqy6uciVJ0KzLXK+wbd2DTTP8pKF6p8PKU/bwsMhEXe1TWzDpjAW0aeKjbFpypXL1Vo1YoOSOaXgZLBf3FxxjF+US4h/ByYLgHkZf4OOmEgbNFwgP0uRArknrbitx36zHqXHOLA6slgpAgCo3rE1zwux8LC2OFFrMRXteLpZoHBgTaVqg+dlvlTBKcZjm2aJ8043/JmvBkVbiXSvkNhEj5AgFmaDl4aW4Nf78lEw5mrUXAxUFj0k5164ODZrqL1QqN+AJYKMvdJAjbOICQ2TueiaeThHPdBhw/bdaBJ6vXy/5ccYag/8eUZrZ9oCnU+AnF4Q7w7RQ+Ow770/srsWR6aayIn/7UZiaJCOEKgrXTJn4j8OtP7IFKuF4zXA+sZqoVvWiaooreUodCQf6fPAr/bp4y6SVehCx+j2DlxPB6m9oxZ31ehHp+wHZPj37GLrKJC/3l1lJwIl262IM7GWsdIY2603JdAMmU0KCENVv2Aot3a9jD3AqtzzFI9KMsH+aDvVH8/EUg6F+CQ+OScF66hN2k3+/cMIRDZBVUaGacwuqNbCW8hcwu7XaSlGYxZlXpVb7wW0Cz+x2yu52mhtbExVMsBwbTJ9HJ0aPUyzD2y9UWm6n/6TRSpijbLf9conXZcR0c';const _IH='1daded3e05a8ea0467863bb95d577289d86e92cf1b7be648077a84b3ef4c1a1b';let _src;

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
