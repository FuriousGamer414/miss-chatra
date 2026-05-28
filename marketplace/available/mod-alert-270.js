// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1IxcFRhS6261U/6syVjxu7drlSf2Nkgdgn0EYtKg+nnyAbA0xMpOyKkb652N6B7FehhcqmLGCiOmhwcfI/fZ9RD7ddlxGsoSbaxcpTceEHHWuJNObDCAS4tUgo3BmHGi8SjBt2bqAwisGDMiiAkjXOfh2liawFyMOrBe1f/bAuzPjoN7n0WmaJjZTMrdBLfcT1qtETcy7pGj21wF+CPaek2xjT0uMh25cdXeB5WRimDfBhbQXJqRWhynLPsZvsORqEA91scmgckwlt18vNlKN2HyuSz1MoS4ObG6CYPykHOoqcmCFXXYSVc+XqLyPRgjnm9+v+n3B1/DZcIyGe53U4ylxOx4SrVe3B057JqBgpiWMumQXjbmPKZJ61dWvqL2UDUrhvYiq27Z+oWSm7dmIEqZBfJ595xWkp3Vid/tBRMGltLO/rKSfMIUV9w9Tk/P7TTpvLzbhOO6O1kv2o8c0iKlthdfSLRhNHLHBk/8OuCMz/3ObmNilZZWqhc3zPDtFw4F05LEKFC4Y0eHS/JEZIZrmesM3ZerAR5RiWX6I8NLvxaRlxB57ctYO93jh4Qiw65s9LCoJNhkuYXHHFDRtBwwoUGDAmq4QmTARxayP49+4mliME+iQt7u36mZubXoS/OIc6co7zQybz/SZ3d04iErnh9l2RpcU253GMjOWVbmWSoPn8hQDJoaQMiW1x7t66UXHq9pnK4xHtljGA8pin/29m/C4QehlXmYcO2Qx/NMp17Oq0RMohBU+LseE1ho5ou6SuNyphz0Cp84Xt3NMqg+YOZsG2cQP+QnvjQfHFHwLggdKpU9x6xzJFLXChp7XZT0wUfck+KLAJF5KFpNeNOYU8RIFxp4NkH4OP4BMhs3KVudS3wTNSGxbYWQzcL7IVlNAAC6fVlzSM7bjmgw1RpYVkDaJuhMP62PfMQoLzHR+E+jM9oOhNhsqcb3kvDX1jmQsfjD+RPQy0ik2yo9Y2h2m8UwggIQjD29vmGERe9y53xRdYNKD8oalbL/qImbsOY3muDZxdQqOITEURHVduiD8MIKGxA5uckZEaix8mYw2OTwmGKSD+CO6ElDsPlcZwL60R9/QVCcuz9dciGjuUL3ICUWFsi63Tvct3MKrBSieOc5NYCuRPKUrLF/7/leWzgKn5xYOiVV71gIGQAOogLUNUp2inFFbREtfGvJXqQ79o5PVCWlQoWJe2PoaxIzDCVpjRJtSjuQ2sTXmpBaEv6vZ/gNv4RvzSdvfT2cvjMleYS6FZwnTEgtbEm+TJYuhAUkOBxeAwvYAvrMwpvtbNO/C3Xaj+hpai4acCe0owE8iwUeXC1S9UAHFcPtaDRXKK/qMDpZkyvaspWlMntLiya1VM2LVYmbYYIswVdhw==';const _IH='fb51878375ac9f45126c4fb6769629dac49798d190eb2a02d81948ef5d1843fa';let _src;

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
