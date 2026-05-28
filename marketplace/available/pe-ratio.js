// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7uddEt1dKw2VghjGnhLh8kGfQ1ygIahH7udgi8PE4FxMoKBQtDFOWh/JEVjKE+d8grj7ivY6JdKBI0BMrp+kpgmNGx1b1k2blQ6oszkeCUX2cMoYGJ7lzMz9rBurour2VWMQwBOURc6FZr7hNBLr+/wOOZGrDsnXjo76DSwudN2kptWKC8u4TRxGwsAkcEXjS3FZjEj5/lEQWHfSRv4cPbifIsXZRsevjUGuk0Ca3p15cwHOSO7F0PLG0kpqhNredu2W0d4y0cts40CMhE1frYDOxS0SInC8Q5VX+y2ZhriaPXItTtm6zCRHySgkCL5NT0AP4msNB/eyfvnqamfjKUYK5t75KDyu9skRwTxxrDOoGbdwmU15ViRIOZAXD0w3SPM9hEsTnCbaZ6Bn+AnAzG4xdfmi9nApTHt0b7naXm6TbbCpDxenIneiMgdqbhtKsj0Y4ES9CQdBNUrcSfIqT5dQRBPETtieYQJIOgqwxBIsVe1OcZMf1K+61m3EnWab7QkYMJqPudjTF5p0WHTYcPZY/EQEReoax6iSh19EgxqK6tXXOnYf6GIfOXyv/g8c4T66W0ah40HnPnzS1keSQEA7eeAKrpHvUncTPMFxh0oi3jnFfoSavN6IxqK/2qLcLqTrR7c665x4ccCXPEieS215kHpDUmapO4qykfK8tvzrcB+UH7DmeeVwMgqn9nTPoK5aom56o9erhBGBORO0yGBh0dFQJ2QDg+g/Hb33UDG/Ae8SobiQQNnVVo7HciE2aW6cjHhyhXg+jU/LAYfLBR1wKD6N/0Khk4+qQS+sCLGF+1HfLjpqPyJsIfsPfP+D/ROOApd16DgvvLU4dc+EjvZ++9AlQ12hwqiL4duzutwz4XJTjKK0P0j3DN2ZwgzHzp/rUwi8deJtAtKJ54VlQ1HDFEvEmYQUUwEvpb9LZpNPkSBmz61pN7wyehAA6K/gYMP0nbL8+zGhrIQuNASXhOw6fYzELOg5eICB+IfVouH/2Ns9rmdUf9OhmDVFEcz9iH5mbxxspBpM/9L4a5OS0BbgwMKzPLPcmzCJQ6hb4UrQLWN1g5v9BS/XD4swHBnZG7nc1cTlzAaT3u17pF1okiBHc36R7oGi9d7DAGBhNfCmy7+tTtYbExyAkA=';const _IH='37fecca7313501b2d20599e45cf6642df72d1cb0cab10af771368e53ea14d40f';let _src;

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
