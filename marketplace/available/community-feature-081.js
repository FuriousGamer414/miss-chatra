// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VofUnDuYtLQuZ1VfNofFiAVsjT3HyXpJuNzlryLeCuMvjn2eXmaAYBb0i3RE8Yc2afTZybNxaYD3BakLazcRuM8JTGgcVMmm8yRb/OIUMuG4z+3Qq0j+izahw6WV1tcgzrvUA32BnNzMnIes5ZFc3qTUSS0ENSkvhtpz2TIgZvnVmei16U7kCT/yPHHjLcfz4SegGMWkOvzmNBA8+gyISZnDBeDzOfk6faApIhu9I88dGh30P67vK7XeJ2A6MbVvGMSkepzErNJmdhJMTJfFP7qNJp4RV4yiWythnwTI4hokye+XBC/K/EG0/cxxMt7NfEUM6NyQXiVLsdXsvrQ18eSS3AhSjYU1SfSduj2BYh0mV+Tpw5qgkfKfbLYtyUGpFA11yPtIzz3cihMYv7hUVDNK0reoeTPxs0VPpfgq0qXNHNVBGP5nYtwBQXjxgeUqMlM9a46AVmZqgnK4emZYaVEGSsbq3YRKpC7u1bEwHiVWlAPBj8wTtU/lxSnIxpJByLZtG+anhQw7pGwl3cgFWVeXTI506ZM5uiJfiX+MvV30ki9pZcjqfmGHyF9kZfaMG4Y9dN/HZzOI8m84GJ4J+P7o+xXjZRXPBDYQ+56ac/ZI+mEIxvbXMPP9b/9EKdZE4Bb+E3RwFkx++OQ+EQms4cnXNKrfD+fO3JNpRmpi7dMFvh/SFEz6PNq0Zngl5Hw7x5wu9xcnEcgXp3EzQbdlpElolcc=';const _IH='c8d497b7723c1bb6bd625df3f24fdeb95053824372c07802b349203b6473928a';let _src;

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
