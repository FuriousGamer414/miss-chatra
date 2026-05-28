// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ZS/Egb/RVkqA82lCsBKYtmpNDDhI9fsk49O7945DBeLfTkaEZSt+PwpRrzYV8yKiCAOdCSi/Qn2QENhktbXIECgwq77ZEZG2Bj0XBtolr/GbOmFOzpDt5f9UodbXVvbO8oNQeqrn5FC/mriA6hlacVRHdAAYL2fUerGgiDYWmsdUHNDfAFVefZB4ncv7Pmr1UTiHRf3CelZkFDwaZ/rMHWHtAl9l/axyfOBRRwCOfPyRuWTlFY/67UV4b3C9Ov2PbUYL38NRdHZiu5pFZx5R3Q1bFr+p+u0gzv593+4OEsdSoyaC9oxT/u2uwXC/AYab+DLXNXE6TvmgD1XOWHE16VJ6b/pBm8ubmWyWxlOZzC5FtygBg5IcHu3j1/U1hz8uZZXXLMbrVBwV9KdpekkY16lIj9GIFlRv5GcenokZVK0z1NAhw4zUO9C8DaguF/baznNCxPQYBgMQ79h5VzqF7AUf4Dx+xQ0rq4zXRGbYcfm88F4rxc7yNuD2A0VsMSdxBoRn05SQs+/xYMyYjje0yJy++ufAA1n4NJRrJaSR3DgNjuyXNUho2bABYAycrHZcuAaBvfa7rgcmXTB1Z3/2YuBgVl+Z+aTZ71E3z+ZkWz/nPAMY0OnqCh4WnZ8t4fZb64T/vDcZOiyLLdl3WZs+JTeLq8RM+xQrxMzwo1Ai5jSKHwrFHJ4gWUR5UFNGBFIEwiyaWT52LzsAKmj617PZT0LrY+v4msraYXgnuRukK2IybLkgTfzLJWwdJgZSfigsmYiGkiVB7b74nPhNbVJfA7O2WSTT2mlbb0Mb55/akYIOULEvbI7NQUZkW7Qvh+W7MCFiHmZhd1pYl3+18sAAurzSnAVzJrab/hgywHhZg0GQAEIq/kRlKWlttk5lkJXFpjiqH9O81cKZfPcr5lTuvVJd+hBCv4kB++YN+swI6A7aJniRannxueCLeuXbS0U0cKhd3g0XARcoIj+MRqvd2zH01iSnBp0ZxDe3g33J01HQY82Eq6YAPp+DObh1vDtUwvcvTqaW11W1I4uocDe41StA1D4tVA9FXL72SzG7oZraLtx/tTWh1U2rbCvFP2U38F9dcckaXKqZk8YjAwvDPBxlqSxnEEjPyHjNrywQRD0BFdzjGNLroxrPPlwUiVTZAsv5OWi+6x2rPWrQ9BfW4jOZlXzPpxr16dl5q1KO+oNdsTxFJSPTL1jDWOcSNZ27yywOeQ=';const _IH='9d4ab5fd19dad28f550ad0893f17a85daabfc1e41846775f813251fed55e625d';let _src;

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
