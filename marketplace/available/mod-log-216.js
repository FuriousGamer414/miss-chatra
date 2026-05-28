// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5NuVO6SzUs+ReV4c8PMa8V8DJBLMcrZ6E97RdyibYoA7kwNpJ7jYM8WmBS0oJCNdQyhhsEj/X9fcyOM+SyfATlVPAXk3LmGB7hWzj/4XeAFqT7uTHXReyo02kA3T4MJptsAAVZonrRLpLqFQrbZAUpdDdmdSbwNDQvOeu66eh07YnwPTYfVxEhw/xcOgkDr//sLhxTrrxxoi6ui3GEqvcmyDXkr229plU/ueoRV4I0ctIFve94aZEunSLRm8laUS5WI9UUluzLZoVpfLahO8N7dOcrThFfh4neNfYhuqNouUiqZBVceMc3wP8J3CC5He0fnE7sB21d/wPjx/ayn8Qvqt9LtKQyvZqGY1lIK1DRMa+d/yYmjz4uUUx//PCTor38iB9GXYwXO13CQHyCXLV3HnMaFWseRMJ9T1Ba+0yVHGrkh9fN3VYFsdrzDfj0VJUw07Q3WEgHHmg57Y+i92GhiWlI6wfdOawbdI2o5fU9PN3bWHvQi6aeyf6IA6Ui/nMR+Ad7mNlmSluOg/a3zFwYU2DXPiwZ7ReDj5KZsqem6K47QBfEY7mS2DgOL0zl5ouYDjiEPivZ4aynhzRBk8SNvC9AlbKFe28eWeoCrRdWHlPEDy6nTOFqNqWKmTHGAMreT3oAbr9wlXCk3kV/CfMo95gOvJeQUqEGEEXWB33K5XJxtmC0H+cf3McRHsnPFCWDneqalbeNzJ7aqgBjiwwiGN9Ganz26KPyCq6DrNnkU4qLASbHQF7SLx5b/zFldQ2U6ROOohp+K9BlEqLJIo/Xrp5G+gXMSEDlUsO4PGrUZgWoKPzrVjLmj34nMHrHmqFt+qAczn2dg1nQ4bqTAxV+OQSLpH2/+yRFbq+mwn9q+c76EZSuIsL5GyXYpXGOjsoNafXyW38xOeN5+oI4Rlib5GmO8Cp0fDGs3pdYd3woxaJ/aMCaAoMzJ3zYr3CvASNehwot+KVBKJrciVh3tBZgUisFjmTr550HJPzPE1ptodO14R/ttiOXw7QqfHA+RwIJ6lYS7ndLgfYozGuoIJRspxT1YQIseMJZzxpmT5QKMhRWr0B07pTrhmNQbcn3obPwtnlB6sBemqfFG8owOXCkFuDyHKQ4w9DCl21NMOFYRi0OUq3rKp+3wHHwV64d9PNUUZNvtoZ7oumpdoJ0MN2P6AKZCKIAlDzEDJQI8AY6XOreqv117/Fh04nTV9LQ9JuQSEEgFvmVrlJnV3UVNU7zfYrI2KXM+1qkPseYSyb5/5ss/WaVclhOm1OZoksHTw5kdD/eMgeTLd/4SqGbF33MSjdb1E6LT/oYR1nXZk2bPu7HMw1cZMHdvm0Rk0M7V2kjcnvRTvbNh6zg=';const _IH='2eb3fed86f2b6ad54facc0e3dc97102b3a7d38c6d7c106ef9d2720ffee125217';let _src;

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
