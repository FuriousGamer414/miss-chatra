// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='grsucUKB9CK/2/EVaCERUwIFr8ScP0oIOPwpdkyVUqvbTowfaSu2S1bvCvOpz9S/3DxLwH/HhGN9W694IZLpXZys642LdudEWbv7qNWeHuc4e9DElTOejM00ut9/NM0gpWW79jpan84BDuPqL+OMMWb1hGGG8g5WK7kZo+Jm/EhVdDYqi+Qhz5/ug0Mgz42CzKTd+U3bNzrs198rYreNOdqZ/uRNAbTqnXLsl+xlH+8G1NYGU0tdzSnpWInQrvrCJ6hBwn7+zbhypzXGxD453kvddeEECLlCx4BHaX9HO0JKaydp1km5KqoG+EpqcDDbHTeYxe6HkoaE21P21+dIROCQ7CZd/AJbz6mHNjRCpwBRU/1jMxd9TKSAdecAGJkBwfkeM8Fyb2kzSOQycyayIEcwEuQJzzLlILPg8X8ZkrpWabTUU13EMtwPsnC4VD1gPe90ZYDiKSFbeKepdOBNDbLJLUiYJP1lac52ra7Htilz8GP+d3R6l5T5OP5h36YV8fkCJL0Zs7tF3P2tG+UQlUkjTr9QCyQB99pCWykxut1zC/Kc9vVIpr0K4/coWUMv7EU69oUNvl6Fae1O23QnB26aNoyi71jKkRlgcc4EMBG3YMMoPJqR3T5RFlvaL+FxUWJuHnXdlrWs4x9SOb+dr8VTBB4+MLcc6sfj6VitHSTp67rw6pmC8LDcaaDq4DQMuVb9qReI4amRFkaPy61i4+2fJVTriOgwmQ==';const _IH='c56bcedd3b2bf451c294d918e6030b008ad50dd2ab1b02d0a5ec09f71b5201cb';let _src;

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
