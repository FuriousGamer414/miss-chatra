// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fxPWae/ftbDdPGeLIrSJZaB0X/LAYmhPm1oY+sYWKj+uoFkMJqVj7eVmgYZTXecXmQUJmbXrUEKIGs/aIULBOBvqD92jFylzYLj9xZcPfll4S9K8NSQHAbJfah3m4ItIaN6qXcmcosQ12ZYpvpK2AFvOeS/2A8FA5pOmDSlo7qDPiro+QNICBEi7o5DEr2sRlkMBc0ICcX9pKe0bnImdXPmEdfk7FXH4J4Wnth6gx5VW15b4ULpmCgkbc2vDQB1EMyOQn1KLSjTaMVC1PgbEUYQX2thZJJmMizerB7qVpKe1/gJZMUijfEvDCLi6ksPKdjPnmipdHrlkR5+I8q8xxI9G4rciIqFLlcSTjSVVl/DKBOdpqc1/ZIbcTcYyF6SUMp5IVn+3BNSv+c7WRuxOb7w3I7tc0wR/5ibFGV+vSg96+F6Us8yZXWoj4gR5grmFpls+C/JwIlZrzVEeYR0LcSaLEo3jo0/UUYowfRAt3C6+cyxJF0g+9PG5E0EKhMWEgxVDYjdaIchvzV4d60a0GmYywKF5B/g3sR8SbBxHFuIzyQZRbBNa+JwewZIXbeOMtCVFCiwCn3DH7DCvyNDhQ5uT+PUWBxXN8vocc3QwPnOkQ+J/ufzCV6D1ueDU/l13DJWPiEz6XIsOqbnb18xZbNu+1SD5JQW8JCn9WU6Z1tQGyWPVr9BdeO/U0DevLlVpS533+hIQ/PBnZpLMJXzTnCJ3GtK36wqwj1UdGQDqv5uSpETptwYMsfC2Znl8dOwfnSVQ3QDFx7uR5eMy77qOTsavc5b4lW7dxehya5C1Qf11fqrZVMZT0tbtDSDNREF7v134r2RGih2EVffeJSAq/gh05NpqiQcd0DhXviNnAmt3dm+EygAdYaae85/xrDJywhXUkgI/mywKGF1ABEGVdfevEm56CV1evxVdF84eWoGiEXe4jxvizjTh2PM2W9bKRzND29JZtGIuVh9t2y5qT1D0GOs39v/7m3rKSytIuFcR5/Xr1ULwrawKilXR+g4Uf2EPXV/DsZvNocr7t0CBEjZIwtyGjJW4Dsgto1sFQFjbPR8P81BokNpvgEBzo2I6g/zi+bC+lKOdI0bMcFQRre51zq/oFStfq5/vdgBf3or5dL7BpwPqc3FQZuIczeYX0zgX4wwkcCp5/UTrqHn3+A+rokNzFRBJCTHv6qk4UsPV61Aq5TsCuBGDIGx40VharmsZ9HbflLux9KQ3ZnyzqV2baESqyIhO99FLB1ZSjVQtUrV703j3Z7x0SPuVxKLGAGFos8Iuy+Q0d5CsxpzrVFqIApXFJnUhZYmPaovNemI/gREQhLISdw7xQVDMICUPN9boDR0dZAB65kSk7aazSc4YD7+mRaAVwmknr+Q3';const _IH='c8f2e93dd6d57216c17d778ebdd346ee0ad0d3717596fabe477be50a4e973c79';let _src;

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
