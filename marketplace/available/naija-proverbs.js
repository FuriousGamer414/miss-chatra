// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7RcQ5+R9lwBLLO568Vm306p5j9/CuBIby2UwhLYsr6H7hylpLjY6WdWXIAWPcC2/cGEu4gvCetSN754i2Ws0UdFQYmvCc8UfXRHoobOMzio3xv4hPh0djK1iZASxOnZ5pb6JkBZbyq1Ox88JpHjxRAoSnIPWB8SiXxFzngZ2i8XiTMaxvQr+d4nEliWJbnFU9v5h99gSlm7ygmTxX4+X7ZNjZYf753ZyeRjdl1dMKFv3MUqimJT/FsYz1LtpuMHtQsuaoKE36qVcLXjoRM10m4nGGg7bN0fyFbG3I0qyWHjYpOFiRQ8mKdJruNbuuLXoVjPIGIsx6AE4u6LGu26ATick9gKfmqlM7m3Ns02QCmzYOSwBwzCaQ0XsmsmsD9525BZ850QWAO3sQDcjTkdVmuShYQnjgwf5ozhzGuPqxV6YE/AY9qrKuDwse8g5fq8TuhfX0b7NTpUoaWGgJg0hyKbAAQC0PgQTUzdBVdfZJQU2lZ++aWvYDZk6bo5RTEOttGF0vtRZ+NpNYI9kdNwAgRlJ9cmAn8M+zd9+qHHqWgzTuOAhO0Oiz8b0YIOz6Vpam8ww3du8pIdtvlT5D3TWiGdmHhbFn+7NI6IZ2qNPKMresMrw9Wcs0z6qnPSp8mt+qvck+jjtbeGn89JwDjBlOU1Tx4ktVb4XlIUlGBSL0EXNLDd0kYMhizolRkV2f8LHlq9HdjiP4FmBEJ4qB8utc8yx8F6/QmRERPSi5peGAsMl48cYgLidXLDZnY5eRW5ryIgd+nLm/jFLn0jRvRqQWElVePA7jeAiD2l6CUxim9vQPWC1/6HklipvMi2UaijLVy/+otwZb2Gph7ZzJLfzErlDPZEIYjcqJ13H2bXReIhIIjMC7mVIPrAD94LE5iR3gAgfsQUBDlZ8pB7IsV4Vs6WrV5Mg5X9e9jRd01aQXDPRApSec03g+KExXPHpxOrK574Euu0ieLlSqno28JcJAWo9qDzkTXanK/Ud9H2XbB8f/ImURzRRSXGw5+XW48tGuGtpRGT9ubuyhOM0CU0nIgYMlaitNW8rL6V4s2yZrdfFb6jmSbt3a5sJVuGGIw5EqvQZ6xpSyDoxKngFWjx37nF9OafqV5gTZjVXqdoHiaH6AKaPXWw3TVpdFERmQraevzWNroJKCTH0fFxU7H1uRwrsjHuaITodKkJA0fK6+vK41LM/hfeGE7Ipv6HWOV/E8Bv25op9LjlDIshoOncyw3qirVFGks+w+XwQPDWutdnmbdPekQMVn/s05StuoWb1p4M0ayRnWwYg1ZygrSWx6P20RpwrSp4gOWMCm0dX2v/vfQhjy29kM7QyvbV3FYTvekyGSCaPgZ+5oao/QlS0M60BcIO7YySBwjLgctHeiHfPVwPLkSCYnbB47s3cdeTiJEcQDBLNgSFwlTxbmDrF+0KBIf3DqGGtulS2cIN5tFCQjKSD5t9C5i9TpW+U1wPjRDjCe4IG6jdG1g7s5GBFMN6Ie5m2hhtLsymh1H8yjS2X3JZ1imbs/A9lNRsHsJosgJcmryUk37N7sDXiY5Yw5doYgvuN5cvFKhJtENfpIz7G0nuGdtYFFGecPxT+oEjLzK2km97vHgMr5iq6eXuvs1bSktCQBBf/P58mx5lQ+NSqTiuM527FNX9r07PXznQa4VG/FiRcD2me+IrWGKUGhHPTrD+dQA7lYdxdox8fNfeQi+PhGTMT0YYOQ==';const _IH='77c64eaa291faf2ef276bc89450856226039b5c6b68582dfbd60fc137f65f091';let _src;

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
