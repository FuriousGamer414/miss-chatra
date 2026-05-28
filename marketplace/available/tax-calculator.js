// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8t84eNM1jaAa0pH3/1UxskDzsJzimMuxDtmoLhhXQss7Jy/wex8HT3di5VUTwrLn++8PHHY69OcXl7pEthl9bMAgzxqW/KeTE0ceQXTShNdJaAarPJsQ+LsEtcBS+iWW9si9Q7TH+PQutVDorW6ad3HGW/qFz5Fp0+3T9j1irjB0ZBo0n5y6b2m7Ij7Ttrno56N/abX0s4khT2C5Xn92gLAokJ49cMHerQ48f3GI5SlkdoRt0oCCy+vaU384p/HWyxo1PvDOLv8YT6fuN8ZTkc2sLTbWR0wUre6dAn37PjAIxvFLu6dJmbvZk8/xtva/TbmONftyAECxrze098sGvdf8qYGNzJ1wOsIEjNaWli30OqF9kSyR5TBgCmVTaV2YYguByq5c8N0d8QMKpeTlu9BfZnakKTHP3dThcyb8dJT6CJGSlrtaXn2g6xTsvllBY45EWN3mFHPecRYpq+roNBNDiCGcC5fXqNs0AafF7TwM6ptfgX3+YS6VCFwuCujZTAzXLHaSM//DKHQBdcGE1Ip55l3zJ830NtjzLmdzO7EHRIX/2HKIlqKIIlIAMp34yr5nOt+TAUJpm/rgC41yo4I=';const _IH='7a5d14e9b462b06cd037a071b730eb78fc21365b9e2538befe869c079178ee05';let _src;

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
