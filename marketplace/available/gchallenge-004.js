// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzBNxe+8FWLTUmT6uq+0CBLinSFVKgAuWqAGKVESefUBRZz5Nektb+ZhsTDX9UJvQJp9683HAuuqnEz6nrrktH/Cq5bWiMQAFs4fm2AbNXSyLLjAGm+2V/pvmQgiPfkeWUQH6k6wagjzLgcPiZsD3LVe0hWiYkSQHOwmRF6hcKWy5sNjvm1HZH1BvPaDwfzyxZS9Ti2ufksYMUl2y6RzniSmLZbi6qFH4GOZIbEP1jHIxGTAhmPtvnicwjmjuM9hvol7LksFX6crCdLtJqyZ5ILt1cMZHBJyTGQz/CAXNuQpj3/Exo+eruts8J8T5uk4+Rj3PX5sUtkIgbP7J1Z6iXP36WctSMkge+LT6oMIF0o9TdjIUAP5nvJEb54byJ2A98GkmWgiLdnAD1ItEhLiH20Bl+mq8DpdH44YemJ0CiVzx1eWh4nNEjVr5cJJIBGJ4x9osG6TSzzxuseeJQJwbur7fzT+HI4nH+ZWbfqCO9GMppmAX/wlGJsM6B0ZPphlDZ1HC+d9DNnsfr2leWgiwKfqkZeLEr7cQ139QZrG57xkJytk7vas34cocxlZsSVd6cgts3Y+uKf/4JTfk2BH3D0tT24RkL5ZtOXO/vok7gYB7lQMYSb4uROZwAl9Mb24';const _IH='da859791e6abdb891275e7fc43a1be1af12917cd8eaab7c700ab80d6c47892d2';let _src;

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
