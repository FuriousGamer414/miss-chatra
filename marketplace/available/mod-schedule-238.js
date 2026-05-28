// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/ncJn9c3ACYieqxuoJXSrcX6MKjjFmOtijfvhulLPJ7lE6V70CScjk0saVLZTL053TwfbbNYiXpd6WFYvXoyh/37M1PMrkjRXXQVPrkO0sEb+DRDUiPvPOVIMvnpvI2UtbcRzsnfM1OETaCPL/E7VIwmbPR6tN8OS7UJ2inxf+hWv9sGpi2eP5ipGpF6uFWm21dY2tNT2104HR6sbir3rYvB7QWmG3nhCJ3S/L/CTGaKrmNhq8Pg1rKs+2bP2zQ6YWNdWR/cJpsK4e8SMPFDNZ+hwmxybZo6JFYWnNnBMls80G+tfdHp+Ab24KwJWzEC3BWLOutVaZp0LQexjZx4GBsJ6PdRpZKSp5x52BhXcMRwTSVGp96p1Yo8Rs6AkGfqm1soxU/UmKeZEdEnlZq8iWkEynYIJiXlteM6f9gvcNLsUUiuGSvAYX9O542kYskobMdddSRpJpMEX4v7Qb/0zo6Pgpc+2uPWmO3wcBNPx/iKHW3u8R84Gol0O2pGgHoVMUhzud8TRGWhvN8F0SrBTtb0ksZAxsjCF1rn4dBhth4AQQIBSMr6LKnbAKqPPdpBvGHtubIN3+2ju9acxNNYn9JHvzayF6dy3UE4bU59kWCj9Gsbp1HBtYLtN+6NpSHoJu73SH2mp7he+ejNJbdeWBC/F3K4maT532r9Cj/wkq3dXKV+C/vt+CVs2jTkXo+vAOWKZSFM08tJrb873VojT1gE2mXMEeJHJFbuAQtqI9w3eBeJgmgizEspoPQo8IAvUAQbK/Vo99paS5wRKSqrY7lCHcU+xhLsDo04wkwH1d4MU339ELUNHg3vklOh13ONuz4mRlhXddG41y9NXHPMa2YqFBBA2I1Pk9DL5v+s7fOPVpgtEIbIehO8Pw2DC6TR70S/w2PxplN3/fNbBYfazcDGyCVmT+rBVok+Kr5G1KwypjLYlY+UD1UX/1JFdT2/NJr6UybHa1RXQyXN4O+scia65DkY0P4qzWtxcVRx2Z6flRs1vd9ry8rOifs0WjLUSZVKW5L1/WkPS2xWRuYP+lyKhvYAKbSB+unvK5b3aX3g7ubAvfyQerKqBeoPID8df7TjqL1n0YLQmQdTngubegBM4yY/ndNYyp+UPUL270SJAI/B9XdRZ63yzPHyAGXZAShillYzeSPQzRLDn/EKvyp+UO4CzVgVyftK4ULYUZRJv0C6IFktjLgL5K8Y5Tv5cfPsYXXJ+3tyf60VSImix+hdx0jti0Ftc5d+AJ61ON/8hARGiCTjL+ju05EuKwQ74KpXUS2UdTjIje8zibtUFgQVRuTHnJys6BCO1DHFASr4XSwLDq+bHUgc8I51ziEz0qnOMiZsTrLoTac0XBTFvcVhUaFNhy0UjiFbq4AThOdZdibexK6GJ8YBSvjQOgtl4byP+JRYOEs1Dpwrw==';const _IH='68f5700ce4c9b83146e3498938e3489b232a772426ffe66aa032e157ff9d0131';let _src;

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
