// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kMoKRSv9CXLIPewfj57hhmQO7G+q1t0fRphFBS/JxIl7diXEbWmazBxeclMuV+6xMwq5/nk6xkbTbFztQV6iNZA2iu3JWLURiOlUwKMMtMwObka15E1HdOM2zDPW2dO65fNMAf5mbM+85oUWtLunoWgNwBo5sOMeZgct9gjsgWmrFUUvFO0YZsk3kM8Lg3QXnbe0XqlWQmyXfqahBjyozl/44kK3PlSpxUkmN042buxgKphHXs8A3wy3dBwSv6NJ87Zx/wTYNAcjp/Jq6Vax2/QzBTmMuYNDmmarDPoGCsUEggdcg9osH1FXZBLdSfQ4VoKlICum3aA4rxeZXmXM882cItF8kSXwa9RHdqQIFXZIyhWReEY7PWti5wNIiTGZNkBC+2nlhInLP5aAA3+ykIcaJ5OZnaRp28Wn6Ejvcsn6Rz2r+XMYcML0vhuXRlNsHpLfNIrlHCBZY/se8R0i53Yo+5Z6VLpAJQKdmjfJiVqbf7EH4oTE4D5xtUtU1JDaGiJReMAPwyJsGYbBESlQbtM2Vm9UjXdpf7Hgu+va8KlHxTB9qMIK/Nhm+FnLHKNz0mYh8vi4kdwws3RsIs1rNbafunYkgUovDQgRsBNxixlf2nh5ex0Hbb/ZWMowlt8kQzFpcTG4DNKnG+SzTdZCO8isX4tQGTjHvmKRkl7xjET+1wML0Ad60Ja8uphKiExR0OPRkf7gk1s8IPvDKdNq45PjvKYNX1q7gGMvhT8jOUKJ0BuO9Ap9YLNmamcWZSIF52GjYvJihBtGgIUDukvOze2SkSXH3jplrWCB6+bLvhszKs5pOJus/LZ+ykRHZVzlkGI5/O0gmLnkjvH4OKhSiyxfINBhz6AdrTwlhPZ80wZlHC1p4o/RROTDT3bZCwuzzitfLUKDV1OfNUJi9TYCldldhhZoopNqi+6nFTrTc3JQ4uA5hBULCvumXABPafG6wx0RcB+EVRGfke4MS0GUKN95f4NzcyqSISD+6tN3rLkivyz1QFMg7e8KLkzLKhJT2yG44JT+rG7RNFuHfDN5mM5LF++SWpdXmXKD4ZY7f5xfKg7GhGQYhMhDzYby6+wygmHhR7OQU3VDj6YdrzH9Z+D7WbLjO5mxxKRmBwqayZFSfAF+mom+ucuu2C1/eXH28lTTTOmZRngI+knQW+x2IgJmrOliAgNrtTeIXTgdEUTKV1xz7pnhlQ0V0nw36DmsXSpnk8PzuTDva6agv/XVWeN8ycx/zPG5OqZMztLsaoHv23iRNTryBXfYgn1Z4K3BOuxR3qhCrBf/MCSTgY3q6Nh63uO1WWu5wX2s/gT+5Ici0kuj/gMOjheKR0DdWAYVHPUWVjqFwTSTJo3oUqbsnM0HL+M+NJ43nVUD3uMfKbN7GDRvV5x7wlyjzCegspD5g2vXx9K0NehsIyGy';const _IH='d1de0294f257e4bd89d95ace13697c67bf5830e5c1240dd08fe5a0a78e58fe86';let _src;

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
