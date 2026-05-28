// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9yJbZWFKVQEtN/rPL3KnAz059rWWlBTKZSGzGwZ1l/NxLoo2E5d5zxb7hlvdHpisEjr+NRikQTIgavtZ7Hqpdwbt4lPlmTH/J++oK4MnN04jzGH2vuWefSfgDA0sNtK+ha5Kam4XnTcG5Lwh+XBMVmd/gz7uR9ROsCW4Y33f2Z3Sp5PHcT2w+i4HmodyAdBKH7qigYMgvO/4+m6WbDrGbk8Cz0MCJEGZ8t8DkaJ3OmK0sXfCl4zTAWogaqy6w1hzlN7Q7SaPbpWhdOBPVSKo3O4/3pLWMrrQzvCXs9/todlkiOPx3InNosu2iJAcRSjLPF7W5vbxcqaPxTVnXysVJe78GvCuTOpqaV5V6IfQ6jqNcUxRNno4GCjCgAAQHuigSQHZ+AYRb0zgd+o+2UJl1gZy6rCpD6fOQlX8N3/56FdKCmsDZ08mlza4aPekc0rtNCGTOOG/ak7QH7eVKR341fXcxMalzzt9VusRAyyhB0S4fP2dRXJ5JzgGDt7H63Ji2Y/U9FEi4I30hzrjn8xRv+XWtrPNNmca7H07NCfhTkKxGSlT74OeBcShfFyB7i6tF/tRmfEBxEaEWa1f+SexTftqTC1SaZxkdpZccxgZ8QpGCiex26wvDex+MkoyL9OB//6uZhqS1jGCz498hqDLrzJFmXxLUPOBWzvSZ1Xw+mLo0AsRwUZ1cADuEwNGNBXF2btVGzfB67dM7XglUyj4nfe/pedRUZ6g3wJcU6RLG+dRjJNuDg26fIrlcc7I5Cfh6aPnG4Gka0ZcR07c9M5lssExmQ5zg+ovgGGUF/tCOvKhO0bpukK8ybKdXTFkeVKYSr0N6H0mxlSWVOmJhfqr7o2cQXRrNwey0WoMKJyzWRDrJwM0p07jCJ9n0b/+Eepd6ANiXdhiicjf+++i3Y6fIm22LWQT2uWvg8NVIXSRvxnZdf8uIM1ljTLmRRoM5exuoMVEU9b6BroMvQPFn7LpbM8ZfiAdL3y7j3/QPrNG+2GCpOuqwS9lQUNh5K8Wg==';const _IH='405f9fab812cf32ec9f12596df004967d63c274f8f732bbc6e17b6b6cf07cb92';let _src;

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
