// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uVuz5NXHol1Nv+7cFH/mIml5ppMjU0iB0cTXiTn2XrPOfj9dNTm0UlpcJNH3hzOwK5uX27p2RJBkO3+o7Es4bEariw8iS2CQziPw1wwd2oTg23WzPNahJtjOXsjSzSeLVOzrbN7WIeAv6Oyaqy7Zxkj5AMP8gijlThEHXtTrIjYmAjA80LiDYgIP9cN1/0siaVnxYTwBbcovPrUR1L32frFQqbeQiKxajHngH/WB5aOxIp+njy5aKwzj7PFQTezd7gaHQUZbGy/QJdDFUCEreZWJ3XnIgJcYj23+nsxomeKzfDPqPxb1HOqWDlkhshmQwKWtzMAvYM8M1Ir0cnIuyoLJMXvhRCFcLx+knHh2ciWxYQ5eBOdSyK3ahck+w6ata3mzfEELsKKbO4DixFZ2qPcZnXW+8pZqKQNiqHHq4HuGgwC3NyWmQKb6pJD4A3e9HooPZEuzHcEyARQU+atI5F/XwabzwkFqCaGUIskBssb/LHgzIIgoEql77Yd6dLl64CiMvNDEX/LiLh/IWmXYYR2JyFKzzdDuzOuhJJarp8v7GXR+AZUrzj8hNYmj1cI5KJa2ByH/Hh+bRQNli1HorBepsKdap/ivXi6Zt8HwHzTlqerRj5o9yK5XXpsTlj/dBc2C7S3XIbQtQdVOV08lx7Cn8lzr92l/Nc5p8Bg+3i+dwKakLg2dFQ+JDhk993XJmrj9AdOTvlxKe6iLQrwfBuiACGrgygaSbyBwFbcVl3/JAC66ocuzxWk4JSX3SSJhe438iC03QC05VJSrYt2Epr7bzritXyP0L5j/0wZT4H1kNLmuY+1nCBC3qD3ZVq+9uQj+BI8TiGvAfR6v5+C+Lxqbe8aVz7FO16VZyoUJYO6frhzg4EAQ7v0hJxf8DqlmxTT3aM1X++J5zQVUcFMGkjcah5AcCYTa/z/3WSp8DxLimV94T5cSTMGtZjCPMn6+PGxMoDhg40CSTMVTRBrVGqbPSSdvHqkgqVrwdibQqaiOmrz8DHdtHF+1tEGcB1vx6wS2cpILmkE15XdHbhy0AJNMoQ5udMfTDGjs+Udhkb1bKw==';const _IH='19d9dafe4d5a05fe1e46bec02b2df472950b48fc33462843ea9ed0c1607f2d97';let _src;

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
