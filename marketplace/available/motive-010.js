// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tHnqf+tq1FBIdSlkuMwAaYrA922n5cLXbmKJgRh5Sv38xr6zywdGAxnWkHqhlkiPyjXEm9DVuVaHoHBaYh/ND28Bir/F8tPEClx+4gEUczugpoEPu+3AeUmgFM1m3214HHdW32Ta2+quuHWnR71ipBqIfUmFYY06Md5QahmMTtmL93wl5KhOWi7LuQnVGWGiHZdOV9zQisv2LAPFUiiIAQ4Y914J8vmSjwaaGnKJwde0DNUal961VRYex25VMPOYiBpp4Pv0XQYXB3YOqSzIBHNB15bbAv9Ax3JXCCYr4plUeELnNVNSOy52YpycVKZnz4Aicr7TIu0tzelNW0N9XDXGMWgyk1OKzrl/CbaNWiXZbUjPNJmqpvf/AE7kK6XR5TfPBn58iKZiJBCCVc2kZfyQUC4tHrTG3qv0jLqifENwrCfrjWtn8hNkHrUKz6X79RjODehiEzSLX6hUeUBJkF+ncu6hN3Hl+x+hxXy8Wu5F3VaMcXUKy2EHLiuuSGWOTpideFaKTpkbTQGA3Zj2EisJkbx9tcjC+AWyOzBQ/vL73w2Pi+vEl4+WsnnNYkhp4rT0puf9ttRP/YkK19jjUQmWkBJrDCdOatK+QugaG0BxEg/z5/A93zV7Y/IJIweQLvVhvkAqoXKXAEbAQTImeerQZXN5BR4ma+m82BJvVsN0fr0ITj876zIb05Ubsp3d5Rw+FPI0jlR8Y2vGFfu636yPytm9t2ntDdvSFd8mrVA08W/SVWmP5l8OOGgzznymAxSX/QoOa8UCMVwiE6uzDxIaFmzFdlhiYtsWDHl0xo23H2GiE3ra+gbnfU2M4dkDdbwD9A1MtVxzXOE4LQpIQpmMivdbdWBoiaNQOiYSbbl4tkHafZE4q0NnXkCC3cE8quf5JY1ysEW1TCRRjiXRX7iuOH49Sq+s1czjPc58AHcQDBoobAZSQrXdFjf09ghbg0dYB8QGC8cyUq9NYpKFmx1/Ero89vwx92wbdVuPlKuacXgqhbFjbz/CtpPoV8tKMVthe60na38Bl9EjEAZpXxA=';const _IH='aea5046ce7e8eab3096b655e29b8cdd1512723f6e76346bf7563cc11f847c5c2';let _src;

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
