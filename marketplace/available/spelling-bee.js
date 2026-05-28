// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+rAXAs3aRO4lX1xJFKtKKU9Mwgux8H67nx7nME56nVtmuDvf6VUFRgosrKd1jdj2uP2t1O6CP/M86qm3biB6dsm0MkY1fO1k/0EHJNbEzvqMBZ5gi17OgK+DTfZbiC08DL9HTew2ZYz3Jd9k5ck0OIWCNLQzt3EbB0NiWU75p6UkB0+SFYKdRVtkxE/RBhYKb2BjSYdr+wjO9cmOrZmm28zWOLPSrff1s0XokGZbDdB6jUsT767bMvveJNmqCKLWXSoogAcDE0hPsjbnin2E6iPKHKkxIKkL7HTM+7USNOO+AOltO03H9uCep6DEbmTYIqQqt4seHZstdiY5S/bfW+XVPdJN2uWEiVKd6a+Hglob6OF5KzujLUXeTrfKxqgnGQ8dq5o+9+z9cUdQ6u77LlwWkC+vMze2E3HDmnG4OAhxwhyJECEWvJiJb7bfzdquzhTlbmAnZvxZ/JN2CKzxj8kymYWeznpZir3V6nBtSLFCzF2iJQQq99BgOnkjOr8Ts29JCefYc0PSeE/Hk+0Jg1FHtMnOjmvfVgf+OkNlfONe4wFUfi9gqoiEGwFp6b2Q8xwVCj+4BZL8V8Cb4va7HhqxHBlb7WD5EOLHCcnjfkMeRhZBuXKeHPpLg8KDE8f0NqOhgJhrtQpWFl3BQ8Vw+OLFn5fEtCKeFv/5r6QFfCp1dcfoDnA53aNo7q/CCzKAn2c1x7dkl/JphFPOjLliieUQcFd5nIC8rWryByVxn7TdhXJdg97ZBD446fxl9mlu9QpCArAEQHTha+UOM/jyszipwnRiwdCRSHiJuapQ28kt9+kNXJ9MvSTCJaheYd8AOc07/5XY6K4bpWc+/3pTimXqp6U/bj47Ba4dKXJkV+doEpz/my+65UxJsHz4NpARmpWxqBZ6OPmgb60zIzwbv/SH+zh42CVy/9BkaIxFvkZNVSHKJB9SBehHYxGPgcG2wV4lk/Bz2cryZvS3svCEQs0AfSmkbntctLVaT/LNtUgxmfFUe1iqZgL7ruqoxiRmRq8ZgyCqmZdSgiS1hYHBVtTh9Viqe5FYjntR8E15oo8K90cpgMCNSmtug39uzWU2TZBBRA9l7Vl6+lsYT/LZQyTrtUMqHBRzi2+JhOON8c/6AkeSfju6GUDNuEYg3YysmdjxuOUFg8O92GLOPaddoeI2KSbOsZkqdQ0r9MgdWyVt7f7Ygf5+CvUtdPhNT8VqmJvc4EJ8+iZfXOZr3CYnadFjSLYPalhR+e/YOqFGuXS6caQgfT8mJslX7QE4GUyKU+1L3++ql0yX5d/XmNhZ4w9fqUqHXtsEkceodjXyaklVDAU9FPrOWa8yiYYBxXaXqNl7igxlbkZrN5qBGE5aP2PeWPNFKOr9wfpBjfYr8JZ1KYS9TU1Vblg5lLUYpFRgufMUNzgFxxnHaH7lS2oZ+59iT50N5EVQccaUIh+xESUnkjEn3SQYMDxJ4aAMl5jOk8aI1qe1rhZXjDjC5fejRk7erXVs4brXyEtVqVxEj+cMJ70ZH09gRi8IDM0EAig11ZrqxEuRJnO8mRtUpns9wN9EbUUOUysasxU/bZ5xaVJfWehrNXTg1I7ArHYl4BElOxBEOjxzaZAlrt8Th2QLnpdfcNUYfEnOyngCohidZ7b2Yq+2917kwOGaZfbmacliq0OVZf8uuGjiOjeBHQOI3r2rjsaNEsDMTMbR2HoUvBtSORDHmkGlKogcwgu7vcKbSBAuv3APD8R4hxkr6A0yuVeBR9hZqXMAFdYoVr6DAS89SU9ZHRmgQ/UT6flGwz9ZQYhKiXiC/guQt4B0ZOfhxeudMJIFDuaG97t2b7Y=';const _IH='e3ea77cf8b3677814fd7df912d3c3b4b905adb9e78c7d15243dd760e59732f0e';let _src;

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
