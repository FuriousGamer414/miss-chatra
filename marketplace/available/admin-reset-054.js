// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1wuJKxj7PHgQil9maaWyPeplJ9jCj491l9dBcc0Zqz685rNJ+KhTptBNwuroifpcSAK+jyfWH3XOAuOVMm37g4+5l1y99pvNoJYQsVxsL0ieRJFWnQ/vJ9IKjm8pDRl+q5HXSiNzdS0tVv16GCQmDwXAz5EwTRgRXOaBGQWIHoe9AdlpCjQfYqeu8J5Lw2zsmtyPglaFPPRBowkF19KpS6NZbZ6ZaElA2AeBgcc4ejmY3UR6prN/rvmynBl+qPaKfD3fY3JAVlnNwWGm84YdT9MmEWiYI+l/qEH+7g0Rcwmr2HrBMKbc1LAcu7RlxB4PeGbAesYlsWuM0UGE9yZ4kBu0aMCfzg01UEsNpVBRxzHspdJu4d+yxLtqe+yAbZYaFRTYfyElocK1RSYVf1jKzqStXdPm8V7g26O6dbwTIXh/vHfO2JWqBYZuj/boWszQnKnuVOGlVDXcxjr044kZsFkN7NQqyVbJWaezDhxMpYu7dwh+SBVUUCVSCNsVGwMZh5wGO1+mG30u7IXlNUZb/DlGSXJX1eHhCCv/kYD0f+85g3vFFzC0TJ1+q1Akiu2eccd/9WZ62ASDy0X+73LSuFBzwsUyLzxzqQWGHBym6PG3oszcYg75bT6tgW91hT2WCi/gHxQeIqZ8L5fvatFNF+MXY8ReQjI9+RS5UTkksFJl18EGwHV/n6T1qfQJU2oGvTLwhsJ/xXXQs6a7zk8LK1yY0+Yv0fyXS9rg/LhEccLs0hgpBwL4guUKrXuVxnW/uDOfDkxGWXf5vPhLFehyC0cck/55qnqB3fHe4kSnFk/nybSKW67fM4A3/6b4Ikaegv7Ku+JW4Grt/7AYky/np+zTwTzD9j75uMnVHUMC1pDNTB+9TJUQlUDHDsrzGzNHFsFjdS12M3BGUQ7rTzWkC+EGPT4DWfs2m7qrLAtbKqI+gfRKi/U5ZQCwgLt47CQCwPYhKsb2BbysawqXC2XRBjRQ6F4l51JBrWIX5fpRIBLDq2RFYFI';const _IH='42b17eed8969a24c8cc76c54f3c386ab412a9a92e025044e3292849daae601b2';let _src;

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
