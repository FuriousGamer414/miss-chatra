// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6o6wVd9iQf5NA04zQxD1Z7WyJZFYBp1tk1GY0C1KyqLUDx8uX1G48HNBgC1DLbEJ1Jy66cdvj16T4pSLQ/gaGsc2Zg1UuzSd+Uvy7JHbbvuy6FalbTxC8pjZVrtacy6IajjM+CGv3iQ9IimCQLajy4aiIW0DNKLAyZ86mRW+TCb2NPLxDhfZeKYAN1pD0h+VPpFGDCSO9bmLHpMwrL1oJTpcWZo7QhLj5TamnJ+ZUSTLXwUutW3uS/v22AbcyXmhreI205U+RzWkWW88Syy9O5R93e3kIsJUKY/5fDxbzvqgvmZnQ10wK/EjWbK0KcXmTHtVsZEtt1al9OsEJs5YpD4D7Pl2jBz8poGD0ZR6aaqjYYas+m6OiH1r1j4gwwDlXLPXZQQuVTqJyt5ibgHy5ViwZMbccwIZlzNQnUwXStitdfXb/3HCS08OaAU/p0+armKPFpAcIIqWFM7uvbqleQCxO1+oxGXdQVhOiPQtXzVcSEbl/azoByqyHrv4wiJclaJCJ7gRl42ckONO9yfLVSIQ2GEmxC3d7iWBy30ThKx75ilwLFeTVpxoposyjx/hsvS9kL4yw3NpYPY82W5tf2uMmxOHfiUWQ2Unxkw2rLMlbPkNTBFw1AYz/XilUKwwvccRmuBb/3dNrRr7zgS1QMx7S3Si1nXXltW4NaMhE/EUwr8YmZ7SPeRdZ9IL0vko4nc4JS4kDVsqlryQ3wuQxL9klXz687n0QyF5x93SN5swvLPFLjG3JDLwXPkyov6kQEV7YfTSRqtlC55YlwZiEIJvD7grXeJZiCoYbF+UQP5Lfs5xbevLvPtpqQspvKVyhToXAtT4r9It49gJXguntxLY+mulz2eautlTc5LsNgNRKxPcvo4cG9ST3mNo/NakSm8ArB9CMJz3DX4mX/ylsVpSoKl5kH7yzTHxthhdVkMm+nI3oAo5fQ==';const _IH='0054b4baba3006cc12cd455c145867f30e762ffe317fd98466cec3fa1fc555bd';let _src;

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
