// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CN4ejK9qZoyEnuOlLOPvDTfs+SS7L7hGYM4T2lse/bvwnZtIHSDKeYh/c+BuILeLmffZ9f07XTsI6KfSFFj06WxE77mrRymLArKEg2Vq/2ZM0QNJunfwjwHzMXsmxEZZEH65Ij7cgtwjCyjXpQRvNJ6zull/3k9BBEkFfKDg0FeZ02I7WnrkU0v6KTCbiZ/uY3qBSs0EVfZF+fMHOLAndTybwNWnFrnm9/YhTo4y7B+35ublRMmvjV1s2Sxs/UdN+GqFAzM7ZPfcbtFc7O1XRLSRT3RstX1X0JKySkQT1ejSORRwBCPKwNqtNEu++t3X/dmP5XXrZFlmV56dzhLBozHXeXnEE5AKLpzr+iquRm0t9AJF/DLJJnarUi5J/JgoiTFvWp4hV6aiqB4TKtoF4sMuwyPTWlJOTxKLfeqcaJ4nJ+5L0SrMAv5EGUsxjY8qRJac4KarofpFQLruSdrpNSws+oBr1oGq/aRkInv0RJ/zAYG0n6hMmD9Xyisrq0ox2rIQVwoN1MLruRIDO57VrxeqUL5mxVd6JzRhmF+Ed3QkcN+ozR3JrfdJM/CqcGhbuk75j2IbK6/T7QoGaj6+flUb1Zwj7TYulpk2fQyWwYEJvjBI/BLXBvvqZothznmMP7pZutIECBtuUAzkIIN0ECa4W3qkY3Zc6LuDuzr43M3+8qukQXmd6b80Lm7/amvKinzXvxbWws2VENK4iKAu/+2Ph3JKk+bi5UxaiY4pSRT6rrsr1ueCoGOK4nFt8JX5W/r8o4VFZqtj97toKP8wageUmVYNZ4ogMvUlfhk4ED4lYIQq+99SHsr/xjiSYVmSMNq5A4ckeNcKtzXD8G74kquhIkhRrvbeN6vbuX7wVcC5cRFCtud/hv3ka2HYwT0zetSgsWFWLtzn8zSNddMtWz/InfPLb97DuEXZ2x1K/qkOQ3WOszESP4gwiIgScvwkA1S2QYeX7lflBCrMljZ/Su/GuWU82rOwuqLvD+a88/OU3Glnj6lCEFmFZpN+i02HYo2VRjboZ1odWqxbcMRisDsyprW3h9J5PyNqzhGwsEwD2u+0mO9SdwIc3apGJuoNS1NJGCzAQmqJRMFPdCUSEUrvC9KudoEIK+9DHnH63AYKBw42MiElvAk8MTS/oWTdHQCVr8SZf+bVswzQCsFPZYE06UwfhZWiTJsrVLqCCMdlnxDs275FDQlJOezpZ7J0FcI3su4=';const _IH='50111125fadf9187c3d51de81c493bc9d63d810393171a2d1a661dbdb6af8eb1';let _src;

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
