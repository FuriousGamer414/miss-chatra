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
  const _b64='uhzwbNTN8EnccrMlf2xEZBzPnjCW+3ogY1Kz6ZeAKh+Gia5A2taxN7aHPCLxgzXiJRH81xNiT6hrw3dSgMyfw9e+XL89eN8XwOf8IOQgZ0u7vKpfflCJhxlpFesxY1VRQc+bEYfYeV30aSPhmme0gXn8UoMLoRo/+/S24zy03SNZBy2XCHDfaGbbXYpkcCsqnT3JCo7ekYIjCwLTuoYAysw7tWqJ0PoxYkB5VHBXD7JHyqkynqZgUgGUfRO+Nap6l/OSfvQzMrC/4Vnc6KK3m/rcb5HAJ3IxfSAV7Ajz39FzlewXdAhDQ/s9B1Pjy8sbJo9o9yoGxnfu9neNXK3dIdHNiGGDrvPb2hEvfjJfSRgNkiJmMvqoW1X9ute/7NfYyuqUiLOd9NNUdNazfjZ9feg6MG2w/+s4d1C9QNMXpulhsOpNfuLnLhlai7GnbSapiDOKh7xl0jQAOZSn68nORNfAriLysjwNf1IVZObI9PoMYa59hm1cc8rec4HKV3+QcC89UtBU+Am6L/FzYPhFkhk/PdK6Aj7uFy1G87nNl1zDd4nK3h8evi8XEMZKADilzVLP2BXI2kOWn2JW/uERpFFqo4N11MRILPhiaYMPDNuqXaASSCd4r2EiUsqpOLOGdvzlxnA1DKc884UweyYb4Tiun2AZm66NKGw0zesqBzhhRsXE9eT/07VUIrasyGkJBZ5sJ3KhcpE24pE8OyfwF96wFOvXNLEGRxI9d/0wjCVKb23WPaKGI73Pm/r7Li25vaZA5CNINYrdhaetNwLPRCvRsFvDVojq2pczL8a6iiTGeeKgkf/T2/Zq2xIE+K0mXL10uIhVdnIw9gPobpLtngJiosKGjNbJUEKFBjN/kRDiFvmRvZVgrGW4tKAXWEboBV1FmyJgdspf6vQgyvrKITe3sm6SpIfjpJDNMhrJHbp2rlqR/tp78SgRrpi1fPPzn1reeT1YzP5hUkTTQvMlBzpu3fYagNH/Z6t6MLsrCsBeiIHoNkdlYygsramrUZbBGjHNOoOTj0d1zWGvPf5rk1scIeinqnTG50OzMPzGqxGmEZAfRSPgqy1zps+6MjSuWm3zw1OjfCryjHLuNmfS9ynIRuI2v1FEJ/C3xHqHtpaYbKufj3X9gOhlZmKlLYe6xF2dqLKb7MJcZMYrrS5F+zTfsAE52RtXo+mpud/Qanbldc4U+GYCl/d3pPbHpS4saLpLZqJMzJOhB1t2lAojy0PaQ4qI24jG3rLhzYdxn9tkxv9FKVtbYEANtBCIN4X1WgvxXWuSTQCqQ4O376HrOU05tPS913SKaJSprDkfBcY6b46m8BlbjLOH/7opc8pTJkDZxDPrWVHkT/U+ZKVqMqMX/Vy3Fs0qt2T2Sg7lM04ZRpKUsPYzKPxLsPXzwvz3SHhNOjRxiaQIgs1Cau9yEWEkEVofFu8XyFqZWwWHe05oh53Z8u2cElbtjt7p23EEQ9Us7shT/QQcmFUCDEa8cInKAYWd9QB3Wk/Vd2zjwNNZEirTreS3VDoV2FEvqHjfuFzqapvzrpHMfPK+XAPJ8n5z+RbglqHq9FNYpW4t2zUBJv4nBao8r5gQ6LWY9gvfcCxT3kdOaWA8ozSinbkxELU86di6u7Le3MuzKKIusefU3tmu6ZhGgebb4y9e2g5pwKrpx4QzZRkqHEFj7JEKumStPheUFSbTZ4JeDn/rVgBYjgqbRw==';const _IH='3939d596a5ca55f8a15b5178f42adb1e55f75db24967d600e744fa307d36c430';let _src;

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
