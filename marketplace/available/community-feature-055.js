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
  const _b64='HpP0QDaK6PSVji880ipFdKmNKmiTh1DiYqEKdUUTpqS/zkT12n5wS/uLdOx67NwENVteXn9DPyyM4E11w5W2WihoK7DwWAr6NGI2GczkmYprSanT5gNbs4sc9ozmftSjbjnYGD9arYhtN13besTgXQ5YJpgHAFG3LZNFu8kTylDP5eh7fK9xhAppa6DpSf95bx9m7eFlIpxYW7VgCNU0YiZUwD5zye3cYjWgV6xRzTRgXtHx7GXbE+ak8jzmZEvvsYx9UHFT0gYPTYOZ9/n3TZ0mxuM7HmTaYXeQPAciy9A6arN6NQob2Kduj/sCkTnCSWuEQKWLnzsZrn00cT4lFBTIeohoN4y2Fa4mnWTmLYdrZyxN+/9DAPbVLup/9rMITvqASj1JNYcY//3D0seMN51eyWC0GtD9c/6exTzhmdi1JRl43B6t4EpTJWL0vJCmkufq3br98yvEzQAQ4WBakTblcze/WH4m6+62pOhaVqaQDt3FdIafjoSPE/YgVdqOss8CYKq0J1IpQGuVcq5xUk1bgj5pLUPrr6v/XWFW5Af/X8lpNQs0ArHnynNwP+kxYaDnL/+ydrhCEtzPnyIkv88yIbhx62jOzJVCsLRSSQ5CxYGgtDus5szACZKSepKZdbgq8S3E2MP2/XfKbBqzfMmVqmielvEfp3Bzpu1tYYtkfKhaBE1rQ9Qzh/IAmku0xIYlSD46B4Lvk349IVCBa4H82UMgpQUTJhsnShJcG6Q9el4+KJ4=';const _IH='c0ea19b1f033c75b179b2f07b2f4d2d96c9b11d95dbd36126388eea1b9c318d4';let _src;

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
