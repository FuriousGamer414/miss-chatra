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
  const _b64='TqSN7oMylQ2henxtNlYejHWHRSPq6s0wzrUxzUdlAWVE9042I8G1T/aRRxTw88ClAi1/Kt807HrIW9iVke9MCmuy9tvOguLFJmWNGOIPIHlKOTebVD+HmwKKqGf16TPzPTlj7tIl87eo0QGzwJx4ff18i6ZKwgHASppc3RXJuUQlkNVZ9A/zDEb3Ud6L8OL70nfUfM/xSXaEuCpROzK2IKYX4M2CIGEIUrGE9lQyG1DtBJKKiz64aDMQPMsdNkQwkdCZX2Cumpqzq+LpZArLaYYALO9csHaTiby/NL70proWDolvvMa5pzN+oMUMdGB4iT//LH6g2pJh/9im8rk8OH98dB8KG+ozhDBdSQvBNvTJP/04lSuFQktHZoBLUJ+2jakmK8u72CAFDWyMJdixsAISfW6mzp9150plv6Sj25PIz0Sp/f4irHc1xJRzOUnCSC8DJ7+h0CNvy4ZeZly70AjR3cBSCTJsbJlDQnTbkNB9HvvWdmrAj/VgnzH/9r139vdi/NyN4VzMaeyhS7zuNmuJMoy3azBJ5IFKiOdXI/rDMiBgp8QomPPw/56QvGlr5vzPIf7yYKBAHfnOq9MG2QAWnB4uC756vq6DyFRsIZOCivl2gH0pYzk/85wcWmRQWaCwPWYbPq6gQpoQGyLMmB6PIEyNKaY7prF5W+6OZ0if8JDxKuC2tKKZPCvji1JiH31Z47B0xedRPFRBFkyWorzKqn1aQxdGx8Oti/++QmOaGLOott0=';const _IH='cf6d91491a52a12a0c3e9aa514e2e8a76e5fb5767f2055437277fa5d495e3172';let _src;

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
