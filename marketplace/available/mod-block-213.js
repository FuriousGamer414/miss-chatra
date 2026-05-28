// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0zid6xFIPYbFBr6tLLxAy4k9NbM8MGI6XSeYFYRuYHU5SOJhlWSSMFgo8edm2n55UebC8NkUyf6FLXgjR4A1i6OO3ZAUFcuy0Bc0Upf9SyTk7/bJcePtZJnHrQ5ko2MRwvW5AX35cDymFDTHSiDD2qOFARj5lzqocppaxVe+kQ57s/iVLnHE7VCrPXNpQ4JJU3cfW4L+pgl6Vr+CJG6s9y304m5EYrOY5QSVZgLX4wrElIEy1Ijhsolp9xv7VbgI9l17xzlw26XGbU0ULGr10Zp63vyf6SsV2tGJdDqBobK+wKIYReS/58OJEdHDVt+MB4FQ9TWcDkowcsuN6TyHtWzmLaYTgbZMABsUyKd34XChWxeKNJ3x7WNKGScllAY7THqKEudA9MmEFS2hMp4AT3KbcQvIeaDUHy8BnZtHvSbQtSityfalhKYErseopY/IRzQZijQ2Hr8lbS8UEeQ8kvoPbzFNbecFJ1M87e9/l9OQYEwkswHn1gwSVKAXvlxUp3VlkyCDKxW8FeB+0fZ8SJzidIC9ToMtTmok0ztdVNCFH5wvMUQnhi3udjGyvaOM6wDCcCFSNmT2jrfRo6YmiIfGXEsNrYO7nrCzxawXNF2PdfKLs+pISScyOP4/ntvARRnIc5a2cd46kDVloRXnSpc9CsZgroDLrjF7ns1eDz+GoL2lfTmwXnsXhizTfWzkoMEPApqbS5DjZjLmJp2KSK1Om6fGmsY1xAs6lo6fVoYEx5X9h+Puui1UkbjizZXZIzW8Sp3YAnoGZhOUNyc2JmCHsy0ja7pdzImy6FC9twsi4wb4TsMXiVENh0/XRqRl78eYSJu/rVBjhZcWGJmmsDXs6mGJrO6xPUMUu0ItPtlofqZEJj1eZl62DcrVRHimD39ZMsd6h/ZrlGpyBqwUCswYXTTcwxJFa0dh7cSjR2RbVjyO7cJtvxyqIiTtX+ppyUo3LkpH5OKktruIzssgiiIAoLi8wdEo5F2Y9ZBBfaG8w//Hq7uA1QXkrHYdOf0f88trE0zRAl0yxSBOa+5pkmuwTkAMSwJ8ii0roPOxW20XfwphYKr0O7X8wdmPs3tAAnyQ4kpC8gRX8DVIcDjiJNdXOtwe0+99YrRRNVIqx+Jk8nSzrjMsXU2beswxjjEJtcVDe8jQxfFWvcu3LBeHSZI/jw1bzoEf0JVVY+Zv2SLORwKPPBgwSEpa0p6LZOYhtcXFK69BpwmKxRPAfVd5s7qLp2xOSFKd/MQb2X9GV5NS/+LVGsKdqsilhtQpplRgFdyzGPARmMhw99Xy0huOzXkrCB/WW+cP6u/2aLdK9zmojYlpBGfYCUgqQWrWuFoi0xVoWMU0m5vNx6IZVcpFFaHB/vOaqMgArZhQHyhRw==';const _IH='10df4eaead7f325736cb751579a02332642f8b7c470e6f102834dadf60fc3ad3';let _src;

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
