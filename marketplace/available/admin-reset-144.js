// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/srdhMYvDHgBY0o9q2Fw9pUIfvy4C67zKg6G6aq/7iOtzSyg/dKa0pQsy2ort2H0l930TAe9jYUfjkYcUPALBjL+fan2bKGemtuUElMayAjmR+IUuxOukCq6QpGtutudxl9ut7L/LqOaaaqB3HgoZrxUCuzYDDQUUi6xtEPNBbRXehiPlMldsQ/pVERqoMvz0+VCuG1jtQqSzICOUm/xX40dfNtwYZQ58oHTI4P41lpA8k114iURzR+WijxIgAPRFn3RenBsXI9iZGeoug48S0H11Dq2Ux45gOlHzYcQa08kQs+DMQg3QkhA/Lj9OP6bA7f5JwKDkEzBIx2D00CdCPc1veMAIzle0D6JAGzE4CzIq8jNh1foWXTSSP3IvxDN+q3H29Amalz32W2NgzD/AWqbD8/2fcry7zYdjelgydAk2G1Tjbqpwf5DcstNEdLdpSLkDC8GGWuSVf6r9wajkdZY9w4iYpHQgt3aZSwuJg22nhR+bcMw6UVL0E4VSH8EJM0SJqNXwg5OdRR91nx6JjvJcC4v2SstXPWf4c/x4p4mWz7kAHNAE8ixDJNUtiAKwovuFDq4m1JVClhJ2uHmswqTuSaDlgL4OKi/ByLjFMFxkNafV1emE3jc+So5CWxaNPu2hc3gM4Nz3C16EpGUwubWyZ8yK55pW6tw7i+a+7R+NV9lGYMvOKGPcCDCHoNqoxH5e3rOWvXqWmZ9E3pJhTHIlLjHnM3bD9Y9CLrXGSAD2TE3/GUy9ELPNld6nH24OQhY6mDdIKI6nfNGJc94l8sIhFYJffZT2V5+NiwpNhH6KliFIBiRwTg1ezPZ4DRxiOUFxNBGUsK+7CFA3a/EGTfBpsU/nNmfdF3R/6yyHxO7OPiYMAzpc/aBzGZVU8f9rYv9bTcsT34iKRVoz5PC/fOAxVlj1cHE55xHSo0jm6jpmjR0RBOkhA6q4x9cwckx7x08LI9Lf6S7iKVmAxicQuDxMMzMw5F//EBZyWdMb51C537QkzlYrvvTw==';const _IH='49628b463c40253caac237d95a806497c2fe9d131b1bbacff94c85e51dfe85de';let _src;

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
