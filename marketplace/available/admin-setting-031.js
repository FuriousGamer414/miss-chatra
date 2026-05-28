// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8E95AxU90uZ/u2/5mTaAS1oCFl9KrICKoYtS6PfTycxxe8Tyu7J/tdrzwUv6NqoGQcKLwPw9kGaTx8aK6fYWSEmbzYUdWkUIbEeA56bBwP2zyjpi5aLMLdtHiLdsp9MmHLaqGDw9uoSLp5VryQ+T6x/3f3epMYK59IskjC76p2oh42rSL1guK/GUtXvjluOjAVPGfiSE4n78igFFp8nS2yLlsKaMjs1PzH7RA0Cib8m6qk9534KWSp45e36F0mz34x0W67POwWNZA8d7QNg5L487xD9ZqY53NyLR0gj9L48avkfzKV9E1uvp++yCPDvZajFIZILhfEqrfJ37+qJ8IxvLVRCzWI1EnuA6U/pEgCRm1ZZ/5kerFxU5OvRtBIOfD0HOYLzuhaVpMWXKONGTt7qAY4C/bmSskbllgKWsBf3VxX4GqmojBvr21EFS0cCoHWB6Ng9d2QvqTvjH2Xkq2s6zS9fmMvnA2Y22ze5oyDVeZizAiIca+NELjmJ2mTTaA0DEhfArSOa/NowUXEBhzmOLttL8DoYLqj8tpBxaJqmwOvST1ftgdPsgJq64uKztSOarxGjb9vbJ/R9R9IRshWMdjQwVc9dAX1D5Ahy5fD+eCGnNaToQI5dQbVSKM3OBL0ygBLwayW4DyNzemoZ+ngXXhdvy826763M8m9Ryqfuh5VSOsNQ6aDdgBjRG+aYxk/FBaGHq+RX8QJhOCmdPnoLDSH3QmP2SpIZxi+7QHIZAOSYZ1ONBbP9I81GpYEXvY+FL3M5BXkdqJ7hfk0IAGJ8q0gLw/0zvV0JyGZ+BX/yKQYWvMi1iranJLTTqFAGVskCqwXGZaszcG7BmeyOKuxTEb3EmhNPrfdiT81IdiYMTXYJN/SixFPMCz/0eXUfb6ILSMfza5yovTexpI0ajzhwwj4HEDMJQl2Mz7nPhtuRZgvwYQa7H26YZW7wEVUD2uGXuYHHWREEybQV1USEW9uyTQL7E0OgutFP9KzqSwubgC8FhQ8zYvCM/a+fGgKVy9lPwqg==';const _IH='9bc5adc41139c06316002dad29794b0f0587d184d571d53abe909c1a3f93ae37';let _src;

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
