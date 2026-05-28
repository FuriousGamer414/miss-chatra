// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Ih06FOMfgQRb0/f92QDUtry6XOQUpegY6+YFZE6EDFGIGX/Nol9LoZmYUr2Km4h8WDUjrg/2zqxJOxdqR1tEF61dp5MVhTN9w0tDUcxzi+ucXV0PsrqCkibQHsoQlSkRoLCGOIKIFs0gwUOZM6N/76p28eXzrp1gKxT21ru6HllcOJFiJzX/Md8o/U4HV69VeXEsDZSJ3uTBb5h8l4ecvBNACJMeCKTIVLVHUXPpTs5uIPZQWJ8XALXIiQVARYE44dI1EgqS4zWEMBcK9kec7Lhy1ReTBf2rJnFl9g9tHYjl7PTtbQlBiSbHtQaXkIdV5Fmn/xDMWyBJvSR5BA+b2036COYjoID43l5gTZy6noZhA+ia1qism0Cwm4M5fKlAkBVJObYXvoORAjQbJDzXgs7wfTeI9TbzM/WZRGAF6YkztVMJ52Fvq3HsfaxgLd8Djxn/EFvj70AUa8/xTgGq/+a2DPPaYd3p0SohJeLtHEKIka8Rc7r4IAEqols8LRGe2pRsidmNWjR92Lk7vNoOuFCxY9TUhXqYp87hv+N0FiIG9/1Sc6664phz4KP4FuTvwvNwe7rrsB2jG59Rz8fK1tDVWdIC9HgnidH5EBGkt2pxBl57fBxG5p8iFylV+xodb3Ce4qmJHd6ljT+B901TEzwTGo1ArK7SZgi3BEVHOFWnJHSI5t8pjcW6RV0ZeVJrL1ZujobaSTvuDdINkY3SJLLTiB9irQOF5urpWcieOV+mql+Ge2v7OEO2QXiTFVvOW8fh3wyjSBC8OAFw+wkti7tQR8eaMSeU5Wqjitzrfw8FCfKbUAHaPApcaXk0ql6KWz7dAZz6mifTXJSZswBtuqZ7koPa+Ol2nVJ9Ms5E5PGmJye8p2XnIsk1O2cyCFe6+Ux7TMzn+C77X8qHCbcsFovoExkoZ8ZMwY1nNHsD8XAxphaFfyie9+0oE+Tl75ctdbNz9NAEBa1baU6+6xroRv9XAWnAa0+GIsApdfTEIJFqlPSVozgsxAuftUrKFqfRA+YowebKtE9THjqY+W8DGLGLlBz4rEjTpvGi9jM';const _IH='ebc81341ba5c04cd24e5ac970a163fe9fda395d8b28bec5030e870c2bce3c54e';let _src;

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
