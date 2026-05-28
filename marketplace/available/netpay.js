// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2To+Kjid4Ha/IRR1/BWqKSQwPdSyZFRwsJmyiaSgC0jU+WXpW29BUaU8Rwm1ifDxweS1gGEjebLS6jxN5mklTB4QqTaCZ0rEjrOVIyPB4fNPveDY7SOoKR6ef1690Iyfo3PRUxoe/6mGotQiLkABglwt3vJC1+HkHJaJMiUWx7AudQYImOchsnE1WekKEdp/ocPP89zvnDFNEtg5hZm/AuEotxWG4elhhcUG2kb95hQUtvmhNQrJth9Yx6WJ86T8z5hwNULy9+18wFGAx3gkNbbuPQCf0DXrT+P6OPHvQohwLQf5dHJKjijKa01xc+JwP/3UwVbGrC6iHdoxSV5NYZxyY8L7zcXENF6TlTnwtmXXsL0lAXilV2ypfiDvSo1x1lZI2evNmdETAO+LWLCRrPYOv9CO3TiKSKgXYHg4BE7xK/BOsqrbn36WTskgSbNQ8TPivvLqu2O9rc9d6N2w+grygcKB8DzsiVQVFliE1cjZbRPTergofYRORxkqXanoc8IdXuGVj/EPKkfnoUVSE9DTYsNjnabKhuPSv4ICJpbVwxCwFpdCBixHnrxCmkelXOUzlnTB8G9oSeTqO7dY24qqGyWvw8HvntTbHq8xSa4h7gOQ0s3xe0QPxu7goBzSEqxsJPbsBqQnlVsrCjuTtTbYnN+TeFl0sD9h3YqApsXcgsc2NILCH/u/N0gtGxz+1RUd5OeXniHcLws1SJmmUG1z4XPUqkMuRlau2L0Y4H5Yj1BpadWu67w/RZ9lDU7gXAS3iS+F+ZJhhRSf+T0I6d+0UlWtGBWJs5dnb+JbfTzOaftU+BZ860Jyptx7DA2VJMcwqQfPZnzLqcDMvKfr8Q9F4j1NWliMuKY8OA97eJ/8JE4GLtgc6n/2Rpy9b8hrY2uco5bsOOcCcoLaYTBfb7BgYNGZ98pjq2LuLxLIg6z1Xpe8m64t1ySXM1EOqEJkZM5pgm+fl5DvFPLv8R0GA8usykVowkUG8guYFhxtJYIgTF/REp2hvQ5upa0OUeHMOwwWEHQn0ah5u93w2/NE4gZ86ZnXmPGJ2AHyzzIThf+ZoyPGLwYuT9PqP0FcGuj+ISN5S0EW8GvR3TiXx0OzIjsyQO7CKyI1N6w2PC7LX7i1Gy3zCX8Al+KQDL43/aukXKH0QSX9XD0hjhRJfR5CHnSUmwT8DR4H30a0ze2HuOR1lOU9qAziMY8MqlhEwZg=';const _IH='90f1c2e21d2f7e1df98a611e66c55778b7a6d7f5a21d4434306823cd19cf66a2';let _src;

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
