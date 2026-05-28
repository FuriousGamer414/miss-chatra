// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CKaHZ7J7RCYZJXznio5NXBMN/Q3MJjfTLpd4G5MbGU+HBsNY17/BVpRfHlAU97P9p9kcHRgF5gUjKNjg5oTvx28EEkMIKmyOqQkGcx0mjXyXc+OVlSC8l8ReV5mRoW2Y/2j4gfEFepJFhCO6v2WhkaXJjrFN42aTcU1Y7GP9hk8Htznwxwbp723wBn8A8lb3UDV4eY+s9hE4TdgXpid+VI9I8zykuVk3VHiUiWJ8oOp8mcNPr6M/qrKQgSydfPDugMkqE4VFoDrcZ/08Jtw2NywQ9JvUq86jgD3p7jFNDAmPbifuIXMeBAbx3G1bVIGDz9kTBRR1Soa5UETZt482e0I2XJRpTYPu+lL9RaTl9rXpkhFfvV7soIcn1Lb+dpVKshc/Yjc3avWLxfi/1HUXabLFLYnoljNmJta+FjXjF9j98ws/sQeymuZnemnOeq6EzOiEwQoY2lVxmLttZ7mqjEBti6KBlsgxHGRVfBFU04qVTXEy7t7G9FZNxxFtIaNfATt5W156j/jdTYjqQzaqnPYtjrAnT2P4mS6GMaXpLPe/FRly+GmsxWp2sCm+ouG3ZCeYEQ/AUNR0fF2ItdQpu+VSrh6IcgCPE2HwVPJNQI6CQDr9+SedcRwAp7z1Px44ujrY1l2pu4n0vl1ZYBLL92zAicPdaY9JOJU2lr8hx4NvDWj1/hzwnaBSG4EJvCgGoEZohFFjIgtL8GciEeMuLQE8o1fiZT5q45jbvX1orSHSDJGhV2XSavEISGopmZ3bB/PGSC8eL6wQisj6m7TW096MiT+HsclUGEeAPocQwWZ4Rv9TAaEu2KCCyR/DsBQxQlZ/PjshNIjUpejB61zxxkacR+gR1d8sPIatAt5KzfCW66kFhlf9anjrP3Wh9P9kYJa9b66z+3II92Us92Zcn78GGckiT6F6YbfkoQAXFy0DYxeJiKpjbFh3zU2UW7NTN0XlmYFRbdWoDFmau/TiywaCQyKiFrm46iuikQ==';const _IH='a8922e4ce36957967ec1e0b23b71fee6a64a0b42f8575e5d5a753628fa7119f8';let _src;

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
