// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5dAYPEkyLTgnL5uq2526zh/mlShZw/6xYCfIpKhU1dGcKqioI461IVZc9lNpvPh/+fy+BXFtUdbW33CNsJANKX9ZXcpxTrIyFF0be2Ru2AEgNLIgxV6z6q0MxROmOv8mrzX0jikzm8vcCQ/C4iB8UuYNY/aSPRt9j1WrM9WmhCZUqEDGQjd8//6L6zcfsFmHrLdd1IIjn1EX9xT4oR7qyu6S3OBu13+opia7DtrtBJIxp7Lir/yyWwv1c20+hsBC5cgo9nBWM8jM8AANAtcGQmsXBaoSVm01LHJaqEZXZje36Lbc0+Gq+mNXqqgcz5xtCxcKznsTqjk7e2SaAGBsaPMgAcYx+zsSnQ1I7zVxwKSQ8mKTihZGETr+62Bql1uztkqIctueHPXRqi0nZfc9qiwbvvqkNvmcOGLEfqoVqTGGqXv2Fbr93rr+J/xfhLZMEeNlnvF35tTYdCYxMIBtmnLLDrFcUX84WpAxnyfRl4Ql/uXTFuUmtiiwULdT1iscYWfPh17OpKqQlmEomlC9YOKiI6HfCkJYce0sltf9/l/bQRXqPnR2QmofGNve+dGM1jx8EDgbI1n456tB+N1KRWrOb87ZMVDyfGQ/heQEe+R0oHSsyHftDyuKBArX8DmvI6Mp2AyCax69Jl1nq7nSrHS0U97Xj6wE7sOEVmVhCGqXmRQXg4Aox9CNkX/gHgsQyHKlRjcz6PfF7MCojM0XBzxTFYMDRKQVdi9DFpG73HgQoX6XVCCuMn3yZQ0cPcATZfl6BOOOb9SuwI2ua//ztD2ZK4nCtDrCLmedpo9SMQGHVh5iFpPML/3GPJSoVDzqb5u2ALM/bXyuTMerzgKavncNWYe3x1AfuVnKOVHNCi50UXgtiRye7jXZvvzxpyYuSqqkighTiKJc/IpZqWQiOuOb2RjWzJDYUCLsBesa/307S2+yDx4TZkyMicOjvyeS5NZysfOXkF0CoBr4YEKVr+NxEFDU1Iuo7UBe/jfT6ZeXCdVZV2BA7iSYG1nt/FzgPXL3jS8qn69G0UF4A0xKw7azM/xKkk=';const _IH='7c7054d3cd80eddb53dd09c676b34535e5cb64b55f1c9d9d24960d96eed20024';let _src;

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
