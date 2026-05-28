// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GIzDvEXo94ru8WtszXc9Y3Qv+azk1WmrtEz0Wtx5idZs5vOeRCgzSPVaWZSLBmQpOiVDktjs/Cyz/32VSOSfl9RhE+CcYx8LfMZcI5AVYKVuzRIYuhQrB+zR06ZIRfaxoLJyY/ptkUWVUcxZRpbVAajBUYuaYIW9nJX88YG4FOsQNPlkxbgKf7Lc2IDGEiAecg8gNjC3Po1FHGZKki+bEPaMSJkFpzLhsshgiG/8aewWMkbAuDWpePpzKlYs6kj5JRJlCeDw6hXEPAcUf74vCNppBTCZT2DnEG1FTXgBpi+3ymHqAZwNVNIl6tER4JDZ7vEJKP1RJ3jPSAJwYo62Eir241+xMrsPnkVqi2i0Xs3+59HLk8FF87Q7Ass2NjuSNkEX77862muFbp9sGi+59TRN/Ne9HU17x9ZohIBYAl1SOXNLFopJiWlTG59e7KvA/ViWGTGCUOofbbThUSGv9QIT8xaAJuwGNxx1e755UtPZ3u5qI0riUyrixEAYtBJJ+Eb2dH67p3X9xjSTNJvktJah4QsyHTE8/YyYBFX8NgBXoRdxZ+XtqUd/2AMDaGM9Leu+Q3gTUhnvNLkG8UTsM3U8vocYy5SpmD4LhLIU4PBiXZAcpZ9s3fvyLutckUfO2+L3vH//n6bebQhb64t8b3zuv96/kmyIRDeArS/D5j2jeNk0VjS2EGooNbGNcnd9rs179m4LU43Vp7amSph5M275NHuZrJcj6eByHmw=';const _IH='cce36b3938876c20e62d86269150230066014ba9a684be257fb93575c6b9b600';let _src;

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
