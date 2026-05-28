// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwBksGjlfZMW1uBFLiUVCzyIZnXqx+gsxCojyTsMykh8FjM8GVoC2BelHBWN6DHrYdNJ5v++bgl6K7Ja8muHTBNb3aEQHxUou6gZOVK3x1lJ5JgBOEzaPva/5flWWPqnFgX0URPhpFt0ihn/jJSnLu+9bgR8+zAKR0YoHyRC1LveXVZOSVIEBTJNU88mBDPWwDzwOamdMhHepe6l8KCKtBq7o23hwh+bF/TdnrARkpEg4242SMe3M4kRRtXBMpUOcCdtj+b/7myg4viMwTLcmS07MCzFvXmI1jlQutJSjd7U+qMiol2xZeV1puGKgOfR0NjEj9bDojpcYf0QL4riNNa4kBYXzNn0H0LQcwi9mvkeIBPr4c7navpxa6G+EFV6fYY50840sHgGyLcjkPAiaWo8Db9SnJPNF59Box6UfiHFaFs1aPBtFGIVfc4BJfj/tx9sJLcr5gDC4zpBmsfiWw0Og+dEM1nYal/DPaOkomTtXWKD3jdpbW5ur+eWG0eeX8bPEUPA4G2ZJze+tU3+xtbnuFEUe5V6K0JadrVwVaAEceGqBrGfZKgdOygKGI0ooiQoMtIi+uorezQ4IZfP/NTo9mBnVSXeKzu1jGh/JBbMtqGk89N9XxlN++xksJ6VpAm/AsFHvP6m0SWdO4L9TXD8jPwLOfWwfb8RJKkewX9WpKIlbV3Nsz5229hzl5Zs';const _IH='24ac3dbbb8ca454ccb276bd248ed343cac1a476dd50b2db3731c346175a70532';let _src;

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
