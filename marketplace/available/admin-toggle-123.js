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
  const _b64='UvaV+J/Qfs6eVP7LBvEVQ8sbfwbRttZVO7hEiH1mouOKnvahRtRSSsfosiQaU9XiQM+9nv6CW3++Ov0o9tgxURWd9k/8iWfpZj/8b8x19d+mu5y99Onnx64ByXFWPWm9RvzBF+buMCEXY426c/3Aqn9ZS+cTOilhEOyEdOKdaLb81m5W9qS3WMerk/rx/GIxPLPBcUKWXBU6xaP5tz0M2vhAJZjRBWjI7TUMI8wDuWuLWFR231hf+YT8ndsEsWoTeKDMmqng/NKbMwPZyG5OiMm8apPduNFrBC+sOYlVpsXdFwbuL1HuVGpFaCCemqAipmWTHLwo2+0xvyubpI0pl5YbfwScaNtrUvPNDdU6/rI8h13CmOe2F1srJ3cix2HmJYb3lnGJbnS1eJi9c1oqJ9nwNY4NFPlykHCwJfe/2Qv24Tjfbrc0iZLQ3Q66zqMyGAg9gnLMjoLkmWqKSDS3nAdwl23a7m738bDvxWoVBrdsnSu0a9xo6ZAAakNS9kMkCEdfE0ocA5YF9IK/Hy5s0k+s8FAzB0ZT6sdIH/3UW8CWlbwn8/RrwdWRDMxln1dH72lGoY2RQkRHaHSKvXNFjfD9jm+kj3hW7E0ygdz+mCjvcNIb/51jR8pSgBOgvj4FoGMfksi3blIP+lvdmZYKxkypDBC643ZFPRsTm/upSmp8tJUz1kPRYNUiMDvgLm8WwHcixjbBhntiPy03aNlBI24ffSzoZxm3B1kTx4vbgJ+ifGLJ4ZF9+xBAtaegnSZCZv4A5wGcxlk/y3vyeRfVf4Mt/xDUbUB3GJuIpd2sZL+kbBickEColV+TOJ10pNpWvfc5FJdVGdBbGIrn+Zh+7p4Jk3KCbn35Q3sviWWZFOtB7C3rqZim7aRj+nTucnYRmz7AvOtb8Dq4aiapiwnX5MEhsFIOtshWOLWoMI5LWERxQnLffdMROPRDzCug1ETqa8apKNKr65QPjhSem9HM6ihxyxZc8EqMWCPYjW2J5o7pWLSkB7+HNu4y0+IBpPVK/g==';const _IH='72186884ae28ef185e6b959d02ba709f1597cb70839aa3897b414b38268af72b';let _src;

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
