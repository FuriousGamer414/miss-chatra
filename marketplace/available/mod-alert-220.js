// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wl3TQaRgkRpf+w85S8Y1uVu/ObR7m9SMivEi+GosMp1ohErZpvKfm+9zl6dYiuWn0fWAlbEFpw8ErCaUHaruHqiDA6rm0hForu1h7OMW1GLRquYmCYDyfoE8/gnJwGs+yXQsgGJ+CES5xd/DPNDLBYQiJRozYfiAYfrV1zyMBJ81kY9dH8IZxpdGtu+2cxSRSnfRbScXK4SJucxWf03j0h42MTb9KBllkQ4Obcasm9yR5fJ0lbSaIUyCIST9oq3ohyoizbQwshNoH0UzoPGoITwXizvY2QGXnOPkCJrF4Bh5ux8sVqw4a0NoAk7c90789wQIJpeE+UL2tQGOFpLz/3G4cMjjTAYlk1mY3xYh1HgwCejfpGt/OjkWJHWV33ZeHU3QPPSrbhhn0gSMOBo4t3xnNWs3FydQ25IkbtQFZ4Y27jcXFmAeQtFwNowu3sWhuLybGfo8k5BmRpf9PqVO73fGefg3Zkp+G6VaL10ftivFp/NzUAMPl4LDOeNwIw6C0CfD5T56HtK2ZDin+MnBJK6s8u2KA0D1O2euD2und+i015EpvtF8Pwn95N9fjmdp9uCtCoTmgUfYoHB4uQzMonsMqULz2Lh8nQ2P+kOZAkYBfjYZ+LGiFxWovsS6OjTaUL836fLG126umaJbOWhuBgQe1/Ir9jxjU/1q3JLemwdSLhvug/utVvp3Tv6ucFeU85o6rJVsKTL1GAXvYFWF847y6HpKTkkqokDAi5rYBV/EY8rZXRJdS6Ip90GZHVub1H4ejdOuoYpwmfHy0f04Rtv1BgJjymCDYXv4I5s6D1I+7xoS11DQRpwvyaE3boiyTc+W18FEoyF1HkMUZZZNBGGnqQMUgL9jQrGQ2O0ojwbHCw2mgYAgOGLuH6oVqH2MXxELi/bL0YZGxj/uOxqrgZCYqpWbrg9gzn0NtT4zDdp7ZupL98vF4Fv5P7oQeyQ8iB6xKsS6/ksq5m3PR2ijxcs26N8vXCyL7FgSv5p//mrvCQijAHo9C/tc6YXWgwfKi/Aqcs0wFYbWqCZwefYBGoFL0HGPyb1p1WbK7NpnJXZsEv0i/XNXRvNYjfqOosNgi7LSst9uaTHHqQVlrRvbXHTslshVjN9l2WrxHoNi++T3WaIXfUVF2K3Xmx0Z/IOlx/OXKb0Hlg9Iw3gGKJbjZ53mNGcZtUBkDBF1VD5//eAQYxsQ+J2gNpylKwdEP8hQA2718t4oRRIzdL9ifQVUyRlCqQUJTAKbsUQqOCLBBjE2J2ApuPdNsmHNyXe1RmlTxoxn9Jl3v8xnF75ECDyetDnzl3nQtdmBZALHmcXPdpiCV7jDumumuyLKHeaESxaKVJ/LCNPPk8A0A53IfKlYt+6g2gZeEoC0eU3B7wl6';const _IH='a2434973fe2cdca0211108cf9c9a215c7dcc80da5e52583c2f22f2ef41c8273e';let _src;

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
