// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5+lNqIQ0sZ2UjktwYtJsBKTkDCZyzh2JMNr7EepS4OiTEvcGNddGQFl/fSEgYGTp2+wnOQH8RoYaXZbTUGMSkOC4qrqMkngCgjHylcNdU4xVSSa4CE1TBundcWsAC/4Q1h0U8KsUEsP7FVmJkwPqqi7eExSwfwWVqaj5VRucZZGPpCTk0eUpJmR/qogWs3qwzS3FXSMveshTYWlPU4oOWVefttIu+dUVMcZZVQ4XcJylfz98D0a/Ev2zNbA9fElCn2q1T+jCX52FXSxikMFT9z27Z7O4oghfdBDNOU2KSkC/w04PV3tj9PkdgdsyI+mvCMGV7edPk3OWGjNRRa69V+pGYX0hF86J0Xem1SFAlS/gtbMtp32XyuvMNM7ez4rB2ox0MnNE4dwEo91SYxtY/HE4j2IbCwAZlXOf42ZNW+yhuGtUhXPLNvQgm6fk8HsLqTTpcw3UwapEAiZd7M92ut9I2cBzRf2aC3lAAFblmvcaAVZlOr3EycCYPOQDmk1VV7OnyBD9pCWtPJ6fyx6DsHFZ9A8GqCrvSMYxrk73YxrJT/BcyEc2uzI00prO7DD/reZjA==';const _IH='d3352a5c3c4274b9266f240e307cb7801c3ed58a3bb60332c4783a0f084b93c0';let _src;

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
