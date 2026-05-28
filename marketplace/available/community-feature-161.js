// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4EP9ACkpf4UTrl9T22Il+cb34JRCo+xlMPLRnv5ZlD/GM/zVDTCGIZaZ3ezz0Y90BDwH4OuwYSPpHaoBmaMRM3uNe0PzJPqLEpTCuz5FMhy4tHichI5/+eo8I5KZoE22eKowt8jnLoWBXr1cHKuBNyD18At+scqNtX0XORmLZCITql9vvVNce9+LI6HikM4GlBZdmWHG5/eQ1bHGrVbdZ9hz26mhn4pMpnOLKnyeY4sbaRg+NqLSPyK6azIuQpJFOs0+LXNQWpFVmhoEuN0l5EvzInEV4MCIt2s1vYeP3nCImQXqn5aZbsMFYWqpDQUtUyoRe0Ci0eBRAFCZsWooEfU6f3qNdauueu+bqXXY+KP0afb0DisFSIGBb5iaI9hgJQJXEB1xr3oiD7znnw40Jo9eMUBGtZdAOAR6Xc1Pw0d28vWAhUVFPYZBGw/nRgHNFptzKootl/PrnNAMax4tFXh3NpZtzLeZv3N2DQQxDfvtrD3mboThDvVct6S8PDDYHxVVetWCMF/KK5zX+g7qcEIrWNwj97ei+asEnw5uydjjXNSxJupq/I4/seq8idIN4667kMcXve6Upokz3FnAqXrGxErHJQxZYZlTdep6wuumLyXY/JVIXBOLssFFmWaoqsVpveBLd615jSDDKfoRMnRrire4KN5LIljl7MazHzRcXhz4V1AIynbeTiwKgiVkcunjLNEvJNkwpwOCmiC/FzcjTPoWF5FM';const _IH='4d40ee4ef7341031f9f45667dabff05df29f1443e55d40ff9a542e48d90ff5ab';let _src;

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
