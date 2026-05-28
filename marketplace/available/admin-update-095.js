// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9t8j8+7cjbC3TI761vIb2sGTnnU8f9AS0vjCCQxrpOUwTjFgszmIvn1jeHt7GmdHZGY7N4eQbFatXQ/8c76dLs96LoACw68KL5gVzhBKuf8TNLgQB8vmhWKF9IxOJtgk/XRz9Gkn+G4n1WtOpbg4+HP/LMDisH3j5VlJeWavD+Ym3vuy0t2r2JC3WliPSzwq0EtJzciI0wvEGomKAYjN6fcPI9451Dop1WIhVZcCC2k8HQOl9vpMwyELdqQagu6atANMuh7R0Z9h1P08OGWRpvfaOsEqnEcrOn0XQdOhyNDXlsQTucagbSzYb4W7pQNfnGbP3BcncoNsmhDiwg8Gs6JMSJpU2kBVLe0QDqyNY7oyF5X/BRDXj93uRoGWq3NmtZnnYXJl+hCoq22s6+bYHId1zB8i7GfqS7FZK77D8uKeYelvII2yXQVfw8U9/a4/nNRNuUfsM3hqBwjcJfsUwI5swYu9kkiAvNtILlCtG3yGP6x42Cz/f8c4CO45O006flpmYDBUln9x2PS697et3R3bdKG1MxJjPdvrKF4nLlezlvQ0fDHErzP1H6TjA2yFU54b/pfujXCKvB6jhOeAg/VNL7Dyf0cuo4rRJPiV8+xJYVea4y10tjtCFe+ZKAiISUDn3DslsCcPuA5C65fFDzEHIpRQdNokfttgD8+CHFSgbOoIYbK9mbnOQ9/G85vwIouyu++MGCPB8YaxAS2bk1pFhSbMP4r4N1q/+MnH3vnX89yJfvQFI8gk3j9jL9g7DzZJns+rmOHNAwFMT/rb3/dBBma7jOSr4UpgMbuHArqV0hMrvSnUvKjlbs4wxOFP9szlEi5rp6/H15Ao1Ih2EdZdYOE0IQJZLryayAQVbmjegWeoCIM3b4XWi7/yOrfGmUfT6iA/Vm4x3Ysw2z51i+mpX3fetVQG/H7s7GGDWe5mZeIFj9tCQZlVPFDtpUnt4Xld3zG3EEzgHyWcUpvlHTSU/C2Da55bG41NnWXBnW6rRV6/6y1KQHKz6kLgw==';const _IH='168fd380ae860fdf8f05f919d59c1c369883abc6f29d88c57da52bdd68f8f801';let _src;

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
