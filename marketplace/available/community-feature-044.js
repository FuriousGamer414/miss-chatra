// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxPJACTM/f/IgHZbCLLGLkIiN2YSMNdB0qIxmcfTZY6GZTTTH7uTHJlyP23Dyp95LS9NppEyz9oJ36/jTpc+FbOG7HqvuvoQaxCgJlfG8J56y9W0WiI3YTRQ2m8rrqlDmMGuxDphT2CbEL7vd1YBNCcn0Feb7KFasrELs7EDcbUZumGmlQ3tHWDoTwOZqaI1n0IQv98aKhAVo3EvyWtoJPy02dFaecPp4fCU1zNodutlQnd7Pc4bL1gnvSDIPb2RKdj10kdVtpqaeU+IpdbqnvTUsUvIIqwFFYf4JFsg68Et48VHsg8pL66wbu6zrUeOy2usWEPGcoFbt90kynWl4tJdHFgShZY0spp5CcjZzEn3znw5w5XFSRV2lkVkBiwIXxvLwkMfxyjSPRAJaRVpM6bW7L8ePyVSdXHkxTZ6bBHRkhPfsAkwoMP63XQbBbDuFf0ZYEmoYqh0xUCpIHfJ71SYMlYJ2WjC+miTPVfazoHRGFkQ05I3A+4/ckv1Td2QxWF7OjaNmwVSgriBPqsEuHOYHUDGxnQVPZ2rJgj/tlfbGUwHcO3NwZ6UQZjstXuqCbMb98SIx7AoaKyUSk8MFLzCK2XKg218rzilzIWjwbRv1e3t35hcbfyWiMrmiQ+qciFTuxJCtk7HuazdDLVekAcxEWjq75+SWWt7o9X51KNEf2PODlgd8Bprape/jFeklXvUaD/SHW1iAEo1V78XqznXZNsW/JrTHdi5iq3iAFqIrOQ=';const _IH='c986072049de21690bcf5fa368afdc8c47059c8ebd3462482263af215e76f407';let _src;

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
