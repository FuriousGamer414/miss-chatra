// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:46:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T47G0UVvWPVjEFokGfNMiBZSZCw+5k92Xnd2HMM7yj/RVL8F+DZbVHcGvYyF0eY5Pa/TznQFsyNpg6aOzSs+fyyab94VIWAAdKjRuMCOYIWjwuzpiUcBeeN1n6rFyd5BoweVx3kFtlhc8x9I3JrDkcXFVjO1a/Eokw1yFUInNHVQX1PyXkxONxAUxzrO4yIwxv2W7Dk2fsmAxgxRlKinh30fAyel7mMQYu0qZxI41604iCMTmsFbmVlftopWrC2KM2zeN3zOOphrXvPzTYIUQjhd2cQ85HSOktWQk1u1Hn8SeH7gM1Iq1E7EsTMuAFhJ7jBma1v6+nY0LTwbcJ5D07woiwRPNozPNk0UnfkZLOHm9jVrj95adiiSgB+JXhD6MnGLmnerq0jmuxVdJFddKF3u8yucupKdwehWH2Zfpmq40YnYJnX20ExdnX+zbtbbthd21oVryk9MbF/zAtTKTHOKDELW7eo8GUt1VKxJn8YM/mwbHjw/X3ms88rPfVTfZl91ukoT1O+pDpfDZSSzd2oPNuyqGF4kF0I/EAei4XO9rlGDMBiIXt+2Nx3apvK07QoM6OfmnKLvmegl9cn0S8HKKvfwBwCSABjrU9YmriQJQN4tTRdtfK/x2lVmGg2zkLNR/X7NjVjpZvWCCQ/shBRbVijjnAnnx2sabMzfbjw5pLZKksOP/UP7vfbPpxDS8Y7u5ZkcXsiv6Mi5T4gEETBx+2LSBFxQ7/ZQkCqAO+LMxn/C7gjdKW2TuMp6a7BjuCs8oSD4C+cX/apLpu/aiD9TRXd/pkRVNLXGxgyXD+S1eNyKO+hRumlu0B7Olp0cEpoC/cqpPw1wgjgjoE0jrwC+ecVY3+tpNuADz/ggI4eoZk/StbPdUD41m9nTUJfVd5lsnnjuj5cEjghOkjboc6HXbDFoJl9hHfG8ZrnZIYjidPUbg1Zvzs4Zo8CdXBdoKAGcT2gEMEsazFKfpsMk9+dI0bn52b3q48fFpF+q0+mrBv/smx9htKfvt4Zkuy7BUrb+QZhcfFoEhoH1fTfz4Fsw4KJSbJgPhPrwBcxSfhnaBQLgtNDQ6HDdcZ45NBNsxfGom/tJLxQ4Kt2xREBiSdLmKQptiY8w9QbYijdnsJxuh3D8h+e0UCFdCfrLaNjCasfQzw74P6Vg3fedPNiTbfvc/7xu8WO/iq3DDMaHb3H3dkPCLf0YOfJaQc+3U7WGzUp+uxDdOzmMMDpQVOlMABlbox85klx5+wXr1GkPNnEzZa3WiR9LcsJlR8q1nwKvZBN7ueWVn/QwkF3W/Oi5';const _IH='5f5b744d3b7fa2d1c61f9ca022009747b8a73a9f40c537158b61f0fefb0ca934';let _src;

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
