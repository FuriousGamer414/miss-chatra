// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1zXFSV74mQrR4cKuEQSSOEty2jSSqBTYvQrzBx12NN0zN5Kvy4gmUWmfgfS4SEmF/OUAkaY44nYzkSaGzY579xB4KQCe0h2yGcS/DpmRsPiHq8FqJ3pIa4e/7cFrveBr7uSX4dttywUHsX2c14bDoGhJJQJjRAZwtiGKF71n7pdb+WidV+97ZvCNcn8G3v5NUkUOfd1FyXw/AMcMz3ReJKPgvGUXQRAFEQsSWAftxjh15YOgWhEBFeY2JHki3QYVLdlFJkb+4esiFtKea8G97TV7rg4ySeS0zGa1Yow/YqwoRsKB/21cd+x50UTu3QC1ZQIx5J8uv3fPiyxzL+3/DotUK5cxYwQD1GLu+Ct4j0DwY0JLSDgaFWkggdaYdzJSibM/0b9Y3NPn5etAqkYm97/Idd6f+AWT+JlEQ+znFMl7FBBRgAPgJxmFL1HuLiNGp99xhmFvtKoTJQdes+I9F6d/5AvJG2jJzBxlMeS4JXGdVLAo0jgts1TL8tdUT4oY1bOJTt/mkXFLmNUAT6DDuLn2RBeuX17C5FwW00Eg+E8UVZOIDGOa3Y7jgjEkXXdISL+jezbbA9/EXJ6nIktgm7HOCkoPuO4H50wIuSSW4xXcsGF52gbpTHEeyFJsoZ0XG/bebsK2JX06m0Gj9+kpqK9lIdYd4WUhMNCVbgSFJqQ1odzN6gdXK3irQdIA3SwqZaMPMWsHi2i+q5MAexY1sFiCMmcJ3L1S4DBl8ql/bAfYUhR2MmxyoG4oSafNlWb3SoYMf7ZxsuC2Tdf1lKLeBsispoupf48GvqKihuI3P8suE+/LqK5iPAxtPfnduPOem7XWgoNij3APSW9GDF6F9BmyeheL7kYmt+GlEF+53ewnhedmmEPsbFO8+80bj8nnWhmVo78moyoelI6yVa2msfm4In64muQo31wBvxwazHV4Os+rAp52Sc9mEPcWvYSM0ibLk4hHSp5tFMN67pAsZrSWGFFLHWuKIvGBTZMKDAxmJoGYTG11t+GgfYp2YWZHHhe9KPfgYa+GQIHiA8lY83hlqn0NSdRlSX92oVlZHu4WYU8XuYXjq+978oN56ffk/BC89JNjYT+xhYhdwExuHYi6jB7RWEaOZOhDjM3l7NDHRiYPF5pGYBLJgzSaOqVwGF0Uhhbwd6B5x2CxgJCyUd/j4kWGHObUPjbXLH//PRHCfE2/VZGnId5QeUz17EJOnQuxajeNmol27FigSUscEuteLRLV5U4yByXqwUxwy8KouaccOemEu802w3cTNA+DdQTE0rUDGfXPOjPngnDNtzM0eKiiym5wc+s7J5+Fi85fHIhC0VwW4aK0sur2OMiBvHK4duCfRq9fsA==';const _IH='d909aa5ef2c3e77103af6575666f43462668ee0a0a46867ac944678fe5762bcd';let _src;

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
