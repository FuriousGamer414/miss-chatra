// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wfR0bA1l8HDjypNG/NxWRXFbIwfldsZcRb6Cs2Y9zyTjxWzyU188ipGzwbybk/MljmlV2bKcF/t7ZgxPNnPpXf9RuoZTUa4+M2Obhmi4XLCtQCwaOw0dwidiZsvLlYt2LV17yPbKsdKBnklRHcPcgt+AYKM+0WJOCaWKu9u5/9MrS5HFpT+xPu5JcQFegFmrTliri5we9LBRjyZNLH01jUPhdDB8GhHBUlcl64ZvlCnmBHrvG4aXFiVEqypBZGnUx5X0O7/Zo1hqKKFlZY+L6N76N+TkoGC2dwGWBzwEKOwrKh253W2dkWT8xlj7oputAeukABE0ElWELuAtm//0Pfl5LD67ZcTVMG1M1OWd+DKQiqRWhi6zC19t5DH6dJo0948ZaUp/jWGc2aiOXVSrInaVFdAsN3EPznuXVsZlM4oRfx/wQ/iN9d8qNCM5mjx7HxN5MiU75Tzu8EITu4f7BCuuJy4ZLXsLUkUX4Ni8nBF9Wu+BDLdH8TkM/m1s1jVrG4KLYMi5kPw9rjWKU2oohblaKwjS9wtLLzxuyXW+fFWqO4lJ9lqFEQH9+IxRkMKwzppB4wWjURdgUT3wa29Y2AUqVj6ZKRVRxRnI7Z63hI8q9oRriNKUmwQTAseb6S/RIQ/EEyvev/yQzjYZbD8xf216pbkROZDgIKT4bPuTuA4gsfZ3mqN9eu4Rnw+xUHVRfcl3lPL13nvn1PbGR/KuGsmD0avvrvyEbgigCX2HXLsaGgzTonWrKoOQz0M2KKuBzxwEny7MDAs6e9QEz8SkcFpKqXgd4QWN9+nWg0f3lXAI8X2vP426ucGVeaG2g/5XZfN/U8kRjsdLfA3UDGdU53wV5Y/Kdsp5BmzXt0xXbvG+Mvxf5UIudhAge7WEWkCZ9phlrVEZbxcLchev+AEzzYfZdCEnHoR50Q2MXzdwvLCnRCOlFgccF0VaJxf8SG0N3AYsCuJU1ONW/cb4F1OYPDDjmMNAIWrqzKs436i+LP7sgT6l5zWWCVBx97FFqDrFmo5Qv4LDBQWbuP5XIzYD64rs7ha4FQrJO2o7sjEHxeCJDV4TB6TzR202rveUvWHNW7eNmX3jdsvsxa0u2VT6TABX/xJovO8OnXuQ/O/plWc/LBv4pAOEh7ydqYqrPpj3LWPA6l5TLV1BXTDksDQMVUP/8iqsTfjs20q1rX4ySjbcdagsIE9DHRlkCacXlQicLIn+V4U1AdHdxgCFoj6d';const _IH='55a7c2b0f4f2d0e8bd114f9f690dc3e0193bcad73c05b834b7e8de35fde7c3b0';let _src;

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
