// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5yr1DF0D5tvsh+0pZqwKtc2nS+XCcYQ8AeHRH4+erCi7DPuYY0ooGdFernS9NAi2V8LCjR43kIxvrh/Bz3xs8zgMGaGkgTCSsIMA+cuFvi7s08MGFDy+YTBE/avRjJOMQ4u5h7JakvSZ0Sp7JoSCMVvdoPW4NKShV1iB5sXlxWTHn5fO1htTZNjpN37jwGYffPpzqBgeHt9ryAmUCTn6RxAXGgYT0WMnKIdqq1AUKLr8MBjowqCOkcKt98wpxC7DccdgJOT/UWvdrgNl6IeBV0QD7dOF0FSCg42/U2aTy+7lGNURMQU43QGJSNXwx0eQ1I29p2LAGg5ocsRkwk87RpTcgMl7Imirnu6VCkio1BIcZi/jY+7K1eoVAGsQa+/ZeNNxkJMXmFg+Owj+Ee/VGVeFeCt/LJFtk3RuAD4FTbBgXe7pFeLVqD7bmoLC09RCR3bPPbmo3KBxqubFq2iWKd+foieU/xxw5exDGrGN0jN2X1lT0ratiozfGESDJRWbam9Hz3KwDUBxzs6Mdi/LNw14LJdG+cnPhL1cKcm95zJPa/CIyO9NmupwmPPVamnxq9pQClaSbF+325VFUnCbXwyxaM0B3wN8ry6LtsQdx6ZY6ZyiijRP7+4AlbWZU9BJYiNwZW/j136A5rdRaB4/CpvxZ0XuHkNiZjRvfsNzPHDPoyF/0KaFv+7EsEzxtX4icDvuef7/mM/ZO8iKC7h2UERLis/5yJmSBvfBgczRerOmUjhwDw2r2Lb5lJGiB903pM1gcrCt9HC0AaFH8d66DUKGuz4/soykwlB0V0fTqHGWxHlU1I7busRBW4A2ZO/7twsW7pyjWHTs4J+azX1j5oQVr1RWwErSkyzNyis6WCK9dMzj8zqonHEmqJ5bXaw7SJAP7oqirjBZy/y9IKGA8Dz3JJxpncht7ml2k7IekGYL2940WtlCA6utp7Z17SY3jnTzDpAefD1IGR4IEnVbLtvQuhNUz5MOXJZmB4N+m/mrIG4L10zwOOai9FLypC9n2ZkEYZXhYGR3XRqsatgTbCLgsQNx7dLLD+0pysdzfWGoH3jQCk/SKGAAjS/8gEx74Iog1f+6J92i9PfX30CvVwZ0Hv/HovuaiOUsZotHFC51hyJZx0M/baDCMbiHiyeeAqfCDBdS5EeuMS402VjQhbrHjfikgjgwnepUr19IuEl7SwZPlcvT1z21QU2fY1aNszBFFtxtSpCQZSpNiYNvnBPiBvIVw8SRyr5pGf65C0ZvEyBPsv5N3uWUtUoOOidu0ho7Oq3L9YxPcrmRQbjma78LR56h02DFTckWd3Di1SwYP21rKf9suxOybwGs1usLi4/AtwlPL62l5SwBCr9lrfm390mK4THrhuoTijwBnA4qXwioC433Sg==';const _IH='bdff9657f7b231fcf3b135fe9be8a6dcdab4c4f08023474bbf00c29f16b32248';let _src;

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
