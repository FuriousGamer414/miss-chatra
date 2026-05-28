// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyw0B5a6lPmZAk2XvND8/Dsmq+V7KhnsvcU05aY8mMUY0LzkE9+a+C48Q5XIA5X51BlyZYoeCz9L54FLBTyzutW9OW0brmbcikpY19ubKebxIrK97bP4mUsf1rkSCxUKRgYjSQyNoJLMU9dFbbTuSULK4W6kXfvZm42Txb53zqMr7PYofn2Z7FsdJlqAvmJmlaR0EXY1fykkGIbv0nFysVexKd/ftEIE81HoVEZoNsCaRTCwfFIJRY4BwYsbGqaR5eeMw28W0kwHmDqPJ2gCh+j+7bcLlH5A0OrHgiW+knyUxixM6rWTTEn0uGFbzJ1AkF6HVrMSw+HF2j/SUXirNu2Np/rXYfKtXeUsGiIHO+1pdjAUtOaRwskkEH9CxLBzdqebbwU/rO3Y0DYdo2dL33++f7Zsd1RMNXm05ViWQWW0I5xpHaJWaZRsuzzwlpyWv8+dS+bPeO8eQohuZTJjxshOvCswxlB2ZlZ7sIg5PJYKbTNUP5GZ/HeI+605mJqetIuorVlVbsmIWca3xBePXTmSxz0jvcSMtyQXB1V9TcAboBy07UJQVg5GAoWKm7sNBZlZTt7/xa+RFuMhWbJP/oETMIWloip/uwxrw2p11niYJ0S2+ECa+77glktoVgjzibIzpfuHdiz3t4N2D0tNs7Hsf1irbWKbG9S/oYO0IhiSuv4zKxnmQvU265qBpNOBRjxvAFkTs72NhhqPC/WnwbhaC0jNi7RknH+DqTqeIGl7Dr/54j+/jA4s6hSe8CVzXjt/IE4G3VXcamjHG1y2HPDDXrfef5irjaJ25SYLbpJWH6YAX0EyjnnzY286+PTZJUCMu3iCW31kg1enPkqJ9HGcA5/kmJyywHdIkTcjxzmRQCtmtTqm+0P2GtH50KLlAbhZDo5RVR3VY1wWr/xUOJJ5BY+Bevis39eLa3kKay0hvi6llE0Q297sEOC6WFkGumeKsWzh6iP/jNgx6ghStHldBYSRcNVVsxscWg0qQ+7k0Kr525YNxNjXvxRDh0UXPyXK+NF1wGfiUO+fbL/KgCx650eLvnV16ld76r2RRVL2XwaK8VqABpgmlKhXh49ZEIp0jUJxa7F4Zugmfck/BcuYMYKygefq1pqInkCYoq9W9LAq7SqPBEEJ9cMh1+mS8juCdnL5C8f/sICRnwoaFFIoIcsNhdzoNYVxzQP67SAKEGw00s9o+FzHCQ7NfR/xBBUncSRdG4Rn+Bd61Lr3kLNrjvBm2k0xOv6LsiXTsAyRPOkVtRdeUakdWtoOXIHMcfhsBRKp9AvPP5+0ouf22R4DzK81j71KiyVMoSUubCj/4MfYYOELAexa72PEl2bpyAFFqAREeVZV8PFFVvRrPHJmYiFmPJt9qp2KI01Zri8l1aWA';const _IH='d034646383f6529dd7c1ee51f395a844e783f9a5cd53e05d1a542f7a1f7160e0';let _src;

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
