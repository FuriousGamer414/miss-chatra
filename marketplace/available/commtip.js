// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx/i5gXOwdVKXCgcSirCgEP6LvvZHOGZvWzyV1ROSMk8nDh05OWkYwvoaD5KNCF1l4FY5dXAmIqB+DqHJtM6MswwmixDYWYlORoqHLEkJtMFW2tM1UkTKIHNjZw9ypAkLgA9p0tpB22ZlMnMZvd7sh0ChiWnygZ7Bnx6ZvIr8Zm/jatWFqEnMp+T5CEBeCTHFFa64+QjZdbIEE6h2L1B25JOxzbipqxUXaCYF2wiI0YyLKCO136PwwlgpKs/gcOhU7RC5SLjLE9amX0sAR/RRE9x7/zhJiT4aOLa+JRmx3VuanbsZww8f6VwFiSbLTfodQZuUo0JqE2SSioIJJyXcueSG264uCKClmsqt+6jSVIPHZiSgHPEV1WZ7kvVqNPlrZGSr3MDq6TYyEujMzS0wkj4QAWBM70kw22znudc2x70+Q0gEsc+t4tdyrgjolrYbtuYFystmiehOWGhx9p6xJJbv1TFXi8DDE7ug8guWSchNxzGvo6ybD8yjWLBv0nTHp047KOybEriHA/od+VibtAMO76bLK86o08MiA0EO0+GBfEwsT2l77Nz4O/xIfv8O6cIv3l8nrI/mtOpnLFVPmrF60aGw9ESv2OAeh4xSKq6V2ONEP/KxnniyGJ9pqT9m5byNaKyRm0ygR8dcDO2Y7s/7XHDzJ0qiv9thYoyZ8gGw8XdHbMSOGNwtvdiUwd70K4Mp/t4bu6ksi5KNvaSUCAbPk3N9M1XbiPHwiQ2Ew290Pj2Rm8VmBVzEVjoR1zOE8SqGP1b51zftUAzq5+zSC4TLvBM5xfvbiJzSuf55Pvxk9ZN5TLYvx76vy/u1n3pX4OUxFZv/yaWP3aBkM3Y034NBRH1YDIaVnoNmOLd1np8lglOrqyOcuRUqdremhWkDfnv3gYG3+Aq+WcasmlUG23lz9APJK85hEZbpTN9W2nNW1LOm/s/bRNSZLDRdAvM3PzuEn8R8NYytaYnnMIeQICYK/35gBaA7+5MF0rjpSo2JLip6PDD/7lfI+FNgXEnDm7OPYgIMUpkZUAPcOVyh0mt0dLgiZmi/30PQ+xaIf/+RyrIi5750LtrqbKmiVfhYHfenzba/+9QYzY+axmG7CJlEXILT96ctzuB/7mKclxPKu5DfYqwHmoQXVbnXpqzKe7mKJmHfZdUvMgYkqIz+DgXYoD4i1T6Dfdffz8UZW1q/AM+j6btQZE4OH9C/oxuuSE=';const _IH='8de691371f8c4c5a1e71b5ce2d17f693da47f028e7f2b15c22b11d55f18cc7d9';let _src;

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
