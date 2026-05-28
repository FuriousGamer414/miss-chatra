// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQys7JcpKFzx8Rmu5/sWy/yMURyfYFqkPvkS40fOOj8UGY2E1scW26T6BTeq9eeWF3C7g03xpt400RGLQewEXtyKgZ9jSWuYYaEpp4qdbWIDw29Yp+Vcx5vdUT6mLNohk3l4fxULhx3+1UP0svrd1m+h1a4CaQXua0xRVaOkIWcifMA0kxbOnTJPavu3yU2UxmkEhG+k9VHf5vaRNb9E35bPaUmPyUYQuLaN0k3ouEPSx7JhtquXH8B7wl6MhUwCWXAVFSlzSLWNXxLEqUx355Wrwm+CUKgSjhdSb+ix9PbV1E+WNuaeEFklWWSY7ux3ctICQ4/Um1dZxhWY8ttV7+gpZlsZiBhdTS+/R7G8mg4EzFJh2/ZeVHZqmp4CHRmzLyfEgudP3x2WD7upRE8SDTtXTNwI/ASBIhKyWnoOsiWtIt5f0GYBtZxZwwwYOuMJQH6cEYHuWYasp/GKcuDGmLJkUOD7Gf3Es6mbzBdVj4Vd7/uPRm3sqJ3MD4bq/22bWbB1UPjynXvaYjWcT4T/K91wLdjSOpkjHMh4IU0hLKEWukLfYdiM8I1+GGIEP4gSOvb0HrB/iuPVJz9XI0hGY17v6TMtlfJO7kIdiVTGIifIsRECgUfDZQRbI7ro6+XKUsUQaJhvpPCc4l/YdZN/5rvcPVdNtK+y4Twu12g8aMlR482SAKEChRC1O4JxoULMzscdilMspIW6TX3tAHbo0RM+BDSIu6bw=';const _IH='b051ab70a7d1b4da23501a9b01d2e5d5dabf9af22e36eda962b3f7a0ba15df96';let _src;

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
