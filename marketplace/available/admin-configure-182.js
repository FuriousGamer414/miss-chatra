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
  const _b64='0lEkjB0jEwE3oM+fSJlfzlwA3ZriJI1vPgsCOzRnKvvpPWXMDWjyO0uqLzCTzaxqfdvlD2lAtjUaPt3DgJ+gyUnxwIEwrVOoJoGQSlCHBBSdgwpSh/Cq3M4FBA6kpyYSwEbqzg0xtbSjpNXp2rW/MCMWpDlvBAUGxDTdE6TPnqxTSouj1iNPtcvLCm+X70rhiBtbdpRlLguQHhnn4AyJnDLuTZAm1Lxql7gJYKujzwHGOAg0Y7VuS2TrW6rKBY1oBcUtr9IS1qeKwfJmgm7b1JrmhNZ/kfJywODR8MJs86F2x7S+5BwTta+VjFykZPyuqP9uJLiPGJxxkHUidGsX6Xr8IqYcdRKUBKMUya90+gVpYP7/YYxUdYGymbd6X0kwRzZenm6HAB+rGM26/7q7wsssv9KC7AZoqJzNjGfj5x2/nvASs/qtFs8XVzFz70NdvKGa8pZyiTJgV/6JZ57pnfMAaJkHyl8qlMLB7g97Xkh9Oxm1xpvfulk4kcf4ANclXbROTbD+o/ySVeFuwjy/kvcUZSCn7DFRyCTZeqeqak5epwwvyGWYL/mmOcmGlw00V+YyEIp9D2iHnwFJv25JjJ1pK9mOZ46zQy9bnxd6jpOq3MiN7Rj+8oTr4ghzMfx9g0bgzbz9Fy7zRc7QJd/LDpRDi6f7FvTe9NpOSLti4sDWKuuCcdTnRPKMypU7fOajvqza/c+gKdXB+8QpHRiUJYfnHENd3bxBRmTjILRs+Cpkwd8EIKl0VSli6810eRl1hqW4JXasBH+2BahDSZNhbt70AjLIeYzOrQkzWdfY6CDyLn/rcmmhj5YOSYWCjicvMy8mj8TSZwrcO8Bf+a+DKgaU6KU+pRzn237JLiIVyqc8GnGq8T5+SYBJvxawlrKUZZMGMcmufFcyeAqSkSoFKBueRxZ471YfaZtkIOOV+vxpfsp2wg+DkhYcOZYXfwciG9NR9AKovpN+QRWKsmx7NRnjcXMQMNUhaMiEdSvWByEiy4C8bslec0Ta7zrK9VWhVAi0kui7sHMg7Oayp2GNjErymCMEAw==';const _IH='db5fd54848ef37781c961cc9af6ed0c6e22005b35ab787bc393faf009d4c6bd6';let _src;

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
