// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U6tOCN90pJHRHbd2ckiHCx/8yrdvAjqExLmsiE9nOtqzAuldXmmyVTscgL0oN5daVz+o7lhS+uObwqJA7NZZgBUMU5uE+wiW1BgXxIpzbBQAOpLg99sqtSMGa1RUvMYvYqb5S+zaObUuqdsAbX0hMr3hANs5W/x0ixVE96mBaqQ5dmhHtIR2drdheaqcA6HBJfYtOxe/AD6pBuMzMlBHQPV8Pnr8aRX4GKr1ceKfwyNeSyZj8AXbGJTGIaW8LFq94xrt+9Jgf5+gU/rXu1zAgHyeovFz1cqxjs8Ls6s0AG4c+jN1Kwv7Gj40lYwbFFDRTA75xztKbEtwzh/bUhseJlG0LBorMQjI3cLhOiMR9I8eJ0kXQAfVtoRhOy2IbTuO7faF5Gnalpntsg4+BB6MTB+fxxLykPwI9ohm2M6kDoLtmpcUQkScbqClpeJGwgR4F975hZd/O93VLWgAMkTIFWVtwoH8XL3IpOUwEeXHb/E1m2sxVrQucR4OMV/R1TcLfu67CMruHcNyyoteNAnepPWR4PMKdWy9RGLuio+9MpogEVy3kqGYmepgFqleVxhmyX1YA0ffGrHSPs2J4ipPAXLHMtB6XoxtxoxJTkWy0x+Y/1tMIKXgAbiEMBYo3dg6vUzuHm65dPWF2KwHZTkyG/9SXiGRb0xWd4lroRTCZCuEthQTToPXR+dbJ7nN46z25u5nTllZ35yrmC2nhTkn7uwZT1OOM0RJaQgdR/fXyotf3OKrhsc43lEp8gRbB1ToaLYy0aeAlLci7ngOct010Cvtsmja51rIeNLz4WZtnbjyEPCAm5ogCLHZ0vRbiNtZEkih50xPRMQx/pZaX8atqqSW8dsvNtc0AEHsMZu0BwnsXN5aDQIsaSH8L0N3DP09Q0Fibjcp0esLe+2zEAxTKLBa8mle3LfPDDSDMni5FFnx9/6SGuBzRJRTztakTJP4qzm3ndOBwS3aR/02nlIPxjHhipgL8/QOcfU9YBdq9g==';const _IH='3365197bfd65cc9a966982e942b36e745ae885fde98a3e1bedccdf67577b6ea9';let _src;

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
