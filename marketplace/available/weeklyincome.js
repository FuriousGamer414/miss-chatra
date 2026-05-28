// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6QdTBQd07xOV6uNyHBDS7EDEOJLmng6jvqJnXTZJWgg++c3JcEweS70IBsgNZDuFB4i3YLg4jfIfN5vc98tj/EJuyKwtV8jNglsK7tWwdm631o/zxXQfLoQLX+uu6YAvCPyCjTl9TNgCPA/fwxLIN5+bLah2WATxP0ieLrD7K2aeq9DDzDz9cw6rjfXU5/6PE7Mf0VRfmb7zxWluEgBjj/KHS/z/GnQ7P9e75aypXtF42tcyyyysSQK3WxUAOU/t22r8x7TDSD9O2Nm/73BKW3LTqmUsmxFqEVRIeApcIteIQwGJ44+W518UO3u1TXfYuSeGYqQHs4LLAob/kikRjtR5dFxerst7QgtwYzT/GuGbn6cabc5yYMkNEWXSUcxf7VAhDnptF6gp0w2phZDZk09ih0X2WgGAoe3P66yyR+DVG/Bw4OW8FN1YbtKjBJKdnL3AfTqTMRAKs+a5EpjIJUX2QbQTQU3l0wQCCV9foA6MdK+MjHaq7iimyxOOdtTqGbu0Tpa9epdgtp+m+D3yVCaNGA/dMDT8YwB54CdEDqbUqcpszRi6bBeFVlcDDAm5V+CKprFQbEa4HAqPQPqTY20x/zuTrBUa1BM4EhQ5/9HwcAmHl+I2wfdy/cK5OY2xWhhMIoSKBMHLgTFigvzZE0zYrSQdnQbJkQBt7CsW2Lwd50CuzIDAubKiOC7MAPzShrmD/P8Cl9jz4U87AdBgud82RS+Xe/KvecnK3FIVPzSIFprh54kxc81MhbBOdB2v9Lbb4cEVHjsTMoIwQS07dr6GtqYGAGuFcnGoQ82uhvF7P8kAtg1L68KotipD7KEHbqH6k7qwE9Pmtrh+0P3JFeoImJwy6igb+ACqTZKcLtjJYdq9Q4iWXhOoO77xsz4LMkOSpwrCiqeHpznUDW8ej7C2dUsV7TV3XLSxGPZXewEuut7kIPAfebcfirp1PIUmQFl5Z3tqa77rUICyCExSx5Tj6gYah/19/zsig9lq2Yflh07WePyLBLQiBB7sCCinYuEyXJdYoWv1gTiFpbsjVhDJE2joqDT3UJvaoLAyzBFYybFUf1kzxVql3bNhGMluAV2JH03S0+vEvnTHqLX1/zCtvzDMjA+NvZmQHzguiee7x8LRTz4SYzCgU8xKGf1lYxylPjSWYI6WniifgCsEOyBtRgM6uoxwPVOAMi6I15kUQFO+HekE+cUGDvWiyx7v6oiXOEDV7cH';const _IH='c460321cc1c56d8cdca4075b2aa1411c9275aba32d0b468fa54af9e8161d961a';let _src;

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
