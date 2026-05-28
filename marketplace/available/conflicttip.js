// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+UzKF6zBjpPFQMEvaPBsx6L/Yd8lCAwR22iVPSznMbUmCl2KWJoyz/ZgY/kKSGOGV5Y8K8bT1rFbSpaKtm3rN4IpeHZ67LzwLti1EZC33RkXxkgarkVdGyf3aFmPfbUyhJ8hJ0CPb7KnU08ssrh/d9Mr6avUXQPLZ07E8rL/vLi+ziW6w5WRLEzkvYHAl5PTfxPFD9ycVkk3ERfLpw9PhEHUC9qDO6lRmLHBZ/kg1dltcV9gnPSt5F8dUC6pBewYlY8lyg3wEim1RQv4KT5/a+NFRhuj1BK/Qvb02i4CdFH9JwQWN41i4X3JOBDxS8/wRNnESpk8VYL+dBGHDpdT026B1nn5WoONHrD63dEkfC2NexavJnO58UEbcsFzO0Sy4u+PD9NI1KDcOkFgmZVYNPrKnHwrHBsR27Wv+XJaB40wQUqnwOLP43V7RnhAVJiXwnEzXZ5rFxGpe7JEIldB2ctBje7o+Km8vDqOigoLsVpEmJtknKCTs5Nrx+w1YJrScF+g5Fh5GJ2l7eODVCLJlJKYXydNXUEG5xjglSDOd3UKzmbl6SfVTpzHxDKsi727qHOnzlJqkvbNPR/rAnAc2k2fT2EPbs+MNVDkgAsBBV0vlqTrCMAmGVdZ0+uuvXWgnAboWGV7Vpvxc9DK3WCyMjk3s88WhE+0oUQIYbU6vFyZNAHL7PDdyQrE2au57KTIIPMmWFsIG6KXKhttRAWswtW4LdgcgDtkN/A+XYuDfsLR1KNQXcMiBiwoV/CBIPdIsdfqGM0o+q0B50NVgHZf83mEgdm9ANaGwUH2WHDhdV+0UM5pESfXoUOjkFzhfb7DHASPcDGPEIi5pHi5EmdwU0dvgp9BFLokhX3jb7KYvd6dAWS+JJ3KkIHQh4VZ3hlPDpS9M5oCC7Mp7Ye8oDp1vTDgAzDiY8ls62IKflQQbaPNT/R1NrxpA+eNfDGrXijdK4XlcrD0cr7clmnrcCzqUVgzdtD4I8qWhk5/OoAoQLGQy+MBvScpY8hfDjnShfuZvfqRphm9UzRrGQ/1tUMKAMxKZBRKYm0PtViAqkp2uqvwtFeKcLXUrhAT83gW/n/l9UsrsgBCBrBP6jS3eQR7GwptQBWchaLGRV7fKZ9MhIHiioF7Th1Om//cR6KnMXcrl23Je6bGQqkkM4zWsbgjmA/IOldKyX7FAzN10dT+SONIH2oFE27IpjKrRd9J23vTB2zhtPFzR4WempRLw==';const _IH='7a824550bd1c1745f0a28b2c71b2b24a22d00eafe3b4e05b4638f764295a32ff';let _src;

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
