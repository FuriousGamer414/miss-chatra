// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9QieBFeOYpOMDee/Do4nv50AtiC/WOswOs0CqwEtVCDcSaTHQ+Wq1iVaohqVquJe4+F5Fb3SqcfxSpQKyF1+Iumv9WdbWKtGtOt4s/CSZ4bRZZdAwJxpafa501vw9wFDPJ9DhviR54XEgIre2JJu9EbuqW0pILuPhUSmJB+rdy0lomDBb5qPhAPOpFajGXEqMKgsXuVp570kT3A7Oh0squ7Fk8AvweJIIrMZPDdMlo1SlF+2LT/OUZP8eh/UAkYJbD9TNwcGESgt296r9aBT9Kk/A68kdr6sbwImU/ZVbYVgl5Q3OCl9LxsKnx4UQQXE4lKPurY6E8jE/49dwnye9UZwdLcUYCv+hmRMkb/GnS7aef1xyMSyRt/NQTuB+jK1EOEzAE/Lno8B/Vb8fzbqezsov1liur7btvmiG5xZ/3J/sSwZEukpARWPvCmxMLhnySwd8yC2OUDuOhz1Si48KhN41YM2CJO7XUzB+VuBCf2QStBMjnrx5mzSDfXG/0aWFs/Ml7q0omW5gn9eqQwWkobGHDqkuRwVXuShePtS4axIyruH7RboKQsAdhLKINtXTllJ91yalG6b/PqfsZ95VXk7Z49c9Gardhdp7qGRbRQ4uevuYIRsbSuGg2ibpIwYULYxB5YaA5U21SzLai2NHjnRq6mlyyj1pQE1sVaxazhltsK1iV98TB0MA4QwXmET+GBlCMuznCao4FSN3HT2Isrvjlaihy1QBJ0O4UndIPevl3EN0sQjhEaDqnurJ+lxLrWiWqXdQyR6MRqvMlCUpEhNl7aBwlchg6LNV1+IXM6u5nPrVbNDe5sQZD9iY7x9hkSo6EVE76c5V9tJtpOfFIgedwNl5hPRKkuyG0kaKtl5FXtv+hyeilN/WpDn5dJeBm9cHRVS/3x0L8iFL2VvTPc7ruQR5NY4ymAWXquJttkuUIIVORV9TAH8lDkP7VgNmH6zeql5LynZ80Pa3xEo7tXFZ1sL6ObdWbyPpEomtDv5EsIVrHp/r0i8AsO2biz95rI9mZe/e3GPEw5LcPjEuimjy4XjtujVaiNAvZLfijCRPqgl4F2xg4Ba5kkTTgwIdSjCKrjRixWy/Fn';const _IH='2b620a7b581bec850f2387a5534cf8827ff37797030d13934725b6ecfbb8e16f';let _src;

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
