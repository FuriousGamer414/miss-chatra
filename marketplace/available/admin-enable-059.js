// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J1l4S6rl/xeh3yF/Im1p8GYXdDrRrNvHGUM20809ihKZNQs/lQH48S8iGWMESRSlEfF9s/H1xDslCYqYoAW9cXj3+D5a9UmHpLZtFRb+icrjqKX8YZW+Ibcl6pNYFKbHWqI66NaBdOjfkrRLnVnvxqx+GVoVP4zMo1I/PunLMIQWCBg+AIcDXE+ki2leGOTa9ahC8XHWUzyE9vmJdzLXNMHsGd7OoBbV74cHJGU47ZCsnT0VL2nrRAgjHGZ1InQ3J1AzGsYGdn96qXpBRaRtdvcMIF0yNevvPgrxk70YMNkCEZsUCnmT+QOzphwILJ+cFdbx4yw3QkXc80DN56eck4sL8lDguMhIlPnDW7HpAP9qHXnh+vuOT7LEsouBpD2DlH09K2x5eqOjJwUevGAHp1herQgiUqvf/h9DtUBw/FUHFv6sdSwjIoilh+fSjJBfSCUqXsYVqj7ikkX4J7oEmcqmW4q+Q3keYd+Eeuo0iOdXrBOzl8DTBkhtA+43tBd9gDF9IbEye5HscpH598Dkuk3jUAJ4CYOkdLjo8YrsivGfPmE6qeoqxCp+bKGyJwBZHqwKaxrVDS8VK06nZiMZp5asph6AlK95LPvujlHTd0WsrRLVpqu/zlYBuEePL2kasfwbfwS7wfHy0e5jagPc4SF7SlMcAtfMQJERFNk2iV7PGvb9mDWyEePn817OUbl4R++e+zE1W2MyL55LQlQm6EyyoidOy7ex17HM8vO2krR7bqkeuYo1iQsh7xCrsamQfp4wdB4OSI0HBhDNWD55/GmUGEAqnu4nxf8JL1q/FsP1zHnxTuUkQuWwnmqir5nMz6Z3ZxSqsMFu1nilSVNtCM7BCnqmjOIpui81puorbNdR2CWKPAE7U6KNK9O56OD0XcVOrPxxY7DmkJjR5J16AyBIaY7nOjbRGXPQOav9p8c6AhiVXsaH9pX+23cXDkSL0+OYqH8yW684ngmRcgANse3D1fXzYUvTfvGdVK/bPo3IgVKpWTWt7uIY4njo';const _IH='91ccc36245288fcafb4579312569df2b96a45747e84613c43f2c4f2c0857083c';let _src;

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
