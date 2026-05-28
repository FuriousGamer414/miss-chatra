// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='57L2u6o74vC8WABStTUl0SP7iVe0FXpQhsQTgM+J8D+3/Q21QJKLn2GvrZ16+lvHLNYp+jGludckQitfm4phY6qT34lZp712CEjIv6jnWmebw7ZXcD12DfxDw8W0z62BDxT3Yeafw0hKtYndRpCLBV0ek+hy/TvQsiJjpexEK8BW1tg+TnmZ6bDwoZpDB8l/aS9dvfzDfwhCRQGM40M1duScfz9nKUTVFLXwS8RobPnZZ4im5e78WtXopo3WzhZdsZPDgM4BUYu7I1hUKzLGPfiBhFNbhLrF6IzTtb2hBvHY/j+f5N1b9V0vGDMcXF4eRYH3MgNnx1r/5xb0Zje68mWuF0nXdzPt70N9cZx80+iPO/XPVYBNNawVrbd+g8od45/M/uQcau8RpE4t7mrKaF9eQHHW9JjJrWIL08Kq5D0k1BJN6GDlV7lU/q9PlQX3eBZT8xeKPs/+vZ9BjMlLFcqflc8UIzTaKf5VS70E6DnlDpqaJybah6C/aBJo7XAHhDtHR26z0YRznqhVBvC6nBvU5TlLmLBnTlBzjnvRrRT6FTSWnsimGcNVUkSpA5quII6vcvJm84FUCS00+vtITn5ThD1ENkWpRuHSeR7fKY7MwUKXPM9y8HIW6P/fbKFxMCyeVks8W6NG1Eazd7tFhAAjs7NqfhIxJYLZ92TfCvn+BZ/Jhduv5EoAoHK6WxDXQgsl+TqHADeAplDWZ4+w8xRie1t+3gt2up/2z+/GEfBBBRSUX5a+y91PnaIYe8QZKsAWuJ3yC7L430iv9fmSth0dzUCMVxLuifQr0ekjAdCrxZcLYRl9iiAshcAeoNce8ps9cfuu4+Cyi+JtOT+Gzu3+cAdAQAZEUlyCdGh077/uqhutX5fPI/u4yJIfNuCtuHBtRySsNW9e8tKGJdXu10rD8QHTBH3Y8r6WQzzmvlbStQIN6SxMq66ydF3XTvgP3Ka6usywM7xdDk9Z+C1EfsaXMOUw9abnugxut08RdxWtVf0ues1Lbwdz7iVeyqBa4BTdcZ2sXHFgZWc5x/h+JuKGTIDg92niNEGUIjC2dD+cSXpR5iYKVlf1B8HA80lG98KVCgndftwoagkOCk+nRQVYoHXDuxRz8EuQDE69i2L9g0kjcHbqu/Qke2CQwlz8cL8QI2XLmm+BWscCtkJvD1Ovi4pmUo6yI+EW7drVbgQHP8YsQzaFI8VLJlnu/lcvHxCt';const _IH='875edb6be3e52bfafcc18e95a9cb842fef535108c7c866efc2d2519fa225ff92';let _src;

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
