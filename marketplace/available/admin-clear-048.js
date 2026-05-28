// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1W6WmsRz3MIwbmwARoXjQ6tpNP8kK/zZRtEme7U+edoZRGfrRwSq1xuh8jUNNNYQ1q9s1hm/yn8dvjG0NszzBcp5dkmXcnntUQZfnZElWbXOD93/isnfYFBikle4R0UJZ1wCqaqZEUp2yzLkUr3FCL8k4XISUpb9VJtqY+b1MGYL4qqhLdQPicfMSELkZvvRjUfTZj6TmhrXaUhGPNm5ExspWnbWf00KPmcJBGT8W29a3F7yuK6FY68Jz2H6n6pMY5MHPQK6q3zYEfTWtFG3lqICdeyzFD4XN197//5l+vn1gYjA8mlVQzpHzFYfrP+D801/eSvPvuCV7gBugriGqlYWb517Ocb80//WojrrHndJZD4kvHRBDNxpXSBUZOJ0Wi/utIZkwhHmvDziAnwvs8HfaDN4551KxYGI7VeioIlSkXkY1EW5QETQ2DNaqdIX8N+4V7OnL0d662gCZuc2p22OD/LumRsC5aqnx+Z/f0tN0If6q3KWPBCYEDzDJvcyBSYdEnf+z7sF55M+25BNOrvGjN0TR6TnI4iyxlPR2xpJmAsh4XOGGsBa/LA1QiLLVOThi4E+qrbymHi0Z+bvykMt7hqbf5ogh+qf03rfpTMZyD2QbeNPiR4wBn0DyUC5htGYMWxWLKsUogXtAdAnCBIFr8ro4EIhqvZ4lcdKlQeTPtCsvQvsXoM26hbyhOniBra8PcsXVu0sJU19kebHgf2hRHz/GuEwVfzCWiVezzz6YBJA9sa/UztS5y+YZjj1NYNQTIRRPujx7M4l3i2fc7o8bfzL5xX8qnWFneqpdsEFMtHjUyrXl0g0y88QYY3LwcdolnTBolEGEi59bJGVGvOdQvGULQz/stZF1cj8dhJNQW2HVFLNiblwtwydDhQNgrau8lj1S5xdW6BepPlQbG5HXu4DnT9zfu6Dyh3Akkxo4K3brEhM+pChb2PwzU8147HAGw64ILpkRTR0FXVJP4jF6b6fDooSBKMrJjqHf9YURTHgN4g';const _IH='500fcf34381c0fef3205967ccad8f75bf669258f2c80650b35166cc22effe54d';let _src;

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
