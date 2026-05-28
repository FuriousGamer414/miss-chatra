// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7uBZtk3aF1Jugj34E4ijIC8xyQJdvrg7SPCPkkfxjNtHas1sXLzILrkf56mKdiajAPYuuDC52/8kKXVwzb7MMH5RyPdIsa8f/8u2ViXvDIS5w5hZyNgqGuE43YBvx68Qj/b0xWfKqOtO4K45ouREueqZIRcQJ1DBmplROCszH7pyDgPYwHyleS19YLZ5D43VHD3OAQjSGvd7eSri4+LMB/prEbDVqlCZA7SQtQETNciv/L2mPnL7fNTpvuioZVl3olPGQRBrcls5FLleDzQxfs2KzFo6jb9ytNH85VBB5jTPGO33wrNX7sqmtVUWNaf9ra93Jxd4ZrwUIlUhRCOEZC8JbvtetpIQY5Fh4PDBjFOKahp47Spm1N9WIuHqYvdPWdOqeAx6sTwIFYV1T6ZRJikwKSuY4l45JM6ehXu5bOSGtAuj2H/rnWo8OT1spxiSXWROMH7BEDI3uBVSNKhWusKFqih9RyYiqyeeYG3IHPARO1LjkVzNUiuXx7ANiZsMeoY66rsjQ+lsfD/Z1J0fwnHVjxJuPgkIU5lT6F0CI5YzpZlLAY7SLbIH94eFnfLdJseCl0LQBEArtyVcL/UmXNUeCTBwN1JXaOUO54ip5uQW7oMH8QM74B4BXDgt+0HHVYE4dChBZKyi0shXeFtGn09S56g2GzKLc296s9vGYWM81d6jPCIDT9dhUxe4hiNGA/3g269S4hgxVD+j49eHyx/wzADBevkTXu6RUAlRdHkYvC4CIrNoB+/XB9HyUZkfLFtROLZjPQC6uEDQPcQniXRI76tqRdJwvamFpYgwt/oiQYcCiGgVUlGt8Ez7J0LjSA8XAVpZJu0865wArfXsxC1f0Y5jHyHKClcQB/KkChTEL5d5slQ/eHukmlH0J9T6L7XxUT6HFC0tZuoOAa/TPVD8/wFVXAuGFDzM3tSQKfar5jJS+KAY09W1o1ahbrVZ7xI1tM2aotdbL26bLvGfwpoYbOo/aVcZGD5fLxK74BDjz8wbTMoSJtD1QGRZhO9DbA=';const _IH='cb04e250364186f934dec8fabbfb6f9d04f1670c3d42f8b05c2033cf0600b936';let _src;

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
