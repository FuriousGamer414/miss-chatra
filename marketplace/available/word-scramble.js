// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2ZRd82UvIgqzobqdsih49gZjfyarJMEeu7u0cxQLteyi5MnKXyAW1qzsER/m6Xxq1Zq41BXb88rfx51r1Cu/6v5kH3AJZZbISOviNyp0wC7EdAnrCXGCEw+js2C4bAbjHLTI85DXjwptpFiCF3/Mcb1ldL41lEDfRqccwP74bj++Y9hqZUocJKDB8+TvMAAu+WaJBhQkddljOMt1RW1WfkAfNK0p5umoPOs38s2QCzk/Gzchy6TDFi/5FKplcY6RswA1tSIrtMW4949wQfyBp7vlo/fOGOES8PLBy99PccxHs/8ep1D9TUxhG3u8og6LcnuoersUcdGRtfzTuMt/blgYd++soo5+tM5vx20SX0x8VNHb19sC364dg3661evk6esKCpt2ri2v3wLn0U4V2q5hIxPD0PSyET66qmsSePn6jGEj7rt7QOG/ezKh612JvsL4hOiOIYRfL71TrP62w+uqIQk2ADF0LuTPlJS2sMYG5OWQ+MrLSd5fYUid5f1CufkORV07w8kIGdBaa7AGnH4rvzPyInXPzC9MMNSr2pzVz0uetso7rUKooogjCJLpWUMac5iUJeJ8jvaSTwUwvKMRG7kKlHTKT3mbGes2IPIof3fxKFMPJR3QlU+yTb3PgLI6Vpag8IELiIlpAf1HpIOQvGwRY3whL8HTPwoytv9GuCUtuW/AyCfkS06U4ndYuZltf1uAcfgRIPfpA2/7xQneSig+a9KFR+vF3U/2jLtdiMVsaGbAQTrF5JAu7UwMgv/S7bXQCjJb36owWnx4RpsetbpYZ0Irdh/G4B+YQAbKJCXtd7rp4yk+3kEeOEGEzzcaBT7Qo7NNnqAA9VpvQE0hLNm8PICmaI53yD73QMS14HMGL6KQxJdWPBnNG7AjwJvciH/j+Kq/yZHWQ7laU4MnCR91HOtX8eeg13E7semmunZadGHAAUfIdHzEtS+ONaxEPsPJPFGVF0dSj1qVJTXCJr8UlKpom8TaPDzGOouNrGE8er5DY5Ey6k8w+f1q1Z/ZtEAXiK7hs8PinBA80Nh66E+maHTiXF8akDG7cS/TptHg/btrqc2nFtT9xozsBGcAK4wAdyX1hWSBeCxn0dYACxZwJBxaiDDvC/lBdr2zdkvgr6JNNJhvzWsjNdu/i4un8aiNC3BeHr/6GiBHztWKLdpTTbZtLPJZWz1lPW3bN78SvipTiHgqZayQ/k+YFGl9VFC0eFbqHsmO2iVQlVimshjtlqwu8RY8lWLl7YYtrzbD3UcKk/b/Tgpxp8LH3SPlKrwovINaqcmMi4+6j4CyChbmEhWEFYcI46O+7ieFTMJ/vlprLzwAIXpxkGXGACUneYcC86yhQ==';const _IH='c53953d4bb33862513a65a1c66cf34f043b045897559bc02fd1fe6cfd78dca0d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
