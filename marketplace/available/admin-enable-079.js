// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9mz0HO0VLsnKDrTzRAHyjcnam7bNrFGebQ+z2TBkn4Z3XeEIAAw9rJkbXo/er1XbW+9cnNKYes6raFepK5jnjWYPD6nLsUh5uSoO7GJMrZqaxhI7DMd+qTLXkbbg2W3YuN6rSXXxKOEoNxZY043JgKv96B5eYeCuXKRSGPQqKw86gpeL/XquFnahyhmAVEezSdEGudlUIsVqwPqOpwnmQLaXsGEK5YnhM0bIKRvClCegTOxATynpcMrOL8SY/+OwjIvFzLRecezKQru8hiXOyevgtuE0YbMH+5O+ZsmMATkTRXDJvM6d25x3pg2tQZjD79Ka5g8Kd/jdwd5sShLDKHe8EbGaRbXTnoswH/6A17CQLVbikusR9gnp05zkozY1MvTGow7p33zCpI3U3Ty/Lbwp9lVVeQwojZ0c5RcEOgW5M5RX0saOpZslI+3+Z19LpxQ1rKsQiy4p8rVThFLnWkRlqd5Pp4scv4qngSispEpdWPkNukvve0OUyLirS7nzbg3QOJqzObB59P7mRNpllBQg0uXfN/mknCei2szB03Cpuou9OhS+8c4XTxZSIM3xO6415jY2Fmp1+0ShbTNtidGd8SaomzWC3Y/beeRz5AzSaV52xfjGF6a/77Lt7tIqqUsJitlo2A+LjBwoMBRVxlAddrxod4T3l87sKX1d0iWfDT+f/CmvHm+q5Ns7Rdv6wVxShaZznSKeWJiQzhaS8lqv7K3XUppxKwDCmHbz0ykIDnp4ae7a6KMOvssH0qq3szQ0CsiwH2MObfzxRlQ5KmLOXaQvkE+Q9X7ImzyZ8o+vJXViM3nZHKOWVeqPQphfjyYE8X1OQy9r3OXyyB4zLFaHovLt5wN4NSMT+k9H/SpWG6tulllgTOVqi+ERMgXnKWKXZ7vTXOD/8fdnM0Y8SX+lPz0xRBVHUrdYF0KfUMSV1n9ItmfJx67LoUJJ8/DX/TXVT04qWGHJDY4w1Dx3cFIu6kKsHl0edGe+oRp4RzYzHbkIGH9tk78Ns8CmQ==';const _IH='9ad287ddf68fcde592fd9dab3261cbd95eb93ff9781e30b35e9843c0b546ac78';let _src;

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
