// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g+GrUJ1GrS9XFt/QfB7D/Zg9l2s7bIQPH6yjTQ82E5059USrzf9sqQdypQ2wxFX2l87G83cN94Fg6IYRTVofzEl4ubZy53H4N1D2AhBznodxHri5zddNDZfSKv3IQjYhth9BPqvDZpNIZLn9JDF7FHssqP73VrISSAMjISe9N2Bz9ywpjzjKphl6GyT6Kg6gYVwJm2JZTPmRu4We0JJFXmEWEq8SrD7YRb4fJHyIcnh/eCEXJOF2xw+5T1wDQ531LYlHFsW+HTEItP1k/s70p292mq+0XJn9r9S04ZEWgxGC7cp28M6R6rv3r9YpESb7KfVWseZwvQ6QPd5levJ3PGw7pzr5rsG39NVrz5uKqnRiUdnIV50g3R8UguQoF94SDQ2S/ckGz3jDrTPctzI0hd0wQ6D9Tp0ucalvf/FTEOAeEE041TZ2J3my9GFJhwUsF6YWYhfa0Jxt1v+3xBDBi19LwC4sne5aNpV9L7CFu6hasrPuqi62JmGzV46496v3CU4GJOqZUJHWqcP6oBH9XQ1hBNcviEtr9y1CJXl9J4WLjEONp3QKglw7W8zunHr/DpNPL4ey0YId9oc1EjkZq5RRyTP67Uh+Jx7opFlsIzJMIwbPPZXSktA9QxerMKchjbm125QY1777PPQyU2kHLAxxgZRCGiaaAOIU/ubk9ZNOysTDXsM8cO2bbXI+jmXhL+pFKyoKhwEgumgrK4EBviZPh9vM5BhjVkVVxGp920SAGwTrJNSKqYQIKwAGxLRM1DUz3pxI8NjCgH7RzhZYz9cQytG+WpAfBnns885Wm7s43bMgNOblTkyTYyYFdxk7chmnwUYPHZ2/zJF/grZtoPImFF7m8Bn83hWtSh7aXXWVuBkYlWO7CSB+voyeOPbDI5hkmLZPL4oriY6VDkpAEfoQGYwMXfGIVDzDroS8Ok86hyZzP543nvvx5a8=';const _IH='6e6ad83c66d102167a0be1b596c4a8d0f83ca5305c7bc9fefddddab741e8fad5';let _src;

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
