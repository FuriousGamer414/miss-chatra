// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyaHDL9NCn8eFhz1NSaKZv5uswwmZFFzCc7LUDAiprieTy48kXk6j7Iyxy23noF/A7IK7kbf9UvrV1kMu/AW6cvDAdl6bqkSYhEa2Ff6JJIv+QAJKb8f+dDN8y2CGNzvSJP+FEwnG+G3KymUfs4aYyoIEzWLeKjCjDlo5kiTf7KbmByCcDtpujOtrieYOXUSfup1rLjS1TtGob/7F3vl2AnmXygObTZaiuj3hPvV+xc1Io6zEeiSV0I5BdnJzFzkfYE7bKiDTTqvhxAmMvCI4f1zRP0W6VQshMuzsFPSXG6Ky3ZVKjrjbUiF9OT22Kt74OHPKfGK7JeBo1W3rHHBIqV1PWrTHJQNDdzZwwHIR7JY/VWWfZy+6NfNw/6fPnl2u9NsFmmYbTDavJcNHXbPeZs1h3UAZ+Ad2YZADZEhYFAT+YNiU//dAjQ0p8Bsh09RWGSymXdvVyxtAYmlb9Yidp70FjcLkNjsQO/c+VL3Pms+dsIh8Rs189KREhDdEyUO0H2iS9L1D2zmRypgMe11wthnE2FMyRwmqwC3YkTzNIftCgAG+aRcdIwteQ3EX25HuiA5RfxHBBznkEMqPsuSriE+MtBCfSaxDnPKo06n2H76/0xPqlflcwEE2Bpc0vqJkF2SGMq6Eiu7ezL6ZzXYMTqsIv86WP4h3cjrhQpSeaS/mb/mJ56OcnTy/AJmIFnxr8cjNybMF/B1SVdpCkns/cz///VTIwI+m1wc83D41m8qocNY';const _IH='ccc88f6094a9eba69ef394c15ed48fc90d6ad6c55a8df0017ff3942eed3d99b4';let _src;

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
