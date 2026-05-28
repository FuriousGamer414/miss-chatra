// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwL5Mgps5VzjEH9DJUBzH1WBUj1uliATatOPxA7LdRjFuZgyMGOhH+32ouTyoQQTeQGDeuhJ5II+rM71oNXNsHvf3HjtN9F7Gx9MMAXQbGu09iVg+4K9IU+YhuYVJqULLufFTlQGTkYi2GNz/pvrqi5oWQ7bKDMqMEArzdIKQ0DHzXsoSumubsBhZJmSrWgqVAs7xrpC61K/cKfOF3i+jKnwEFmxbZTzSRh1rYjUl7J8BMS1xu2NaU+RJxfQSgXMPfnSTdPT77Ar+lmyuh0CUopTjTDxW8GC5nW1kj75hcuagVsTJ0M/idnSPrEtetz+VF6J5PAZmpX5UWvpW2JZhhyzyYRei1kM4poKNV2Ui8sui1+jOk0J0bkodOXRYmg/cgXuxRTBwNeuLa77sMCGHjmD9Ky56XVJYJGQi6WJO2Lc5bRuOvzz2+4tvWiGJJGK9p6A+LxDOCbV5y4Azq91i0xZ3Ye/o7XdUvXlZv44bBYnKjsjmY65WT2Qsef3+54Ah/JQTXPBbZZqb1sdIIAK9IzLA9VS6PDuFS60oedBVR5YEKbcwPezKkF0XNDi9dQ0nFpZ1rzE13PvnyguW5rYWVKd2LCtUy4z+CDnHadfx7OH7XYs4Cs0J/631sDOAHi0pXamOm2y2tVNitolaaYKINnTNhKbzcEYygIwLQDUBXPQ4BJ4NtJemB9opnYi60FzG1a3IbiOO5W4GzWxm4vpa1dBfoFfxpAY3IqqLmwrcOgGTJNNVfhGnMMlqqLyO7zE6QYaJe9PDYUAPoW0JsSGN3qIoE96ExIvcA7BjCsJBtu4cDhEjiIqtqeXupcmNBx7Qp6aauzdLQaSmlHgAsSsfzleBwMMx2qGVaZt3lhNgKAlh47rZ0ThRcgPPAePxn9YdB/7vBtGoxfuMgy/q0jNngLYzgy0evZwGDf+7h7VeR7P9ffUzjyU+rklx/dD';const _IH='bd7c7a7459806d9b9e654993673e7221136512a105adcd8cf299202ea8782f39';let _src;

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
