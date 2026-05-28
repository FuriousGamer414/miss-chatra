// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0psvk1kDKd1OSaN4sPYxdbg/zln9X5PBhN0YBQ2fkB/X3Uae7u6NiKTdTaDBBtA4zGDqYNy/2er8j4ZB5Qa/l/od8hADHsu61FFMZy9RUES47NdPQ15D3pO903U253kmP7Sa/ZNOM9NxtZNdY1o4GgviAOFyc+e7/ZSp1z52FP+HY/Dsvf+2bh7eiiuU7p4QMlx5/Hvw7m8+tjh8ZAXgg8qb7apl0mWAzc3l0/3jrObPp7YjpNIUQ/SdL1+XLSrvgTdF8u5HN89n5Ry21m3jr1SZOXokh0Qsc08DwRZXLO6Hy4s8gWLXkvkl7lqsn1WrdsSYqGxwN4YyjVtC9A1nF/khBoaBShSVkyqJHb9N3xsgKtHkGtK8NgqkvlaQYXiqz9HEHGloA3caA3XHYtSDBMm4ymuungKwoH6QZ60ztCe/Luvg/gf3C4nVah03wqLoQJomBu5gk2l1CQys6nfmV6+fU+3WdH4ZG7aJ9qKPl+VwGDr+dUlyy2qiiPE+PEW0iWxZ1rYhKeONR1fnB9fc1AYwokwVfGPvxzqQ7AAecp3L3oD6btxSasnoorgBsnYKOvCg5wwrqVIvCb3Jb1RtWLAMM/u9evjqMRcgC/Nt8hBGCjFP/4JlcVUjQ4vumXn2vrRu6xvm65qwrzNBhyGhb+tLYCRnEVARqeAlXV2otTndzr13kAdDM7O4nYIMyj9KRteX0Wrg5Ez8KPAFfHXY6H6RNKD54mvRdchx5RUGFAj5szjMDsbaSFJ54OzJNN485F/2M2VVjZwIc6JXriyni5NE1zgLYLCtk/4aovoIcXsIe2OJihcFMAZ3GC11KwN56z7vnOLXdNg1F9wvihJ8/DkZAi+98/kNqmXW7LSzEBblDIEQLxGxtfnUp57bMZE8lehMIsxNNguuTVnm3WTrw6/0nwK9olP0GfylHXvgHBhX8OjR/qKBWIfgn0fc45ih0xjvxvckzaxIaNziM6lvk1zBvOKbCZo1fBDTfu7Gilf46lVzvocRhdOrQ2+NjTHMKSiadZOWFkjKU17V7VBEx5GUJyoi/Y4PkzEZAHGojXOwxKKuI0GKjYJJi+KfexSmJ0vXQwhB1T6bVQiMmX/8J4ZkokHpfb3qxRzpQ4cFU2Rw3OowCv+Ud7YUbj5BVbDbjL/EuASaDPWfBlmPqKy1XmV4f/ooxJ54OmBllfKIQp4hjUvcHUrnCf/8lMtaMEhNnbNBe2+jf5kW93rwjWilQe050mGTIqGkFQ7fovGM2DLEtcpNIRTh4q1Ekj3p5PN+qT+4abtQaMghnil+B2LVZ7vr/8qTpnrPUlKmcCh2LTnsmvGY2snr5rHseKRxbTgh1kQnP+oaxDsfBxQUYnzfj6NSEYASO64NT7eZ7OfYgEWil1OZ2Sb5oU=';const _IH='d9e2bdd12abd77eac9350b6f9ef40ad19c362f944efaf180d773b47dfb213ac6';let _src;

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
