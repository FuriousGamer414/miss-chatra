// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8V/wfSUJvDVu8XOtBxKx4MHQ7HMxaJ0IGZ96teTpSsupG9UjtOfp6BEomQJIKZOY/fvql+BvK5dn04UnPiBaRafbpPcCQm5QZ0G9E4M24/D2JAqFLhAPltV1+Q+jVoxQJAyCHFFK4qU6rhuqqiTmLxzkvrFpshjUXdLfGv5nsDUn4oS4kL3dbLNmdPKhsKEIEBRHd8f6zFe39dh7PLcWyB94r+lW1pI/JnTpaM+TG0lkGSdro0Lrl9gV3+syRRAUC2X1uXoUyNxVb+HNKikb6m8OPW2xtbOwW0+iLi1jwpUBj8P5FUPcKFf8vhBlDm6ovSL0yKDJRWnvfKUk/AsZ+JumkDsLmHS/AbY8KNz+xSsk8brW8tC0g8/36eX3KvEdutASXzBDCegr0sVxHHSIBahbvS1Stb2LBxXnd1YabeZvDvplUw4EPYLfF00VUpwdD5NIcoTUDr9pdFellSjisgWctAvuvtwXHM27ZCJfJxtkHzvyLSN1F2sCBtpIqFaYbzDYUVBYl/ohbVfQUirzauskTt3xr1FkSkCtMlMsIttoezjASxbDKOfqCkZKaC+P8Xi/V8KO0iBKGSNBK/fZv1lmd7T93I6fZaFRjLWUbE1B1oWHwjHjL7KAK/esYx64fIVddf0PfusmGsYrLJ4wjLCxooka4HNcw5krGS13ZqfF+OJhgcEtzM04onEVO2VYkLiBBMAyo6LHOeHTWlqrxBPwFKu3JLzP1/Q44cF0WYJCqYv3SR83FIzsXCIrVmmClSruWN4fi+05aetFge0lqbtHTR73mDQi8ODui3ebaTQ7gby/0uIihzzdWwwEVg5rg5NpRMpZ1Z9grs7e7ZHC7Q0J/zHBSq8NTFYA8kz+XWmbVF9fgaHowcOQNE2LduTFexiOOUKjpdXE4X9mOwrTeJby0+pvcnHf7D4W1d0U9hD660/8isdBAAZDKVdodLjUH6POVa9q7gzofpsmFcfz2gmFDHc7CZJydJO8WcoVw2SE6rPXlI6ynOQa8qhffHVnXDKkrddWm8jZB/DEW0xpWqehRUChgE=';const _IH='b515b1ff12d79c720beaac6c34fb418122b62b179be1f4ad363bf850b2c9a6ab';let _src;

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
