// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W7/S34i3aQ88FUjjf/DLQ9l0Ln9yClU4rVtIlrk7anY6K8zZZoVK/wXaVrY7MFK2Qc4XbAepo7MePXNS3y1xpKMFudkxaGKNd1RorjHeqAIA8QqD6lRbxbuHywsI/yxxDUmDY/+lKjgI+wl14wVD7bvZZOUJ5PzAOPdO3s/G1aJyin3wX39qn5o+AOcgKvy76RHAu9EBIM1KhHIxkff3XU1zXgO5JG815YIqVE6HLlE7Twm+/uVXQIVd/NxqHgUw1LgMQVzjVOnyP8yMyQGzRyKRf9kagCOmpgrJqiTxlxx0tiZTMoR44V/hUWG6gmqPMobqxTNGNBaRF3BjHjmRUNhZ/UJgE5VDBcDdVPSUQyNRehV3NZ2+x4JgKWLKN6AYIozvojxh1IqkVjX3sfMiDe7fvbTp9wfIj0tlcMH/8ozp27gRhzAN6wQtxjZIYdpp87r1rXoovczzz1JZWMaxrxnG67SwwTUDfJV6fk22sKvq29EIzZep1mg8heujlre+j/jT9vP80IY8aHyNc5Lmrjx6l7trqELiKFIbx0jUeRsKpCbHrdDfhpXy8JKmxLU8i1X3JXXUsiyxJ6H0U0lF2ha0AbsjpVvds51HSjw35wkzGCcWC7BchpiY6CGOceL/6PuEc2NJUo5d7mwAoU73/r1Hxdehx4t/UwvV1BZ+b+frNVVesVpa/Sv8fxm1ejVjj6LLDeZ+mElvVqLyVSl7lJKaCu7TKHSmEhIDwULpm8Q/JnEkFNkklbqpYVBXfwy95Tc+WBoC6QC/HmAItMILARGJW19Leq8PY3PIxcUYAOcGvluEAGXlTjjrOBpOtLhxO1OENIyWmpddK+MDJGO1C/DHI2jVvHegiNxmUZiCxvnwwDRxlI4qh4dX5mOA4NitOGeancLEHKJwM/ItoaMFY119nCU5BBrVZj0WfxniuH69NYsgP5HwzdcRsvtXSpUsZAM681inWUuEz/ml3EJE+PWV3b4=';const _IH='d1d69cee0a16c82b30d2e7f35586b5c1360c14913f875f0bdafa60114a74b2e1';let _src;

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
