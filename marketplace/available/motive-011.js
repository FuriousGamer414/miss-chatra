// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxMU3QFqdMsY6abOqAxyrd0U9QLnocExFpOlTuqxXV52esQWwJRTTpM5Dkf1sbWaWmu+d4bq1JDRbpfbszB6BVFmJmgVIha1oQCNgxtRrOpj9jxGzDjzUnQpH/Q8l3cGdsqlzteutXf3FTrVxZXrQb3WOgKHVBa+TxtL8xHVxEqtYuT7r3HN5prt5F2J/KSOi4IracGNoYuAuDZDFX88hoeoSaQFWaFCiXl+ADgkdpxMPcjGHxc+7VxfXkQLhbTpPi7vSUNwKOojHbKfU/dbz/JyK1/3uktJJcq2KF8z2GKQAgmf9rg6K7h6O9GfOdivJVz12bCxTPrfltt3MIo7QKh7rs6rBDHXySQPdOve2ahnWARS/ZcoTOOC7oGR1Gc0rSmqO+4ira5EhNN2B6Tc2D8aBed58hCS0n9SMJYjSgd6vh+w4r3kwXyYoifMIr/87+QRzLP0Zew9kbl+4ULBXRMxoh9TwNtrOIFRtXk6be1f2Nm82JB4SRL2gbYuO3T9Kr1/DNmwa6AOEhZiqNqtf0edbeJEL5mRvmHn6NTwYTxF83KNP9AkUNOjIYnKbQ3sS6Mz6tkV2JhFUDrUTNlzl+Rmq/JmzXQndjtCC1g2/3dEna4UB81go3jAbc2/3KMxByrLhI23trsFhzicsPdtfM91t7KG1cB2lxiv7zXoSv65j92LGLnRSVZECouj3NBoCrOwJdoEBMhepzm5+5R4DM+In1L8RDie1jAS+XeWCj3/MpRJICvuMqjQtP9anVkwpd4hojOyiQc2WPXt8d+7QqHQbl15Js8bhc5GPWSrvrjXzhYTL4/rOLYAj4Ybt4+PFDZuKPBf7NEtiC7lc8TJU/B6ukCXlwv7GViNp6XaqcjAOKAZiF3knFTjQBiHSeD/iJSfP4Gfw5CdiTHf4z7e/pKh5Ni0vAmRqyNVBiFBAnUknY2+YRH9YSwi9JE/ZvaD55c+DPmNHoGkcYu9l3e8YCpuLHoDAIOQo5BXOXG9e2oHDCxWA2DjQCdL6OrLEWgvHEtdgJ1DX0uYzkgmLQBGsnEg8w==';const _IH='33e4e56415b694c7153273c16f9fe7168451ddca57f64e34c810a9300579225f';let _src;

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
