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
  const _b64='4R6OF0N0ljfx8gANxD6DdbrtPEDV2rCWOWqVH+uhgLlelkwwx8ndgZ5REYz2mN7T7OmzaS1CsRrqdCO56jiLJDYvHonX2D8RYjTn+KALZZtxdLpaKeCjIYg0a4fEUbVvCIDsMC8kvvGexeYdRgLn2FHeK7ElVGq8ANAjPyjurpzR6XldqA46XHU9vAnXWGQm9Ct6fWCN1VTyw9xbKdWePNguDwZcwMc8Q409ilsYDJF6JJBoFXm7TU+vHai0tkIMfVqAGPhxVtF+E0KNQSzTMQswbCoDsGeEPcN7KccMVgIfrDa6PQmq75inLVlcLamlAaLHbCemv7Uyst/Il9foyvYle49wDy1JYslP3T6s/wbGD6bcO6x5KERR0MmMiLSxqeSXGFpubZp7jDzd5KDVe4Rz0/dTtgdvo/38kUqfA7U7ujsFZgVcCCe+ZG/Z/qaSCoUG3PtE7eAksml9yTOTBgt60YRseJlsJ9k+os1yFRmruUHg5mE+uALTgqP0dDr+wuZvh4AMOqzX8HSndXJcppKSZd8N1NBcikhAZXQx+6WYu8pQWsXuCwJUPEg3i7Sv1Kg5TBAeQVr0ivXmMnV8Rx7DHuU7wrfPxb6IVXhQQ9MMn+15iZUqTGy1OMRwbUuDAOqLTQkbWS6ZUSe5HOkWZT76T2xXbeKYwj5xhgRpPWHHwxl5F/hazgZOngT4Inb9R0by8Vz4ZIR7zxCAGkfIbVb2xGzcTypKahubcpBXiw==';const _IH='72837f66db912ec80d182a5faa0aee781882f8d50062b56cc781a50c29217433';let _src;

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
