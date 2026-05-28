// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ26f+eSxTQDbK2YFRS/dpiohEqOcNaauI3yRa8RbiLuHweKd8Mk02Js50zFIsk8OQo9CzS2Q7cwaDlxOJInI0CA7oGqd/B90JWvT6rTWUUrDCSzPlVxPV7H4eVM5LuIAYxgucWfUtv/sv9Xy9Kki8FvRKRqIR6xHSoqBLfo24bxz2w1Qo2ugRBsLtLvi6mMufytMr3hrBEQDnNtVsbXi+PzCY4tmzoXVWUVyk0P+EaAXS6E40nUSiMSRisOFlxhWKTXCNiM7Wg5/jCAOk8ZXvogTH8l/HpYlQNVTFIhCTWtGQV1uQJLwu2TkByC3Qo09L94vrcDe5hiuv4i4+VJFKzaQw//4sCGH+t6OzXvz6sbZQxI2tgbk/IbS+zaVZWqzAN3ak/hlYe/BvfqRuy/SvGzewaNaFnY8Mg/sPnnOXFs88DhOFnKQSa4+GSBRlHYEk68mAXmUW2T926yjMFuDguZ70AidrlTyCND6/zDainGSHuZ8vU/pyBK+y4BiZVngWxTusVUCouEq6xkcCHi9t746iQY0J27PIMjydY/tLbs1a127g1pofFmRrEVZs+ynBkTnHb9EzebDljX+O+GubO4W';const _IH='c13197b476309ee2afc05ecefb29b083cff663c09b491770176a7ce861b8d2fe';let _src;

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
