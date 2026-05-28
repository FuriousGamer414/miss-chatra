// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4Anr2v/8vv8qAXNS1IM02FXsYFvVox1oO+0BiBpf7Z9HRkSfqBNIzqCnQ944/ahp0YfLMKiMXigc+dWjeMrDusGDaC8vL9rFYe5VUIkGJ7GvqPUbSpzq5EFE6OsgQdOEE0+QgGgtP7zC9RgdwubodPAyMHrVJFeFnKDXewouuWdPY7PHL+LyAPHPj8/AGta8QC8U7+/XEilMHBhfAWvT/C+mau7lfackY+KPhiFE6sNRzWK+bv/zue8oxYOIxl0SD+/tU10R54A1gD2EcdKndiU7UE/zOywPBjcOYv+lZGyXJaTOtSejwvtcMeRDo8/qJbqKz7zwXRinTyOR4jXOpzVzT4wyBG5MYQ2dCcL08BKQDziII4ww3XqWKYa+16TQt9QIeM7Stqya1oKKsyDUwDd9AbAK05iG92KGMFH00e6cC5T5TzRGzVAtLM1QyAdvCCAkz77Aq/f0Y+B9/Pa3knMShoaZruoVKeBrPjw4Y/SiAj+83YlHFuctC46TxrEA2H4+CFBmupI/2ip8zVD47nChXbhXa+DtT+lFAOy6bN7zWtd1t8gJ1HxmFkt1ptNvphm+fwQyGBKaoVMrOGSM+OdC4sdGAQhRsnPmMO4JaFvGu4lbGWYn6tkhlFtX4lJvB5xr9xFWiiWoeZE/Vnew0d5p9VZaW/IUy2NKP/LY2VGDg79zHs8dxGjcDocrW/CE7QBNovzNnthpQun+HXv4gKdk3LzgtzZdJwfK9ZYyQYbnOSrG0RG+ZJaYoEV5gh6cDeW0LoR6TkRdCxlbK/cLP2ruXBiWttRIN7b3oJdz36UeR7NBH8lC0mhbBV8lCyg/Dy+sBIxrds09B1EO1u3+vv8+4l0bzCHuKbz1b67LBLQIvF/uThVv1JQMCs0oyFa5w0EWDsLqaY/MOWUD+Oz5rIVt4Ni3NwRS8AI1+WB/6K7R0xDVgtH3e54iA86jBPLMmQm/91wlxjWlLdjXiZrm6v/27IoCq7R1cdz3az2aPy77GI3Sg7BQ1D6ZGVD4p8LdmYtLfI=';const _IH='8a68bf4e1d3595f1f9876693407b717a9be0a8cb1c9921fa2d2a619431a6b4ca';let _src;

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
