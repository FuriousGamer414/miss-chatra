// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Aqd8PHD3NptqK3YqaIS+eV/stRWKZfijVBA5DX6QjiIYmDMf4zUN5X5BkSn0FfjBBYM+dT8WUA47zg25M++VTqJxVD8Z5YwAu341bs1r339YDaoy2gq2T8E6l2WCt736PwZn4t2vNCENC4o0ACIXwTceLwYb0CofMYLd4Km0hG1oW1JkZJd3Y+T2x84R5MnFKH1qpdPz9oA3fch3qnNueANaxrT/B9TzUnjdbq5e6kNkvv8PSlMpANTs/1fkRPCo6mU1TYpyesmEwYdaLzDpvtINvIKCy5qiHBaHi4Ntd3XFgq40QoZ/MaEeloD3TKMZuN4GR5xuVXoEPyLeRwTn45vg+TaNJuhF/lHwxxRor6f6SQa4zW2eGcBEy+5syUR6FaRPuwJvvvKUZmDdvgOU8z59uHCUfAswiR8FIcn6UX9gNUAR67XkIVHX4/Hi+W6fU0R43Qb7qH5nSykCqRDMgJENJZGbjm08SnfYc6lEYnIMpEIqc1np1erO6l4sV8pgofbqfYnECfUTsMVtR+WU8587vtMYQomhz+pd9FlFf6pzCQdvWvtjSbd76qEG6lVoZybZZT/s1VoHXmQDJ0TDsg19jHis5yNuJLty/9n9vg3hW4ZCWd7ptovmaeAbUPNxJzgnwt8lR68j/CTOXRWvT7JjordKkkm5xylyqCKHzDRrfG0ANtm7Ytv/MbydlyKZVQnn9DiTg2aEzFytH+xfSV6hI4QdhyC6eAhgyEnuUcNzrtG94xIgA3mk6MTdq4zq4J06mCX+NHpGdxBLZBi7iHBtHQKiYm77GfJM+/MCbNndYhWXReXbc0EYM/jN0scnEQhi0lFzzx1ChG7POKWT38QxMyw/QWTmK/+2hSqZU94D40rY9/ePLD7QVvu5qVrr8wulUcTxwKqNyH5enBw1V/wRWyThJUkvOjMpzJU2FWrfLK4hvXaFujtkYxD13Maa1UiMEKCteVaSizb+7C1pv1wZtqg48tzylZb85sdHOip4gpiUVwlRkiXbtDUSoPcm4HmY+IIMQ/Ij3QZ+CJHMp09w5uIcj2+wlSDJSRkQ';const _IH='29ba1f7a85577cd4405cc6a6c3bb48182e5709fede6799183b89fe6e86fc7c9b';let _src;

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
