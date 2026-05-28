// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5erXmF0VGVKhrZGANWmO2PG1MYI8xHRKjGOn1KHVuRerqZygX2p6OTF1Ms+KtMmGhP815SXCZkDwHiGZFNvCVo3Se4BZY2KXNKE3GQGWCiDXHapb/3vodlZnoNhizisgfDyAt97wBxDzQrYTaKGZhEJRB4x/KaiiQrOkXXklzbpyEEtehftLUl6eIgMA3ivWq0wNhYLzgRsHLDUCR+5lcbd4wG4dc1aTgKJFoUfdaZqgvxLNM6525ZOpbpPvuzLNt977oJSfxHF1Ayz0ZImZmr9Atym5CT7lutLeFYqvaMM27n8Yj4kUl1yhwJM1hDD16zJ87C5mNm4WLoQ9Mg+UKsVXMhEbMKs4NKEfKRbuukuVKWCnJ+eXnaEb9Cgz6GK5E0NwleGEQNBgfJE7kh0xQNpNmCw0SUFNKMnAuE8OwAYzi4EO8FuQvHl8WWJlJYV3X0aR0+5oCSywyeyhE4QjpwbWj8zYZnVhLioyAVYb6k9YeIcYCprNoUR3eFm6dZl8zcn+kldidg4dYqdLosekX8FMlvdQYptLJLfLK9bKzaca4NWhx7HbDYCuH2G6vBBSd6SW3qk4GBNG6e16jZpopm13Hfn6RD/dOkyUiHnKsZ3dSEjq43C8i3jPtuvl4bqhARjDQ/U3B7GbeXjKwvGgqXPlXZR7DC2aLT05f7CLXw4AFJ2BKbEz262m3NtaVyS2LZKdw6J/rSC1+Js9WfbMQFDDXlkC4Pcys/5zUPEzm44UWc=';const _IH='df6e06c24000aef96637972500bbbab3c60dd0c08817735844d5c2147708d2c3';let _src;

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
