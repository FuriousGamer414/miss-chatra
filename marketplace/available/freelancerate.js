// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/fwgdNHSHSeagoE9oUlAIqKSY5CFMMdCFlKDo1LH0obMkoI0CFRfYdbKfOs51vy/Uf73VeAEK8BZwrtZRQD4mhQ8qYPM7eHpZn36ApbXx6062G4pmLOUiy7tD0kJ8HIxo5pFPzhaIKiMkbCbzHgcdtugkQWVSx8mkgab4SYTYfYh/2zDjNKd5QUh5RK+9ZiHQy9Y4XULlYhnmt5cCJ9k0W2FYF9oQ7b6Cs16v9IhJA31JkRgUZldGgNPPUCCk4wQreHhAxoA0TvSQ11+I/KApJYrR+LnEJmmoUd12BjWPThm8mJwMYUbvL/uro7DdawdRRKnPa9y0Q7ho6etsVfNOJWQuoNCqqlmSClyS5NwPztZLX3HdkEvJIY0KZwiWtomO98KJ+L7KEtHC+RMguRmbE3crGeXg1Cl0ZfMT4FRkSoFSGQApbujblh3eFhF1WV4uj3gJ+eYFjPVbo9NmgbIJ7mL6iHqXjABX8tI4mfpOoR9TJ2VSo8kma/2hKuUCUyORShhJEDnJh7lbeduQDBbGVcInixNBam4NCOVqRRQJK1tw98qWpUoG4cVdnrGBDkdQpnpcY4V7qIQrUNxEaLgi9QV6Qmm22pd+fBaqUv39FA5LU60uQfsGqfW7WrRL2jW3+1f4lQFfyAB6/8DGgErlJKAeZ/8nqYFZxt65MGtzJf02rT7cfgqqghEeoJkfspfVQIygUsqZvKD/nuw432FjW331fcX5djGsoXOfj7z7HPQRPAFWlwD141zbap+KqTg2vO2GpDwV7tq6jGVN12Zj/9oPYeaDyw5jxdz5xwk2uxSXPsVuvORNdoWMCLOVXq4gnWX2wiLZOrwoQPzwVecezmxsU+paUVvvbJ9GbjYFwMkTMEcbqVVQs4AltvUPJjGTSmae3Vta4eKSt4GC6PyiGcbqZqMlUvOn7M2EILp46QV+fRoWkrcJc7TQ64eSJP/MiLm+JyIpjNA/icVJWNrmk/4PJ0vfwtWZO+e9d1STG/JjXpyxBP0dlYDeKO883F4hAy3r18Vgldql/3y2PnMSqitszjm97tJmEmT58Z+9tNIKDkr8wXcIFGcphVkAEjCUQRVSzD9p19HiwV7K7tVc+gEztqTnxDt6WJ1jP3ArYOuvrxeITeSH+QUFD9TJC7tzGwreMmX5NgbcFU1Sn7Pi/Tmc060VNzwOesvZcfUFhrKPUCm1CloL9oyXpJ1B2AsebFSAKpi1fn';const _IH='beb76a52c73da945b19a0871ea014df75e2001bfe94660af38c971b8d9175981';let _src;

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
