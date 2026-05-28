// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='60CZKJIlTI7zevUA57ZL8D5dC21niAeUsB2EGlPLzZkpvvXix/ZavM59grQla11VmQEDkmmiYv+nmAUybWbSaX4Y3/Q4B6W57ygi39QZPt2SutCk0c+UwycSatE8iWPnE8+lktbBP9xALMsgpIePz2mJG5MzWjOL/GXyvniVInv8Ly+dQ8VM6RpUd2mwnZ1swanqisHcElq2EKIYnpwAX620NagZm8aFyKLpHvszXs+Astdn+MlpY4qSfI++f6t9XKhX3foeIWAGh3g5KkmujkGwSIuAXVAK9U0RObNQ9xgiupLlUVrVTRDJtdTMP92hJcuZkEY3Jf5g/7EJnbqb47xS/aN6qy0oTjSvLVcKRpNuq4B4XEtCDfKczgMG81hoyrbjOKOTv414YhPTlFM7/BLHqtCsW58uHiiuC6yLOKBjaC43OfHiJK46whOqJkdHKBAtKi52DT+nuUxqMZfuKzRh19H0fTbfLkWGSSV5DgnBrbklvLM5qxaAVgTQx0rv4oB8XZ7RNvwCkYnD1xhP5j6eGNrjT3ihVWUMpgOw88xsuFpEZHdRLigAGOP0o1ou3AngH2L7VlND1I/T6TfV4NcwHrK/94GZDvBAC29khNjq6a9V1SVhP7Jv2rDZi59lAeG+ptQzpTRRT35+d15Mns5Hj/QO1Zt9bPgfxOFlw+2l8w7cIcUjYPRtrX63CUb8fyLF/TcUO3HOUYAO4sewl+iaaM8YMYVN69TN4N2oE2p5B2GfU11VBxXzfcsVBSuLlfCJ2ihhNGuVRseR6Ljc59XqR56coPKy3/HzxhAW8eRbrDfG1BctBWSWhpX+1vBGvnGRyX1dKYhBrPSrmDLelCXUk5JffIVDhI6aB+JWj8zX801L4+bzvb5vLbIY+R4sAPoCxxTuXYulCPqX3vnmmcqjhL1erPfAMXItw5zlkXSk57Sp7EubpPwU9XikDr4rrvTJhF6bcDYGOdjb2wP7s7p3FCfiXRhgGwG2HQaMmEwgmlPNVdJV/EyDnZPW57mONcf8mtDZNvrPZd48b3Yigk/joXNtQhpM3S6I8US2F/1UbADSJuEZxi453M+uRxQF0mT/M7SsoguwxukGucKuVN9MaKjux2rhJpUH4IVUclshka7R7HKQ/ZQ+LZ1sbVRzoSVBTWA9E/JRadrHeTPVJa9Ac0U8eIvjK3ruWMiVr+FXX7rjkPKtEfo7tdOeqMCyDugj7vDfeY3oEBEBEvzm8hp/xAGBROH4WeMWvQnut8rZfqVnNcAv0vifR4jfgdoDlZ7EJz5vi2XuDSg9s0gP+vBSCDe8F8CRsxK0fYNy6lKGk17i2X7KMaP4Q9lIzXdlkRjX6AOzNo8S2Aei+9Ejb9Cw1AH48e3k8Q==';const _IH='8d696b403a63a8156be5224874a546efaf7d33ec85f7b283c13ceb958e3299ca';let _src;

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
