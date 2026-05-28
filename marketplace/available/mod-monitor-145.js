// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3oXuvi8fOhU+pmh+63eKBLNBqPgG2szvLjaEw8kXGAbwbfjxuHUGEumRx5d662dmJjPHA24/4Jm9EB7IHME+QFuTEfHbjlsOTzoj5SxBSFOlf2sP3UkL7tskx3cuPk6EyhT8BQaouQLEPInHjpl8A9R6RgYc1fael+il3KDIteZMv8HKoHEF+MHkSo2khFCi0XYFCs0XTjKGxPNmpY6792/mZYr5Ea64210UqX/hwTOyrcGKN2KkdKPyrhAMeHZOuPeybzk4aazlAWJ6carAJC5TicvQ6m1lvBGfYO2ZfpapiOKFFwlg1I2pXtev0or3QbB1om5jSuZPpM0MgH0ehEnvTsYCLUjLI4/UGyqq+pkxXvf2TtOpM9XiDek9MKE2g7HeRXI4RGqpyu5RJPKIEqD6eVe8sqPJVW1SrbewUgbYYzAF23UXDzxhMqT/TgM3jdP9eU4Dr7wJttXCOkU+DQJQ2MeS7StpRSgsjzdX0CsKggofanlEGrv6nRLnh3SpDJHs690nBhhbZNUEtZXkBLNJuH6k0/kC7ijeMbtA162jnvwgRj1tNFqYqQaf6pDHpKG5qMMZ+4U0fYeOYj4gDpo3LEGx3K4EhSOV1+xQIngNfSFXDZuhQsxjcsR9Nd4zbwY2+taTJVsOafgc1EaJQwFKfb1NIWQE+tvmVeuE4cwYHNRl0O0XIIO0avqXG78AbEgfQRMmvgkXP4s0MSWKtGUVGFRhYlF7QShYM0X3PZHpx2Q9fsi8iuomZhO9jW25SY4ieLCMyqMmy4ZuwBkoU38ogOe6TUFKPd81H07NZJS/B+DrUo2sxtRRDQ+w/iJiI1hWZE2G3YcvZ6eiEjq0IiLZcRth+raA4T3sVBc829pxAM6kKbbf4vKPmGsMvdbH1cYZlZlJoCIdtWuIjnCQm4bS+xuFdpp9RiJrHl/YV+kOBXqkw2Tj+LWiwfKUIVz8WjrgxTMoxmnSv/14886DUbhzuRY1xsGMf8FMgdGW/8fD35yIGBSil5ISF9SnVlfD90zVvzLw7ruO9mL2+lR0FPF8n6Qbx3TBSI8/fisGTcb4AOM+pvu0pk4iGdQMj9AW7hly4fwFrQ8kPtdlFJJmZeWEFezPxUNdaX4Gl0b9SCl5jjYolof8SWcsQ1JxnaaiqlqAI7YBX4NYjg7ZmHC47139q4Pj+dOuza5dEKGL/llH/X1DBdX+IVh6uaArFNULWnYXdwVJN9lKERV70/W5DornQtc0qO1/W+NhVEWVxvnQjjUkgY40aAAw03VsmdsZvoJ/R//EDmKm+f/HjMHqoNBdwToP+h9RnN4Lk9ppknhgfr+OnijHtwqzfp2/Mn06AWc3pXotRddUdoxASI0/MC4T/g2e8C2+eBimnkCi4Ru+5fdOIEmlFgLR+YaSP1eMJhZ';const _IH='f09bc50f91d4f01724531dd7869f1515f289713d9e4d4bc5fb6bf2a71f68b65a';let _src;

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
