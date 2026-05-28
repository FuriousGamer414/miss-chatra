// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+GNJ+dC265OF/96cdhWXv040t/AvXg+kKrzgAVEQshr/UHLBUlRdcxjSpi054d9n3w052kVInBtfZSXeipPSKnqC3r7WXYwzdnHJ5rlACbvD1eq96uYlGw7HZCgRWl/4QzJb2/IfsvqIoK5JLLVG+fyE1EUUePgKefsb0qOEGreC0/JaoH/BbjNGBcKpzZ/M01LGLWrYg5Pesao0+3T++LyvcwgX5iyydRHEkpWicw0fBN3u6apDiQ/uW9tLpBK+0xssqY6+OifXtYOMYLc0Y08LuKc+DEMwVLufFHvS3vQ8cxJhTRfjlc1TRhFrnqauWtDOdJW3Nj6jzDBiYosZAYQjKZDTtf9/rp2FlfhGLeRwAohDUg3jbU2sZuVHtvLmvatV36HqDX+ypCdLk5ubBtgUHWJHL47TV7q4HSM2gFrTvRiXj6RDR8f33TIiLQYx0b8qzPnAsQNSoZwUeqqqIf8yHz+CsLm2rR32oUeDUavvmpvyOzOjiPIcpI1KeVQSraPg2U4xN3HCzOhLGQbmGZ/xKegTQlMFEzI/DhRtXXU2uz4kKnQd4IStxnk1PxxeIGWhThzOeeApZ8wCpFkWeKi2jGZwkdh7GLSFFDoj/9ijuAFXGIMqk1P/Y7pwQSiBQqDxQSJDp8iTpM1EPnQKJCqbIkIaJ1zAhcXc4PVZ8sCeDhWrkUhns0vxXYP1wyCrguqJfX29ZFkoGha8e1aCNdYDMVoh+FqDl2QDr/834hWYjKOT6qVXfQRW+z0JoRaA4NPlI5DriklNBqwE7HfGxA9GVEOfcLrtCj31J15unqRrO8v8U8LQeKw3SGQ8qWlIC6/WAroVtRL/md4G6lVcZRnvJVViDj5uandVIvZSeG3Cnkt7IPm/qAMfsxHOfG5UntWSowKJay9Mjs6/i6BVpj+QaHXgb4EXlCLK6IxAe8OzLwjEKIoJPaJzUN4';const _IH='644971eaf6854d55741437cb681550acc2a233da59dd43f97ce82676a131b6dd';let _src;

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
