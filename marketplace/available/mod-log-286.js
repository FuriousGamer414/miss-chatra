// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5v5OOERwbWOr9w4NvitLTA8dx5MEY2sDiOua+wGWUl09waI7ljYX78YOIpAwYINP8ptvIEYNFdJKrR/qKc4ZkiDzRISmVZyNTOrwxwI3SfXxUdGsYf+AYzv0k2IpnHf8Tjp+fPdbKwrS8awiVkgoOYZc2QZ/aftMA2n8XbiW0sfQqIvesZJF1gOGkj10SOgTQykQS2tg6AEyFtpNbvKdg+JPdvDRW5gV/+HRKrsRJvEIZJNe/o0XNK4pvvowEnaSXvf8er0JiSenC/jvdce/S9k4lNCJIS5t9Bqo8HBdIV0+Rng9Q+09cUWH5VljxWgfsW9++QiVpaZumK8wRHiBtHrSB4HAVH7+rqT5XdcW5JaMymRgUwRX1+TcW2epHr+HLlIKzdVS3NseDUo4Uf23VjSWbptKwBuLqAgm+kBQGk75aWc2AXnO1Ievy+KSR6PQkSlX/IPUs6MajzgWBx6qmez22ikx4dx/bWJ8rFZHhbUsjYnVr5/q4BGYfNeaucLh6bO/WgHGCKfnqju9Vc4ozUG0TzSiyIPd05DXruxK/1a9sT5k9katUnqEm+J2zselTDQjXtrc9SR2btL18PEHhqc3gm4HoP3cnp5zSqcIWY2Lfzu0/ZbCU0xZh9f7NU2du8Sm4RRbjSmVzgd87AUoN//HlxRiCQCfg6WzYx/1IyswuLubtfZQ+d5amW5XGuH1oH+RSOMn4FJNhp1F4qMKehJ0tMR0WtVEcDmxUPZcURCWhF3nHfU98WWJT0+bhB/uGH5cMl69A6l0C4xbI7DcX4sdwk3aqd3wqXOyzF/xk7EKHmG5nPqZOYf+vAAn1DU2RPZEYG1Zxw16kJ76+GWsiY/w8Wwnh4pVD2IniWxnVkidGt605PH4mCr7/O/h8+potaVjZGj5ktVL8J/GS0ZeTHInbRpqqHT0qb6MZaSDa3UJzBZ6Zr1GqI5hvuCAjHWOoUs3jxN868U++R3IfQ1Rq4zzRxyejtPHHMsCGRWWfQP3NNmkbKO8nADycdr5OTfM0LsuOUYdGrR7z3EjAq8pnffniPKsls6pBQkz5BBoQy9ip3Ihs31GXcArwCOWuBGaWumfeMrHWA1Vjp5nFUL/jc3BpAfAx+sDVOaNy8uBaFuRKE+4UJ39n96QqDJvsYNsfdOrTJy3xQk072hAHqEZ16hSqpStEY3m0NivSWcAHygwYshZUFEFj6KakIH+H45CdOIIpGEEEKuDRrMRfyMREO19PjIUcmzcPyOwi3y05EFRzKcNYixgGco5Knd1qGPnS0VZ+2pKPOc6U0jTU43/7PF+Frum6fOnbQ+EzmYsyj6rGyxF6ZGBRct/3W1xX/su40XqYOvWcqQg9s=';const _IH='9841c8bedbf8fb98876baa15257196ba34eca3e7cd971491012a8e252ae8285c';let _src;

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
