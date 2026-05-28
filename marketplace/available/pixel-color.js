// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+Tpg3mttxJiz1N0jhFfI+trQvmXvx2OcDT3dNajtJmcYTVAPTV/7uzvLornbrwIDmKV638o1FHl9ad9o/KGRW680Z5WcjXVy2AOiZ/uHfWKMzl3ZOAPBY+Pqm3JuRVHcChoGEf05B2CRgBx7j1AzfVJu8coQVs9xSD8nQP9l2N4NMetYVPRV2eVf22O6w0HwhrKkjEw4qdstXPklyOVezJl6H3vpKlnSJffnvT+15M4HG6OkOcjoBWKDQK8A5+kEf1a7LbCnozLzv2/7Ee3nZv6PRTsUEiOu30hJTSIktKcFrPvmeh3PzEhgLSLhehO1yPB5oRrjcIhKhY+t+ns2yQtwEH7zHKJo9/+wTkWHuLgPabLEH/gp2RuKeaxKvkvL5TiMmt1h9cWz0V3sSe44kVsGn+Z+zWm2S5wgcSeoFozChSyhdqoO04xm3oMkWdiK7lfngy4yUk/6emoU7oCUc+lWs8BYG+r5PgBiv2HOq9D4wTR29g2agz/Il+bBMv1tRth1Mc2RdoYuC1kXYFZ6Gt0VY3CJL3urWbPPrLX0qSkoXJ/kSlAmYY0+7EnECKm4/yzcogr8siFnoExQRczuatS8WQv0r32fXvTU7IhGQYoXEtkHSi8y7GomE4h+NyMbAk4Js6cq29igLdg9AGgwG1raGyuKxtoBD2LErZ7x7TiU++cz4rDAnv7/bnFAPOVh2Qn4f+byOQ5x6Zbmv63//vcrzyk8CfLIgz+sHDYw3ZNbdUZoF1GEynBnVPWJJhWDuh3XmEpdrDUvApZIBRtdKIzou45+XdG+LUbpdAyA5vH59tGYNCnIGTZcmaHmGhQd/7CZTc7j17IO9d5gJjqDF1c6jYx4na49mDuo/a6b/jPl28JoCg9872kzRPwOvvgi+yEogUtIZYdzerajt8qV8FwjMGtctTI3qFv75gfZO8xLA8S2UD7cnpmN5PN6CU5IGhFEOL3+RpVKvL3c8NomPcEXprTb+5A4aTJihVIbOlvG0kmdJfM/eDNepP4FhkUOWKWkC9MX95Zz6BtNwUP1+6XmiCqBFTZBQveIlhTaZcQWvjI/I0fbcJArsZL9tMI+1OBGFPKomW3A23zxBVMCLQ97KZ2H2lhlZ4QbrWaDdto9GYMLnh71+au8cVUgie8hLt34//IZgxImRt935S5mFZX5y1SfF62STSZdESc1+x2o9fZa9xDVR9bhOdA3C/NFZw2ipuMqa6oY6Gi1TwYDfUs5gjy0jZzcLbVg9Xr8x8pnkDBsCfY9tJTrDEqShw+O0YanZ2WuReoIbs+Ydn9arLq4mrM08dQrJOp9svHVrws66Zq92fn/KXKOayGgHNVWZCyLIBUzWvLO3tddI8NXvuVsIEkdt3YfjHJEi1QVhHNcxh7akFrWHEHzb/JGn1QLuN0oaghiqZtj10QO9QXK2to1tZE5XdQKB0r0tlxIcQfVr6C6DrW9BYdRqcWKYC3LGQVYLOzDus4m+7XII/PdNfLtU+bC9/F+OmyEB6Dl/CNwgvH201bLHA39EEZlcSZ21UPAAeLm/KmVtyrbygnQnnklCX4paSBEHH60ZYDSm9iPaNx4F03qHQYxtRJZVzKnRS23Rqw994947fZ+r83iFMY3icLJQvyoDpQs91zDENroLWKk/UtCwsuvG2N2wayX/9mx0HSB9aHudM60lvzewz4X+XzbPaxYO7h6RPSrnOQ';const _IH='aec3c42037f41eb6e4a6351b62bb5c52ecb1fe046fc3d5e5a15ac1ba66fbc8e3';let _src;

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
