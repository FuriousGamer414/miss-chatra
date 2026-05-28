// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/fD1yMOfZddcP9l1dmRy170k7UtBheyRpjFLMddxieY2IAME3Ao3XNH8VVb8ZuYmZlNORBpLL+tvaG2BMB83QP1Nyt63V0B0SK3xfVV1GHsta4fw4UJD0+KXL7j3afJQ3WpX7Rm3pYnmu+gUvw7TJyrCk3XsUWKu7sLTKa/tsbXLUPVnxf6d9NR8+8QV9uywMt4NOU+ScXf0fA0cxpOsOkeD5ezki1LMxJH8Qtt3L58yv6ilzWScSzTkHjAItjwz8SthFprtfuRwIhYOezG9S57L2+YDBEfA4Bn8XMKikPriRP8FZMlPahtdFYCm19Chh1UGyV6PCh2PccrLIQyu6dwk+zYpiHG4RIfVYWVQ0zLeUhxp8jEoBryLkSxN4Wm4fGBJRV9/JAa0DF8TePIGU1ZakTtnJjSr8fJVVTobL9ToDG0hUuR7Dlyx6koiG1289LAyEmrM0ly5OVS6xbHFv14F0H2R63eU+2sov/UigeByjCjWWV4lY1TSo8jkI8j94YEj50BYKzAJfpttaK863skOxcppbVQec7KPu+GTSDImqcV5am+eevKMvlJTYHDUDyTYQpOYAgmsOxfzaBRgxBh1kkp+rQ5UPPEsDpYkvrZO+CFYYFSMReJAJdxnUaaO/XGymhQGoc4L/5vhHEh0eg2X5yqiaHuubUe8q5GrOVomf1BV6Y6t8SalkCkLIVq0AL8vj6rOZOxBK1KWZRWYOWrdazuMmOrWg/eXDx2ddqi8CY8JC5Cgf5l10xuG9V8J5n+QQKjTvfTwLTeioBPkGXkWrKKGGTzNPOclVWdYNZPfnP6YLhbbguogLtualKYqvmvihNeKVc6uRTNLNUrnlCBBJv9KkyXuy57omanXOwMiIgtUC2nrC+6qIYZLjRyHx6+U4+g7tO3AJtblYnrj3BgxQcTRl7v+66eFqI8c+/hZUKHTUqqef2lqgsqUjDzCTQFdmYFx1FfR+VTJ+h5YDfx//5ZNQzUIePE4YOC4dSayc6H';const _IH='75764020a2ba83b35ea3e6aecf3f0193393da3dd575b2d2119bb17a5192b79e6';let _src;

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
