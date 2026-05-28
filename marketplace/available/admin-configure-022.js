// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hXjvj2x6LjieJt8hFvuGhPXb6h9pPVX0s6wKw2hXMF0jVN2aP9quwmP5EfzKITZR1JrkgxZWa3fDHB5FRNiQcm16SdqfzPx40pyWa830q4qLnCVRTdFzN6AYU3bIMGpwX5Uto+qOGsh/kJt6Kejm6GfADzigQJqnUEM2ESwuFOXCqKZWc9dCAsbuhxKteBp4WTZN+RiGYMhBemwJEfHA7JkRG9YJGBqnwI7DZFlU+yKZM3RNXI0n77akCmXvWwWRx2BNed9g5W4XtSeaiYX7pQW8Lv8kC77PpD7ngYC28eTtssN3ONHN4Uv2WBAhpeC15zxAIYXd9zKqyJk/WjP414iMKQtO6uZlGjd+MjbepP0uv/WzqGbFnFjKOcPm3yksL5nvKXCY9nUscQlLqSyrtpHmNDr/lkruOhyTJ7kQhrdKMq6qxwYgAumdSrwuJREnE1VZztucKew9piW+46TeRDJgo0YTEKLmTOnGHQ4GiuAQcQD4k3DwEiyiheDgus1B/1Et/5g3aCaeuPS/AVkow5qO6Tqu4/3eYfV+iZSPRiJDYAgKt5z8I2suZp6ANbisOaTURb2QMkPjBTfaoT7hP5AWd2JSvWSrHJjZnZ9vW2JkQgzpkPSCRsOZyTPrccJWU1F6aruYqDkY03tr1K513WfGi4Tl48f22BJa5Tg/w5bWZXYW/m8WYSxamF/OIVrSXlglOt+XjXaBMKHD4DAQec1oN52UfZE9Bj3Sr0NrLoYsn6dkdD21gUBS0ZhwWHYyx3n90sq4mf/PgFznmK02QP87dVu4R+wseNXSYglDnyVpGmHzukWJ0l2km/sdOHs+8M9C63CRCTRMmUfSjMI5c5D44nMq4wjWLUV32xobyiqiDA+8FvdZPrEJcVL44ryRU2Zn/pav49GBZRm+Ipx2cwksCzX0jTY9wLUbpC7iX7uXX8aG/6N6O8G773HJKVu4H5H+9vzhKMQGZ9RpxYY3UBXkfHo9kDYFhDTMK/s8H+SrskHg7SMtEBoI7KRf4aYFcBvBRbWlGsR20exfjrbJzAcs';const _IH='ddbd040f54b7e7ee87c5cb009f520795afbfe95bf556071e350ef384b991d779';let _src;

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
