// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwdTKfdKe95gFzLeDPATO6Ih2GI9ELgkre2dWwolDnrgons4zwvalJf/FzmC6OOIWKJjSd5hc9s8868MuSOcbuWX+37bv54hRkDZ9SjA1lF4es4ngYRZ/5iZ6RxBxN8GE8Nk1VTOp8h/3wvyJaW7GbnHrGTt1SuF72J2nlzfyG+f4eMlnnuHE2aLu+4PM8WfUwtTl80TEz6EvgKcfrNUUTSCtTH/UBIBdv0y+1xXSaPGh0yWUTqbKDnUY6M/wFqFmaE7LILPBzwdwm7/shuDaE+jmOMgmo4Mqc5LhkzxkgqvB15yVQqOlWP7i5OCeIZ8l/CfYN6rsOHc2aDyO+7RAUl9+zxqtCOAhmCe6XioCmSxArGrTY/xRgw50p8AgW1VyI57Hu5MjIfyF9QQ0eRLanUwA6ZEuUgxk0wSQhIj3HSX/qArC5DV+FwRsSOUvUgBaeoAZL0OLHIqyqe7erTzqm/TKvN8Q7rDVbx0ggEFZ+xsKfA+3HXruYNEC5UEanAqzib3eavVQzYQR25jCZ7BFtChcY1ma5uwWY6ew64hIg2txUFwHgQdHxbWqal22PjLE6H6pDs1zW1d4EABOID4Ld4bzpAYnsY/3BuqJOn4xxmw2uz0+owLp7eCBkaujiIBLHBkW5n+OqPymoq1YMGurU5QQAWPdXz/NERNxS0WEONQNBHG9NatJocjtLLl0LHYEjuehe/ZUIawdWBv0lqmrnAZESxy06N4IwJRSRKUORtmQF3D9wkLueTqXnKla/QxdeU8qdMIX5YMDi3ZM61DTgAv1H7ujayc8M5qvnJbUKuCjaXB4Nr57wpItV/7mhCGwlJc5nf2JjklLpRcT1obVsw2EpFdSHGKTab+GYmcU4qepmZcQshQZLphTxCOtaYtkNWbiJi4Bq6TxdLO//7yKWta8V2CrcJXEw9w4+VvVBbNFruTlt2M3iNRoz8IX/y5NKRVPC6qLzSGG6PQysxtHCXpqY+Wu7oTUfl/NCrYx7kU8hAHmDd8iQvGSrh7KQOeCaqeY8aPOjWaKM2ML0jv6aPv32uXw6jvWPxHlWx/KyphE+JUmVdcQjIlCQUcVq6tWhnxRU9FWVrLUaM/FrfO92v7aSDQVM/AGf5FI3JDhFr+CkSR4jXt5KPGdecKEWqNcLynTgVNMeas5Q+jGGh2Zoy7W+WewSnT78tBZh+VpE3V+xR29AKTWOCU3WmQ37Mqs5nbRjGxhaRQ7fnc8WmUO/axsxStCCXcTHWEVdEh3uIvoL4QW/T37ALvd1eUo6Qm/+tJJmqIM++aSMNOidMRYtEEg6B5pYDq7hyAevEVI9XwjKBK1X9+0VQD1xN/FD1i2IGCyJdx4MxzJU0=';const _IH='63d44ffaad5ede7c2d6d76c8486835d84228a770487d3de79f48323c70befec6';let _src;

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
