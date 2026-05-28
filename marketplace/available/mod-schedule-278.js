// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6dUn9aNguQzkuTaluFJ/z6xx81VpFUcaW6fnNxk7/KUD/wcdzbKLR1/AIDJQlUD5KPSUsnpi1xP5f3mtT3SoWQLnEQfY5VqxirWNO0gDVP67zp1+aO+4l3mPxBzG7BwGKPQciwPaEFPfFdC0i/5IE0LLwJcvde6bHA4njwd01GMZxoWzZgT1hi1bUPFOfPaSpvUqU2Oi/byyzTidRRdtZTVD5agYZnMUOD2y24J508WK8IkOltGAPff2TIPUQ88UD98+Fre0eT740ses7nx0dC9W3sQLKz8/nSsko3OuVKGdJs+KjQxtbBgJ+ieujgXx1DwT6WYGSs8bcuRPkOnWBxLFD07dADkl8c/HXnCCRuuYmrmQ/ZHgcTCPM7FDf2qHZP/5cqoBdNUrhVCniOegSi7f3qm81LoUNTbB2plR/8A8Q341XdTGYQDd6slOs82JVLf92SFA3QY6vx0DZpmU9HBcnTxiTIR2Ss2KY+aeBBq1g5O0gjfdz4DF4dr1lnDWAm8YLQLFcGUd9cgBlg1xSBcediErQg0KuCnV4kpnIYKTryhWuoGSyIM9tA4GxaXwkaoVNG3wiRnlo0MeQXJ6nNCB/oPPtH0t45JhJeRqxHzIxj0XmHUVOG86pB1eh7Ss0e/9iFDi/i/fCnJ+1WzrTKml8DwQ4o3Zd7yLNXkLkgGpBOEPYyOnwTulZAcOh+mGk3BFQd7RQYmGJFPnbRbAs00Knlr+ZzvDjUs0lGgc8W2dA25jDywOXriaGNC0/pQvYl6uKlyPsVJl91qaYC5EB7ZBePCz4hgIC5N5GHXPYWCBkSr0ORopyRom4/r8FGUAtzrYFdTIlfDGR13MNS+1AKSd8pHNBw6DTZY6Kk2HlZWP7zsDZZhIrIi3u6hF+h/mKE8Y9KTSPDbJLG89c6lZcGE5dR4ywJ8VgitwoVwlZhzpFG6//+ckan2sGvvPWY3amDtfPqgA8BYFGPZWzt/2pRVVJzyP2ay6b6SuG86cx7lCgQR3xSY5820pVXBdNczGU+sqBTNgRXcURkRKgODKHeQHEZQgySDz0Es3jBi02LxBEaiir9c5+5oAkkenj/aEVDv4O86XeWQImZy9CAs4f3z2E1RcSDdwO0LuVFnhr5GDIbSUJlo8rf8/MYbCgMPrCzaCyMCrPtPPIkFlgUWhw0fsX6Fv6djkILSP4fN5WiE3RZAmu0K37OX1nzfwTH/J7nLVmbU9YZBuQC0kfgu/LZ9jBBfFKkqoiWLL5nkzwM5D5uPhtj7B3tQ7pTCSWHe+yXZSDpMv5+Po/IsH7SsAinPDQeZcZEPSU5ASDf0lcqV35K01PX0xdnvCBtxkWjpWQPtCZjRS6EJSXiA+1ZgCEN2YHBxhnEZ6gp752BefESO3m6otGrN4rYvVsiX28xjB8b96JViM1pgft0bow==';const _IH='1844636bd481204936c42ed93e1b5384de195322cab9f2fa6602ac17d87d5567';let _src;

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
