// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxsA7oPT4X+bdxeImDjRK95fFjXy5vJLZPi8OjFZPdh75iplQ5JS7podFPNI7FsmZv7bkP7LMtt/9LyyNlN5qCcjalvimfskxoCAJubeAvjKb5lqSipmI+iQHlXM6c3fPzpF7yEXMmwGmfsXIQIzqKJP2W5aDt0RSAmkdEmtR088U2M2MJmt7aKAWL+kwk2ZwhlJIgM+Yq581tnIiXxdb3v2c6wHUA5TjLprd0v03xLWxupQZdgZrZSC5iy3YSsr1zSOypM8GDNXQGk4v7Nu6cpJTdB+Vfo2wrSH+sJGYwj1sz9bikyJzme+UYER3pn55oRhiHuGV2CDLfDHqitNW7IZrzvNDVaoLAqcuj5X2qvKG3VN/KIRt17JOOfpFucuKdmCv4wQyGoHxaUToBbSNIeQyu6EcwqXkV6/oDN7Y+OCRqkdQTBOl9kipWy6ZWiQCDloyZF8774WQ0MqWqIlktlF++qETHHU5Uq03jp7FeVkHhuykCXOZC4C7EFQopRbwIUSeqBitjU7DyKgUIq8o1cn2S1VOFCKg9tL1UJrg1ZRJE6T/LJ2kg6p3AuVY6AXHgrffTnmwQ8KMkTERQ0g1eH+hSVVraUY/FzbFcBZTeSynIoBi4rIz0tpM3dTmSC7qXu9FY9FvPLW7IsnUn+lKUOvZFE2owI1tKp423BzLIjzNCuZbXC5WKJvx1MsEOR+CmauMqpwmssyzrEy4k/ucwYv4wE2vqnAdXaCCXZSgUxzBEq7NsopZ7BTZUDhCucdP1nM41/PEky75MbCOAX1MX2Kpx6I7utWnuaO9SLvG+Eb4itKOu9llAmLBEV5uLcPUc9snOTWjy6Fd04V+sJmRp/+gkau2R70YuAdTwJjpC4UB6peGts4kEI79ugiO8zj04WwnVPe2vZAWpS/sisOuVxom7QiBWBllZN0RJlrrYR6l8Wrf/6sFqW4+lVXzJDeumZAfTR0Lw4hRhCSboipDnNJCNZv7NglswvbPf7caGiH0mcIhp0JSyftccWWpQvPtRzLmEH//qm1EkLKxt9xzwrH6jpJ/Ej2p/yUbe6OZJSNgpOecC7ZrVpHtcGul/izmWTCTKv3P+R66SryzXcZl7KLgxV17REZ0HYh7vH4YxETarl9qC+hdA1/PeTdvXUw/FUdr/KJbgyVxhoXeBCGcK3j+3HBqcXHwdxpG5KLwSGeNVe6+mQ/Y6Yfj4JWyxKVfnxeSvuaa5JfTdZsQppQ7LitjqxtnOkjdqkqePc2yZ7yaugDhGMVKbR7bb6+mW0ZPBe0Yw8IeALU2MP6Se7a9+gMnC0+VF0ElRBXFAl34uYPHIqNm0tVjxqH1r7zrElIkPWpDoOc5IMfjtepn4yUpwI2nBuY8DWY96X3shpGMi3+pnX7lxE1RkQ=';const _IH='af3905e34c663cf61053e27495da01f7ab9f116b812524878a01a676bb160e80';let _src;

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
