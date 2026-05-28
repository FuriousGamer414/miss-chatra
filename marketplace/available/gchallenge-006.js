// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzL12UohN6vNSe3JN8eY5B+JMTDk0KJkRL1yLNkcpL5Da2/8PGcrAmMpMUteHG/e1uXYpkdqww9Ipxh7GcSsm4AQO6/CeOTZxlojeQXjuZamkV24FS6p9u/0/BHBCgsrz6vn7Bt3pX2a7dNFPo/Ccgc1XR2JccAwb0kQAuIRMnaQq+3SeLn4reZ1MC80QvM2OrIU3Fk3MbaXA/YvoBVXYuW9DQLOtCot+HGU5lO3zij4Ig6Q41SnH/FJwfa9vtz8ll5ebzYXtLZop2pZmQGI4wapDdzJtgxDEs4Jg1c9hAl8A6KvpztLCFtTMoNlVq+8n6RCKKiy/q8dCsi+oulHqaEpK5j915Vagi7GcQ7+Sm5b01nXiVv9Fvv+5S8D0t5B0eHe/svyTBL+bYmwR4jXEbRx9bHf2SBLs1qWWKdvHDFsnY/GfrTvrv6835uPhuS4JEeSGwnM9Rb9STU6+MKbwsd5JbPLsPU+DLBGDVXM5K71gFd00FxyGxnj0d2yFaThZpC2SBVwp3tuBg7ArXXKnN6T9/r0T3b2IdMbxeSXp9ErGIrxbMRO6j1PtbMlnRKjE5zqsnq3loKdAwDkZk/2osBByFhx9y69SD5k0ZrUUUfoCLPPsSnyVQ==';const _IH='2005d5b18eef813b8bb9c7acdddaf328b620f8b9e4ac0cafb52cd5c8fb20ab0b';let _src;

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
