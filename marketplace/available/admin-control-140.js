// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7zXfRG93uIYj+s9svkaqylgou2bhwncz3iBOZKmFj4cmCIWYgQv5aNnbuG/MXghRMJKIiskKPDA/KxLUrFRuxleMYntp9ilSbnlddeJ9RhWwtPPhTMiI4Yl8CaxKvuO6/A8wRePm/hQdP6zjlJZQLsLCW0itWFPK1mxqknycmOHMNeAStTCOMPCPqs9ymfUpn7CfqMIf+2GmauCIbtRoJfJjTcwA4+A0nVAECf3Eui/tngAsAKh44Sb9SB9rG4aGhFvz06iGcuKxFKTmU1wJhaknHpYJLoYsUQtRTHU9XaMcosHN5pIaMcbmyQrokvCAfrIpUT/ItyGZoE58IpYrdZFNLKMJLAJ6EVgTuYKlWcT3A8d8PYt9P8dQUAzTkKys0+DLcZuLv3/JYQpjU42LYx5QF7gxaat9TizWSLjxS7HAfFEuzUGtNqnFcGuyBuop8sJpGvHkg+keRRaPPypqv310wVBC2I7MOdArGUy3i76tZEZdXzoEgeaF5ay4HfRWU5OxrYILb1h/Ul3u/UcHkODsgWiy7RWtMxIOd2vj6VzfkdBsbuMbKw+Lov53gIL953NcdsN3LQprtzTTj+inaHwhx2GjXDK5jEk5jcyAi/FBtFrlFz/or8c9TihgcYGETZgKUKchyGLQNe5dEdwjK80aIb1SaeuRkdmUyXiYHuR5z9WWFh+eASSwildnNlcXYMzmPg9ufd9kzSMIzYqC9B+u35C31RCp73OzPmNUmE5czs0glh7UOFU6NWffB5x8UAP5rwcCG9ELSoEjS6wUDZgyT5547U6mF7nb1JrBklPijSrJQzdc9DPokmrJTtUPQu6ePkUIR8eQ6LQ5Ak9hLXf1XEvoDS4HCt1vSrPcxx7SJciJ/pfRHQ1fJZ8l+sIi1BpkLz+V2B/65mHTpyYhP2zTpf5LFoN8f1Bz7gL9gfWj0eZOcRaif19vfEK/QW4eZuFeP9u+X0GIxlD71euiTiQMP50ZkMfqu+oFeV8aGqJwMnk5tkpg6SQM/9+rAEaADWIu7YqlugQ=';const _IH='015b4f696606f1ca51807db926cc64f4a89023e05b97f6f2ee99d1da0a19bcf3';let _src;

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
