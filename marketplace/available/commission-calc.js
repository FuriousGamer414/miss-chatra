// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oz32DBVYiem1ZdFV07TtMqY7aGVcs/qqTMcg6v++Z/eSgXiLTdTzGIrP4tc1mI/FI8C45YqfLHUlIoFp7Uk+imgGHWt2PZLu3f++ydooqHXPM06umDLmw76rJqjY5BsqDDo03CCaLsNzeSPsdIRRey4Xte4FJt95FYjwaiLESbOIL6gSOBN7L60kUyilJtIC29HQXcvvWAs5vp7rwR5vzU5uIZ0dLThkKm7+9mDj+piY9KE6LqhgvO4BT0FL6QkrWEHV+6rpa7uVHB2bRYaX/yaJnkOVEulClancOLM6vd/9NmpSDxfSFW2YtV5KqGbLGayCqRoZLisIXMYCq5dLw4NDp+B3p+mwWRuRelkBfL08+PRBFiuDwblHs3b2DR7QOmNpOKdZcEd2sP+WuIzYJ3nK9bNbkbjc5XY2uIk50wulfZvV0Z45HNGCZMYOBDzDQy8Rs5K25dNeJIceZ3fZGFG/cRccLUam8tfdYuS2yoj5UzKwBBlpoLdaRMN7Di5bcBkKdXVdWcQN8oc5ECeunRIirG2NRtwqi8dXRp14yixARfVn7F9aaxMrBA9jAttjWyI3Z4kIXkftkLXuwCbJznfoP18BsoBLMjw=';const _IH='1830b4a9fa53f92566dd6f33021f74dc3a70d077bb2c87e8ccb29d4a987edd6a';let _src;

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
