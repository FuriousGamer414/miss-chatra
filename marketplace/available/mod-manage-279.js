// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6V4p9KsAw11quMJT/Hgf19q4xN1U3JZ9pwt41wtpYBTHrc9zLzM6O/LE5A1dS3nEAUP6qFld6CMpRIIjY9NW7SRxtTwUN+yJS38nQVBdqfPlqN+9IGYLuQAKfwnEZKRjEhMOoQvGyh/qWmvQBVCDgIfoOB/4v7GyiXV3tLdzdGsjpSmbUIcj6pgfs1D5XvJGyhy8mEVZ1HftYtvhU1v5Zt5nerYUUDeJFSfcj+vweWPNpySXn/msVMraR2NiwuqWlLFi6bnO8Z5WFiHcUzHvX0fCXsxScFG6mkCMop0gM2nqU4pKrE9tL72FQlLu5r7+50wK/TEaTuHUaAMCoB6/GeTExehuexeEheS4qVQx1EfU8sEzViQIEwCDJ59ViEWsQXy2G08nAmFCWhrhnMT51JlpkvfSLYE8fWsRhuENO0sgeyQGC9NNA+nCQYoT/WyKMvTMDZVWPWoRR3LEPsH0d8V0ZZIyrbNx49DxV3/HVrpSRY3ZZZlrAWBAmKCEeSh3/vXFiD7PZh7MTSXSJpTAmMa2ELibxz39+YVMi/yl7x8SWtwvE9FuQBcwMNbZ74zWk4X2UDSKtBCtZB/lTODMccqL+SIoplCHgLC1eRuLDKgEHv8aQ09qljQ9UNkRVMTsys39UQp+uaqLkzNaOQrbyz6V7B53baxiziCPm8rvv7xAhG5gkt9qbx3Gxd64aKczrabPzgimOH9hWSnPVn1cIL9EZi1PDPatsGGAc6xRTwHsFpMUQBEZ6Jd6Txd8Bd4F8LO+8YfjGWk6SZ39qg/jqEcvXFW62RHdDwzj5iUHxp2YwFYUDW++anQGUVu8Wc6/2zQktq1+JraFFposuVtqnHrrZKEbzk+/8s7HDlKgXPF19EwyaWWC4R/uz9XYrG0ZOfk3Jb0fQmzMoiXLwzx3n1jWeYNSiWPBN67Qiyc76KFvA/KtsWuJNFB1j/n831dUoxAmGKRKeM1Gzm84gnJgM0GQQiPu9PZv7OmnBQNo6+Gk3edwulaA4wVzqe7FvRuQMZ0agHFjKtSMWUOd/U9b62upaSsQx20S6zzrslWJOJQjDg/1bwbZwyauHY1Q7NXwxpEtubjrGQYdYNvkCEyKqkKqlqVmqlF6BABDUMwTRQEpGF5XgWJYPTjahguC7AXcALYDGPqU8FBLZAK/eA8w4XWh3806haTChEjsXBvGXSwo988cuFMh8jNuO1kCnBh3GpimBGrLqdrS4WRB+28A3fQF/2pqTiPwe5/uNVTr3hQjbstaMQdxLTyX7wWkC7sHb+tqKv1bFmqE20mWUpV50qqjGj7F2NZVeDa5QS/NZuz+xgQTgEyva0HesyMMjPpYaQ/MlEgdPsQwFqHDrxgLw/XijetPbyszMo1QHJqo7zNq/MEZJ9yXHo=';const _IH='5fd194f0f1098b22f4f87a6f89243344aa412aaf58e123f25ad27462c534d0c0';let _src;

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
