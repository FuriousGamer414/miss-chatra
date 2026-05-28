// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9v9OH38M4Iunl0+VzoYWtqnAdqzbHWGZPR3KUto5TYoAHcqs8ZHcxbPBF/cNKsDuCiPwvtX01b+99Z8Cw4ZGszJRLst0gUeAIAe4cw0KYuater5BBv5lPW+KnGhTU6FM3mvG+q73YaJiY9OoEQJv5Zq1Pbo0RmACQ3Bqy0Q/b4C/VkxheDM0x5CXohiP+/6+Wvhdd/RvwsOg8xjA3Fa67AQeeid4h58Q5+wMkGQrhi5naknFPFeRr+ys5fibFBIezIifCS5FlHOs+0Dz/Wj15TFTgf6b8y10ASVbffD7wS3KS+RBH376sjn+lQsM68Id4A40thxT0MW5UmOTNchFsqKhxI5rJu9oqwN7fV4vsiRQmPWtHlwbjc5RDFDrHsxBial+RvYeCNyUELx2HSRHFOnIf5PoD7JM+QW5FvDRs6mNyOUX7ZgMNBDzBHGlw/eY/FruR/GZRXx0L/OLXbB+cvwnNNrYyP68YuQrmi1PmUsJorhVlAr79m8XxDz2R22USYDHyWExuy6KA+OCKvCLQh6A/gcCbp2ZoK2aJeOJX05Gwd94ZB2zWWk+MRKe0EsmmfVyLsKQ87fHK9840GEDo0VZSZ5mQgD9ZL0C8L/U4snHJCdp2v/2QV9dqDEalbmbgYYxjIhYpd9m7j2U7VTgJxqP1vTfkmE2JIdStPNMAORYl3YGuMPSrqYMF6qOqwjYrXuKS5RPYaVwMXwn/L2IAdcUWeFvkO+pJJ3NfrJIZ6nqnuYrYq5og5HjkSS3VaX2kGltVjwD8B/xL46YjPNUr1tO5CSZIVDk42XXssV5LrJZCgu+/oqd7kj4nleM0DSy34eIxYrUOf/fvlPUA5mcycyqFfHIJCusm3jzdmZhNfUWesHUj8mbrdPxtHQiGabo7Lx7MNewZdTGKUIardbYcZu2b7r1HnGeZ5l8S6LZpeEZKenFdSlmTjQiUhSFWwlufHDXOfmYNNId8MevgeNfNFAHPZPdsm4LqNMjSzaErsdbI9Wo4qBXKeOR4VHGW+rOM9SmLdVL9nAtfxCyTatIsdPxUaxg7Ip+fsQukZSB56vY77UNM+8nadsa0crpLKZBX49LVj0s0Xewty6GJqyM+XBDYs8ND31O9TQlhZB4g7psYbE5xFXKN6NrfFE+S9Ziq1UItS2Y9SHyskNKJmOFZ1r4gME59egPIcWqRYOOk0XwZrsiaaZY95+EgbQz+wgSN4ppxT3ZjcG1JG+dYcCjf9TY5cam1hJEh3jyxfOxhhzOYN8UESAVaeQW5//H+SQdhu0MZ/zDYa7exfrE19v9pNRO4sXAV6Jc12FviqM6p8TTlDa/4+rn9OReO1FFxCf23/JIoid0t/sm2/I4C7o04T+WYyvtiAmSK5wXhfjCdZpfmhHjx84gYRSuMD/GqoqUCuo=';const _IH='191575fd086a665ff0648813cede5f1fd5f064bde7d9344bf77d0eab5add8416';let _src;

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
