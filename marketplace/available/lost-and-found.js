// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fVyOUqecWhs3hlcQui7CWi4AyeFrYya2Pj8Txy8EAdFOikxRwzVWvy9F0UmJmIxKpPewqhtgHW+Zlr+KCPxB7dPZOipBdbQ8DQUS3ccxQR1E8ypqxO4bjWEZcwutvBFifGtTREoDwE3agJ13hJfTIQ496LgebjT+sPUEIqnbh3stOTOulqMunqC3yEMzlgxO03KSxVbVNIC62saIT6Esma6h/ABbHQtatMlZPOnz8MB/3SUuTGpfyvcirHDILXaKH8RXkyHI9nIhilRyo7LjKK11PMsd8/PcAvnc9vuMmac2luMKkVe1YBWeKQLizft2PmcoRFCIos8YOcUKAxtIiLCSX38xfnzvjqng6l4pJvcxZZ//vXubsGzNQhMPJj41VSrRDaPH3Wt/mLxN+HhXh4LOEevp9y6mMiIca9Km16mhYGqeb2IKlzQWmOFWiGagdlaBlk4QYYwln4Dse20ffzFqcNDSkKcvXVI/yKXCVVlGUw50S9KVL4ADXpS1c6Q3+cpMDJZ1k8qXP1XifcTfgYzBiioyRri/xyJmnS9HgTywrom3Rh1WpMaXwrwCbGUuq2NIeUAKQNaz';const _IH='769406131fd3379796d9c93b2ef07acd282d30c6cf9efdb0b979929a6dae6a30';let _src;

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
