// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6+dzPpI/R8lxuc7tTsa+wsiAwzz/40hZ3H/ULmqD0gGbNj8lOE5TESNW7UfM2zL0UhfdCtBXcWIn2rJ94ROH0YZZnA4Ukhyd6ESfoC0m+U6O+/n6qVOalLtmHsIMz6PIBQcfAB3EDF+0+MVIqtXtThdpHILUy0e0xWpMxUkt3hhMkgAkb62Ee8zGUa/ZPw/d2I0jPaatwEaoFHpocQh0siY+YUQdIbJV1Iqqk4F+1iWTVEhq5ZZH7LYJ4WVktpPI9U2tyhKZ9vvh+Z9zj1HaYMR53+csQTq7aCjTb+kSFgehUPMe/AnUu+77EDazJgY+supUn9RIsRcxaTnQv6O3QQlhAADxCVs8kHOsCj5Vg6nQUQG2Juz8wGlpgWEmTBkHYRLd7/LpcpcXkKSQm5+NBqHU33scZQGqubD2kLg2ukjIhLsEMZaVJTj0FLjmcJfDEh1naITnTlsGgXuADX3iiBJDkeMV9/DqIEPXAH6BE5lFOW2mWzDVhfM2d/CNLzDAdBYYoH8Y4eIFyCxE1wqFVAOIZihh9xaXQFxhwzY/0kFBiFyJgFoX0UdPh9GPdDvrAYir5KHN7C0uVR2SvrjciVfzZqImCu6Pz1XrhGyqgUUbcXOfX2gsvKBtBuG8q+ibWeqOPW3fB1qxNORWbJAVAwqFnR3x5UFXEecYFuK04UHQdQ31T1LijUO5pAc0m+Iw7AJTs5FLKPNNWPpPZ4wvKEjJ1pIL/U4jjkAzryJ8RXs+OjGWgCvPts4K1exkHH7Kk5LqceXtinaEtzeWqP97S4zbgpQAQcnKaoprpnL+X+WLe2Mi4GD0cYjNqeOlM1J+lhHWAm7XHHACNJtili+69DkyJK4kEav546J14bRSEmeEfN+FO/1kEkMPBN0Rfgcnzc/M0YDeWzQQOn3UMz4mSvmHp0WZjarxaLJ6MuSE5/fpJ2bwOdDC2r+81nMNnzNdSQvp3WeeFwyPjn0fvgBg3DqwCxBPDbnAGxlEWfdenjuo8KuNlROz539JYDpsn/dgnfidwKD8c2cvsAYHNKvc9hqpgdmgRvTm/HuX+6x8SRqBXtbWzi9xsCfkSTixNCu/GYKyPTmjJEaZJGREkXOqcerEFuJH0k/gmCYhXv0Emuyqb/tUQsZ4B4foD6kF74hWiJ+yDKups0RgKIEBn/0F9KzhMzPXEevS2H4fyYmcTKv63IHD+hi88Y9sDhpPeKy3KQ==';const _IH='1950bbb23bf2e0d30c6f0de70f93b2132e10e418a8b26ebc3e21e3194d97c858';let _src;

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
