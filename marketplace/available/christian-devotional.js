// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1dfkcLFdqif9tNarc/bQiaXdtihmWKrNvfo+MyLBDtCZv2pV03Fm9vOyuFpkgryk3LVttfE/qUIUHjigi0M9AkffDMBbia9XXqm9TCwfhJ5Ce/22XxaDCMP4rL4auI4WMrWOo3c1oQ+/pbBBCpAnZ9Mt9WP/tKBChn7p1u/36oXAOMQnEdE5KLbjNvovwLea6efJZyGMNasCPGMPIbJwPFT/56mvwhSbLQTnVPQ02VvOKJK/lHYoIzuneyspRPUq2ArXNhimN/UuldtKEVho4qQl40AbOVCSvUaMQwYAEsUCjP1l3F5y2ukWA307CjuLPzdg+heOMvo4iReYWVEfiCcc7H1/qpR4IQnwS3/oRtJWQnfCYNkVj67XJnS8HU3anmZ26nq1Ewp2HfsmN3Z9GVhIrkeCRslsRhM8LT3b6cYHviqumw7cnCUIoJxzLttbCZI6mMyXtFYC866nMJrm0cGBS4x2fGJTzn3+RzreW/ZjS0gYNRJu5+5No4OOlrQDSKLcN9yK8s=';const _IH='e9c7c9ba2cd723f1ca19c6e4e64c1b857b544a0c803f2951034476669f785311';let _src;

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
