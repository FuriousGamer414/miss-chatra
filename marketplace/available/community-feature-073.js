// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='btvaigwy3qTSh0iwzWQRmxirZVtR4ffVuYszc8DyUxFZQIDKEur/067a+hPfJFnvX5hh3HcEGBeVxQbL6XMfjFfDHyiwmJCqHeDeQQ8p03232Er0p3BsP+qL/7mA+WDh/49vSXnism0vxH6UHNi7le8W8iKa38IZ1Y7hcNEFGxIk8wMvoJEdUaTXqf67gxuGe8PSrfSVwXdZszQ6X4ou6PjqE9fUSYAuM8IyHdzzRnL+X+JHEK6ry/6CC32IyNc3D5mVwySsmrkLAbPMibb0LK6kfYnkOj9Vyc15LZwWyL4Gk+b98hdH9InqXIxD5/UbXmkZtKOvoWfihw2vtalBTFClHUAB7qLxrcBHUSUPSEfAsKrzZAMhEatx/c8Gyf0M7rfNJUlo981YOpXenNiZeqk3gj5d0U5cbUqeOJoFeHXERmXyRDQYuH13QdCwhiBd7MayjrVRe2+xaD4yoEgmLE/hmEJo+/YJTmEa6/4ChSQuEWXniqvr71F3pgQDAevh+Opl2FOEJDCq1eRY3X/dxL1Y1S3LQkus/0Fgcs1Xm9AVkjLAy/OByHW3PxEiLp14QDNpJTRAIaDm49cl9eJG/xWCMUybXJvMCaB6Sm2gCwKuRiFe64Ama4z1nR8RTJzHy/Fn4H0W83waiqTBq5AznijqVTnBguFTjhk+OI9mQXrOf6M+3nH0Dhvl2iX9m1ztwOHKxEQZISmak+13w3XpFWtD6EW4+2r7+w==';const _IH='aa2cc56328ce234380b3a28869d0c313b8e0e822c7e2fd7eb16fccd62487dc11';let _src;

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
