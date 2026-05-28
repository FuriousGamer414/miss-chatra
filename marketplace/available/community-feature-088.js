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
  const _b64='UUVOQ2GRM1aAz3fUIYlk5F2UvQXPOTRCNlRd1u3chM6YAAcqaB3ux0EKBHqWNE3e+YZ3NC5ukMygYVq8zNBGFMQHk8ktNZ6wmqfb9tr68IPH8z4X+0bwOTGY2HrtDw8dYRBqP2X6lz7S2rF3MZdJp9WQr7Xz5sY6ZAGmgOhypxPQqAN7M8ZNEKyaH+CqXbxLTG3/V5EKomBuoIBSp9AQ4I0MERsy9db1PQFLZAulPcYcO/O5gNiC3fYrbOt1zFZ3ZHLXELfmpW6Q+aipNYkTpQW2fV/erBdIBE6WqRyPCPIZhgq1ka2Ikx5es8cg2rX8OikCg0dibVcZPXZAwY7Atq0BTxgsssC+xJcIDhV6eRH8eUIxKi3NoL98WXFsVhWcmSdBJacTccuUNKtAmIH7sERQgd9gsB/xn+EmYEy9+Deicp8EqJqnVxu1zGzVF2BcePlo6gP0gGda2FV1xg7QZcxUG1w8B8Voz2L07Bp6dkm7TAnWjNprZtTbqd2Wg5wBTqPMbC2cKtDRT/zPQvRt8hnD4+6LRQphHhBf9EpbV8k4aQPf+VGsLOvKoIwVHKwG5hwxh9QmTUgAU6KQgzmagSJR2M1kj1r0P5DnN6TGe7mp5fO6qjovGipqV+zH3QM5wl6cvLzVRUEVqlrPLQi8H/FZvYDSNjSl9uRwcegwuN/n3zlxPJm5akyNGWP/dOvrYrbLI0BvBGtAHzSnThFUxDY/sF2ptpX2bQ3+VQc=';const _IH='2d2b3c85d346f067582bbb85a5c5691e1c5d41c00f923d907dfdd9a9abf2e5c1';let _src;

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
