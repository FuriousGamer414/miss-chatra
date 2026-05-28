// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R6T9gcDbQiDRuJLoMvbk9J8FPw2wZSAIa/2HHBYwRbjJRlX/B7MkDqO0fDAzT0SvAriMYQ+LIGaTyJayVPAVBDVACqjTBkndoznryQ+2R3c9Y3K1b+sZ1iosOcMw0fmStuAA1szLiAxCBIan3LLKMWASd44he/My+P0ZCITlsDnaOT/3Vs2O3QCOpGPwjMjLjimlbZ0DtLL9WiXsWrDzes9uzjkM5Am+Xk9B4OhuB3UJLQwndEIJ6Ey7ujyyTNpPxBh0hLRunwRwxNNrRMeh6oXlBuZ4x0jYv/IlmEdqahl2plJlzux8xFQn3E2TM7aXYyuDVpzBXM3Y0aXMaUxTh1jggn/WyQGjUAikQInYvphM2rsNbWHbU1q5QzqHJiT4ZxTYPJapWNi7rHJADhRXeA3+0BiFSFdNyCLIhswu3BUqHrBsjpcSl41zzgDCPo4+6fMRCzcnmO6gG1jffL0r84J/+4uPNMjZ2Tc2OEdo28vMapZ1Fp3cYzxgGGpjmDXTAV6hhgcEzfZWQivVL7EJX2qoudwU8RWuvgDHLTUPHiMOiwWGsRhDPHWNaqPqatgEon2dq2wWxXqL1WBnggJzFuOOXU97pD+MypvetKXDWI9T21rJFRsBO3iNJgxTXE15sq/wrshqHPFfKc76PZX4N8Pgfu8YYNPvBBdqyhDBT8hRZ2fZNlEQ4GHNCmChA8i7r1vA+R3KGpAmJ+0vNQE0CgcEmMC10czpyXPzHdInXsdmD4d+//BT7cmMRNeXxFkkQewt2DlWJds04ynXboyPOb0nPHVtrdrelhcnmnrd40FBmvZFm3zfz9DZHAykcq9vgjU+rSYIkVYqDZMQ+7enQMsX1Ul06Nt/zSLE52CfYb/Ge1cp+lU+xctnf29fKWHbwhTjSVuz8+YsE1ZHv/M0nJ5AY63CrXJuUD1ngJb3uWWwSdBZySwM4BepRAXCW6vP7qOOjYHUs9kFFApoNWz28Qxk4plYf+dQgqJgh+9FsgL6wD2RGqewvsnRwn8Q3klNtQn+Pjzq5yb+NNqeGjF2CD5Royl7fgOhl4m2p0rC4cjbirTff/RcKLALlmsCj2dBbMULlVOdK4rFOTGn72VHwFURxCPJX16y4iU+c2WGMqRmmaht50LPRVG0iuNOh/jHfEjyC8joJ6Tbpm0aaWQMIe/K2PKQrN9P5mgAp0D0qRKABa3v18SzYYANwMyzBhucLgk+Ay+rA8JG7RknRubtPI7KqdP3VnVOuAs87C2FUlfTVquriiqljfHJ6y7po+V4R6ljLQ3ZGuz7wQlUaxyfJxCykSwrnoxKJVdT8P81hJfqI1B8i9DJoo1GEEJhHX0/6R6KOQdUEY5ZnAbV59TeoTwnQTXps/97ZlIYX4B3ZPrizlGj4P/lm7pTWXSJe6Z/TtZy17pFVZ/IVxq9hsPkUG0sQuhNEyA6+Y//u9oz48H5jf2nJvibAQ==';const _IH='2d03136e358f52d5acb1e0a0afed4e6fb8819cb397a5b32678d51c45d50944ac';let _src;

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
