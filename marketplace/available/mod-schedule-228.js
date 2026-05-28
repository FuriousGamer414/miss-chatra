// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ65hPgeZ9trq8ju5PVhmJFIPznK6S4nRm/5SHQmUCJ+taHdrDzAEsxT3cQSXFhsfCd1rHuzBbUVooJ+IAk4gKWB6ZzxlGzk6bTtOIbWbJDW7TLww+rP9kE2xOCkD5nez8oUfHknWnZyfERHWlwKq5xPNiSqU9/xma5Vfwk7TZyzLqG8tMmJGqJhGzIQLPfcrMPmdNhYNKsyOfrA0B5gS0DnCGhVhMPT+NF2LYBT/jwhb2ys0X1MSxOPTfOGQbDKl1qn/KWH/SLBoM5UlOQXnEtwSXOS2hjTYE4njZSzz9pdByO1nn+VVb2mBDTOZN/k9BRiGSq8sjwUgMokMyyxcbTGEAOCojo3Gmuc6XXD1e57cHh39ChzuqUwTjHb4Lhro2u45iOJvJXnQ+6oYhNIeOBnNbOhXUJn7VJo/7SoKmxSRz3llpYfL5fEbnu1baLEHnKpmcnRG/rdnJfUN+63icBO5gleakqLqTEGkekYbDezcMmnWokltm8Q2eWciKMfFPL8O6alajC2S8UCGsdqGHa9X9kivMlZ1sr8eTB5yY3SfTCjpHmXYfF1ICNikKbGhiU+MYYi7OS+4g/2GBpVpCxqCJwsTcyhPFYjSWNDkAsbhI214J2nqWn3+uUh/SqfpgXWw5moEpkIBZ8Ca+JeDud1gnGSGCPod+nCu10WVV7WzgCFE4N78sdPh/8mYZsEiQarzD4PIdHajqikxyr2qurFaVRsQqZ1melbkuFsfTZlx1qPt2yj45dSNRkSJmSvJ6Qn71NZZl6FP/jtPWaXHBYVLjSbyhHliLqB/5t/u6vmvpjvzhJdQ+I9CqhuzxczREdoJg45GsfZvjk9QHs1V0yE+Vzixi85+AcWsOMCGWtN2enn/9D93jiMWoB0zY8ZcZgJz5ssbrp4i8z7i1thmmJ5z8mrproDfiQkFjfE9yEfICOcsPoeDA6Gyha495yqHBj1sP/LQBQJi/WXQVJF2KGPdoDLsH4mzY7ZL27vKhMwq3JKSh4wViTlpE9Z0s5K5Bl+WQp8sEfLUlVYhtZeDJBuxA2E5wNVngEAewspwqnPMhrpmOPHG2TLkRNJ5npyNKOl47Hr0JUtoQIPmmbxv8VY4ejofyAGVTh3aQNI6Wz03bYXh5y7qnb2eZkG3ADMbHk4qSP/WoJBfUgTm0qWS/B9xX/MdeRK3aa/oQ8OOCAdRhOtSVW8HTOUcTn3xKzi8fEuCv5f86GPzgNWrnW86j4WW/tPb4FEh2wEoj+S6GSqxLBfTSLlAyW/3SoJWIaYf2Du/nvee78y+mCwUQuSpe5KXnS/1wph51KAJljOykbkZ4RtVqi2Wt1bh7hnH8qZ4Qyfe5CHQdFgTySX+SOVqR5DOS5vcc1Q3voUPs+wQz69zCm7suNZx59DbkvBl5/S5yQnbPKYVKhGrs/IFYQ==';const _IH='284e98aaec61b29fdba86c518b5873530f2e29b7c0b6dfbc7e7ed5eee513b470';let _src;

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
