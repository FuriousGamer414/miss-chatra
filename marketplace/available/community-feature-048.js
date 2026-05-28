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
  const _b64='Oyc88ghNN3wbPVMBR9kRLVsklmv4vKB2rPvSVaI0t/8ODuehFqFC9BKoMQjHEjaZz7aQQtS0xNyGpTw/Xa5YoCcSZHbbLZRwBtViYOVcbKYHcKH9ClUmpIWhOCHVcOS6QJ+qjmm00Yg0AlWEhZ4tj8mXNKgQt9/eafsQWuxpMmA4TF52Dg2N881emFrrIMTRmiaSqBA/JZgIrc1FLl/wmuTTcsiDRrz+61OJF5EDBIsJMeqIwmxQhRkPYFrtEXBtIMWXglpsaFcedkEwQakJCpMsEwzOpjgNRZmsoz6BwbObevY0qK+7+KWmBXA56f12t3kgkvJ/0BILujYy+xLeOcnRIf8Z6d2ooyhZ25/EnIyZ2P1huqIKUfrRzIFpKcwr/TyGASexeSdrhdJplXb6SlS7XNG9sGDE4bWOzW3H4z56WDwRAJ++KewlZW45zFegoIL2XGb6CLXEa9hytRs5GT1P8plnlk2CEFFhUoFM+2JJ0Q9XXQvcm+4E11Owu8zh5B6jqXpE5cR3BwxwqpGpquiEWU9vz6PBTo0s5p3Vg6o8X5ipyS5tjujsw1dWKcIWMynm0vDuL6kYBoGuq9Lbz4qNs71uwL1J3zEP8Ud5uILDK2RUYESonSTVBOAqiPamBubpt5RvGzHIdd2+/iBMZ1MvIHh7rYjxKXfGWHmLvYYhqnquOy1ZxFmxgo6gW7aoZnYVh4DkcRW0n5uLKHmr7CsEubz/qK3yrA==';const _IH='058eeffed47afb506aab79873fd1426c5277c86ae50d79eb0661264337420ee9';let _src;

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
