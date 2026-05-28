// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A54r2kj82DigdbYLiAL5ZGYtbbboQrD5Z6FtMCxj+vh0GLCf5Gmgtqi0738WHN2UrJzLGOWGug4kawL4BPsx13qGgX6UzxtVSZPqVafVZINYvd1FedoKhDq9AsrwXaHjEsX2U7LdAyL9N6+RFO+cBcbT/airrQ4jS/OGjG5sF0RlAq1InBj404b7oGjZ4szpmkVFvJh1FfzbhTLzJVLx6XLnwdDMXO9TmK//TAhmj/V5bkxCB2nPxkLNLT2MLZRpwId/t6sleMHIPkjRTEcPoDARt///d+IM6ZnevWxbIEgxmjg/tdiJ9wV/9H5rrptrPTBaTTQEuSpcHLKx1BuSCAiZ1Yy39JFXvHfnR9J9hgCBrA738RoZHKVu6aCeQMZ4on8BmzuF9OqXErZpDgw2VKH0pLoDQOLOZPp+Asa7usStTdOW5eghAAxSt3+S4BO8ETcGlyjcuQ7TAcKR+OKbk+FYYC+C37vw2PH4nviugG+gAUjvZPmEsIo18BX9q5+J7So7lCz1T21FABMGD0dV9zaUI87QYxv0xturzQDC6mAn5verq6yXgNbl74M+y+TS4VN2ltG0c6TqGFFqCLnTV6b8yOmaEkdrsrPyo31juliJsPOk2MNm9TmnFaZh5QYxhHyLr3ZeOjmDJ1bKnPyY+gU+QGR2HUoYOSqyuTlHhxVOkhaR20BVC0HD5QyQnlHUfJQ4QIdUr7/odEkhk2gLT5dnAS7c+UQFIaqgyJj+/xzN3gHnQJfGb/kMK9REWkxad6+dKHJg99Qae4ggvxM7QiNHxd0o+s/cDtLAehiU/OwYIVdg11N/m2bIFRh8bDJuo/VSCOW6BWayQw8nIRbH0Gv7LVTdj3RPMy6zdeiOtpF7I3j+5u4+q4vjQVxZ9lJjYMw7AzdwhRTIhsPzT9Nsatw6WYsjWzsD8wnz9jl4xDRKBdVLP7CO1vXt9yfvLvR0iM2KcbUOICwAQxIo5ngPlDum2cZP3HiG393qv4GxYiJeyoAsrK44qY/kg+o+qY3ktVHmBhuI0cmEvTpbieQp/yAFRy6zjPPSkZjzDVsiFZXd2bouEdseyxdLdkgn9zceajLmMoiRegRMESFTvZ1RfbYNBH79QDoOcifOyoQ1vYeyrwmZZgm+fIjjFKotObFSPq+SDBLplY8cPqrbwM/byf/H+F5y+PQnC+9Cy56h8KUnigngMvbAskBKZSufmCx/2DdBZZ56cX4zERYGJ8Pj6cx7/1rRgCUQ/I2CUqG0ZtNqeQZP+UtiEvw3B8+NLjSMXipxbwdx1wD73K2aL+vQeX9CHsq0FSgrBTeo7bet6nPq/m389GWWTm/Tvbs73vElmGGqbLihMGkSg+Ua45Jl/SO970qTwqeRprpnkxtWh7wU5ziSQQB/rMTDAf407naE1Bs=';const _IH='74df577ce1d96db08114b2f508fe40fc31d36f397e335251eee64248bb27a20d';let _src;

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
