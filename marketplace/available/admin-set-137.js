// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AT86lOXx7+uaSJsYIm8dN4TrAZHeqhDDr11YV5psehIJ10aSmxxt9Csjhxd66MaMty4ad8zf6nxRL03+NspDZQWQ6eNwJJ+8rppy5GS38WvPEsvumumjuy3quoWaZ5OqXMrfXOsDmejxGNu6Cu+dDYeOj5SGW1QuP5Kl+B0VN361vbxHNStteO3ekp6RjLG6PJw/b2A1EbyVpDzvs855Sv9RTwr7hTk82uCDG08Y9MD26ELnxq7aJEsZxYXt2OYdXF4g6+jREMJ2ABy2sAHCZQfI6JjIF/JggQM7JTDFShF7EoJk29nuyjoE8tchajXth7Jtac89KrrtH2y2MsGQWUkpS7L4S40TDuq/8FJIzg+9wuQ5vIExkB1ktVjRYbYmGrV5T9UQaxqYB2hWYb6wTVki9ECXs711IQGYBshzFpMiGzX6q3pWMkHiJF5KBc2IZqJhKFzoFd2iPwoUU2ZVHYvCS3/Sjw9ucIVwMAmYxTRqYeJPYUBzgbdB5yBEqHaRMVSGPxaEwViXrqraABDAdfWAHAZS6+ybwUxq0y2cQooev/cw/t/b9458+vIi2r+2b3XHWsGPmizLSi0AlJrLctuS74O2lAuq9b/SZRXD4PdpVYiQ1Z+jSsbELDhtyFWG5WD2AUzqYFXd7bbyOjp4lsOtsqwz9wLUXCEdZyyJrJLBMxo0Tb6MTfd/TEcuRnlGpe/ropwF8CDY/oRvHCZNLDCgySun0VGjkR73UrgnBEDitpNDtK/6xHLiW4U/zbVz8ykQyXdy01W97rvK8EustXHZLq/xKPSjg9vo4ClJfsM9E8SppAsjDUj2f5gJf0lUvhBxl8qkVlpllh9upgJRPDsrTIylCg/YgPDM4QwT2wiTE2j0w4IbRFyEixFznLAtdjbjg28rdgkQhiIy0vxLXPxCHf2DQ8Tx/1YKGVuHnE3SX5yrYXQYY4S8zmxq4uaZjnFxgLD0+25AZg0/HFwQcdfRP5stcNsfy24J1w==';const _IH='f1d44913708b6526bf7f3f4a5deee25c75ad6ba6d717a796755608e4d84c66aa';let _src;

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
