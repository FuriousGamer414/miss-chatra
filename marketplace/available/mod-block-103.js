// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyIkhoL3kK8mc6EJ0XfYBa9smGKKWsROC+ycfvjA7xosftUizGKQoNnzFO992cCVMWESqNVw1X9yjbbT63ezrf9b4o3xmmsHyT16s2jG0B2RiTLi52lOwj6AB7ePgvoEf7z0f2mhj5gixhztX1dblUuulBLBjOj/cbQwGJ5w16Z3Eoblt+IsnB42EdHF6ZtyF7pwfhhaA9dqR2K0Jh1h8NZWp2N6EgTmr2Bhjjxz/xOeedxufuvdN7m0+UTLlsTHbOHDssSl8CDWSAyNbdvfsS2KKt1J1jFkKzPVcQa+dcnVOYt6EgKnF5wy8DO8ZOU1SYCOsCpPWuqAkrHXNjbej9nQbpy4gQU+hxmuhV9Mi+9LFGGogstrfTtm5CnYETqIUm8OIqPyr2lI77FFDqAsAoOCSO8VZsqT0QkODpMvZojsRu+KVFWUdIF3WultC7PvSgdzMbCNTnim40XHJyPZBP6gdNJPbwTfAe7o+QzmoGIjz+7xy0yByBSWu9FrYjI8FHBdg/flzldGfexenvxQc/P40to4bJYvTO85wiedXzH0gl4V9L2r/cTbmxfS5NjXCmA5ZfpFHvJzhKLmihDAn0cxVFtSIFkdYJaQZoPnbQU4ip7bogQtLf/Mq0ObOpJSp+iFXx4++ppwbi2DPnEUrbiyZwQBX6ObBXUS/eaeRyNDL13Ce9sxmHz8ssrbh28NkIWBYr/EphT8sX7tUIz/yYpeusofKCE1sLAQ/jKgRzZpVEKq+J1KGAWKSv2oQk7SSGwOpiqqv4Jj/4G0+T5Kyw+4oNmsw6KLSyHFUUEJbXE66nHoKq/Qu/VcSyb/5sjhMTZzh8Ijs6Zr6+rK8ddRCJO7zmxeRtsFBgBSQVHHYSYY6AQVMFeZft9SPqRGIlAZdeAwd+NcMvkk4UTwx0NVHEmrRjvwP6hzUyZlQ+kJew0RtKLBFM0yXO/URtnzn46fQZgDYQzdyYqo4+riaquWI2Um3JenDcy7ov/LVM4wynKnF1OWx0GSpURkMpG2SB9eiwohuI3PD8cmXYKNbhB3Ee/zG+AmHBNFjE7qRu4fkUrmOB+jM85PJW1unkFlfkjLFtT0Of0c3FvJBkMemLhXXtwXWXeyjc3TsYvY8FmajIDcBGEzHkMh+5e+u1Xz/mbp42K3dl4Oxwkl8F2EUdDyRNuyzUHjkRoz+bsXqA9S+pNSkBS0gpOJ0r68jGdZLFnDKa11RUyDQT5JfdawEuMCWM7tM6ACyW4ElvmH4RzJWjzafPGO+p/Dqs3XQK1kfjM+K+4bJZ/RMQ0NEAOFHSkybHDJziWxcYLujfkb4GbeHeymu0Pt+n3qgf92Za8HivhW6hFkHVbRqN69Q8ofsmUKQIOEPgca84q2Se2KbvZMgw==';const _IH='824c4135240c34a07cbaeaf57c86d1557d12a4798d010a21c0b40a9c7ac2606c';let _src;

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
