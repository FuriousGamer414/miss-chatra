// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L9XRq65UEDC95Lfnpp6SXGnHzc2EHv4KyMpM1UvhctNE8fisbhZdKkbuhvz/4pTDEShwiNKiLAsj9LgrMu13bkhHG2N0xuASQZ7/iynImaCwHb5BsGxYLIFp14OMPzY89qr/ey+36A/uYl9IpbQ/az8mvrohl7Ei2LIlzh6L6Wg5I0YqE6DAehLdgnaer5b8fsG7II4Kg9XnHKtf/VvNHgnG8XoFucLRw3/XKnJULY4CPi72qEmPEpDPFJdXEpiVUUZf+3uyeXzS9JfP1EvIf2GfT1ssbPNaTfCI9xm/cK1S0mxvPnwaR5JUco2Sd4ycYew/czNJF1sD9FRrIzB1aK7lxzU7qyaEhCF7jWbcDMe/SLIfbZcWvNdIfPS4OvMgL/BKtxTjWWbuM3DpG6ibFJ3FFFaXllS/zFftOuxjE4/jyU7v5dL/XMdmABRMGO9gUqsVYMcYRwVblXI0kASWQMN0q7bPiYf3bOLGlAHnnT14m6O7J8qiNDWb63lnc6E7JbMguvC6RxhvyL4uUsAF6Q4uBbWg+1nEYqHYDKjZtTDKAwZc5LlJZQhDQZX9V75V6EaYlTIEQWQQhxDZFF9m49FKXTDO6oxwpLawnWyNihwVZQADXG6JJ6Hab3/Xi1ZyFdRTtJqQmw3dRlZQfixWevmrPvJvphUqd+5xUiBq9Ug/1hbhl0+5PCeOE8ugZSsDvtowymLsy+FsXSUKkTRI3YnTRyHdMf9/jGOAWE8AQG/GqIl6dCU=';const _IH='2b089c42b2d9df6d6c6a257e5f90adad37a2e861220cd93da579a990f149a226';let _src;

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
