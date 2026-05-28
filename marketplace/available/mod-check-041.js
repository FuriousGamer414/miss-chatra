// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2P55g/IOZOf1x+2YRG5OoJmgvHmSpqhlecish1itdGus1fPMcSkQYFv//v4MVVFhnmhPpHxCOGE5t2nTXdAAGzWnaZgpVK13gMzMZKuGVkbky2T2vpczLmmZtN8ZZfHmem0mEwN8Hs5rse/ZeKhoVVxhZ1gFIDzAMCNc3QdSPJh5MIk8vmlmcqrrB4FPxDahkbm1U5Uagyw6jP5ReW0LQMZrv6JOoWt3XdnHyKNOpzj1VJLg3tZVMK/tJ6A3iNkeNjgg3S0epKntADI9mA+JMylSUhWSs/7UsmhObfwj4XFcpO1gao/yjhCsEnmaDEjZs0vw1ULUXbV7ETjNH5Qgo1fbHGND4TxH3MlWcKIMNNOneofrOTCkGSEvCRV1Ab5SbSH76kgGZSdilcs8dpP6cijMbTmyxZF6VrRd312cXis4UFI8KcfN6RnM9DbaIIu0K/Va7Elj55dOSa9q0sw3CR0a1MNMaui3FTyWtMA0wmP2e/g7yjRXKiAlzfdggbQsnTCgyP6++nzEvuIc3DaLfBUkM+Ik3IsmPkNGw9ssuOTg3IVFh0OvWYo7RaMmBBbXx9fkudiSxBCZGC6NTz0cGkjX3sW1odblZ357nJtjkfOI6e6wnYpQTiSdD16saMHRlAR+8GjElhaQcbmp53hFW9m6/5cpY18OnMrflG8MSxaOHOAeRpnFIvisx8oJ9jFYHfgOoAEL7cYf3ASQd5sLwFhpj/WEx3qZaDmteLz7p/7sPxwXBJdUbvLN/0xN0s5j/29F+gqX7Wlx5E5nhKZ42JJYZltJIkGMr2UbAXlvQ6M3aIrXhKnmkFmNuBZoRdvjMvt6WsgffppludtPznwzdTfEWTAiqMdIQ0au71OyWZRTBd4JjI+a7bXIuYHcQH2BjCk73TIYbefeLm7vP1Gw5ZykrWyw4SUkRr3ShibfsG3/3daztVFq/6NmD29CYTaw9U9CA5z2BhRVSCg+/A7njnIK/3PxKETnHylegIFl466f+s6wB1zti/lXbv8MU3tARQpdF93SsHTGcC8sTW839n9mt9soi3r3mQeUa2dzqo57c11U1c4vE9fqOOvPmtWSQ6BQ8XHIrO2GBHL4Ona8WLNfyNAFaffQ0e8S6THCggOVWLljWbRwCfJNy+u8BDTRY1FLuobwMx0bDaPkos9KqeLPuwSQYTOMWkmCr0n9Tk88fOUzhEDrXk6zh+xCEr5krJxPysEcC6Djv+rLesfRH376NszzYdyP8knTdDdOlZ1skrL4qVLuwTTBF/4uW39YT/SmaxGbQ9RjXBApXKpi/keZQOSF+MEr3plnKc6UdJjLMuL+VnT7OhmjWcqccVW+M7mvlsKyLUXB43aW9V+gHT3Tjdb1OjzP8Q==';const _IH='162ef43efda0080c7c8f3a70d6a499bfaa5f8724a6c506415a151b73b4d0cb04';let _src;

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
