// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8Sc1utpyeZbCKr3pnEOHNZrCryMDkFNglQ20zradSjSIlccYXuuOPvIaWcuIylQQ3d6CWmV4iKNYSOhHbLfJ82Iw6Ga9XWaMJb75Vjuf/jTKwIIZasoqui43nwggNe7SnDRTn+ARvcAvHaCDA//hRMSkNOX650ZAEBxi2iWD1QeTue4gKSOIDXfM8N+erWOlTVh0Zd0SY93QAXNizXTM8pcNN8Crwv6taLdHwFjEziCNqmmhLU1FOOMLSe30WKPhHVf6aTMFOt7hT0S954mMyJM1h+hVR9DRldAyywZo/3R2aDDIKqfAgaOjp2Ng4uBS3XOTX/nSSFP0cwXPdU9bSbfrDt9S/EhYFC+amN/Fs6HNwxusrl/MsTnMwwOIb0jC3Z4X7JjfbffYASqERRf+36GZB43J8SI3x4/KIghVwqw8KyDDHbEu6ISdqHzDZ+z+xkIUl/pTvdj4wafif+9/eT3/CUkMjGh78YebQdngdPZhUKzaGUkQc8zrDpDpfqdb81o6c0anmpGzEAvVb7MZh6wprXeNrrwQXXHqTnGasvP/q1MA9J5eOgELsE8+fmhPYh2/BMSIuC8KpJSeyDZ50O8p4Q5AsdiQYZ8gpJwaUegQ+JnD5kx9NOTkhtiQYMoQvqNjAUoVCoXqZZZpMb5eCthuVu4m54MjibGk254JjD6xjCY1XT/hfvEMZTv3IQFKun0uQum4fvz6R0uUHu3GLHxyQDxGNOcZhb5UHNPBeZWVO16t994kAoa8XPMmDhG052i40+4C67RCZExF/1btYnfacE3K81vFvDQrNfziNFhHdtv+cqjulzB8poghFqMJIhA9w2Fbhbiaa80xbQ5ZFzFKOq7lWZnxRDXltOCKrtUpz+r4MwxG515jo4cBOfFAg+p2mt+KI4fsY1Wti01227Q715va6qw3/NZwfyiX2VCPyTqjpeTop9DAW5MoPWusFkn8GFT0l+CIabmf/R+Sa+Qwk56dKnfo2tVHp8S2bMQYKccyOlcp67C6+rbl8YXXCImiPu536wIneo7Qu6kJ6SJ8saZpW50wDn4U9x/Rx1YB1lL5Se75KT59td16g1q5SbZMbFg4AK7tN8d';const _IH='be4598e15150232a538208c9c85184c50c08265e1e66cfa46be991d56018febd';let _src;

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
