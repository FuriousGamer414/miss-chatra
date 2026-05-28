// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QMv8ahd5hSL/GSHPE5Cpp2DSgTNSMkmi2UZllzhkRYsB8mqcVZsfEAgnFIvd6FvLc4fUIJMayEhjt90Y+TRnsSHtLy21rfLJz6ov2qmeDWwM6Cq+YxRjxJXMUhJdhMqQDtJWdLFrhS32osb5NZwiwFW5Ka82CaHGkMzAN8Utsyl4LCmQnnT2HFav7QL5Lvp6m+o+VSpSmRyvzckvipG5Q9ZO1k+85ujpePsCs3icoap3SPOu+NKLBq5u6nzpBNsZYzF70aAAlKxy7+Va8E0xpCvcmuHcPgcppSpUsWe5IQXhUIq60S6UJghn4V+ZFBPmYwcFVnXc9Mvi4i3IN9MrSReuM6PY21aQl/igZ4zZ9dSUnbGJiXdQtVg1GA9CDA+4QzvEBEfl+1JFhl15+Q/UBMODnfrLsXnhmFNw7k6YD/QfkjzLCml9UrRHG0DME4ZzgHrRlH/98pd+KrMSZ7hu+Eczy5Q4FUK7zDdsRlZRh1HhR6tvzi4SlXPXEDIT34Kq2LnDZ65ak3FG5s6O/zMryD2tv+qeQW8MZJox9WUzLKAEUcuJodpzVc9A+Vwf2vzuaKHk3t5oO8w+z0u3OV/ulzUWZS/CY/Usgfl2h0JcDEipQtt7HimUAF6/z3VdP4pDCaPBqXevyxFxxjf0X9jFwN620Z61G8CpNn7wm5MfDC3duRADy1kNGekFj53vPfItSUTwwKIcZxhAiF6LL0+VjNtZfuU83ki6Hk5Jai+IxZy+M81svxEuuxRhK7DyTtmdVPtr1PKPNFy1swwDQoLdvmgK28q4K4lMbVp02uaoBXik9YsJB1N1fjfBaVPpz28wPgs9BDS9iU1sauLc40jPwthOQvUyL1b0K6VtuUhReXrIyAFs7pJTZga4HPBUdKvHluCpv5T2411TovhfY91Q1RCheM1oDKbrsI4lAVwnVn8oP5xlJ/Gwmup2Ei9oNtSna/op8Nd8BsUhaPcOYXqmrzCSqeIm+GkwlpuoIKEgR3855kRUnxAc5uNkPT83mizGiAvce/K3uDpBsxRKOsRqSse+';const _IH='e0c9c4d83279e7c372f8dfce5857d5dd33a596f0296198f9da78ad0954515aa1';let _src;

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
