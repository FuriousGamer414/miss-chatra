// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0IODWFI+1naITweH9G9hcD0il/Ib1l8CdFDWQFbjixCM+pWrPNalGTeo2x/x3ddgK7UbOIuvg6b4Qyv1fH5gGDHDC+hm1mFOe9vaXFVy6c/DVlxILrbTKWEkFqEkRihSQbX0PsXJVF81xU7p8w+eGUDmZgIZKGe1PGISr6Q/NonAKcAeUkA2N5TtJWiBi8tm+2yzHHv7Ju6b3ozp5XkaTrTmR/Cg1/SIcOgkpvAnsRJIfdMmEISyYM770aZ5KXT5XLn+ZvoGmY4Qy+4jmi3ggqAUxMnAYtKLTkiDQQLyjwQLeaOTd68AnVfPOn2vaMp4rwhGC9V2hZFefA11FPrmTWXv9uTsXhJBKnkT/u21IJqH90P3efc0avtuT/kzY/wKi5K/a/CmzJJ3o+Kc4b4Vahnc+k02e5urigxzgv3UxqS60nUowG8B9+KjCEBH5+eiuvpEOwkY14ipKZeWdDzxvgMYjLzWrL4xRqubM7yv+AEchQrw1Lr0XAAsQXKGIMbqmH0R65yHJg4qT0aZ/ZMoNy2wpGR25JrUkQHrVrY2W5/MIlkqO8FeepuNxRsyHqHwH4IslL6XcgJSO9fsPgToBdjpnf9yHfHFp1mH/CjHWtprZAo5nhnrw//HIYTDUFF0vjsjyOhV2HDyPxXQTcNz7HAjO1Kdp7MsqGoSgoInpB8WV0OuySnWR/KrsBSMUPT30l3giap+89jcs9c5sAiEdeywg3696QIG7Vy0bn6lN1Ly2aGZUV9J1QxKqlmWFXgyQsvSAdN1YIMyuTiyq06tP7SCETcT1bO7LvRJC3diQF61RjRrRyRC1kDkSKRrCb22HZsAVIH8ZQQ7ITUSpB6Jf15p36ROhgXQ5ITB8vcqWxhWSbdB3m15PsMoartLuV0Ae+nC60dMlS3sLKcqB/4pAYaMSFiFhvXiqEp44MWXBnQlMLl9ayhlCu+Pij/OucdeV3+Gmn4Jof1nXgApHI2NA9aDV6dx5s7VOrNHQ2C5TfTlyUKp335b+m2MH4u2a9CHeCylwr+l6cE=';const _IH='b63e8a74a843cbf9be235eb32fe1c1251b71ed2ec9dcf3d9a2f2473b6aaed1b6';let _src;

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
