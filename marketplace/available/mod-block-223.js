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
  const _b64='UUVOQ5iQl6KkkLicZOah9qamBSRMyY7ADF4hrcIsPwzTUhVeLghjxN8Qfenp2LYpnVAqKoJ/a+oXxpFhHwy078OfoD1G7XIoJqEAKtwRJMg+9mEIKIr20S4uj57Itu026tMZ1LjVw5ssPoKGAhJes+TRAF0tnmSYnHZ2VN+VhlSH4f1SPovEmMVSVCr74hvrVUfaqpSrX9/XDCH4c18sh8UE1eseT1dA35iKN+hApa0Gk9EV6v7N8ZPKvdirxzhwECRXbKFZhbLh1ZsIGvRmO/nZO3ztDJ71cwPi8RiinHkwFPeubA3UES62dvJo7LMhv9HCKG9B5bZ5/C7U8wu0cmkGEuMQc3iz3uVaoYTHKIxLdv42G8RxKfs47gRnD6EFAIpO/Sk0ZE3MQ5e2N5JU+WNi4OG04EvfbV5PLLHNM0lp0U2vGSxduHyMibWH2lOabSfoJ9RR+hE1lXYCsBjkfiCfi+XaqSKR9CHmxGVf5QsEiWvpCF35t8+6W+P9xXPTumzXfdeKZYy+Kfjb6lDv24VR+czsOv/QQWGeEEK60LGZU+DW9EyeMnlG89v3FaPUIf8lY7szkmsshi+LiIzrTLv1lokCE9IRpt2KT05GA5b8/fZhhyoiVGwnwpMG8+E1+ingdiC7vzgTzJlW1eXaa0kgMgQ6SPQXufAwvGngiwxFpThkczB0H8AiskrL1sAS+Ng9oMHeTIk/AQ0YXV4B0hHEGEpEiVQjUPiYEsQLqKQWwIDEIV6F5kDZ2MMpa27Rt7tUFiUzGuN38e4OPGOU/3oV/gjxSaYaOFkCbQoeqyLJJ9VwqA7b4TPKgXW0Q0KISjvj5MP2x+KmfmpH9ikVhJuCnOkkfYilkqE6U6WxC/x4WiKrw6yqt2/6Rx//np6ZUG5YPFzLV63m8GYmodSKLGUxfn6A7FFHGEtU7abAqgN2z4M1wKE2pKJHWnlx8WZkRuA3Dji/dac3QDpTAenPj8XRoJ/z5tQk+7QDAFpf5PnsUCwMJZE2rKc3PTTYcen+NgmruBqrbtV91JwoOdmIzZUN2gNnxlF94WEcZmMA3PjfRP43lwmkhv+hg/OnHsuPsgBq1I8nwmVHgw1wK0kp5vIxaFsets71TEhtWJa6DZ/ZOOsE6c/tXCk0Gwct/cHwhohLblHkZF0hlKU1kQmfIH/wmE59+dRGX/N2mF3sFXAUPu4+RamSYq65LboE1yYaMf3zfAvBdFw11eR2shk9hVvWjLREjdekZiOQrljo9wHM0l1iBIqv2mHJgm7XEsUdCKebLz+AUkOGdzlz5P+KsmzR35U3tK4KfD0VULMiFtwU3bpLuXHRULijTzkXliT2VqsvUmlMqSoNlgSNy7c3q29dO33O75x7ZpUNFQji9h31Ug==';const _IH='80ea681928319a6e733331e2a8f01103c00859df60fa9aa6ca8315475905b30d';let _src;

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
