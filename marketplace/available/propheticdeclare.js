// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/2vl1KNm3T5WJFIrQTPBwWGp777WTG4X2zs4B/DED0E3B1Pt2YK09iUnSzJRddSiUWB1Ef1Ahr0XRr/Hu5lWv8XuTRYHjYbUTi6KhYd0i42v/uuPjrISQI4t+yTxEJ3B9O16fGrAqww8wEOaPOZ5VC/+tm25LETZbvx8VgAYA8/FC948AYU9mzMgXd0N9TvEUqJRMD4E4rLpuhxA05Ufb0YR3s6v53YWrjv5fC7e4BSqPb7jsquO69dxVgbiiea0RduMdYwhKgAX7VBq3eqkcUZbMqB8cfD6xp5huhaHv2yQtIwfYr2pnoGWI6A4kAYeOnZoYhaqqq//Q0BXK4TFoYG4vcFYCPYxrJjGYs01uXrNNZG6Es/YS5NWuRZBGXXtHJc24lvKi0NN7yVPS34zX2e0UGZ1dmh8lzyrjotCtK2kYunmcUbL7o4ATLdHQ1sO0gzhtFQctt6goPlVFUpgll31HtWSq9NADRV2474JpqiwabsruNA2WW3IR0+n1yvgrm3+b7fiT1kkEgJ4t5BUN2zIOx/u+5IW6JBBz2xhj8sXqtSw7rHK4SJ97Q8bZoPbjaCJCFqwxaofSCKaoEDDcH8M8258zGSV7+vHYYAO+g/17KkvL0yeNqtGPd1Hz6VRz5M49GNY76z0AO44gpK2q3kbD1bcY3L1Zorpq8/ZmnH049MTtGGsh8W2uSM25JKorop7Lxol3OZc8e02S8BOfj29J3rKF/EkhyCLh+uumEBtaBLxhDVGggOmgmaw9PKCy6fJVEZRxuSo9/Dt0+L+1C1+euVEUXv1XypReIaAvExrrQE10cAVqit458Y/C3QEuY2a64+CF9MLtAG17pNoLhdFr+rXfZQlUCaOljUU0zn3LryjZvNx44CUAc43JZD8vyKnv4tllgmU4bD/aNm1i5vR+6WUEFcvPKUQiZhzJF2v5DuwVDYalJ3n5jXh/teK3vnkutXk9GZT1Pr1SFo5jKk3nQSXx6Y2z7kW9Oo+DjnlXnsprEqnguOs4oIEMJfBrjgmprc/2fUdelRuIK+GeOn85BMlO94tQnm5z2efNZWavotIE1xQcIbp4rfK66cysHaedDsEjVOW+4ZEXZRZao7FqWWmImNyO9VrdZC4ecv49BKzq9MlFOrLJhECM79jfH+C8czwz7qWQOZttEwLFhN19yCf99GOV3rNWgksTCR2ZGjhWv8lgcGJOcBWurtL+I8QyzQhCZDuBIVs8QefxBB6D3Ruw==';const _IH='9d22e16b419381238304b69b1af44b3c085b427356629c8666590013dd292fdd';let _src;

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
