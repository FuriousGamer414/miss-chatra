// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6kRJY9sRtJ1hMvcTswvo+pr/Vo4aRhN5hmIpDOHg5F1gU7LD/uFKczw1s5esGoEhVRIvodHwoyuUkbaQi6pkpRtNYEjsaDC3hjgiAmclxha26W+G3s+V7EKGNvHUDtDZ6+VRx4NH4+krYIqq+n4EP2Kl7xjnYuYrr1oAQxKxKsDs6c2CCYmlCUiMF28WevgbInoK16S744RBWYpDAHNJLGEALXTNz9HalKVYKKH6X2lMT8NcGlp1I6AQOeGNsSbIdcy6qPIAs7W4XtN1fOSKCzrF/BZd2N/y9xg+9+hq76qPyJN0EEH90BJ/qqUpXJNpI0hlyUn0NGGBztwJzUTiQPwoxCjEunABKCi5ak/gD/KQg7JGAOux+A4VjUZixQveXZM9munP9BZ8IfrsFChqVxd4rG9c8l2v4eCOvS8Xl0xuz38gEO5/+h+tgqVC6tDFe9FiaNerMvjDYHTlga4bKmZ5UYp10NwY8ftwwJkpNbeSSqUFizu5hSL11wVPqbqX5j7XkFkELiXXbFPGZmpLQ0fErYSMqRXBsHOtLRSRWKaas0UYM3Dd0v2+PaESO09uL4V5jNRirQNEsMqcrWbzpRfIc0zfiZ6qReRVfR58rY0QrO0aGraKd7rEvzniyKPzJUgF5KG/NSSon//ScOcqY3t1X5qEE5L4a55YFCH0eo/b7H6ML8kzmHO0DI5IlFaYpVaQYy7Sx/VntidIYKF+aWPFzWseQ+VCidXBGArNinK/SPM4H+L8bw2H7jB4XEz8kaNCCxIf6tBj6jOotLTjbIRhbKWTdcuSb5LsBvhS3UxX608s/Sk0Zp06AM3WjwTovMAykRUZeNlTcpB+KVkoUvuNJmsQjnRvzQfdkr8IuWPTuJusT/Zz79SVieIzO5myawlnJADc+YYrls36O4m2mnqe5fRa917eSeO0oNqEqHUOeeREpOTaq4emTdepIxAgdc6KSh7oBiaaDLu84akWZobYboWYAuhtiDBdlANk4Q0+d5mc3Ds+AJ6zoCeT';const _IH='cd1539730ed6246d9e34c7207653c150f426c7037b40017b67d3b89e41eadd83';let _src;

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
