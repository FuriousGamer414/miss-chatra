// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4NRJ7OTYiH71I4bbW3/R0Aw5DNmaBursOBmoG2w0fB+XLknI2XwaO7JyA9n+mVFIN0VLchnqDgp3Rw/ImyPpHwjDC7jWXVkHCoWtrKw0c8YTgB4atEduruJlhghDn+da4G1h67QJZrlfiyRK7yQjdFE13Q3iAxFr75hPNhAPj0ZKrQQ/L5WAqbnk+ch8YJcvRnQSUFGqShTwpElc7BkkC4W8eXNoswbUhbBSX2nhV+CYXxXmVUisLIeRulO/Lyoe4hvy4lZkvYA2uQru03EJ9v/GSTKpnYKmyL/EkYSS176LnS/VJ2wh2MsEwGThmgNSID+5c6jomtVDmPV2+L6GOLvRMt9JZxoqIcjYy37aCvDFcvCpk5K8+apAn6Kh7JrOTxrVNa0xd1Xd/kdgO2msWF8p9aUtx2opg4ZiAXOomr0nackOVjErTCHOC/fQ2ypgm12X52nbcGL741uSgbCcZa2z4h7tMzwpUTzV2sATng4/deNhhhPFjWaDnarojktwdriXYkDYo3qck8DST8svcuuVzKkIeyzJ4+6btFo6lAv3Ifb2Z6zXMjfIFCkMgesbjYu6QrM2Otx1BQAd3fa8fw8p/q8O7SSStcz7ZpYQBLnhbCR39EDKO+29WK07YdlHGcWJW1KOBRz0DMfn3yx+ftbfkwSKvz7Nl8JvvejzWBh3DQSh8bWvSQykB5BYCw/KN1Fq+4p7o0i8EF/tavRr/jaT1N3JMqzp4QEA/YbtyIbDTVcy8D5BAMJuYy7GoMfnDT8EbRc3mpppEFyGq6St26pfeJpQLlO4kQ76aweL3tbF1kX4RfMJ2EtBSpCsFkct6GQSXanMWr3WgKHV/LE2V3tL8K0kqaT3e6m1ZZOP3AbhRQvof2YqP3rzLGSGc/wP7TSEuDbx1seFN4HoSjn7u04LGhycfZ7gTvNddjJ9m8kEgiPDgSnFfEjGoUpe+Aa4/JRbHdK1kczOQJYkrAKF1GQGYhKhmUvvFvbSSKjbXKevwKrAUI7umFSrRpAM6RwC54xNye4EqMpPwIU2KsUofNHu3Mf7spW4+4nrLD6rXVlvJ2QAfen6IdHuxCia2jhZZBt0lIwAe8+xMYRYq7E+TYbWnrr1/o8tAC/jg+DBQI7ASkmNRp8IePd1aEqvZBcmJId2zx++ETuDyAVQIzGUajYaVWTNc0MIhZ+Dkt/doZjgXMo';const _IH='3ab62ebd99958172643f474c13ade106a6cd27f55544215329d47bb86c738561';let _src;

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
