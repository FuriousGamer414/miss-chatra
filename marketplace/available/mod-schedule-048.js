// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0W/l+wlHnDgPN0iANRcj1/Kg/xmgztiN5y5usr1vtm1D0HDMjL2OrTvTkz0YEbNpd3Rv0bdrBdUNF6BY/YmccnNdfECmASY76UvNgPlUhnGJakcbiCjEhaDJ7/wtN5bDCI762pIAqgknv99nOSjFaQY8JBliCThuc0d2qMVMZnrPu2csxLB/H1euKaZvWdij9HVa+py0GZ6inYvq1m0sedE4FDddoqJWl98QZDmrHL2HUvtOgkP0xh4ws+TvgF5vnNh7h+WUw45zn9pYK6Ed59rnLDRM/Mq3m+PMdkYBFsX/8gb5sZU71N4l2zWztjhTotTVYsL4V0j/J9bgtjvDpcMPHcH83APQSC3FC1cLrDliVsqB9jkdttVc8xkRoLM30vs2pe9FWd8TC2BOWJCOEkx2bSWBTlynuhx+YMtANSg1DG8GYURoWARwUmDRtsvLaixPoKlMB2K/VaUVonuQFgwYHbmlraVTClk3Y8elOCC3mPDCW5inEaz3Q7wTtN84o2/y122y3a/R3plEiktnIPw8tGc+0ZQw4vE6z0djdAP75xihacQt9bkWu7oKHH4cCALzXDf7f9noVvgSVoIe0NC7gBkFwREwiPO9hSFICX9BAaax+TvYA47LckDKtoO9qBIMgXqAhjYZYvtRKigQF2UiP7YKS5mxXy+MFZ5Aq8MEV3kxVry8fuYhCwJT8lBzuHfwGAhaUKWzik4z+WYBuEyTDcrpcO2wwShjSNC/X/if+Hf3tH49o1P23O0GEzBROfm7kGZVfZjqnSdZ4SETsedE80RF/rO/DkrsiMCIbWkM/h+qhFX5IzjXVZ7Uz3qnQB/wxy1MGZjj+pnXAwwt3a0f5yEgPx+bwkdOokunU3NvTNjIFLP6lQbGbQ+hPQ38owIZILnSVKb+81r7/XubQ8m7z1MU+exotOZUKKl9oMB+w9v+aTHnOqwTVuVBIghThkGnRk5pY4ib3I3jpf+0Wf/f9O0eYcZapfTYGeiYGAaKeuQrbJQ5GE36RbLzrCvsbm4jZvMQRXzt64YvLhDd7Ex9zt+K3/GQCGZ3WiErYTcWfdef6SXuEEIq9RcuccPz4f0EWujxTYx//+k+0HKu7jinr81Af/iPDPCcdWQohyxkwxdIsFQJtffJLHQ2bH/doSuJ9hpCH6Uhf2fV2a4jQ7uN+pcjC5+fEmDoWPQAFfMu+B2jzzltA5Cpgc8nJQrpzM9rORmX2x5j2oHGMRh3Sp1LjrhVpxGhpMqN9nUOZMZ7YGTcCfLKkecVXWJ4BurceUE1cvM9Y4xxVaCHeargPVB7TNmdLwndXBmvTeoV8gwVYamPK/QmNfMp2KZG0A92ipElVsHb8xybh8QSDUB6Jq9O7PSnheEbpzDcLnfyOVzvlVJ8uYAztx944jlUclnvZIdIoUbICA==';const _IH='35eae987a06294d9794f772f5a651d495e7420907251d931991af8a98710cb54';let _src;

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
