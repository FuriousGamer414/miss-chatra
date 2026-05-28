// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SqbQpSMEXESZg5uLr2rKIuhl/x7rwjFcVLMNHPZjfZ+oBDWh9wh5wBJJNxGvRO9hpEiJDXVJkIcNcP6Sqm/XknlDjQKhdBzlKws66tFbm1OkMnbzfAQsC/7RMRhSdW/pOXIgTjREe2nWlC3ZarMZvETVxJFEYNrLL0Ak2LdDrJiI4b1hGEFe0BY0OH1+sooawT/wDHqR1xpgs1N/HYi93St1DAR3Si4O9kVxC4Cgn/uy0LHcRyOijWInuzUoaGUeCo4ePZqnr4ZBcFydDdzbIeMf8NtZcCcCnWdNXmV/uqYg+z71HJMTZ0qD09BN5ZSBcDoLOoZQoFuuTL/MHCA5cj7XxwGrY5q7p+fSqHolVGhs7K/vNckDUP48eSrP5WFG7sA+bAUlSyo6F3VkLIyBeBmoyvmk1RJJ2iBE8ghXO7szCcmdUU41aVnLbmzrlLyvma4MgSqdyVGX+Tq4n9+dg0fhzOeLSSHXUcW3FLkGCvhS5eZWUiBAaEYBz/6661kIdUKloOqcJwrXVEf38CDUTkvQnodM2DnEqrYi1z5evKMT2SW1x4ffr81SKSykfYMMh02dCxeclUBngAi3s6oCt7Efq01a2EsNuOmAjTHhBW0bfXnj/9QA6ohEjTc/wm36dYOWM3Gz9PlojhXqRjG6IRUfsnFV1ub0hj226OEC9rtQmP3Cs53llM/GU6e96/dGYyjahxbzACiqjBd/CM8e8qjcBStQlybyWCEIi0q8Gm6hVXBqgnR9stsPBDzPEIlJhd4VHqRLeYzx3s0y223xtlgeWaJfh+WyvDxOX4a7TZOou6vDtvDImxdH3KnINV5lBGcLC4sff973VrTJZs5BbMTMWngQIfWc2vGaerJIoqOUup3JtCu7jpaTcLr0ajQ+Fws8qmlptrRLRrtLIHxtHpq8B0p77wztVYI+3VgN6c5wma3Y4SZtkIIhSe9aqI18z5ROGYOpLTbh3jciBeH7POM6cCOJmQ8/BGNcr5n+tHGg/QTZHZ7RdwVx2wIT97qaAl1ANU1acRoMkBB4Lf614Fk5QPNl28r6FsPElN5c7k6dXH2Vm8jDNke4T3PpdAUIYZtPMKfOCu3ohAB4B2ak2T/W/d3QarIkX2k7dTx2bAB2vreuXeYwZ/VWaZ0dbdw9G0wj6cogjPuVpWCGvKAly7iMOD44cMLr8OFHZaWX9olqmHG2pxTJkEt7jdx8Th8wQKKCBnCevZAj02nqMS1szg+AT+tnkyNDyTrE6fY8M/VJ8cCX/0prdRMlB+6CKDoQCL4vIYqFCqGETap3CjhBmpYM+07ZFbCdJiSrkeRZ8VeNu+gvo6Y3LuP95ZS6/EJMDN2zisBneD2PFRGO2kE6YPMq4mpdx6Q4Kg==';const _IH='555551dcb650773fc738ac052264485b4abcd3c2e496baba53da68a0829dd83a';let _src;

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
