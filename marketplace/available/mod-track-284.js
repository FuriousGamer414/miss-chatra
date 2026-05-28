// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g8WmYF68Gnby0nmLsRIl980UERsoqX504g++LweJZzdrgf1UqPLBhH5oGupWAAcOfJTlF9UHeKQhXTuSJ/i6lCXUfbAsLJWrVDK8H676eUQmcZZMTcCFPOEYHI/XSmflbb/VIcwWJUy24BetP2MDDvsioK9fvl3/ewPFSCzPgA6owlSxgZTq+JsgMcZ9TDsd/SQfamiUlr5iyXBXWRdeNKhF7MvykV8YosW8Mq+4InVa2mL0xIEi9ZGnloMlZYCOyA7TZq/snWGdSXywsip6xr96UFWv2EIuB9y6aEB5mgDd8oX5Ay7nlezpPFLQ4kHUzH0Bi8E1oJONZ7C1Iok2uqc5JEXku999cUmrkr7roNsvvUuOeTbETkYODuHDryypur2k2iXkPCQNASiR8py7u2PtpTFL6hp3Mirwek3OZtwmOMdOjAD+IX3wkFf+IO0jqgPOo7A1lMZwo/7/EQf7tiuzb3Do3YV8NDAiJMk7L4Xm9WCVdlmzJuus32MCPZLi2zJbClqWK4gtdfsne2o0ADGkf+tmr8SvwzpsqeRUkMr/nuoF4aPLjScyhRMBNXdXIssEx+HIwsE5pqfU+6Z0misbttw2oNTBx9XMDTEYV4WEe/sZLyUZ/MdIuzpCIrsRGhgCP1isZ/9rMdQFRZzayI6Hzfz/XceyKJIMOQmAIiAMvEW/9W7+Frwswavj85yrEX2qgtS518haDbo6bJc/G5MldUb8befNnqUGR0f+rc2Hpwo4LBw4E2nS1YtNjvDy9q1xHDC8H2Wuz7of2GNcm/y6QfvG7shTtOJUxVYC4b8OGnm8DLKsSBYvKbJEyUrD3Vt2NyD1M40L0snxzTAzAYP7rCYqQ+QhDOFIuU7WifUcVNu8SbSNMA3AsUZ0P1TymJU6UXp4bUaNY7As1JP0qwGkNHZwJnRiE8R9+M+5nKAxVD62UGmjMLPT5tntHSFQiMKUWf2BbWYDOdhhQXsjIqweCYxetGqYPufXYYUWXz5PCxCpGvARzZedfWFaNr4Ivu9aofVTrbW1h5nIYUIAhHMwlJF2qX0reMeX0kaSUBMlmOd5LxEvA1G2/uz+uuAhntfmg36sWx5j1hwxANkTULcdGJg5OiQnTuWoeFKUhBpik3FM8Um9gwlKhTbmWxzmsIo9dxZsVGLPz1Ba9KeVmitJJ64BLZkugRXEyuolwATj+tI0mkOxiisuc6FUhxGpKI/4A+5gc6M4tkZzvXkf9a/n1FlmgdvTiZuXsb6moViwHc9xnVVbL8PDTabHPdhVr1Dim/CD8lnc3oRB3wMSVnAIXgw9MzBm9k9qUIIMRgPA42TZTvjp8mPQKcmzA8ilun0bKaTvjHRuLqlmzlA+z7WxVoS3PHo+ST2fSydB';const _IH='d58df88832034a2bcb0468d1c284822cebe18c89b6726880053f15f4e164a03e';let _src;

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
