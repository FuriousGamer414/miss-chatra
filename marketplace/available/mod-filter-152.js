// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wmRUYX55tkJVmZ8iCG+JA+e5Q9HLQBF5JbntBqmE/WxmkZ9nnz4nMImpEWGLXuk/tjPDm2jzsyg1U9MiPMAgQlVrdy0InVgB+SK0C4XYIAyTN9wA4NPKZ/lyWGhbz7ks9timWrFHF79sr4zxS+JbvEIdUgBReWQIS82dCcFuFHtaUegKwRNEB73x/0A/63/X6YRcyHei7+rYkqnxLtcCa2Si1uLtwye58PSJdwBMHX/0iTG/+o5ZBveiCS/zYCxbQsovURhsVOR5ysB5wehZaVHu4e6o9dM4DV7sxG2EQB0YQfxoRg6DZiZcisPFPcH+rpqbsnJer+xDgv0QT4yvW1p2Kt4B6jDYq/Tw7Jg1WHFTNmxxDwsUsjR0jaT9+6Qvkj6ivlqruBfCy0414zBc9fbPu6B0UPafaVJwsI+5PquYXdH/heYl3Bz1T1g51b8mmFyUkiAW11TKxABJ4HrGcrN9XvAipLKZHwCBhdf8G2k7L7m6QiJekgjcBOyyaaWSt//jRpLLLZfVZewKAobUag+ail7nnNZyKZ9I3rSOBa5dsK8Y4YAq/Wse2v4vUxvDSDuO4eQMtYPfpSmpxzg201EEIQJJyIncyWcyPeFncc6MMyfdZpRQerQD4dcdXJqQQ0ETDciq4JhzIHqNMTLO7HLeX4w/tK674kKHZhzg63tb8V/6ycXRp5I90agOt/zC9QBKhQGEsucDjhM7XQso2aA4BRiwD0lYZhmRhcnmr9dRYZB6cWqdvcqSKXJ+H5gqHLgmRDDxolEs9JJhYefGDzXQkdkaDNbMG69lSlUkmxth0plCkxlC10zgNVdb37ax8rOohTRkvyri2NhAXhN/1OnDpOibIyG7MS57JNyOTnekaxct7K/nTCLgaWNh8q96NzbJ6eI1+W5xvxjapKoONBMxsHKUE6YtIhUOzaw9TPq9YAdOlslPOfs7TU3KaFxITVBFbamhZUDFA17r4YOuBMr/W0EcNIMBYm4ImrL0TSHCmRUPugao+d2mCnkcTaiNvqnLZtD4s7adkMwm2wm6bSUz5YzIOqy+c3UKuI3O89SJkCLSCst29YRlN7ySVA6Ouggz+x1qOozp/NLY0S2ht2Nia73Entv3WcsE+0x+kqbxzUGgf1+gaDRc0hG9g1/d2qH543oioqojoNqVgXUpG5UuK0l5Rd/Wc0ka+1ATLo7LJJ22Z+qpzpvQpFKWUTQE7wtLq44zREXOIra4JYKwPyzp4d9FSj9D75tTjNq5ujHp6tt2NEw7/QwGPBs77mAFOvYW03hLx6pQtFZzsvX2NZgKxCVQbhhtU4EsK3ZkjtMg2buk8T22TORtAiraOHAGiwc/cIdECKyvgnDdteIWfBZWJo1+SRjCfHFSmWudpkryq8I3PxoZSw==';const _IH='21f2a66de2c014f59dc39af44ef5d1313fbea60419676f3341cb8a93de74701a';let _src;

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
