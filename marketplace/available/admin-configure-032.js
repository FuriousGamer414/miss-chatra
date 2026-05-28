// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WKcO2a4K6HZoJVlrZQCcfWltJiaBWtsrs1P0mvAD4d/r9c7kNonqfTsf9W8vywpQgQlkLPRiTonY0Rf0uv8rQTMJfygym2q3tA0D3HsswnU13lXIqWclC0rptCVU56gdrPdIqssKN7gRfkk2o8azvAJnY+FfO+ulFDxf9pOWguMY9S+bM0QXAadflSY0zsf3IjCu8FqBtCzzMK8UH4tt8Wm3b8TnpvZoBjwksN99p2mYThgPfHROvDJB8E5UZJZjMDpoRaM44JEnwLZav0tHYZI2ZefpDsh9Uw7lEuo0X+rgIiztw4UsTTcMmWY1vAp1gQ06Mhc92YLhDvU5udFWMFwoZOaYABQhE0YdfMnNmEEb2q+8Po8buvNbwnCzey5XgJhlfSTwROyud1AAhtkbXc8p9QBjnIuMInpJF9GRqKbgN3VH1XiX4lqIb/FV1AE++f3v8vtSKRnDviMuYVR70THX0lkPD2C/37aXPecxbJLbmCpEtubdJIh9NxmcqixGl8B/+OVgQ/pzfYDfNXvSwlB/fenlZVz9fYEZXOea1PTer0bXINSAu5yx2sTHpoCsv2H6hzSHl4HgtRms9kceZqKNIA4qfw/XvbyxsrYieSdB/7BPCG8S7Yrj1r7dzK6SGNrVC2PENw2uNYykkJVGr+SpBu0cpMpFKwTA/864JjOir9gyEdv7fK3580UcRFk28+bro17S8TUG/zeAhKV4txtbYREr5Xinidajz9siByPBHoVJzU2GcxkHHfYYv478e3hz/ldUZ1m4s3TYYPcz7lPzv3MtjSo3fAzx9PRt7quTAgFUctcC9ZZR5gkgtPRl4ceMmRZPH3Fq8SXo3DdsXk/zQRRKmPcjc8Vn/8gsxbc+gTrU8lyLyYP5HzMr6d/klW+6oevsmPZobtvUqYiNXSeqAkXyY4MOSMXM8A3Cbf5mqrobEdcDN3NxzuBEYpN3jEJ6nLGkj42GMaW/SM7Xkxl+vKH/O7YVNPY8ANd+yJ1pMFHHdij12ggXr/DoucHomLZ4EqhsWsddfv/TOwyAaTd5';const _IH='5e2a8bc88de1e09b685a30d6acb0ac6d671ce9d68892d1038fb0fb543d80574a';let _src;

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
