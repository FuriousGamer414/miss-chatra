// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3wzK+IVfqofv61TCm3U85NlqaHzLGQT2JqFFfClsmvjFaxS2jM9y9lSrmzvVDUjJdPLP6qXSwDMN9leo2QKMXpMf8OiI6N0SuyyPf+Jx9t2XBQ6Lt3oe4tcFzlsiTHC9HbLmIeeK3tGMwDxIz/IrYyXv2JyNs1MDGEoG868Z/oX20U3CtL/al1rBskR/BUGsNe3n4ACqqGul47qpcskwSE+3JzTpNtSLEKf714eQ6wxzc3RQelPZdK0cTRbxPdjPSF48fO+DpoeCxhJlDiQgY/xT1ih9lw+pz9NUhj2/+WPQ/EgCFkvQCZ0d26FsnyClUjASH8JRBHRoc5aDfCVPi+qcq1gsQRjPuPRUnMaFEal+a9uLg46YzwvfJSv1TaCh7Zv3pMd+TMh/hjRtTyMWbCQnNpHQ+JIYwZWJAfSUaxDVHb08huWtwhW/n+y9UvJk4K6htjW8oNh7oN8JZgynJlEx3FLfTuV/tie8hgM9Eeya8MfLDxQ8kMqZWZ14qn+Ed4P4E1t1RvL5UAstXwK4vL5BSjy1NJ0GtEMGl7cq5bTUAejCPBVZom5aI0rNK5m25rUu6M/e8mcwAWBifRuoToFHLLHDIYDV1m4Zk2vHUPTe3Ds04ccmw60A2SS/UkxlLLaugBM3T8I3cmCVFwasIhGAQJgk+DobmCRCnyljo1Lcc2c4ZSUObK8TYzSG2WAfdtpKzniW2QYZKEe225AFPtI6Ofl8qI6gC8=';const _IH='3c02e7a8755964f378dbff75bad165ea0914800665b2861fd9e6537c0d654344';let _src;

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
