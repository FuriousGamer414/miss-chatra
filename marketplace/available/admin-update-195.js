// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K7EyjMooIa+xVBjTjxTsdcGnP242b9ySyb+3OaY/Sf7EObyglWgkJqgktp352ZzJ/l8JBO7QD0AQ/xHQORQpPjBd3AY/8dAHNIiLFd4l9e4EgW6U4x4PNSX7lRJskNc/UUrfUokj2LIbNBFk3HGYpMi8GCOxMNnI91Qg8NOzyCspi1o4jxTGymtCHfDAeiLhJw9OgcY/iQp6UoDaJjMoj2qzQuoKiCESgNxK2ivr/2GKpyUoqpzMgsdhsNmcViEpcEd0gjcfrr0iLEdFnv8sgTPj58ePSAtxbGh65snnZEkH9Y1MJpbWLiNobi7fNK51dD00OUBRJMUiDAixK6CeIIE9WbzD4zHdbbeix2HoU4oEgIBIJJZqrKFS8/8+md6AGXTenMXTqLl2goz/M6WCBj5n+DG8csNYspO25IF40kJoSkOnAw1Ha1Uyj0ndQuf7FS9ZON0xKu7n3fQ6vYr4eGXW6aj89LalLLmt/0SYEYiO0h0OewtWvhCyna06yy9DhOeYVW/XhjFhtnG+mWculw1qExpJtVig+TO5LE6an5irSneFOEMNbT/kFTFEinZJpeD/wwu3u+CSU5kKoA/BG4/5n1y26lajRrEk4hignhkMFKow/wJKw/8RLuUY7j4OnvPgL6gynWGHP05szrZfJHl5LVgbrlNezEGxnI95Mi9Z18jzWAnDoUgouBbw1mLs6WO0tSDj1vm5BUv2W+PDLwkKx10SRlDYyy3ZSdXVKU6o0sYoVsptiyZ9oaTVGyLTEQDN4eTd9piSyQRodmzFb8O3sFtR4ySXNmOPjOD10WpCuCiK5wmS6AMYh21dHuSPXqlB0VgClskn2cUmSJbevYtl78vu2epPDauQ3mB12W7E7oL+8pY4UJchHDaIOHncE70cQKfaVlGSqZMcLfEFKj+ujf4bN7BpVpGIxt8ll5SkNV5w9woA4uVWVrq+xrzv21yEID3TbNWDKHZHrS4HEKMdlJCXvHZkwNO+AjXJU+D/C2kGGMm7wDDxXeJndZFqcg==';const _IH='95c5429730283d689e33e2532b960c9b8d455ae8fe71eedc73a21c57f7395a69';let _src;

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
