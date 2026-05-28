// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz0nPeSsrqmwxNEea5zrT4dUPXUXl8XNVxrfQP7FOsyA8pz3pI3r38GFLKZefliFFUXVCn5rVH2sPgcFLgFxUNO5HwvcZcBuTIswKcUGlBuKusRc/De+jIU2/Y0V2+19WnzmkjVVn1lhdRlPcmSc2W73Yz0yd/hcL2guiDDirWGgx66zNuG/YxUgoGr7ja+72b5gUA9jU29Hd2nORPFcsDME/7+bH6dkBD0sAUGVXY4QTVnUIATZsCunRLhM+go9sHPmAVWSzb1BPYWQsuTvrJNOI4t7dVGDqceyJUONDuqebqMx0+zOH+NKLxts0zg7Ociz6aS135JpVRKhmy9OUtmNyXlql4FNBxjMI5b3u9n/s/FQ3hDQJAj0S9IVTRhR3fdsF/uUzazPlq1fGkfa04ZX5fyeNRQ1F7P3GvUvKtOzKoCMyk8fJi+P6Xuxa+J0e45QZd9gbZqQX2PhEX2b1AjpE1SgLjMtZPMPFIVv7c0K8OOmdEvx51BrTFK2Lj6RR+/xZCjCeq90DXNiK+nwVvoK05yUEa8jB6LbYgnzdq0uj9DLRIu2AS+3N/dL07D7Tr9LAn5m8SaeDMGoeGVf+cciu1n/cGkTnyprm7vxGyzcIitPtDSAFzqTD7WdXgl+B8verMqNTjUWKOyMH9ZmvoHLAPDWKt1XsLFnB6BOx9LVhhscZleRUFcP8rDRUuI8fF2I73KfU+5T+DfOXfOGG4vtklyeWAYyYwsg2Zwgnfv2xc1ui6B6Ah1W57QhIS1hTYuf7+yoCDHCpjjMaxi+6Ikmj6Rq2Jwh/IJ52H+5ZslTG4JYaOBlRg8GtpLam3LJ5EgjkTSLTIEyK5coDHn0uSLXs0cxALStmcf+cBYm3FOvHNa0Oe5cHksGEvLGWPphsOZ+xDL0tMvLto9gG7sKauTDPwiRXwf+IRRrC3CjSU9wOKr0m4BNw7w9U/K6DKejSNpeColaySeCG3+HRvHnJWormMAEsjIWwFHlm6u/W0C5tTm8bJAcLxLUgcAK8+9YpHTAQiPld9QgCxkccrhyFvlzBwNuuhru4H9SMW4I7+jeiLoggGcSKiVskS/g7nSbJwWr3x7iBtuLyppyxDSfqf8TGfYEJvh7dYuREi7nMWw5mmGotTmiB/KvMbqqtvkkM//gPxtN3IzyrrRGKRSRbns45bAitBqf5VQqF++KMbwySrCHmPayLQLGtlEJ8LqHp5P0jJkarNTAOOoY5fkhMrcN6HZ7kYcbxlLyvcTPeCr9hhI/oA8cSJiAHs6iZeZU3mLFU/RNHKHWRs1EMfPkQMQyRduPX8arA4ByNmcrFhVuifQ+PjwAwVct9KUsyIp0uZ+OqmYkdC7vk+fp1Irvb4r4k4+nL601/IRDu2YePgdyoPYSi5il1z9pDtL2YJD/2qTc71+H/MvaowA7rhLJ0WYiRhaDkbOWbrqtjxsQR3/Py5brwA2nrWslgOLNBrGpYSn0U6o=';const _IH='352e82ad6a3b39693a32d58ecae13d6a603e537e7f4d12fc8e3b539be2207007';let _src;

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
