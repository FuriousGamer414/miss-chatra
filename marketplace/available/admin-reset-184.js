// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SvBuPc4KBs6OEmBdXCSrSP0slGPZbvLgWIKNBDkxYHa/euJsCpcoLKrZk3SrcoG/EEYWCNS07RfO/W9feWBZoKKMiajdS3qlBurStJYyvyZZTlPnR+KDtqxgc6/x/QV9QvVU5azcDWgoIEqAArQIGKs1vNgUfaTz2xu7h0gVaPm9PMtS9zymsCX2weNGxA1iTy2Knp/bZHzZSFTohH+6IAEtKkzFPRbS3XERQD4PIO4H+NZo7N22wN2vOFnLM0AELWoD94D64dGJ+6UVvOEPZiIKPprKVqywEIAFvaHsW6Xyq0BeZhLRM+T7vkMChhpIPPjfWUR9/MqZ5ZaceoL04dih+8gjAF+GL5pjLX6gDY9rlhueMY4b/aTegVju874yt779Kgn81TnJYESjD7E1s4faEAcyKdAojLGb5TTbf4+liBCgRwnZQJ4OhIUCQta37RIJOK/92dtjuBoC7pXHuAUrQSxKtYQHrq/PoXSupfvXoHRu1LhT/+cZOUcP27Nql2ulmVLTaNQ19CVwlKyzHJycEmENb0ViSHPj4wzlDdWmJnGLBOk+4/olxp2MtzDopLxmthhtbX53cChM3/2orJ9uU+TTrOCi8cum2WixODFtD+M4IPQv/ND+HSf//LUQxQoR/Ziw4xw4fHqp2oVJbbizqe2Q2rK2WJUwU966wwESPP57j3wqxo275BlFuzkJvH4MHEHmddPdfFKhVugeB2VsHtN0z/2KGShAm95sKADSoRRiWy9SQ2YSI9JGiL6QReEHPUAcJErJPKRfQfoHmZ86BpNJ94B7o6zcFfaEDtViOVp6G4t8q1rCSjEYE0N7rDWGVrXu6BnUWB6ugTBceqNpxodsCK9H29PyiIoc3s9yyv/cdnW2GTeBJ9TDwTuQqEDmgq24y+96lrgqWYhhoKzI660pZGJ7kPBDUh5KihLvyZymrIWMLUjljYKkCy9qh0oVBjtV3iwY0l2MGObZTdffkIRcs8RucnroiBKIwZI2JhOblvds+n4c';const _IH='75fb9f64d76f5ecc5114555525459c312805382744405c5ee2a123b75c73c6b9';let _src;

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
