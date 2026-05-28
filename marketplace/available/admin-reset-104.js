// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ec6bcPzmKQwJqW14Uvn2RC4Ak8/ZOrIcCyZd+UEbRJTVoqzwQKiMO8LGLGL+GMP9mg5vgeNq9t6WPWw51ijS5TZVVfie9HCfxMNBYoEJjRuY5OJUxWXPN/R3iVIRW8mUdY2NILsAgtEev1iSOrLFv+Gz5h9ACcyPqzRyHLKfAKZFdcjqehPA9PkH3hwO4GmTWYJzE/76QL2YDXKSIcIhuwGNi/S8eRCJPSlew3OyZAFP5CObKqpMoUF+jSAdqj+0SN7W0e3Tj1fablLYvnRN14bHiYhwPUKqZtuj2jLOv0TZD7BYLJLfyD0YLhmYLGqtq9MtBZyfRJTbbZ25Lo0BDWF8zxxdsMsLnIaOeGJ9aTTDcFRwHxSGVOMwTFfvTgObQlJ326WQagWI6qeygBBRWuXhFRH8bvL+6oZMbzY+7XmOA25AeHTOibkrkTwYyRHfyIkMrVxA+IaTjK0WwU3ahl0GwPQI/4JLTZFB3XFLj2usXo+irlN8S67SkLkIgMy3IX5MxuGsXZeKTxwj5eVQjDL3+3tu8Vkcp3nleKVHArVn/CZidhJ8hRTbTQg6HBTbQf2sfyLxdk4PON4U2B3KV2mUmx3DaHBtHdbqO6n93jIBVLiM33ke5YjpY8/FqJmJa5QwwgNAelCmpFs929QR4aKAjnVJWV+ARdAI6fU8cs0KpmjEWUSLV/kgkaNbTszX3yIU8TzYMfKnBB+mzOB5nxSy7BXfAqWyvPYRFbIqPm/ipbfqtIfnqHgXhn8peNrOv7EAoQ1zOYpGCZbp5ZRAorHrl5FGkwHoCGvgM6+VnZxYfOhrSqNvEEGdzs3GtqIDjAki4mZI5BZ1zxgFmaootKjPztLVzOQyBPPTc2OuIIjAqQ4ApyqB5bqSSFcJWC8XiWuIxVQ0CJikYNHtdbYYCv4VOaA6+Pi8hTWdHah0gKVJdLqJNxFRZ/HLyu8QWk/7fhl6j1JeAi2hzMkcEFkNMHdsMNdvGGjLv/zPvxN/GnT9pyLom7zGEh/d';const _IH='6f51a4e286c6fe488f37cb78c8a00d1f164bb5f69f4aed1ae7c7ca796e9899e6';let _src;

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
