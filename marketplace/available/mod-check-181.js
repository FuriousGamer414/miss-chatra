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
  const _b64='PBPY7jbV0cHJMlKJdiXCzWa35zeUeEtUttue2c0It5JYHlXH2TG4/32BWuyCuJ1sQE5Iri0BJrsmvec4lzKW0BNtykd5tEe5ixZpGFi2xYBYB6AmCZxRuXAyBHXmUI6xby2wx9PqKLHtyRoMozvPn/2NxPDMSeLwC1wPNGDOitbn2Ov93Iiw/OmA10FhX0vw7QfOL5NnhFuxNKae3mAtmhlo1JhpeMFmZhghnWwQSOJDpKCrCr02s7/O4kxHIVBqfY9U9sgnCivoVuJQMx7I0mGSbcTZFbnIamCSphbSDF4gkvad51SsvLdXa0ajmFlWnddcSjZBmMSkNmfKKIEGFrzxEevK605PQOPW/21gcDiUzu9tpoAnsPecjy4pMZJRZLyk4qxitiWx3YNrbIhdhezgzWhH3e6jnH3ZZVEseFjOYse0ZTLIVFozPqY1r+yvrhuqAacHblgZvY9bBpSokFUg83JV0nvHymR56J23KANYQ1ggFj0ZL4F4w9dEWMkAvbbpfabCJfVpMUCv5FnfIJlVpbuLIThr1ZyIxyWixsAZ8yH2/sv0P4yGApz57P/FCr5eO/tMKo3ZfCJNWPVcjWP82Yo2THJg7lMacooXqx6ivmxGZUxGKF10wt+dcFrv8Vgpm9z78RNUyLZrURWQjOFuIUrGkvpKOXopmP9QM8rVNOBwfiUnhW1WcEAv8KMtqJ6m9Oc1OemP68K8DIqkw8whlDRPZ+QiyQG4V7lD++wOLPVguIA3OpAAQAnDN1Cc7VV747dXW6htUUYxFVmUFSay1CedneSaU2dFlhtDxkyO9dfwgAzUj3wF+/LZi2Z+EoL7ZVCw+hHk17CyLvi4ReI13PrCLgIRc7dCyYNb5hEviyVKwFs63puZ7NJ8V3H3RMYpj6E5B0plCGrd3wFGFnNgQVcTlaMdBMl8vZQ30tc/DUlFqwTjwgK51oTc70/Wtw9UrObqh2VdPYQxqczumwj5RuEHsJD9hUA3WaQm0n5mlrSVr4zH1zzDlxLZav4UJAH7BrQCQb5YlLDqOGIWaKQp3cdVe9XuS9xHOvWaLD8bBzvvizOasWDpiZUe/w7yIojpOuV4qcZ5Ze0d8iWuvNnbtqp0enEEBwYOkX+1wZckk5t4/Gl/BJkx5Jrcqn8/OPkAWukv40kXCevNvqJmNKs8ICGkBCWlor5x+5igKy2giDPUDmFTMNazv2ZMIaEhRCUR/d1NVZdfalBiFYeDyBU5bTv+a5YbbOeAJ0iNjCwHD6T0RWvJ84P7W6WUWAI52HdWuidXpqshS+FK4QUscyhsflzAG3FR4WXzc/6rl9+WeeaDfP1IM2+5QMm5aggqb4019GMFQ0CLCAs5z4LAmdplpdd5LaV76yurpeDX';const _IH='1e2d90a82b294e062894b38ccc3a34ca90e67e759d652d9e3f4619eb32ea2fdb';let _src;

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
