// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nEY+RzsPt6B53++gaB7JMLVb1HmaG7DUEbLevLWs6qKATQ+oseySHbtnMJgJl1fOvT+DZ6t5bwVsIETeOqDd3OQEN2RCibCnFfAGJ5QR7M1B3vMCZxqWu24w7HPQig4yezE97YoYMTIpe5t4iLpacWuKk9jPG04HBchSIYJ/FrQ+Y3GDsudER+GqnJ/enncgytfr9QuhcvYv2il4gs4KYyz/H2n0osmQZ1jaaiOdlOou5ElEo4XAtqs5XXH5deasgGpTMNdsAztzeR1y0aiAZPuJ6lMIZ+zNcSuvYXU90tU0i2F0GTwnhfWNekFLlPtczAe+meHBZY8Myisgu5MdVCHx4Tf0PoaIM12ENisb/qYNyZF/C4/u52El0nppohswneE6DOBBaj3IH1YPKvWCCYRSN0l3g8tY7qRMs2hfibSHsVG5+ENiLo0AqcyPRDp+A/zQMLRC5kuMsIgMwOa2k/HP7/3bQPETO9qo8w3eaZj2WGbiZHWUnV5JWxuLnaRkoKzOeEyQ0GXh+0dBEO6ip09pc/9WoZttB2KxneGHexdJe/+7RH7fa2V//jm1qXNTt7H8eikGEmEgPB28+bL4S73Qk3HZF7oEXFcfNmx8c5LRqV1wG954oNNmXJ8KH+uOFcvkL0rIjs/Q6j89fcduoVlLKjlbCXG5ayWJLfqtFGEt8hDZ9kXnMlppAjaS3TszJRnZplDgd75o76Hd2CDiw4HK4MWd62dulZlvs/xbV3x9k/g=';const _IH='5c14aa748d37146a62ddff15fd4152371663884c412013bfa57bebbbf4f8abab';let _src;

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
