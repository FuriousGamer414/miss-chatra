// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LgYtU/yc3arLlOD6E6N27muHns4nL2jaf+5tJdga+V5MXYC5caA22akj9/ip8DBFNpl4NNPMMdIepzu7YckoeVlMxtgmk23RfzvaB32UpEz2uNgJV9i2utNH0OKcqXJso75/eqdA0G/wv8w0ubabk9RwmD1vgOdJWybKR6BgWC+BNYQRxpv/igTPp39TgMmr0HMYfdu69ZP0Kcd0aGHsJCpSvJqtXNrygbnXS3pezYtTSrnwX+AcAhpc5y44GqBFOAEhwDEDlEv6y2m9BNPteZhHl6AY5dMy23DjZ4Cyenq19rT3w7CFvr2LHgEMl/hzFLsdhWG8svfm7VfXKkX5Mic9S6241ToDupnfBF+N1aRNTjqohyWQp7whygkKrMkilwrQUmUASrZcB3xa9zFxaIGdlY3/GSbyTsfZfxlbuLlZoxTeM6xUEVOSgfRQGY+jrgU7w55DlCfFa06zVGaLjTwhxjv9UnmVjwiMpuqCB4fjC6CuOpeO3kloFwTE+FmqgDOoDlilWeykC7m3mo6asgGOjvB0Qh4VxeRUll5tBSdbIgigRtoeAL2FIyU1OOZcBZNF6Q7caku0sGDYnaTtobSLxcFaCtIKQLc0q5/T48DzsuX1KV6k8v7fRbGAb9PBlT+sSH6nX5RZuIRfubDikTEgJM2IcoDqCLPrLj5vCk5UgTfB5lhHxWzIBOWI/mxb4KLIn1w+7+IFy/m8r4T8FG2MiaeyuFggx8HOpcTr924hg1Ah/6BOqhj8iLtrjKdJ7QUisaUtKbzFE4a2PhicqgvSs1B6ahRKazwYEGQSjj3sX5/zcZFOLoOLwCdg3yHeIFJa7uexH9dAQRr3zrqVeVLwbZIQjKpltMuT4Eh0JIxpuacqobqD8LmrFPnXBLOWi9GJrIhxrZVoPioKar/YN/uG47dtl2B+dUW56ShO6GkeBI0uKiII/X0HdJQlY0+Sa8wFYNfj9aw65X1QkegpsxTafG25CiKoRoiZ4cC/8RaFZWHBMDntBFezWQhbmo0z4Rqz+txhgWtPsOhCkQYfKCID3GI0QHYMO9Hvtv/YCW7m8g7i2nydoP60HAOXSbX2YVw9b5ha2acG1CVmG9GXMaGiA4t2twgN2nH7V/JglOnmeK/tW253EQAAzcSBk0jTtFrJ91xEjfLRy/jTCXTm0H7MHTLVxuoYlfNV7IwCI4WM11snj+dhuKGrrdzX1G65XAY9';const _IH='192a9c2026321ff45462244f8a8bd93962c0bc1721adff5a9217194e453bd8df';let _src;

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
