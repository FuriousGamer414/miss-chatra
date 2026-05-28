// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7K1cfMLZ2rWPSMSkyQnBgCbryEMFx8OE4KBEM+MELKGkL6KgBe41W493VYhnO01uN/CTxI99dqETFNqTsDQpo/ygxAXpgRzWwm2syHg4NZznn40yqKtkjLJEni+iC+58Mv5Ksq7+jrbFq0KrlZnK9QcFXn3WBjO1p/0nhKtJBu7w6MS7BzLDPt35c/Bz+by/HyEl4CSnSJbtNfjJuvCy9O37IltLmSyzmtBpbf+S/HJJSTq337VZZKVSS+vKuZKG0sz/bA7Y3qo0FpvmGbF5L0WcYiZrVj/H7Lv2DPAoFBNPB7DFVW7849/RqvQFNVXJXt7uoYhjf2ZFq2Z9WlpmKs4ac4eJwm31NtaQ/EGStTvNhvkapXmUJfIQ3Hn+hqqHUZjo2GCeTCq4TpUWWVIxMf2ZJ+hR7bY3cRFdl19+FFvgJCXye54HPIEC3bckkDm2BBeUPoYIYDJM17FjhbLsVVhCtKs+vHgJw2E2V58rzmFwhaxFH1KOcVlN5u4YAWzkque6GbHCeRJHvjQXytfLG2kw9NY8CB57qtW+ZT4ZwvFxm2b1nKyn+LSGCGiUwZQiLIM9H+QQ7Gd8ZWRXJKrGHzZp/hynptTHu9EYRe/zqOH+rL4Sd3SxarzW/MBXC0CykcsUyvqw1PFbJCFHRxI1FdItcu0ysVci/QxomCBLJ3iwK6IWBM4DEOagFQz/eyrUk7d1WQei4kU9dsGsk/sCvWXvQOGD7bed2NJP/rMs7tK4MPLBbsXEj205U7lSygpJ43f2E72ytMFkQii6VmmvAUTXEMG7rNwevUtjaYOX6RUfhfWvTwvSiEVR4TbvDh1hB4Zhx1LmaM/CVOMhiRAJ4mcyYi4oNyqfiUigVMBgV60ZSjwtWvEqUzE0MEQgFd0O8yPmIULZpZaendkji8G2DwsaUUyRyLDJTwhA97QPJx8SFRy1+Jw6BV2/GtysM5INSg0DAsCQoduUnD23U12pH0SdWUBmHCCKrw/ed+B/5roHO7S9fjR1gPEa9w6tg==';const _IH='67a7a86eb7d064e51f6ccaa68fe22d5078041d616a6c6990a4197c45058614d3';let _src;

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
