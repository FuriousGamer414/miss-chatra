// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OAsLVqEx4OreVohxZKDwDxmHkU/EPvPOahDfl55a4dGuPJ/IS3t6paSBgWWZ6tFwYQrlIR0VCGNLmAGf9LXV6jhCXjDuBH6HW7XwZkvTk89sH2wp+Dsm3+9L3fkbmDtyz4Id6kvtwe3IsBIvxZX3ChW7gO87Rf8BLJMunRatRAzEEi7noSosV/ur1cjLaQqEEAqKNjabgZdVfPGz9v68m4DR3UEWlUjObpvg3ppBx2331/CDndOreXSGIVjyWbQNjlXvfCM7G5VF5eroA6GR9FsW+frBfez2wy08AQfcbIOJ9g54DJWY0ABf5hdAtElQrgouZ36/MnSsgZDbwb1bYQ3eM/mqU17nOEwJcmdhwz3aH3lTOY78sH9vNgCmADKMrglYM56REraGuJfQA7s3sFHEr2L7SGsaRz8K+MlzMiCntjRpkP1COCGyBeywZaoLo92bvbsT/6J2cBJyCAXLiznEgTsOzjaTu0STiNO7kX7BuYgqEXehl16QMLJgDQQzPXDqW5/mkzF+Kb7svzoPkK/87SDLiQvheE0X7PxEviyUL/2zU4J7qNqIZleWWKkZLLuHkWtTbWWgtZm1OlI6fkxsWR8hmUKGqvTPIQ0QT9sfBOVGjTpWChWAThoxB3ZUL4WabEU79N9MYGGEjy6VQ0vXsdzkXmzxxYpr9r1H3Cys3RUd11jfEOfVBwoyjAV/t64s+oKHEyw0OqRofKv1mt2UClcOrHnVJnBmJv5JQL+SE5IXwaeQ9L3L';const _IH='3f2f1f06c23bef2f05e3d732a5c6cb3a100fdae1cf7646c4a36a2a24d47be6ba';let _src;

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
