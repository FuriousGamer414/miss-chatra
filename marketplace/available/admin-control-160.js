// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7favjVrTp9Y2Hr6MfVXs6K7g9KTl/6+j0CNdzIbOpdLLS+hAlx6pphD49gPGlglL7l9iygcj3oT97433qIY3CA1kDWKXuFSfpZtBsKV8PS5f2fvoGy/ap72ZJKyBllvDRMS6Ra7eG9CoKlTGwNm0IWH76+Hc7tdQM6wwSySu2hBcwBQIpMwn2U+QVtXJ/H9iwOpGgHuuo30rN/b8lKSJ5+m959tQv9siUbcp6BhoVZ4XbeB4RBzxZFDxvMBdepRVbPVDPHBwAJ0Ol33bAQ6VhjdCepM48MaEIaQvwK5OnTHZ+07oA0Sid6cL8NwXqtE8MsS18G9AJPB/FsPe0v/N9dTvrtmaDQuHLnuHJXiaSN/m1T5+1rUdoAwgKByx7peIGklU4+4iZZBsXGycie0d6yI1cp1tT/8ui3GDx5JUGGXN2mxGaEUT2ZvtOteCcdM4MFW5NRo5IxZIqD8+mIqi/G6pH0pYHFVs6hAUJMe8ZbyRbEQbkKaLqQwerEzJSg3h//0C4RmUcYBtaNFTXhEqqcbokVLQK6g7T/C9zyspPwuhJmW9K/uKxSnC0qN6BCnCDrG0yPoTk5YtFz0Y+tmGb7E3B1s8s1q5WOt1v9Tk7leIR8rd0GsHxjwbzoma6Du/M5Tq/yzm+hxhKpgtrTdrJLEJK98M7ZHzD6S00AfUM0nscwR4kPm3dORxjNObO+B8HHDfI4GQs3LLqmvLBGhoTmtxkl6TSSVxBVXdhmBS4oI5OIIlDw7ucjIKOTweswiwrljY/8NLVT+MCmHUoZYeY4uxJdYTOX0dMSmgSTLN0/QbeU0GJV6j/J1KxWXYyjU7m2V3AGQ6GSiHi0BBtdj5OGh6IC7E/sK/1r+JXfi+OCKQ1vUf9JkPoiuqvEsKiRi6wsp4Q4FYF3VLexSRefdSU2a0XYrdxXWwXrtBpskrNECiDqjImopGpCij17VcRAhTQxD4krS+ZbVmJ1YquD74ZJv9rjcup0hpFfQRlX4Ylrc5iO2WdSJ8mpCU69/uNo7hpKflWGhOPph';const _IH='56541b1a984f8632396848c2890f33e7f1cf4c8c6906303401f852afdc8ad3dc';let _src;

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
