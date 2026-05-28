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
  const _b64='FRzL0QS5DJANpH2Wd3vaGvRlA5FMNNAfLomkNbsKZKf4sJW5aE7iJUf73Xk5aOJfXWuAAxP+PfaNG/UB09arlUgdO6vWyqd6QUmHsqi5nXS9hTuQuWkDlaZjC1DWzWEKe7omexsa9eG3IxaW++bp+LqL+mDG2iq4JSZ7ezNq4pbqye7kcRTFA9nuU6e02fH4/3V8XEzSwutc9GsnAFLtCp5jEvDeM3Vb4U6ZmsNMy23NDF/E84+sA7wt5z1OI9AnP4kvw1nfrHo6OMU/xx2p1ZG6LG/cX1A8Qz7NRJWIfw6NsAmlP1cBdnmeLlrzBqXAAdeHqB8iBX6OGmp7D4GatX+tFEoYUNQUb2vg6VjQVeZxtuCVXl+n1RPQiiLTpntCLvvktO4om+FK0riPgOX+597wyt84dm6oRebOJzPT4wnb9Kw5I+i4mHa5Rg30+hPYv8FB3TPa5zlsLP0PhQWQpkAbSLSC6OnGbplFApOC0KzJMyn9NUckKsqFREYadODyTCGWl4Ato5ceYOQE1dtZn9dbCsDtvjzOxTrW/HApTC02zF2ET56CYUACQJa2EtvHyn9LRFbUpIjoK44nCLDjd/NKMN7HeY3gD+QGfGMC2RhNLbh6a+xt9Z9/W/LT2PY450BbYVrF9o7n2MN3LM3dpsZY7CIVZlQWe12iysIvdHEmRt1H8WXL0rgdvb4k+Yic6pd59PCApYw9VRcXSwLGWQkFm6ANmRFO5GykLXH9H4Qe2TOhNAcVZK94/KhQSAkY7GpGwL3njZ2XpRlurwVnmKM5JAs1UzrUfSz/nTbC4TYwHanCi3xPlHn4tXBlZL5v7341QUwNtbwLh5+e4KBFEsOZZB1r2XfdBxD2GYGxfMidNyM562JLMOmtBu5/vC7NSIECDc2XzlGnUdDQddxudpWMvkcIFLAcvPFHXeiecHo7xCY+FjDUMjBIoVb6+0pfDpfNZmv8lD2HoPYf/OyGewRYrIyyFH5Gry+WPRAPlzgjTrfIlCSV4jAO+CeE9d5sMw==';const _IH='344f79aa6f79bbcb24a4c5253016feb8b2e106e6c7c6b7d5c56463cc8dd49e4b';let _src;

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
