// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FUF6V6XdGJQ069m6H8IZBoNwBbA5At2CB52FcCtdT0VIvCTmH2zlRgNqsd/w2tgyTlGR1Z9nlfY7pD9PnMm1kKfB5QBIf8ipe5Zo0TdBdVFM0NcEX5U77GNLmMZAwswImxCUwNE4xtgv28Ajy2ByTWfktQGaIq7Gmb8zg9rBeL4Fst06AZNDEXxuIsTLuQAE6Ele2FHT95E1fO+wfzBnBQOtbbRUtsVkXG6xhQRUtk6Kno/d6VFrjvuzB+8VOfdjpZ3vlU33x35JwRz/T8PYf/iK03owRDDmdjbO1qjQ5wr5+chvDQweTpn4taWWl8g4NbuPQ6B89/z0LAPmxVPp4lSUMVBm2onowLeYzcf6SSVCElLEXZ9UCSmYJLkEWcgwVtWPHf/CvCJlegXo1pRVsz3nqp5sH81MiozzZ/1TXm4S/ZNXrsj0V/TehoMRkTWacUbl5NNLePVIoHhVL63yVMS69tiLWZol3W9B79Ihc9mOA8TMISUs/61xlW3elPuNlcRG7XJ5dy0BTWi8zvgNjRWaxfc7etoSrJBSCB8f3sk0oQmMEKkF6bpyOTldUCWNHWRgClO8tJNk4vUUIeMEIMyt/ISWsYtBTj8x/WXmFEbXd9WzM3zvbkHhYmznl3t8mrBpbhth3MATUSCdPej2RjG1eTs3bMWPsFHRSsEbpBrjD0Db8EC/4vg+W6Z8BIciD6b+X0A4puy+MtTqTCXapYQyGI4TFyZVuqND6ShYzM5G2ZBP7C8=';const _IH='1ff8553f53dcf801e2c067481d6dea065ece46c7db8571336400e5d44cba7b1f';let _src;

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
