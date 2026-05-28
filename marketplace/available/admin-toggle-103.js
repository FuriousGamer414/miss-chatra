// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qUjId2GDvoetlQTmpRk2kpY5JMhBya7wiPId18FN5RMgXkkHTE3F8xFbZQQP8B/voMT66OTZIVAf+YbAg9bOeKuAzMQKU1C5GA4AjE/Vt0760wD3FThKGLXZQdG8N39lGAxUM2U4E8VntWHr8n29ZNh74nY3Yv0OS4CMKxz/qjN2k6dJ1fPASZWj+vFuTxcy0Y/g86N3KIUQVEHhk8VGKX05Ux2IZeX1ugh3FiNcg19yuN7zBCCLECHePTkJLjs6ImSQfWuwueOKsSbiA9NWfE+oeKzxl7TsF4U0O1yyXnJUi1+Z4KXQ7OpYZp1YibIiZC3sEgWcDsWobh9oRxNsPSX95zq3de/bfJS9PUwJmoC18l7WkdnJp2wCGkkI/UTkNE2I5l66XdSKI8C6/w/aUWECKF1up8WeinHSJ83MXO1hh+pEm3CF6ktfhLtF1LN85IfXXDGC2dQXwIT9lEyxy+76RYn81B4ye5CGCXANz/kIpsa7asN00cdrEgl68b/nzg3GNKSIPY1mF6L48BKfCgX7+c/8U18mj0cVTrx2YYdsUIN8g6d+UcqFjSurYe3kgBb+yUR4GeVQbRCSQQ100KttXEfXpScK7C5FBoRRaI5PoedOONJhPbUXHSg3+I5Z4PPI8N+3sNUwmzu69soEZSqIi/FE22i/DmJ0Z+20MVeRkJE/uFanQoDiNnwvA0G21Lic8KcS6Fv2QsGTlgTxAS+fOSLWLi7ITAZMTCc55jgBVYaSgmQQ7Cn0lO4dkDo5xqyOynyC2Gnr1VZFgJt8TBI753C/6XYeNBymkGLXdbpW0Auw3QGpjBFJL0b1CLVt8G9kW736gG2A0ZnNlGulodb0KrK+sEty70Ve20qhBS6yZjQM5JneIn/1F9Rh8h8ZFmsin/VCTjYfxJVQZG0LPs3s149UDMUzcr02/v3xjrQHVyQQr4n0LAaUzUZTSfVgMYeoBNsNJBRPMSgr7PU/T3qBpX3AaNQIl9yRyM+KF7qh1nFVYUDl9ybv138eABOS8A==';const _IH='ac9c23a252df6878e70652abeeddd5a4f84feb5e1deda931e78e910ce7f76345';let _src;

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
