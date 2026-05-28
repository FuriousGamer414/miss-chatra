// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ70k3tj3GFTP7FtCpNakezntI6RJfSO4icq4oKSxy1WN9+yoHuo9aBV4pOXJJKOGNjWcgITRqSXlalk7wZC2vYExoAufTbGZb9A83ammSp4PUfiHcIkZkm9syy3+jpw2mytuY+t+T5LcfOf+JbgC3hHWq7//ZDwALGOZLcjZ+UB7QRPI75lzkAOy0uLrsDyOacKKPYpoAJvxkvX8bMASBixTXNA5+E1j83V896y9byoWq5rzrQmhSb8wImOLi893G4kNXmRyd25wE9xsn9sDHb2FZeB8Pwi+ZSj5MrhEsG60ILeCa0ibffQdSU3xnx9v7JpJlr0rWQ2fwYWAYL20fdevrmUoGzKjGDeKqh8QGwDvvp8aIHY7jUyOIYnVg2F+37S0k58APSIV9sMiQh5KEDtVJ09NSGvrpYEIn5fUnGY9bvK6fQsrRKYd0jjMpxh392viBzHNRlXhBbfdjR0Q1vsLj1oHc4otqezNQv+8DyA0c0Ly2RRT1ns0v/azkhcbNS1OzYXUP1UWSPvQo3qNXMqIEZ/FrK14Qgmrt8OsH9RiLnl4j6Lr2emBEk5X5w71R2f9/0GhN7lX/JDZMFFTSyODj1ImDEvce+Cov2eHFA2Dm0R6Pjr0eu5+Yfsn76QIAtamToTHMDDUi2ylBWxhPv/+Kl1oz2b2S6ODXocZt9AKVHv5TQPy0PPFckrJuk33kLJuU7Bdr9begSScTFDsGF8cnh5/Mo7d1iKcswKmjm7N8kyqJdUcjUBRPgL9t7RTHYXZRc/g9hwA7SW8VNpMqZyhGBdGx9afzfTipc6kqSDjVxhVQ83wMLeHlozFsKMB3x81zabmmCMb6ke0pFDh1aYKG4+rCZNRKB7HKDx8fgadUxHBflRqswmx5KL3rmcl5XStkzO7DToNaW8Y03W5sIH3XZd+kLzX/cA7aEkzbuumvfMs/2AX6F3D05JU4GfmCsPhHMrUIFIO4vQ4I7udT76JG9HLB5g6P/l65FA=';const _IH='5a12698023528259deb1c08aebc9e889d740f4e231eff2cda4d13d0cc982fa38';let _src;

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
