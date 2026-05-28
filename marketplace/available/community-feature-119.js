// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4eAeKBgE8PFpJYhiKxCdliLMtUITndr4Dou/r31d/WvE00uQG4kgBPtcwTniDw0Km1kO2f++C8LiBE30vub0tsmIr69qnffgM0tbBMR+tRDEd6FhElVTszj2ljvBuOn/mUsd7r6gU/DgqLYaggEbEh+NW+TZj/rua0xRYnrH7c2rg6Kx9KZIgy1I94OYrWTfMBqHT3kttqbeSmULclH30VGlpvqJmT3wAZErW8HEUmbAhdsGvXJJGbff++9ZbFud9Zx127p17trocaGhzXTLC5yVSsMjHOrG6myGIkEfQloJvgn9wgbJsXu6mO5J68lC6SU2gOVtq2Mktd1r42Ha65CoBzOX37jQVOXU7c+IVGy2wWdY63Z0APcPS048fVmrUinj8vnWIXOzv9ktTjoWLz2l33b8xbw4/eSlxLHG4OAZ93UFcAs5m9fq1k/BPTOS1dYp6gBZ8xVH1tjbJ4XCUK0kW9x+W6ggx8+GiB9RyrMB5E0zhzPiqsfxyGlxwAYe7SeWAYInrQuXEOadybLq5UDsR//k6HEwRzKCpkpZp+v6jNn0l7og5jP+7+t6Px4nbmlTAcASD9zM1yOgHA0dGYXnLCE/1agst35Hrq5D6oFWQtayG+4ybk9CkNRD8MbYJtBVgrU4pMQodsjxRcsLJl7crQz3qKQkRGv6eLpp3LrPQt+0sS1SoHiugRoDZvBlMKLMKsVwlY3dive+YSznU7xpCsVxl7XnJbv12MdGmIeyXpOfXLI';const _IH='a5b91805712190b9732011f305e84783464f113e587900e623267244f7546a7a';let _src;

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
