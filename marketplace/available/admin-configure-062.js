// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyKIHdUmV6fUsNNZdpNEIvIeMQ2HVDDY+B7xlOOFpaa8paPqDq+X0cdafh6MHRqjXrgsu80UFCwYsEv3+u9DBPtr0MP+P4/G/6fMmDAh80x5SM/61yMhfb6VO302uqdIc66zRWqMTk/LEEfCOAbLkBktgQT1P6Ur1xXMaCsLTR4DDsR3kJwtfko7S4ymTzh+ZZfaxaNAacQhedVA79b9atJIsk4rxqIag/n+bmANgLOfzLO2uChqYVgEkNDQos8pdcfC4oGiYVM119Tz5nmFs41QIompq81hc/aBvcb49fr9cjTw/JSM8XzkNWr/oYBrqM2cFWA1W4OpID1YWqLGHO1VvypuHKs62CSkkER2321XpNW7xDB5m/iOwEvCPFGv1Ef2HaJO4xT57P2gVcCA0RJ2UnC+ffXckDpAfKUDAZK27X/vi8/i8kKBwLNhuphUHuWbqvAvffOtG+qeu6wVeGivOcMLMBr/cjF9akiKKfrFc7Xj43DWeEvcdfXt50kkf293Z8p1tc+sHJglCMtEVShpWpeGFq/zQVurtITY/glMERra3t+PdBO9q/rSfd+GXzy2pKvUxJI+zX06tPivp7B90leIOCFc5LxQQR0zwyXwrnusPmz4+f9fuAzlGxSbINPDImSu61cSUkLTM+FhgiC7+qPf/q7ClerBBneR5Bhc+ZnCmSBYtOcMyCIVBjRmFY4ch4u8BjGVxKtziMcFMb1UuwZV9GszpKYWih29G4rLxZFaKThwLOUhmlkkvJRM/6U0o/F1a50Hq6qxIzx99zcTSz5GBkLwQP4BI4i1oDWINABTGnTcHKPmTgTEsWKeMxAErOpkTMLKKoyr/j41c9oxpzUFwCpNUh8XItDgEZuPzfdVlW2K8fPgQaibT1fhwnYAjerPldGahpBobO6URXTIT2qcRKKWWKUmiDYP9vmxZlAOGdNKTv/Uc6xak6/DrLhx68i/ZmxMYYYF72g9KKNSOj44WzANhiDyJhX9XltAj+YVwS8pfISUs1fC+OXabSHjLmLVZowwToBdR7/f4Gb86g==';const _IH='052eb98279d3c41933a970c20cfbe3f328818e857ddad10dd6805df9df0dadd0';let _src;

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
