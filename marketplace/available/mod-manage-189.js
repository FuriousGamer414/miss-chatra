// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wAjsTKMVxsIZZbYY5QZUzIg8OSvwvWcIWysVCMnoqTgv/sZtXuaykQsezAt+e8IvHJRCjnigS4jIQyDlR7R0pi2oyOb41aN6Hc9oTsetoDzbX9OWktM5nZPpFjDd92cUOuN/XpmaPZ62+XKAMQHYHF5zyn/eJpj4LVafLZi2i+FOgPS1eFuV4jDURRp5OLja6+Ddb6j6VrfAj3uE7Tm08NUbF7uG30HF0gWZf45AX9kkUXVTx1Jg1b7NowAuaZe1Goo3zch85QoBKP1RuCLseqca8k1MCfdbc4yNLsPBtxZ++uhZJm+k2zfu7sa1OkwK55iz+m6808M37TRO0Fh5PqPCrP59NGRk4r3EqEkmk7LRqF/6rvemDPaOnZb8DVXcoS4i5GDOdvYVTBbKr//gfU2r0HKTrhAUYGthCYTxI9I2hr0/arKWoD8tm1r8RpstdA5ZevRNo6MZJDcL7QvHK41lAA2wtCTjpCbUwC92qOP6aorGwY0N5YxDomxopc13NIy3WqDl7o7Ffjk8Z9E1jHECpHqqQMNzlwEXaopUVbNh6yMfSzv8e3PZnh7/xGi6WcuR7sdEVg0s5+nFj7nf3klbr1+MNQB+iNEt1jPvLEeJ+BJL1QMXMHRaRGkZMgYmsAo2de1RmZ95o7DOg+iaqJVscUN2EyK+hgRKr2jnABgI82PzENRH0692SqL1oIU7xlNLc4fUJgDbH8T/3TDxQhnF/HRuv905cfUqqx+WwF1j8UCP7/KLVjumUbx/FnuloX/o0DXXzTkCVRXW3w/oKO4o2AjqbkPrKyNVclwShhMXUYtSJTtiZuz4uq4w3MyntyR7O1SzGzZdfBvV8iq2wtQ9v7kdRaB6l6pmKAq+ZmbNEgDYGkbtWr9jx9JUuFqzJi7J7pVqKvzEPSKuQ1SM1+v5t/uN1Oa8KxhSo5SekTa/kqCvz7CvOtMW+kerhZlG8qWQ+4BuJhpvSC7fRr4SHIjB+AAMv+wWX8k7HRucQYHRA9DkU/MjcGSjvxIMV1LUKT2piqT9VLi2IpJWz60I9vwujIidlI3258ZtuIXoFVjrixsWfaZUoQQo4ahypas4OUwc/uY9tkD9Kdu3xP8Q8pCpo8bf/2/7aKgXIbMBqP0U1XcaHa/l7AgWhCvel8RnpFeO8JlLhkzuhkGHQpZgt6fQ/Kb4T7HBxfyqQOs5SnpBrBaQsR5BroD4eVWUatMdbOw/GdxxjS0cEVelzR/gPzprEZjhvx2ZA2duQzodXYtJRyk9STay3+yrfGN4cqxX9dH+DZ/TjEN8N0ty0pK1jFd/gIza8LrQJeu6/2FsKXj/TE18m1OXZqxoLm0apVcgNXLkJThdVHr4fI3ABvaWuAzDntHCtHZ/CrIo22QQF5mZrFN87GCyvA==';const _IH='bac5558fc67f6e97260d56eba91044a8058e5f5ab6722b36a1e9208dcef49891';let _src;

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
