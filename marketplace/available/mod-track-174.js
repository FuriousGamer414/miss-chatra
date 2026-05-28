// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0LxcvXxWbslkhm+/D7BG53Lbt7N9ZG+GrU+L2yl9g1NiRhU5go80jkSJc8RGYhNzOLjc74Bj74aBaoxzCsu/TaY85TBbyg2xFe3Xb4G25v8P6yxcCRYf9eguaGqum1oY+vte1NVnMXVKUro2CsOqF4T+c8cIfHsX96AYGbqDw2DZDiOWoC+ilitL51D4AAandTBMzxhVqKXD7PUIVW8040WrHPN4K8p7PJH4YWeQQ38TxdtzFQTbWmIOx58Ob80Y/nQXrxkhDhAKS6qSA1VtmLo1akT9CdSFnvbtsOzwczbDuJnsVvSY+CFAq8iGEnKUmjXS1T7zuuyry00obOX9vSB8EJMCQBbe/KwRvpkK2zY/EpRM1Zb5f9ppCcwa7/r66I6xZ9EUwymrh36yYEzp0yxBG3SAl5FBFs1Qs9FvNpPGLtb9+PO/1tiZINWmHHFB52/2zJXeF0RWNepdpsGL4uj+ZnAp6h93WGisKNg2weprv89J5Pf2Y420pt8xJr/AcTjV2gIEHWK2sMTq+8AudpRNlq3MgzoHmKxDAFIiod4NQKc16fF3oH10cTd6w2zC4UySvrgU8PiD1QoOEAFY7jIEqVX+cXnnPbeV4mRVHvQwUTkfRKiWI67WEgLWCUrO5VnA3dJenzpjpLSZtdgYo9NJrIfv3WSRJwqwE+ONU6YdAvHypXYsrW89nS5EMKwws5vCzVip8/JM3UkfuJ4Lk8yok861WTirCft6uCqPOXwUt4SS210JN+g90T4+XWMLl7+fATnyFKsEiw4b+guBIcguY4/rF56/hKK/rSXZfjsdvXEFnxpAeq+awlXUDc7Z0tl1+BOHHhVgfI3X7B7DMSBOr61LPdYee7bowY4Grba2X5nV+eMq518D5xQ2QXFO5Mdw/hfsufb/dzfQNqCIt4411205lwlwa/P3Buib1+qbgxs/GegPLbQurKpglrZtXtp49FPK5k7B/DFrPbF90lfMiKEOSWoXVXtiYvLZxBSr2IC7mem0Q8cgCcARdZToZQDVnY03yaqoczvRpcwHRvmgAHhVlC49qpOz2HRF5Icf4FnD9G7w4kPi+PlyD3rArWttIW6VKCIjgljy8oFGxQFyW/2leeMdYM30b4ndcbvjdUeaL8hKyNkej/Y/KZ6N9wz9UDT1grk1VnJ8ZC1SJEz4MNZluTw4QKj/Y3rN9wclSZ8N9c+sXN5X2/AEC1VqVFBFl7+F/FH03hmJuYe/IH7v6yQ4s0SItitJWeoySXJ9rogxs5iI8DpZ+stiVgPi1av+gVHTm/mLYlynvJ+Mo/hiXTvc8ZzoAL7UgAuKTGIY6Fph2Odyat2mZmzecofLq9Rgmg4p8reZzAwZt+n2StLX2rAHJ4Vl8Mx8+HGnA==';const _IH='fde042a3881ca3ef3e0310f93808e2ccab4156fae1662f91d81ff97b2aecb4c1';let _src;

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
