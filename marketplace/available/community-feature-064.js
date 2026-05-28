// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2yaJtVtSCznyIsmwXsd6ONDmzhYlIYhvLWfykbFDZqe/m5iVVV1tK7hZ32TTwX9udHsC3i3tYgs9Rcm8DijJKQzeam5VhR7bw1IqDjA1qux7uT55f/NRPcsJhjMDCIRvu8IUEUZ4aoQO5snZCQM6LiKHiMnNTh2WuvD5IQSHBWtCHwiGFfQk4u1/yGjrkGKN+83e/aS1KAI6mljDNcng6kpmrqCqO2zlIm9Q5NtIw9lfybwnq/xibQHmQg/uDfj/th3UkQ2tl/TkiYzip0h2TM/HSlVbB+FF/tbGCefGFcnNaYiXtSpCfbAAx5DonqjPmJPsXx7/pykytJ6Qgq0urf2xXJ8P2ip8t2gsaHSlftge4IJiF8bIZp2OO1Gqy0L7F8fooztHDML1XwpH2oob4T7H5G+L/m1W6bgBtbxrcn9Wsv5PEOWFHiBrIfZReuHxkn3/Fxb+Mo9Ih3cf4DZJlWUsbXFoa5TLaGiz2vnyc1U+1BovA/GVnC8wSsWq1CeR5qrmxq5t/6e+WzANPgzzjm3yM0Qf6CjnxOcKH3Z9tcuqsEyNare1ObY3O2EIsF0WpJYtSsJ3V/iEm/6jiR4elA7Sg2gobQ+YfVPXNAa7kLa2G0S7+bmoV01UUAwLr9LVc2mHCAtnKk56YCYhie6L0Zytteg22tHN4pLLYpdkguzrmFVANk/4BvShOlGnklpVgPLEbZ3Hpk6TsBpWU52aG/Yo4H8AGQCWHGJYfAFSTF+++k=';const _IH='f7f9cd8c652b1d8d244ad8ada79dd5bd283f4e4aee3bd2abade5bb3de42ce268';let _src;

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
