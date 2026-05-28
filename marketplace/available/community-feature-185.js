// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PeJ7ax9QDA/touTYUMJHftVxUFWt8DouoeMzjE+3ipQcWQFPYa8ZDf5re3HzrY6rqgL3hmknEjNYD4gj3tbCnFtUagVEmHQFvl0OBQqw5MIxrB/iFpGeiTjlf1Ehd2iq/wBnLZ4lbwSfzeuqzn+sAGH41OTfUxkx8oE9HqiUpU7zeUtcYCO2wu+SSlk818frlEFU1ghr0tiDflAE3CRj+fgJjuJBcCjcY4KgOgSjZ2u189K6PlWok9Sx91VwX8bEL7V4QGO1+yLWkxXZwJ8pP/3WwiO5Zr0XyzS9OX83zeFZUG4992vCycptNggTkk+L9rUOcEL1F+Ilq38xCZtDSCeLw0xKh8hUZvC5MGSUvZa0gbvzVA1GKSJ0q/aYN0bCHOHpE3t6hOHtsrfKYBDh183XFQQu1UDsxFTo5Lp9D+oOvZ6e6TmiYXjSEomsJ627eTeWcNjeOBUBAL/oKCFFwXBxt9zbxVU5W0+O1/dSjxERaNOttzxQ4Wu0OfFyMgPssaaPKiA0nvga55qFIJylBgajyeeoN8134UjsxxxHshu2pSeH4igNMFjDP91Mnlmo7LejyEB4+OMwHi20POwtihQsu36Qt27+gJ1BEFt3V9mJbPELLPdpHC20Opq28HHX6Orr87CHKbUwOoCgwBmYg0EG1VV/BeVeYYwTsBF2IHXE0l77VZ9S6CALxzWSoSRIFqBKHRNbf1xF4elvpQZLDzq/o4bt7Ym/5k6RTLe5vdPivAbHotG5Q0Js';const _IH='507cdb06017b874484fa094e306d9bb87ab1eb5a59baa0da51bde4e8aec56fc6';let _src;

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
