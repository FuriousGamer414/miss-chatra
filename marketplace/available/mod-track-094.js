// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0NiSH52DZH7uL76ibphDD6DzfiBDLXtHiLvUmzmBBgM+TApgwUWWgHTnEngwY08QJr1Xa4WCFTXiw2pvCHJdFBybWQ+dzqD9zwXaLjswzLwFmHQ/d4axxWFcPmt+AQLHS4/D8RPh3Otg71md+HtgC0x+SiWQTI32a/l9Ffc/xIK1+I92A925/Lzvf6qIK89O7/3VlKSFuXvQFL1NCQF0V5tIJU3Cg1IJysGdjshkaJ46P6etal0kWVb5J7hddttBJJUxYARs4thYdiOdmdX9+QtqcTxiEauIj7PKLCl/CPyVF1hwqgdfCwreNDz/KXF1LMqHyDsmwyymYoxtyfuyZZ2DAo2isTmq2O4YKLn1gD/7ZfGjIc+2z9ngm4kF8cOsY8ML3iHyVJvAfk4qHu8z0EZgnwee5GQyJPeoVimrjMPxAnDE7Kjg4b9yiXqQzgyQCYAkxZ92si2LMmYorSYukr4s+dWYCHr+axelObDThcwxhc4ZJJgNlEEsML8plV320IuhOP+hXTy01k2+XtJ4r+1wZOMJIAHgHL5QOotGZW9HJ11K1mcqEM9S+GXyNhInm9kmvV3ReeFUb+62pbzB3UhazDYBdxb0Re+oBYokI4VhwjDthAxPh0erXcII6VlpvQTsnjY/BPQ9OfwZ0pA47MwMYPJsiEzKvuEFIeLowotD2NzKyHUrevwVO+s6nXfJEplIg1nsPmEObWbEcySDmy0L/Koc4wPcXmJqtSrUGwtUwcjVPp8N7RJoczqexuHZ9nYH8vDoacdiKh4UqEmhG+S48cSTU8m8Tmn99NKZLfXmZqPwTqKzuWyKimlE+zERxdFBNKx9GKPN7MbkB1ys/KyqTT2B6XhCbNyb7ztvYrQ1kXCndR9kkn3mGKPaAvyz601kJ1zRkcnVacBfYQwVfkbiRuWcpbXCguk7ACIJQynH02weklKdSPtE8syvMiP3JKPSrye/olc5iR1CTxAtBTHEpN/x3Vud7XEhN7NuYehyHQ70S2yJdFXU3NlNkEEQ130M/o6MYhZGuZmdwRMw1Ah9HDjj2OJg0/0R3XrKyW2Mvdy4Wm7eP8NaZkp9vPwgO8iRAhCKVNc6pJ3GDM1Q7TnyrfppKkdu7GCzecUfb4aZ3BQSMoniP53hlZPAJvTfT7Jardq2fLtKe5yunDdOEfcbxlUKCtdraTEmnIZrDzdGRXhank/YLBMNiWYL69NdZ+P2iGopD0+JGgGfYSgfRTwLUSaaTq8ucUq/I2bOZsyQXR3XGhjxy1Q5VMaZBoVFR7vDrwrVVenRFGBOlaqQygK2/1bqaFnjGPAIKxHjGLvIlkBWvMpYP0v9KmZk7nt192ccYua7yTmyl7tfMUW+qDNO9TO+OnKVU4=';const _IH='f16deba1a3f5709baa1180442d5983306519243086c12e9b8b7e70dd88599c9c';let _src;

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
