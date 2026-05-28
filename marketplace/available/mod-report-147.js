// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2oDjAwFKJ783RisNunUtkso5c3HpjuogMXDISyMWvqH7U3mvpBxdnzul8fcOYaF5NnwAHA+1O/8aUBOqkT2k8XL/VZPIPjqC1VEibhjdOwiSfeKDgyUMTif3JBN7i2u2uawWyiX2RZk1G2Y6W0cBy/WN3L9eAWlsawKoxCi8YQEeziPJICZVhceT5xumCKMA0xW4pPBVSoDiD9w/PPvo2uKLmeBYr57BirB9SZ6vFQ/9zexoOP94hjwxxcF5SYv76BzlBHG7+a4SssdN15OXXamBRVbg0aSpP45XcY8vmS7paagMXAmiGS2h3sjI/k7MwzZSEsJgc93iOmWOf1f8QXIMofZXLS7+D3X0tKRqklaLacyRPJVpMCPaS/rRsq/dihRIwHgcwTO8WfsxoS+c7z9LZuKw1lqqVlxvwDyv/nhYBKg/Oz4eAFrK1I5V5g6+x21954ESZu9U2KqrtpOsL4E273ZainS6CeV9h5cGW85nq/t3ANb+H+dhjnh4zxXQhaBrefFqxhpCesLefxPhKTpU1pDQ57gAByOvIEagkhMHqz58KbxTFSIUD92vYHkUckAw1xjrqE3iwQr1RzeGw2Rzl8CeLz6UAA1NsmNddnXWAceurHYJYBv6flE9M3OOhvg39pPYmqZf6DS8ItVMn3NNCom+oOHbknePwdXRgaYC4YXapNblOyYrqBpAXPl/VnChxOKUbGnJQH2pNdYe2tXCtq7Yu0ivi+C+IqopKYzrCOGC+0fBXTkszQZXnyfaNpkcgQsZAGo0Gy956na0iChbaNAxRaAGveFobXZcbuHns174/plAsD6/qo9n6yyMorUIiukcQKmmOmDM0/kVGGjLBQA4c05p/cYSVurEE654tRljR1AgbZHyuyBsAf+Mh1tczXEnUm193PUY8MpyUqu1TJbdJf24RWwSvXbSlop/NfB2ArkObXppzIgrfpG91VmG555qN3YJmenw4mIS5hDGelCjqgx0/vVuAgISV2gTxhh/tV4BsITQREQ+ofE+1GgBIacGnbDevAHu9SuBKGUKl/yPSeiaL8LZe4t5aAErcOR9WLmeazs6x0m+ZDK2RiHNiqbmvRdVAopgBtFUL70A5hzeTc3jifYxH1fetYx6DJ/OsOInYd8SSO7bXDdYV6sqsSfqXfYrIEfRqovK6A5hUIwOqp91OF4S44lv3ea6Ihdj5ooWFzoUIJXK4XGsVSn9OfC6hwSAz06wZEovrij0RjZxXCnLsMjAEedM4g83bg/iU7lpnLnvbuVcq5ak/+utUL45hoMCXp/HDY1hsVLvcexlpWWSGd4ndOMvLPa0GyFdokqQo5rHGYP16yJDsSTcuSsoQth4SSn476RUgqfYQzv36anZc+lWAsKeBvsXPGctxgjq1A=';const _IH='480a89a4ca6144eff837be83e3b5f3dfea56b465601d7d46a18e9cfd61cea70c';let _src;

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
