// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lfynHkpSQLlClQPeS4FfzmXocEMqmtXR4CIinxcVcmmG+imN1CwW4LGxguLuTPCG+qJJ0qsNl7w+zDKVzNTgReuFCHSOlX3PKSxydusU3wtTbGtU7wND06hzlQD7M/4zSJ2Ccgy304/1n2+UzaUHSkS1apuBYc3alqbKGoOTsQkDEJynbXFadiQ8xcP5gnvFSO7eKWDZYGC3Fl0YX8FZ8FrhZCnIOQZVbdfdrmPAjA0RrPWCvovNGPL3ohYDffKX1pqmoXj1LZuUXZS9I1jNyPlYcC2PosMBGhYBAKRMToUC6/+e3iQ9anLYX16Md3SrXqN1Bw6msYa3HZ/2Ff62UvKR6BQuxGwsEoEdSqV7zWPlo/TGebAQo63BVtaOBP+sLN96kxT5vZjjfET/M5TZBwQAMbGU3bLOfXGxXxHct/XYBIDuKWo+vYSZ2+5+Pokz+VLWqhYU15O6KIdrgJt/srKOImrIKw8XuN+12QoRYuYZEf123f/D5yD5hexDwy8WKeHIbHJGwuOZKH86Xe6RE7QQL27gwV5fE4Lp6C5FHU9OAVCrzfxha510Ncmu9iQbidvfzEcUE64K/ax1i54KIURW/ooRjgnlc1MwoujewNDWdfVrr2rWmhnBoum1+7pRBZyb1wnza/D72K0wPSNM6vh4mMhLnXPUIdJq3Ounz2CjxbPe1tlGzqjkS8U5lP7e2euft5g6db+DUIjnZyOcnf64FBLCpwkonVzlic4TUBzly1F502vf415htLIoGtkEQq8kfLmKsLaETq8unhGp5Y0Z9ircWSQjXunUex/INgCUSYVMMjs/x9HZs4N/KQvM2blLQYjrZQi8h0jT+9CCt4nOZfWYdBJrHalZGtYhCnKPeDvjjs+pYymQLSC9A4BIs5uOLddpl0DjqQznAjbfKrqZdIrJUFCs2RWr5Qy854NcPfkHsXGXuYlzrzruuyz2wCGTOaMcDl25Jv02YK5x4JcgRhK4nxeGgWv6FGO+Hn/y7BKs/jkDhHlbRuJJtBv8Tg==';const _IH='4dfba61c10d5684cd16fd3ce7ce9895e79bb3c8292dacf72d541f53709bf07e6';let _src;

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
