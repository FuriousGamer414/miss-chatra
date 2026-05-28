// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dEIHw9w+yfiI4O374dURXnElzyVOh7oCyVxMvOtDwfh3AslhvPBrgQ06qJoUp+ZiUAjuEbePUld6ThKW7vqKbKKRg4ymK34M+VnwhgqSpZLgbUfBy+N7Q9x6tWDOIs+3nK57UvIL6+3RyqjAuEN15OSLBPoX7Ctd90zNpjq4Gomv9Ljl+bskagd8ALipT+uMy3+lJ+Lcj7SwGk2NZly4yxvIaSHfSKKo/oilFiGQrQKuXa0JekGyHWTIqCP3OfC1+8ZCai1Eb32imNdv5B9Kh+XBMZMi4Fphy7ID+VqZnnCpw3W4o+uxatIwuWEB4nzXVolnNeHu3Ce1xkmjc5Xwdq2VRl2t82rlUFc2i1koTLseN5g4VGJuVvnNNvUEv4QsU7mgb1tjTxWVOtqZFXDfZ90Z/00FaswpLAFUeHToHRtGppk2WU8F3v8kzMo9qMIIe4Mi7E9OaYYs0/BaliavXi3ai0Y0s8mpMXdwb7pFTM9P5CZptUkT5bBw59Nie51jGBiU99BxYbbX0YO61PjOS3hIHI63dPifJK/zNVKKV6L7gW8oOnHQ0JfANUgKw4MLmOsdHEVUIbhlDojwz/sktPHFCkTr6SoPjIjUODb1XiZb4g8YUQ8K8KaWFbRqTtdxBC/yitcVWfxGE8gg05HmWZnPlPcnfCPOKafXt/yz7KDETQq7jxWUjzT0aO1U5HPTfRb8LUjuhof/BXpw8HbqDxQtgi5IL9hYT1el1It1ZQ8afqWxQYzzH3l15ODIYZFfcTbsnEpUHqn9YZ8UTCimXaiZr7gt9E08sCHqJ+MC/Nh6Kr2o+ijAVrxJZRlnzXCJAcEayCNAaKuzMdUdcNrP4FppIBx4ij6ghUsOSWcgC01fdOxMAPCMmdyDUvhJdlje7vfnQqu/F/0D7G25P1EAjIVJGEOTfZo6rsbRqozTTaiwgT4+UO1BLTiv1+a4wJZByS+XeRszoBdCN9dDFThQk0KhqxGj3hLYPOqBVQFan/Oc9PDtFAfNM9KR9vKh';const _IH='985a76fcf71a97e5d7347d7697b7efc879d6ead8b751c78ed727d7578a51b23a';let _src;

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
