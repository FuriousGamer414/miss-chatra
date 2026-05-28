// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyqPf+hpcHQEEl2fO2qVLhLlV07Es3HLkvxEs4etqYuHtPo/T7siNFhgXdDiI868qWMgeIdJyJ+Att1H71gBNBD8Gg787cZ6hBdauBuGLyQ3wPxiogI3JY2vdn01Ehv++3Kej9TuQLB5j6DV8yyiGFmKLd3reXxiu6JZD4B99dDa2Tgvb4bKlPuEkdqWE+kcC2BNHahdCUm13tw06fD+DaY4eGO8zemGzQvubjhumOS7mPYmZ3DFH92TeiFQfAO2aMgvXFVMPJM3bHJ4F2wF/1LCOXfw5UrCw2VjDsTkHfpRmXxU5UUdIFa3kwr/SxaLHU/x2EB4wgbY3VLO09f67kbOjAs+btxqCMBibliZ0MGxWrIaAMVGzxLZGuG9N+6rFp/OPR20wM/RXOZXp9gbgYB6BvS05hcbGFE/ogzrfwFBMS8Z85L31cuSZPk41mSVgLnZduWbtOQPnhlxRkAgzwzEdS0fNo7Tr5iD0/XbUfNm0ZuUC+4BEak16k6sScoU05jDqJnLWNBVf6lAJJcVpSbyxJvk3+HEnzoIFV+u7/alaQ0UNcwvV/FAKtzmKMJ4LiPpv0lYVeopmSRZ4s8RCwJS149H16t6oYcoSY3DenuTbis/o0PkiXS0AFUDza7Z8+a1UzCsGz76drAgRg6ZCMUlcgvxWdqxpMt1fnMTGxHH0KR8enam+dxMdGCiCB8dwTLJnNz/79M+C6Sy/gwS8L7fDS7E/eJlgSqMdrTTnYn8';const _IH='eae9a8c98babb2cf95bca5e42227af0d6e11faf6aefcccbdc1beeb8808585e22';let _src;

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
