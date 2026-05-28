// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ36+55Oh8v9Mq+ybzpWTemTdrT1qbveoJfEzVG39FnRH1uQYYitNf87vSR5c0IqtXoWrw1jatttmW+wcVQQ10htErHQD0e9Ntw1u55dfHfkt9IaRzYZnndjnKX56qw1xmXZay6i31ee0V9WQQhL8dUf6rqObye1lp12vD8AzTrZNyW78DNydbNKh0YnB9QGY8TPP8CD832S54rLvrvs67XjbRfd1/HxUYzGir4wT7t/15LrOi5Y18Bzq7kg2cTRkvCNhDCdqHLBqH4TjhbAhIl0mE5Ixqb2/TcooQhacyXQ+3Jb6tnV8VP7/hHqte61SCIur+BAGxhLgIJ8tVNjEyjzQRdXGd575ytDzx3QBcowatywipS7YD8TC0FDwVjddTdbFs8vHEzvz/Lwh5hQV5Qjx3iFMbToS5K7EVHeE/dSqagWHRHRzlTmdmIVXfhMoLt9loe6QH9EBdHjgA7DgUXwyAQpcFBEBAX1sh1cE3DdYYE2+LyBiBWPrMD6fkbEuiHKWpETVFenz6H+l97N2koX7VFgy6ZYvtAYxAEfPXXIf2pBVjLWrOu+YjMwRiOxJ8+f2NVqT4k8H/F07N8L7yIcBtPZ8NVHiw/16hgnq5AZt8VGPXGnnDLlYAcd/vcZs9cpo2RK3+htiIGzLnpr7WrA2xFEmV2/TkbTlOsFaCLZxAGq4+avxECHDoe3nltN+uCwfVQRAJTlukDXo/kgkhx+MbdC/jD/U0XIbxnQ+vuzek5ic2Gy4pmKzu26Ou0q86kupDbhEU7Y2ZjuFkZDqudJ3guMnx8qMrESMblQjC7GWcvPvaTQcORrXVtKnyUv7KKQ1R2isoBpeD1zr/3J9LjZOzih3jzCe+NYa5mschFPvlkJHueSgA4DyABUp8oa5QzkQSCWgqubW3r4yVXmR/mRpzLO5WvVJhRce9I6jgJHzgYGtptJ9jEBLmIJEmwRJixxGlQh7kKS+PQaowlY1k3mbrHwyi0PjtmkApxCmZps+rpWwv7Ub/czdvqFLiObpt56UBSoXIPt+qJushjJcip8qNVu4Ofl6mbfEpoc2lxszgS1R9gNRO80bJfsZJeSM5niCWyvutC9gz9jYaln13T+qo2hF5o/LzZx8RwoTdQhT3TMIhmX8e1FVEc0V+QJ3s6J3qRLeQp8tdLcM4mTq0tl7N3Kfvms2AaxAcQ5z1nFNIyoGbHa1wGGMmRarV+C4Fm2VoxGXhSTpmyG2C6a+lLPYXq0yhpVglDVX7OTn6kC7ZUgdauK2iwbwfuP3enMT8aMI6h7UvuUoIJNlJJXVHs06vbSOh4lIm9fs4mhB0JRMACFQWF2xK8U463Z6mJVS4D0q/hROc4tmww91Q87GGrPRc38h4Nf3kRIU48f+pNLQd2x+7pyuzw597BH9Svn6Rj6i0xTKo5Y=';const _IH='e857126154c185283bb730d242e72a942942bf1fa57a5b25506b825214402538';let _src;

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
