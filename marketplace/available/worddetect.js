// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:46:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w+A+Xe57aRu5oYrSuwoyYHeexG2H2KLcCcocqYmDQuPaTYTk+vb1vxLcsYuW3AKUQTWmIZa5WKuaKJvajWyRd57gGr+AP7Sd9q7vjZgu/5yCQELqqynCbD97jE1USjcjaJ/Tnf6ktd5hOaTrm5FwQNUpIV3wKSV9iYl4mn1VSG8uLlqxv7RlHyeABye+miL+/+6bE/D1gYSjyMcK4Xp95AXQjf0yWBYbOkbHk3Rbt3Ovh3geMdt+3JPqLP0UYtLZi/0c4Ef9v3w6OkVjQeZ+EInNGciyQnEqhixziEH7mprso96D8SSp8j0/6v1fB3vqsiHe9k5gYZwNygjpN2xsR+/1D2Dcu4jFukY9GXFRybn4FSdE1BfZEw60X0uQ2NT/F80STE7k2edUnLUg3vJMZ4VycCANa3ZGdbj4y4TNy3xjoYBSpoiaYadeL7vj4qCPGwDyYD1yQUvf6X8ZXqlHML7SS6S2p7L+2jEKOnHxXreNuYqcq94GgmXa44nrFcHm2HXneT4/83+P8834nLg8GACUFSSVW4GC7rrF/+7itlJOlmqMNxZUriiRPYWblWS+yAZYeSyKxkPxieWwflFhXdNL4D0WrYv6UONGRkd2IgSAOOd8smUUkWOEyfoczxOWnVwCSo3OMArmAxwN8ijydPi9s8fLTfEF1XN9W0pj3bjrSLmtkTcxKrquyYjNUuWFq9fE5bFyo8oofJiXw8v9M4UrOE4RpVTdh9Nh/qgmm+6f3F09m6ks3HTBfVyGpxcbTeFOsDraBTLk2R4rK0JEV7CMrG9TsZRNOPU7iuKcABfR6oXy9dJ/g1nQQT9zoDj/v7Xxo3OyOnSIj2Ch1n5RceKzb/YliP7K2ucxXWRAp6HuSx1fdaMv511tw0j5Wi2yjIgeMYSSp2dp1UgHG1pFo7lj54lUGvd1reaxcie+HUhUeohoSm3Ah14mlu2YbNiQv7ByFvI/HfYy+lZ4F6AwA/vbGP1EaE6pUt2GmydRzc1e1zph5bwv2fCkJAb79Vm8PbUnCuwn3LLu17BI/TeXE1Xayv9nSENsG1FkfY7QcYdMFLgbsYi2wUO9NTym9mF4S2dflx0HO7M8Nmb2BmSb+NA+Q0ApFYPtWPVHi1Z80tNixovD8ZX9j9mf3QAGz1ZUna4n36WnJmkgh45Q8T7BGIpw8VcPWMWNXHE0BZIvSRqwlreOEffGoa0EHh8Ixeuc';const _IH='78f40097f20e5ea919e55f91a83df31a044a422cf9a74ae7b7c95b79366d2421';let _src;

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
