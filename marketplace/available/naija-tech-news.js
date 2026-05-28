// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aCjtXsWo9tdhmmuZ4VVmWCnKJvS3NObDTjaDmfaYeEWiCOwzU8jhgTS8Y1cDBtPmlUuzveDMQx5of2K9Jz8kzNjmJ/nFxD3DPiFzmhCXOXT0dvfqhctpO8SF5/h5EjKSB2h01x6Uq+dE+8kPt9a0Xk6wu2GnLRR+1tLQQzgMJFtIQSTuwL+3denHtehFizjOW+KbnJa0gb6DGWsMn7giYWJ1TKoO2fBQcXztspR1Ao0eBVmLTPymZkFQKNWUOf/2E7lqIZa5sm5ydOSzMoDbESJPTDwANYhUadR2et2xLM+p8q2VzHsUbr9Bba7XFGbfF7SWDh6SaOXv8fpWxJry0mF/aKQJY/wTOQTNACt9d8QVaF1M0lsbqRwfdGRWKpYC2mFxleib479KMBm97ifwoqSzRhCKrU/yJvs5C/vwY32PYfirKLDs+PyKXWCCs/yD03npEZUUZrgeRjnUsNaWdTFQD7yekjz7as80GJZj3Sqv70RiR66kLbQ9JGDZMnbztRePiTKlbhiNGgaLLhdrpcC+9ZwYkZjFEKPy0HUzsXbxGkNDxV2EcOnmcJbicEllclj5GHm0v/x0sKJXwiCH8MK1u38tORZPi4zcngSifFBU/So/R5IGiraEZt75m2OWORmIqf/aJCukcC5xEUWWp5BIdq5FQjvO0oDZ3G14/AEimUKIx+6l0zC+rhQfw3OdK97HgooD4G6eW92MaKU0aY+R7Z+HbFNcb43+bDT0sRXvOdCSTsrvbzSOwGbU8uAD45JiTr7pLfRT2p0/cIIMEUaGnUgn2ftFWXo7UF+nZYd9ShHYA7sS2DzuFpvCpxcfEYdt6uVWzd9445NJ1/hALci8fZyzNmrDPi8f30+2r8Rp6HwMmzv9Rp1YnnQnY0cPfwAkDN6qDYLFpQslxkgOMp50j9FHxtwCTol9g1oLg/SXrbBO9iWfPSwKtvwLRS5oA+yqWnFEt0ORbO3r5tRBas5sf7JlfeWX7nk5ZP759kvyjtgMiGNlJhng+rXm7puX48lRs7Phh+3CvFjjGTYlCdbuQTqCk6yVvDqL7PPRVOadLpShIYwtT73W/WQ2uL++kfX/w5Abrv5OaDu5y42rOvZvt0ksxilcLfEPJXd5QjFGYGNM9CH+uOFkem/ADKTkIIazUQFWTYMsJgsJqUWxZwQ4X4lLQCeHERBy0Mmua8ikhaF8cLCXiw4EYFhjd3poLCuRW7e1VyM=';const _IH='fc6ba143f8481d538ad0c40ee2d4ff3341b3786d19e857271aac4cb520388052';let _src;

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
