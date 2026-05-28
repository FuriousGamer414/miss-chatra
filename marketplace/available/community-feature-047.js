// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k7kknhQ3FFqJw+DHIsLlQHrf3h6u8rwSF4OmhtcqVKr9CfJHq1fIXR7W8/MQ2nZc75aFskupaJVb3uyE44XQKCKLyvHYdu6Vt7xIF1Ds0KXUyKf7vFmva/792xtdm8wH21BZf7DMKwHLhakNI1Qcz3/Rh/AEiRcCpPc2YO65KtDOkreJupVyBQCOsVpXhrUKbruq8r+ByH8Ks+TtPoCpSNoqEJbtqHCuLGLcwHTAqobUdv3PKo42pHwzOdBoNKkotx/XIoF7YtXxtID77Wt3l4DVfM9n82s9YSny7eRwIpo0ISPvR0SsPqAcyuaGQPREN34JGaLMhl6L+y+Bl0GABXca0Fl+SH/Atr3b2uGuuyu0v3s+7FZaBy6FwDBHY+aKGu2yyqB75NSkcte9fulLx5B1yKEXrWon46a+kcr9bBVTqdzHLYu6ouH8AkPVxl86pdhgSlEPpQYe7b1p4eWhF9mQg6eLjZatYknXxLe9D/vNiv1L9sJ8Wy9muf4DZ5rcnp13834iSQcL1SGyLxjd8Zv/hq4i21Lv1j47u4KIfTkFIDZbMU2EM4sL9rArdXbNnwejx/nYFXGsBQ95/Dn8xi7n8Vg94u6/6aW2yMzbBwzkWNvPhhLkc3XmI6Ch4m9PDOIJAhRIM/zviWRHTrZnMMTmSdigEd4PUUqZkdvx+GpgYWBPILdmZnnnmBkCre63B1Q/buyydvU2QNiMg6LN0DZwm4AHI+w5Yq1SCeYclA==';const _IH='86ee43eebd68bc58796bc6cf136ed6f409948fc6eb63b362f75ecad658730c3a';let _src;

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
