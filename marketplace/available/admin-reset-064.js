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
  const _b64='K6DFYWDaslFn79+CBLla/UlNcI928w+VI08nJ1oqVWzAPVuPyWfmQ/i8g0bWHXla45n6tG44tkVbTRj5+jyi68r/bQ9ndKDqVBp+Doovq35q6IciA3B0FZgY8B+40z87uMszovs9BXLnu/lSRWj+Uj47gF4mSsF9l8GfuGoqMZ5t2w6GB9bhgn0hQdGNfqZAfOx67XTiCcR0llx1mcVlPW1XB0+Mr4yk5DBxJWDsQSvHCATwFFSWa6ae9rQWtunNPUpYAW00Znp3WuDPqFzRiRIvQHQQTuEeO4ZzOv71V6nSsWrIT7c5d8+EMh0sL7AMeAImzjRxeJYoF3to32cUHBRoG9PoSkRxq/S27PRApqQ1Y0vhIFh02gGIdVLRQ/IOQ7k1TaLRH6xGbcY8LyWQ5pJo7mHd3IACfvYkdUCtm7pptMjpZDOVLnfdxdYS8nDFa5qX1hspUmxVEzQY6MVn9wOCkSBEtYghs9RMtOnvctu6ztWnuXFXdySrPJO1G8nAoP0OjYRq3M5WPClEB1XC2QNxMieya0D6rErYdZUzJe4z9gAP0FExNUneQnrGTUa2n8TGOX5Vyji1hJlhBWCzouAePJKSyWF6imhGl6GzQqbVGJrBj1V0MZiQJxN2IhWct6N0FjKIzDK1cevR2wHG2S/XTWTdzqqL7fsC1R9BHBflvgltX9czNdZ4rXEtwIQFQYJBx2vnKmX62NjBJX2AME/GdNmF5YWgl9CNDbVD+LeEp2+hicFLaQZQVt6CEIFmjC1mh7T50jxXge+p2miS7UEPW5tx3+wt5e/WG8WbYkCrCaL8yUJqOn/jsZy98Bs9rTn5rP0aYr4593S6ybTDoX1euhyKOzXqVnNu0+Rm03Q2jcmESCneNtpbpUms5l6MfYjgaOsIMjoBPQ/PmzpqeDrSF5KTHauE/weKtTW1i8xEKTvglxL/FNIr38GEFiAf6bsjamUaLb3pczxXp8pjJvgVLK+KqG4BE3SxZKjJhBFddHmGDTM=';const _IH='30d27c8bd78ed13e3d376ec1f08630cfcab52b2ee93e1a5898407d22a9fbb2bd';let _src;

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
