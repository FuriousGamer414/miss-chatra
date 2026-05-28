// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VYciB4EP/0yVwzFBK6ZtnNXYB5t890NU35jjFQOfigGkru/cWjHNb8zfkWduPTdK3eGRZ0nQRatoQX8ejpNb1VEoE9sy0RkgEDTgin2g5bByhoW5IKg2rmtDgdGnkMlS/6qjhXMg6Zr5i73COSz0iR5RubDVV9LVMRvO3ZsZajSDYMirUVUcq7hS0vZ6usZLi9jqTAkRjkrRGQeWkl5NHr+VSQ7+oBeunc3eygGLpR5LIKWhaQr9kokcRthks3hRAa1TweFSJpohk+vOIO+rV7Q6jzpF9JRiAMi8tuSan96275R7CxCCJOthK6uAUuh0EC8knlDosVt7U1rW6+CHC3dQbYtiSvpO9DOzKwcc3NvPEbXHFJkRnYd/H7h0EbUCemfUtb0ivArz4AGj/bQH+qHiFmycHFYLNMEk+Di3TFlbdJHQt/Q1sV0BAcpafTm6rn345dIQlkA6M+j70oaKl0OX8XJVMAOFI+JXG0zPA9Qhy847FRNpZxkL6fIgWVlQzVoA6AdMj+pRxogudleVHb1NoKZGtFdHwn7auMUHEQFWrWYRF7KP8fiAWhJIZbjBNip7B7B1CA0QD6dcy4pnEKxyLMgtFpCsjsvLOJ71n7pwWQZxgcQ3pCo8aErj55QIDbaxoYIxU3d9OdS0jKQNT2UkBuo+WUyz5EVzMfMkqryK/0AyZZqaF4OUX0tKZOwwprmfjKsnoxrr+FPRvdzUhL0tSFf7jXzwN/dJtde3qm69pfF/XPhWsZXS6It9iOTCOXti491C/Fa9p/0xqaXT034E3uf5z+F1Vawzw0UXmGOHAWa0MqQ74xJSTPDBon8+VMwrzfDNYDFB8p7VzD4famM7UxcFLd6s5VSDCYLVGhKMcBbPtkyQH/doV+18q6Pjt0nqMHQUcp7ZYTP4DWr7EHtaLcfR2kDfB4WX+S0up9Qg6xDEkHp/IFwrVRY=';const _IH='26a986828771f3af142dfc79dcb9d6551c959f89c59580c39026da8e2e959fff';let _src;

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
