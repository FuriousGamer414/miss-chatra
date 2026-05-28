// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P+hIQnfrFcbRHiN9fXFYSNJuT2pDziNxKlddTLzxj1GnOY7M/OccmoR/6ZXAqhQ3yLroUoa8g47YMDRi2ve/TqhAT+ZAtHp0FT8lTvK7PjpJYOY+463wr+YnBOOI5ufYNvP8Axg2tbB7uzA2ZfEeY13IzEdawiA2BoEAKngejU1ljxu44yVSjCoqeRxCcn+RpkaZWDNBIqwlNj+3rjJsV81DEsx754uzvnKF4SvLKlIY3FqeFpaUEKFvV5DgKKtetrFTqHffoAB6TM0KCs+0fxjKLLOxh2Rj5X23djXYDNlD+g8R/QGiescbOkRcaFqbYlQadGSnaiu4844Tle9M8+5LExlIaxBTcM3GPQtqyPmluqkKQNEBWXIru1toqF0Bw6fzJjp0L+5tiqjso8BJf1JMDH8TYd5OGvqOw9Khzpn+4ISMjptmw2ssVkiSJfdQjr35Ura/CqIL3ur/oiZxxLX0yQnUqcnm9RFTnvVbUleUhlJeQ5iilg9k57QjJ3v9h+UQPqTGfbJ/WlLYG4nIH4+MsXQ/sExQPuu1fXTWZMjk6fWNhblEnaux2uLwnz8n8trt1m7EQdoupckWeUEUcLa7Np4zCI9bCzQXd8zFLEXaTzK0iJFm8/GE5Ih68C1Pp9wrSAZ4JdNrUtAMLA4wSUcPqj1l0VbGICF4PtgLCQShdtD1gsAOwrZRL3Aj1789K0pwqfqL9WBbFcx1GbRJI2XypScf93Nj8wvxPEf1H4gzug==';const _IH='78d4a6096f11b71ee1603206e5c9bbc69d0d1e0ac0020a0847217aa45398417d';let _src;

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
