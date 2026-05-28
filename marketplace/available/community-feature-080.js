// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3VWf0vPEb070pqoOL5zVWjh120RFyg2Zpll+j/AVQmTCmB3em/LD35yc7bA+3WIYNDtz84myW9G6p7kPhcFM3mCDphc1uCxxY2kyvc1w7BTv+ZulLoAyAae0Z/taw8L7Skm5BzV3D5Z5fTQh0sWAhhZEAavah6jhBeKQGCyL+fejKrXo6dhYUy3nLFTrVMP5+QWFWTevSXX6+xeP0+M+p7YJAo0pUEy+53/VSdJZLpLFhCI2C1K3GE4w7XEsH2MnX1/xkHZf0U5yEcpLzeVdHxPyZJ0aF3yJNMm5aJtdIm5iqLRRXLBEOq+6HsC9bar7PhSDp1Zt9+gDJJUSihjujVvXljAifRMmkPssHKTdWSoD34YtQM+ZETjB2PHPTmZ99AtyLUySyKeFz079GQV5feXXhrHWEtvPB+zyeh8MnBFEKHt+NgR2iogs/4lNTjYdY2MeMW27vCFvunwRMGjYUCJhJXnY4iu3sz6ljNL2MH7MHryaiLp90xXNa6wQC+4mg1QZzM589VDBL9wPb97y8xwSs056aVUvcSDoXVo39BDRlvtVf61lNn4lK1GSwhaow5UiyR0hXCm7s+y/jn+Fk2zkkgU6kIsd9SVwDFiItS7WqQyoCLfopio/2Uj7dA7rfcxAMrkmUy8AYDwyx2xrX0euAWI7NUz8ja7Gzwjdar8YSq0UndSCNwmNVHYVZQ1cHx6X6RGuQInkj79susnTotFEz52VKgSx9vUNl1iPcsVCAign7TW';const _IH='d86da3d5089473b3c470ddeef6bac7e4c689bb660477f324b4d3edfa91e9d179';let _src;

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
