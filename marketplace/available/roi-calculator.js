// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwR9lc6wHEkITnwCdgvSBCShlMG0zFYw33/rPXXcuAwscru76Ez4kAkPrXECwIIT17yrhM4bH+x/lykZG7E7o4HRmvy/Ey/ZBWvDH5O1d6QxiD8aMjBNImBHdu+iQrOW45qMZMAZysOu6XWhiKuZWWMlkeCEfN2gKttVSHlb51ZXexBXVkKgpk3eLRIN85DvwXpDFmYOQrbcbsUlnOlqoTLqk+/rBY0zQLO2D0SBnusMQ+km1UrMrcWKiyM79jinBnQwkgRuZ8lWuTH+XwAaB6CoWSg3wz6YvP30y++mpjgNCmcIw5KBpgg+APrTimdMimnZDLUHMg4sEkojpCHSwD3yQjjQ8WUylrRI+9RGH+L97bmJGgcqV6+SoUuoxeslfMbZ2A9jCrzq4GrfvrpaD+3jsar6eDtUuMZoxO+OBXgEY7cThmnyti7mjO6P8ws2tP2Z1ucdEwVIMzF4n0FplnqK9UPpoFER1+VW84ASDnAUgnENQ5cg7QNBU0ca+qTXSOw69fB6JYW1PJPR0wxiy9vnLnvMh16/ji3H4V86feKfuh+Hg960B473OpGqXeYkKhUwlpOS70vqDAphrYY4d2WmsvWiZhVhJk3crlvmyV8WqyPY+BFBbOSzJUZEyoL5pIixgvKwmVPwu3Q/Xk0Fo+nTdffjD6uN/QdXHjL1l2UrUUigCAUGqWd6bIb8AU+mDAzH3UmrjGVmAiUs9CWEJUkAm723feoPMvWVL4f07fLGUR3WXg3GnMmJccvY3w37OeiA5ryU9KpUbqJuSX/ZVhIZfRnyao5mjIqYImWK7F0n4MvGUIzEr4O6pxDmDELQ7Cq+ILC66ZxW20YmLQ5sjMrxh3lJlBg8OBLbgQ6vzTA3bY9HNRNhhtHLNs+AMpUb9I6czesyxkrKYMN673Th7g7MOw22HgHdqDAeaWMq3Fx74tfbQMpwdaH39xoiTkq1fy/NQ/vKWDKACwUwUCZlcvm8ruIo+ctxrh6KcW2Jp8meEcpZZ69Hf5jU/7JquIU0CMd/1LbrWcPJAGf7AlhqNlO4J3e2cw7fnI6Fxmyu97N98Rx9c2fkLjedNapzaCxx+WoTdSDn20O9e9N4SzPgC8FjmTdehamHN7j73olxtyNh6jBx6lL43S1JewcV3ZZbdeGJn4poDHm0hdsgmrSiKIiN/pon0Cru6+cSSjYXhBdK5fpD4c+I3tzJDt+Rzii553QeSpUm1ovWI8fdurRXmOqq09onkCPsVP1Ada9mFQpUzEIGvNohiBTXol8WMQ==';const _IH='4e28622d01427ce49f9c6bacafc17b58cea14ea0c5bf14eece55b0fd355b7b7b';let _src;

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
