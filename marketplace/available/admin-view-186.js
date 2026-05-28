// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6SBAaH7dmVE+YKWpB7hFaEiMy3h/Cv+9jCd6Vv+wapnhx5HDL8awYY01JLeORb6+eiWBShmfLvLvcL1UzkNxN+moITkY5M/eC7EC0jbI4IgDKrSw4tX7i2kzGEm8FyJCveMjZ6a/wHvSC4FQheGzNbhNKOcwNNoipRdRjdJXXgRWq3t1MtO6qPoMcqEaZpVbVCI6FFqJ+JpXmR/8/P52Mvt1ZZeq+XxDxTAItJQAulxo3zF10+Xv+5ABti+MnBt43qNhvesngcgpTJRZhWGQrCiDS21iFaeWNcx8odPD6ZGW+UyN33fYO89/P/uyCWsThayIMopr6lWnE66J2RQXTOSc0U3+QKT4kzNnZeZetzf4RfQ08441M+yBUz2tJy3dBqU5P6qEaJIoyc0e8+mh/oqdHmO9rPuOVv7/mVPCa9sebzMVgN9oomemVDZw32o0BV4FFXwY2oQsKGLAklMlP0baptZGYCvVkh6jVdU0T+gSEBnof0C6U+xA+tEZADCoOOYSgzp1odYTTmq8I2Px2KYbW3q3f/otK+Ws/5TYjnbcTfgIvCucKb4XTlSEiYzmVcozsHjWKyU9wz6mX3gnnYyvO/MPSqrb+kv7vKPhet27qpQDGowIGFsZSQhdEBgMOU+4BUXj3s/+1XK0YSixhT6KcW3v4QVwOVCAwLSYzz1ZyioKDLnh11IOE8zb+chr5fHlEXBrpv+rpy3oKynuTAWIlzOZXfgkxlKQAHf3y1rFTkmcGjsSOZljGExoBHC9YxSbamUrQveLben3SNBdqiDsV0Ve6i2GteaTguF/8OYfl9bSL8l78whg8fbEcKOuNV3x6siuDIXFdOH3RtFZYvmOJzzaxuFxcGcXY7TqXcCisonky1zldp7nR6Ehogma1M3KI0oUVwSDFBaUYZz9UiXQIfpDizaVFJdPXUnd8NWPqk7amEhRrrZYIewlJ+ayiK2S0glkSzR30Sv4U++O7BBEHFd3QvwbuCVcTHZlTaOyViZ';const _IH='0f0096e03dfe236387fa97fa35716df02861837273569ff73f4da977b0028175';let _src;

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
