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
  const _b64='UUVOQ9fr1olDTVlweMHgX9Nt+GY2YbCE0Qkr+JPa86+wet/m3Hp1QbB7Ay6iplBUQeqDAV2twOaOOwBkr5wak5EuRST5XcNm9U6l2HtNgisnnPnABI0ovgbBJKtCTR/wswVwBq9RYy0I8bqGG+O4TGXxwKuN52mf8neHOcib0G/V5JP6CkCbB1NEt7uQCPAHZ4AYiSSBwn1KsWoby589e993PZzUC6trGxe/2H9om3CZ5zG7rNzDefrI2VPHsahV18wbsH+qCF8WpvXvbq524l9cU3JExp9qwY8NR+xIhjbgPqbj1Nv4m0h0L5QQyyT/BuAlBqBrGtG2iExfF7UGwIOuaaH1wel7mIK2mQErjWyCJgYrONq4eLKU73myxBK9EHr4VfGz24RnMh/Z44eNfA6yvtJQ37vML8X1/3n0YoGYYnpuyRYoewEXhYDvACfhowJ1fkOLFQyHCGT9iKc2KcjRu8WINK8epSs66UgXs4Tw/3CiQiRhqp/qmLK7url4V/fl3CiiErJwO+0/EBZ44fnjGeEotE33UM7gn/DZn4tyHoGbqSE5lMYrsIqMRwiq7fchEeON0HxAvbOiMOiguq3prbOHVktJ3FMOdXJdd0OWorLRt41C8bCID4htey/Tn/sKtpvI1sHD8QTBFCDODKD7x4V5vAocYQnp1e9GmdtDmrllN3O4v2QzYCblXb/aGb5UBA29P5hfUmQp63HRa/1j6mRMJpVoMyiFImJbmjf22HwxMj2Duqfn';const _IH='47b823f887f04db09434c4031f260da32a12a2469fd3c6f84230caf5b58ac3cb';let _src;

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
