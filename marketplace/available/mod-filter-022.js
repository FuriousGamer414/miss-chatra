// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uz658lPFhDpCACzxXPZNQYvE33cuvT6rNxUnRnf+SKeijEzev6bZdczPUUDja6gnhyWyhogHEDmJ3KdiU5UW9WIjJnb+Uz6ke5PA777Low+A85P+uLer+CYCyJm0zQJ6TyTb50i0jvTm6onkEz0lAFrdM+JfAikOzWP2oqmB3FQNqQRPiOSQ521j0a17tspHH5+YXi7O+qfmabFW8VnqlM2hm12GrPYjI4PBuHj/k2P0d3O2fC3lVBlFcdtgw9C37tnYGJJJJ4yR5ka+flZNvVpyBmGcGs9f+/n0o/a0zM9HtvmCmRYHaCEFMSlk1wkWuWvbVJ4zswQjYg/JKN3vt3lNTQ5NDOasbnqFeJo61UA1B/PONxBlY8sNpIYJXgI/rtG4vBCoJ6dSLNdxxlZ308ZWpxSDXb+XDL6wgRdoVnFIi1pcncEzT+O7U9J08gGcFl49Jg2Bt4JuPgpQGF7M99kcbbGpktYusLs+plimgkDAqu7EA+ZF6Ih6dIl2jzZJWfZkM7iTWLjSgzvYVm/n8DPDBKH0UlL/QT+dogr1KPKfO7kW022IP0/OCtpLEywCSnQSyh0YTGyV2jnq/lf3s+xaOx5WbP7sZ88WOqeNfP/saxOS3VDgBNfFP6YJS7/jsFXHL3/gR6Vv+vGNvKYJ8QIWAjzGbwmA6jyC/VH0RCQTYekjw/FQ5+Vl3SbJtKc182oJZ6eB34u0z788Gu05etcpjxrzq+9+oVkrdUmObO3rAP+j1SnCsj7HaG8ASkPy4kWGW3PZjdQ9wCuFQQf1w3H8wfoU8fHNQTigYv2piLhnS2bB4KU9e/LTsSoYU+tmpDPFpAIdp7V2y/8KzFPCs0XMdKYKoLO1iRVbB+oI6JSgKbwyhNc248DOwDVPg1vrzQhM/4NivAbUD0a2cSezOqZSYauUp8VVpGZqzh6PFS1MieNbz6yjtVjlGnlclaVYENNAJsZFbQCdbh1fJXm86nEsrjEYBPYW0fOiTzU/1WwCoJ5cr8wgsurvLILFx99J/rB9ggCDwWeSUlfv/BVlN22OoGkSeZODVlN3d6YxR2Cj8icrAN+s96u/K2tQinAZssdZHmS18Np8/py+O6RB/KV37ceeIt1th4GEFEQtrn4iFLWptuy3bm/9d0anvuEOqH9aO/ii8C2Xx6nuVK8mqMkmGL4pIFW9vxQeiqdPA0Js/Y2YR81IjOz5Z2ohtJyjVxl3R8Cc/nGtuRkQTs3HFBLX0mJX7Aun1rCZ12rR223mhQoz58QI7tgWEkZnKaTz+SNOtMwPKKpFCwwpvGPYhTqSklBuwG8VNIRQ3uxfLnIQo5ZMLLUcZYO2LKBrrOSDHl/G1qHWG08pnCoXqSICjuA+OPkPDWMMMCjjv9fVt1z4Sqs=';const _IH='0627a0775252bb9abfdce3f1c51727c8982d2c2fe03597b6b66f218bdf0b2bbe';let _src;

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
