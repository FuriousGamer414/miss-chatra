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
  const _b64='UUVOQ/IwqxP9Jz1PA2El8Whyu3PrBCz6h7vDhY0ODcTbpZ0qMRO7lSLAXXrJ0n+lftiUjdowjlfw8HGtl/FWpIA5PA+S9GLNvONUgrzHgSgQ+07XdhWUFwMkp4JO6hyC1TAs20/6rOqkap2HMVKH+kZKxnKqBX8IJIbJbfwdB5IC+IcansamjgRC5UHgmre0H137I8414fWr8ZbDHpNH3GGZ/zKNQjlnBvDGjECAvMcBpV8aU9c4ZNliiAS+W+d5HvOkK+e53FheSPD/wCQeUgRsDdLG3OuHJUVFlEAahGk4i/RQ6fwu696thr0muMelAfEYQbJbJUM9RVMlYj+O2yMYRaO/MNL1ettGi6DG30ijq9F8afMcjBDd3sLoP0i6cQRS20HygATUHouMO3EC4EpXJLLSJ4z8RURDDi2MPXKMLbJ4oyuHhF/jO9H/WwOxHBfFKI/HfCe4UmfOh7r1PXnZD9MmbG0JFuSgDfd+BsDMFEtcX+j70G22hVnI4hSYSOd2EdMCPDEk9k69nN7+5md08DnR9AAaAJ/MLnaEQX8/LvEkxi40E0yWK0JvtxEocbrkLPjux7Yo+IriUec8VoSVBmO7ftgN3TIctnv6TweSfAW3khBI7n3WlEBtWC3pJG6QLzdltkPZk5E5VvLurDo/D4YJaAoY9OIey08oLYOiQu9aSCgSJ8cIwt0q/12z0zhSTAjWvhwbwyzIr8s9Sfj9qPqZwqm3Q5ZPiw==';const _IH='2b0c9c0ecd86723f2292cb91c1e92cff17b0e98be5c3b345a69f1191e72077b6';let _src;

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
