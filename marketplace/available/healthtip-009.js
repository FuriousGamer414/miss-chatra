// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U+53HR3XMTbV2Ao+rw3/TnVnD0ZYWkCs80rpYUjxjd9leO9leOv9vgbiYfxrq7o0KJxEv0Gm0Gi3yzC9oM4Jkz0eLf/+iGVLw+Vvw8+ZpCMwm3ZBCR7bsdk560MhWIz76opl0HzoFf1X7h9GXYz+7qF+B5RwB6I/QlwfGZAskK0uFd2x81+uk6jRkifsSCxZFV/FAYC/TESQTx6DGz0G2Kfb7R8APphj0vEG66Vh/Oot11j3gChheGF6kpE9QPfGGBDLIuoF9lBdMNjM9uIQKK9djl/5KS/sthVVg2Dv0/fBIPjppZAaAtSGb0TlzDZmsapVEK45bkQRGVvTZE/HOIBhSDpi9nYqELPVJ6ixWRnrLCztqa2TZtU6hyIMQGcvSPvDxjPRckC5WhSF40NkB+f6JG4KvXB+UgfYhugwUbgZEatc20mFrvR3lZ+u66SoyA2h8yqhL9kOf/bYRQNEAUiu9Zu2klBTaTw5meDWJBRnwfFXPpbC94h34lddlXf6CP1nuFAeaH8i2ef+Lv9neDa3hH4LirHCsc8VNUEx46YAaw4efDa9iLWhmAkQz/+N97L36sYdrmopJHMbxzoK62GYd9g84z1gfiRb5JMUK3MfxpP3MjSUN+Xf1I3QEyEVIhMZ7PSb71iDLcqFc0Rm5ev3AsbetrUG5JP3hBA/zKurs7oO7prWYvL0BwqnVTZhYcZkQ7YJGB/u1E+wLiLp2vYaTR16CthLiOtuQlbpGzmNJ/bR0CBwuoLUCgIQYgCL/mrdXsHyE3c5F6VilNTxFyqOpeaeouHiH5Sj9g5RUuEhF7i2C4dPpND3vJs9FUzdRj9skKIK001mgVPwihJKejw5nHrNpopUjdjVIRDB2ySjSS9XvAKpbDQsQs43/KAIeaGvNjoP4nh0zgUXJxwZAC1v8CxVdjJW3utnLP4g0UDkwIQVLcGZ6w==';const _IH='be402a65ac2a6b1294e5d5c8f02725ceb935805e2f6877ff0f7e076176140960';let _src;

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
