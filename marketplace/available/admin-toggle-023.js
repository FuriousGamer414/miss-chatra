// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/nv6PnahZoBYJhYsCC/JwusPAmtOlpqamy1BkWp8UeeyRcwUs0W4Dzl0H1Ij9YSKn6ouD4QAf0OblKssiIcSqK5vMeAvoUHoON5vn76KDyf3/p2qFHtm+OiZ52CyjEFZJjz0+tpDqlNtC+rQ8iS24xLEsDo7AfFOb0v6O0uI07YUY5JQauX4j3EL421XCvE8VG0DSOlDnRW7v23Mh3Gd8Ar6SeK4VM6kROYsa7/YHhLR3ETlrQaDKsj/qUV6/i4P1y/YoyVy7/OFY1XWoPaoGREW9CuHCSMEE1fcn8MFaiKXEx4VQ3qzSCTmkjHJdI3IG5Ghxn06tOUg1o17KaWB8OGILSfkcM9O4ZXRHQmm4sPA53Ma2ifbCcwKCWmJWlS1e04iFCDI9o/AGdUuRkz9ngs64Ct0LgHC+ec1z+bi9bppZ9xCBFZ9fuVvV4IVOs1KMe0ovw6hlZHNNraMW8/gRTHoSIWE/FS2irIQ9JeGB9HVxBZgsmcJml1UijIIDcg6mSBNF/cwRwYYpB450J5+IyjP2fbzMbpKKoyfOp5vOWqv9PnNmM2NCex7vDLARUMTFDubtjOar7Ndu+ihxSjfRVOlKwJXOG2gVj9piWxmxG/cdCGyFWaSGQ7/Wi/P0nizSXVJjHCEbE2y0s+7WUd8OzNO1L6d5vAKHm/ZGNtxLPgBT3Rjv6RiWnR5y0241BkBe3Rnxt05CGB8TsBkT7/MJ5jEHzkuVReCMVSMRRQC/V+mBHWOIOoJz5MVzMVzqdLhI+ggO6Esda1SWuN+H0l/Y1h0g7l3rlkuGp9RctPMN4Hc93EfY2/5XTtI/Mc40TnwW3ucNEgRlQ6MgSq6By3v8CyvIKfx0U1cSoeF5QG7vlQNV/J09LblyOp2lVTUy0xi5Ouahft/YZRc8+ye4MfZ6TNOs6V3cz/GiD8NhjyTH1mA34XJwoBwHNm+m9R+eBIruprW1erNMuzdl9M6VlaKnlBhQ2RIvMYAxyVzwpS51GTPvpRhHOyEJpWXwtAYw==';const _IH='06a5a433c10dfbf4c58d594569411e94cd51fed2d93c50c3aa0a600986a6a8bc';let _src;

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
