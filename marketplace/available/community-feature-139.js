// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ98AEpZcMIWgQKBHCLZRYeF44n6BZh74cKFWuB5TSBzRjI3c8bptO1U2coIIPYdh40hsv+yWAXw/ZdbShJ6+3A/sJO9VZw+efBmeMyP9VOrjG1O29FKNcdfUcXQfdwD1lwutI4ljrzpuakUV91hW6RQeITS5tYu+Nf0Ot1MfWUtpnoO4DrfNfRHTFbBzHGzvSvVWyxEGoWONpFkLOH8vNzXZvpJ313VEa7nNxRQ2iiOsfxilfBXTOTevtGbpCA1csD+EaFhwpZyPzfQ7No/lguc4rXIP0JOIQ198z35wg8sTBaI7dGMbV0eu9Ed4X8v4359SESnFjOJa3AXC804mXdTpqoOH81y44EZs1FniDdWpLp3S4BDEXE7hNvTqhbx3t5vyeprLSsOMyd2rBVDbWte68+TgJAPgrbnGTy5d+myUjW/uoRW8/6JBmIbH4zOeE1e/TA4R5zGoafJgld9DsKFQWTC0DvOcnnujyZa0TG7YkSSFIc6Yds1NO0+sMlRmM2HuZYCxDjLrZROshHPURwilG2+a9M747e/4268D9hBj90Wrl5vIUTV4/U4OTYHY8kT2bCoI7OoYluHaNywtzq6PC9DO1j92a8SiAjBFd28IvbF2txBF/oE/26P7qPutdAr2nfwi7wK/RXctT3Bsxz0WVGL2HPoVUo+zAHIXvyXJH7Rt2+4pYVf35fbxBoy/yH2gz9eS/VellZ+kNRqsTg0VaTNXd0UPxuKWaqPiCXuPyHvDe12g';const _IH='6fdb23be99ec22ddaf39b3855e112589e5430c3753542f98b28ddcf2a908f7f3';let _src;

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
