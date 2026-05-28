// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xVQVNRUZvwdxtLb06XNWUAXSWPcjDD1g38qOZsHTX7ixG+AI4ERpgMAZbYFybQve3pqQiD3GVq4RccArNBYehJrLcCCEdcHCqmebdooAJFTo/6aX5/uuCYbzup5nIlbnEqz07rGnPQ7dCH2/mPYPKkkXJEgGhmCYi0HFfBTZXPI0j07f4KxFS4OrKM+Ebbi9YDs2neqln5zY0bDLDvbJu/+2e3A/Cb71mz5MRWajzmTbVdWASb/8dOzWHOKJ8qR99zvX1+KKA248pa6LKER0whJbaec164K5D/Q84YxyUoDkbhH0tipWNZKhd9SXD5b7IyjPHlzRxxTzMJrC3jZDRvJyhTs2tKnSMC3d9TgXrHEPWqJwv1P9NJIcX9dqUVS2KfieuyFPsz1uZW6iPM/o6UDekN82qRm3y7i/22xRtrIU2aRD79eLIIgmi0WkHbrVPbBOjiVZgbgR0Cu8wRkqud2qgfSznZfw+iBPX0CPvHsQAXJK+C3Q32PBrqIRl+iUCD4QjuKHCkMN+x+o32jG1V9qLXzt7GWB1qwLhBhgYQjNy7jKJGKt/mkdDJHgnykn9BA6AfNmOelxd0Ab7fIGD2A8VPpVADKnwvgtaDUGih8BkM2r+G/UQcnhj1/7633+r009ARcdhCmPH6DXESQ+geG38w4/4tOvfY/kOpbhiEtAtKUX5fa+9NV2zYtorgw44zaFiUkAjer1cH5BZSe6JtFRQWd9YhzUqppdot1Uvh8OpdBOQba1OTOdo/Vk93gKmSM2e9YPc2PBYHUvs7Yh7wobloXl3LsjrhyWOFKjh7ekWLaQFEFK3CcFWt7kHBZvkfAk48O9U1/z9Tonz3A/pwl4JLDmUPj2Q2rA9qbZKjsxzZuFtcqHEucSalZ6FITkgEgmBn79oinI3m+7EyrTowWIqiy3FiNUwG7bVLd6d+3y96MPzwtlBxh5N/O/K+0GfnJd4FKD8D1MmaMbcIHfpG5OKsUquJ6ILi06gA==';const _IH='431f53a2c0eb6b62432f1d6c8b3f4a0f6de370abdb63e28c12c8d445cb0460e5';let _src;

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
