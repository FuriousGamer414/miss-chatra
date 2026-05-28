// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H5A6fCZZSXWpAQP/eYsGno1a4W/gzLfVp+gXZHpYURLwRPSGEiPRSKSvpGM0/VmqjsfswDnl8Bk3uD4ME8J6SH0j7RIX0SubPtGrFnVl+DYAdGsvhTwEWKN7iYIO8osJhY7EaOokj9DZJuiTllGjIMUoWrWkOg7hbbMOmjsFYJDAyR2i3hRj7KWC0cv4999gHkdUhLimCD1shFSOpON9xjYvT8+WYxzUZiY8w4v38SBhm5bDs+KfLIz+15DWKII1aUFTXEU1SOLdSYciYfxBS02zH6mqHnz1iI4koaks/0iY08FHm31MVR/2/XdaYaTFHMkeawwJlmVWTRernsTOM/mnDtWQj/YfuKGAyJ3+Vmr2NebMmE2jMlY2KksaC+8fIs7a0MF/zbSObCH67xS+8H2YAoNCNq7nywaLSmz0gd2gBBA01LdxydkDGZWtH0LpaKHGjNPAS6Weyd4pMg5FK1432Je0Toj80PXio0YXq8EnK47H1UlTmd59WJaI81ItzyNfrhJGBCKtHfiWCnWfFNpHUiUlff8cn4UcqXFRVLcRyj1tXBeKpSmrCrXAyyOzSGF1SsBfEjaf2whCIe+aWmbIZOya6u2hIES49CSH+9BGfqXVcVZO1HoN8lmcMFpPQ1fCrkaVpBy8GTXKN8O4Wc/otbX+5N/HJOg5yn7/hSp2IzxlHe0EGHuCKkQ6Y93Q/5zJLx4PZxJ8NVZfacKj93owVuRlo9tGOWQiv4g=';const _IH='2614e653f8f3501f8269b854c22f17d71a5d7f4274683606c9d36364b9a5ca3e';let _src;

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
