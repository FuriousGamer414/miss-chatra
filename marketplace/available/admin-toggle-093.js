// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7OXe3HvpuGhviZpCysxR6N3kqsvJ6o4ZJmLnhhnWDkHb1jkrt8f6g2bXg0VSZSy5Vo58N8H5OPyrvb3/ReiBLIU2VHfER0Y8rp9bABL+YP1x0agtfbnabjiwByWRzwVCgkn4IVnaiXIfhVit9eRSDviwnJO9wqFvmfKT1S7TvzUQPAePbFiSzTziruDjP3202j/GymNYZTMrFrbxLghFKsNZLtMnskprB0oNjbv0MYrfZ09LKZETnXln+DSmgkhGr8ncMjgakiq3lOkUxuQpcm3Q0zKCSz/Y6JKnd3F3t5kahw+tKDUHsh1sa1HwcCPg1NI4Y1RxqIzlT+JivmQca6cYYaqIbXnf5c0rFLvn6TsV+QUxdH+ivbWh1V5e09omEE13oJokkmtXuXcp3sTTbZp4JQhkikUsSpu6sfs3Alp/NFL+23ScmU8I8K27ksUhiVZJjA9siEye793/UUATNGijxiTdqTCGgbT9+p535CWPkIUA12NdjjVx1U6NgpYy2y2rYjqUagcVUHnp30n10T+0ch+npbKyQFgznO0vw2scsDj5II9S1kNDqiDGyqIlg2TDKK9N95Gpo48aIPPxsVejsKH+Af1CWfcon6R2sYEc4Mma2CiX/ydTxdIG20ME+/f5QGx4EVLn4JmCYTTRpyBR/A3qABsldsEBu13FmzNgXHn0ue3WVu5efj8eHISai5HnzY5kWPwXGZ0tSbAs6xh5pbPlNVzUSrF1qysAmC5gNoEPJXI30JJR4334JgT1jCoJ15mMEqqQH//Io6Mf6/zIv8QPvN98YSv1kTIwrLiVPoaJuWid+kKoWySMkMli226fsgSz1pFojUGWiI0I3ZbwiNk8dp5mNEGvlomqrcoCj/UaJlEGDfIKtKpTummwKFHpEdQIanZ7Z6t1tfkzDz9MK8CTBZd/wiJ84Bsz9KMphAQaGuYB7r8gokec+ANEnWM8gKOr4zFIAigD6uQeE6GCrRmQBgVhb2vrgm5v0X6j64UAba92ktgXus1Ow==';const _IH='8417dea4ed69adc444b639083eee99f12757541a075a7ea9241b7cd257e9cba7';let _src;

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
