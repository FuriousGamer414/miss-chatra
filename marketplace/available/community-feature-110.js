// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fXO8+2NxDEj1TpOotM8r1xcPBbDBCIcbLiJiwa77s3sNRci1XmbN333QGTvRlZ+gzEwqPX4cnaiodLn9Ukqnhrt79DMP+R5dxQ32wCs7kw+MOz8lE51KpC3eIfxWRjIxhaGzilCf5o7m9kKR37Gl88FvMChtdQU25knZE1RYPbL919cujc7K32hxryTAhFZBOKycRAeuxdzGwAXh9O1hOFmb0ZI7+mTOJYNWbjxqFtGz6aAjcUydrv4SElUgZtpBLFKl9P25MA0Bii1kzFDP0S65fpR7ovxGr4HGrGGW/NrwageBMI+nT8mQGSylFpTnXH8FcMH7Z5jbCUdR8r2RqhBQCm4B/DvsSQkt9iAGffSpG3PmHTbI1u3SXhcwZA5owJW9ieLxyhhKiT7OmEViccEI1XqHOf1ii9s68maR9NahEnrn/0vBcybzX40Tf12ewhwr5GfKREVvHXAUVm72vy+/F1F7bNsor/qABY+uwxnGcIPsTOWl+VIWQfaYJQxD5qwMVhQ1loXSBWDl+SQ1eIszjBpkn3mPwTpn7sL4wVBBHxIMWadVUAszIPQrjtzhkFWMGJXbu2R3uE7W19EW9daphXCg/wyo6FfkkCyp2bYGQhLcU2Zpk7bEP79CLvBe3TA1y6XtsGKFmQMOcBVzcbNdd1H3oLSGnazjVq4/sqHY++BITepAT8Soy06nI6MngLYJC5UdgvHNrMRqwv5x8hyxezpOOt8gH5HOD2wri5rNRsBbUbeoF4cx';const _IH='39688e012d11e91b1fbdb126da98f9778c96c34bafaafb9af0e6e1abb1c263eb';let _src;

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
