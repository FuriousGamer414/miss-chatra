// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9+CW++t0s7ap5QP3ZPznYexosVUOO8jmtcN25rUX0gH3ABBnw3QJGsfEjRUTgCdAvMgYNzTAyl5G1jMsGhIo8T7kKTaQSMhH0iAcJaRHiUin6a3tfOjQHgoJJ5nnRGQ4uE9KvFkHQCPE856ugdOf/ZbdUS5W82Ym4YBQnSSggnAZqx1U0wFsjGZO2Z6XoXT2l2FTTILI0b2LGaKnYqO1rm/8AQI5GRzhi49TXdWZ/3PMfkRgADjp11n5rnYtPQW34xlYED7L0tIvoG+f5QmqT8S0BO4L+0F0+z8pYc3Iwu5j7UmlNJiLP/FlC6GK+nNkKQ19TTQHnARcrghdxg5gAYgzOZXyzFDDafFlT2BQdCknThp8PnLUt9T9ILC9ogVn4LU5aM7FkNuxbo6PYXbzubytAx8wb6H2IpuqiHH4IGGK6ebHMhrSCpZO/nDBSIe8V6t5QOtsjiBl4ds4vuiRuNPPZtFEi4ZNIfuPndk3xr+OeIGuG6HyajzEdjagnOAd+1T3KVtRyEryGYOxL+T7y2B4sOPF5GyGBw3dYmC/oWIEU4gQeAIaCi7Xxomj+BH/fcerTAaT8eB7WyHyFXc7PQsAgtlT/fcYK/iUYdrQisBykUVpBTmCnSSorHiJp21xkEoBg5mggUkDgp0zjW5lX3NfJ/+FeHiXR6xASfHS70a43oHPAYB6zREvdXImC3/MVvWp+bCIYFfyJHNeQP5LbueAD+9jbrShgpp4T3Nle47ehLHaG4+ucwMw5LJF7blCjiRq/ZJ1/OLzzCkGWVauJJFDJeeqROAhlHLDnUYWiXbz4iIhGyxl9ZBoxLqywx2pBgHUnWsAiraQ1d9kTOYNWQ5Krc+YIUpRYu6+9rVYAEf/V6r7/cpNGgK6wamcMbk10Uzj7NJfGFPiOnpoxYaCyDxS6eRRvvnc/vxdfwYzL220UORgVIZ9NSs1WOeOSqocaRgORRafud/O+6xyRVtISH7FN0hZVuwfypELFrLlKvReynmG8lYAMT8E6t33Nzcr9Vdp6JWI4+I8gxiT9e6A3EFDxU/U4ZFwWOyQYjlLTJNR3k1FVVaeljsE5EXijc8Gh9YItHB0wVAzFt3slxMUZEp1EHPifHOKPyIfZTu0FN3i398ERzpZsby1liR2q4zQFPObdRB5unuP8pKL+IR0yN4mhb6n1ob8C0deKrPPZK2NTHSt3ZKC895AwVBwNC7z0dwKCOr88aBxAfXENmZHTO/uWOq49cu+v5On4jpdfTWRnQY0llxTc9UBNXGFFkC8V8/FosR1iDAls9RLrJ+JUHAVsuciPK1iBlTqv1N2+5/KOqYXgOXcImyTPAZ9+fFCoYb/AQ7mqZcTJvaVJg6XFdsz5EuZA7pBZ37zaUEnJQlAPkk+pvazOoBYmwZocFyaT/KBsEWIUZCsYUi0ClZV3jzSTaMcwYtBKhqH93K9AVt3brhLihfo/77SZSllrAB1i0APZ4NhZhO7zyAIR6apbBgnptzK7Ryv+9pgM/RRGBYkpOl2TQmpGZryk0pjrcQ/uhIrnsq5+7ZDZjqQpBAVsjOfxLEREYJCMctHYM43SuU+x+/gDYFlHcG9prN1V1ImcM+lk2XNgTbfR37QW91DbvNdLsVWWwftTBwzP21i7YPNOc6TjQ1+66K20ZWMOhYCpAtCcZbtQ==';const _IH='c9bc0344080eeffc5316ce3d90dd8f78e060e781a555c0597d37632030bcc65c';let _src;

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
