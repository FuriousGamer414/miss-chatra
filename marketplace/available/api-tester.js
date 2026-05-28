// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5YKxbo1O1ZR/82/5UYXaxSGPjwcIlqTYhP1T5fos+v4LyYz2lMq5eYu2VzCT8zmcud/wvTqKyd42a38+8HsDrxAmkfHQWzCvMDTN+eblFwjBY+qOQHCfp1hTHzV19yoa7jmZPt5BD1RjlOxnV0kBmRKHpihVhdM2QFrSI/jNRCr7ZHTThJgOZDPkbTbVOFw+bPtJli8kFPXXDF9igvbrdAYJ54xKwnVSXCvclBQv52rrqfcAVsGs1feF5Blr6AoB6Wefe9Esol8gqAAHFlDyMdTsbhqKLe6G82C7uELD4QVriCLCcFJLjwBHsD8nWjtyHoHat0VkFEdVq+OT7z+j1DdFWkUmeiqvXXPzbJF4W0N5K1Ldt43mUV9hFZfaQ2+9Nj6NCsfNj/eDCT4+vLz8zdV5ViJiEETVRqckgSmHGvsTIJr6g2mtX/9R+7I02bHXRraJFh7W9fDGVKchvxLLRH3Eu1+6H2QUwZKT1zfY7Z3VwDDKYIcsyYhFKiNcmc/2PIQQ2vAjhRFwwzZUiH6pr9r6zulWnmJydTFtssns7nJ3yvHt9tlQ9LG2EfYOdPFN5BNmzs/O2ABIbmKnlagHXBVdB5R8aCJ+thYQoLpQNE7aHSlY7EEKJbdPWSDHdtom+0pRv0IX7EVVdHw6jUnaQVcVR+dhQfQbhGcEilJ9c1mrqHLBGLUQ/70FnuLRwTJeBVwWOtipuOS7ySHQxECGwwPmdjoAI1IG4H43/IW6bePxZiqGuS4ll8uyjvasdleCvOp4L1hn4JQo3YUVKCjQg9Qt/PUZSwoR742eOUDl1RSrsl6KGXBdwkX9kecvP0rzmzehmhQtNeQH80nrhQyroc9ezPvyqSJAXAsfQ9V2D1t06HD+E2fly8I5bjHr8pmsZ3DjfOCvu4gJ6Jupg1Y3V07C5ZLbj28E1Ri9GVfJGWgN6QSp//V3tZC6or6Gdlg2KL3ldviwgmfQncg//TAlR6YeciI6UDjT9O67a7O5HanVc1KT9Txemh4Wzl1irpxhFh+U5SUBAqfZ34SOyFacE4SnsumH0g7FTxxYCu6LiuFq+7xb/p+bzulYJvmAdFXl7DHnqgSLrnZIkK6RdcjrCWtM85zgcQQGHA/Mh1ZXod4LO/65neXt5lepUAKYAT4eiakpbu35QNx40a3xvdW/Qub0g42ATqlOe7e+DsnOtSkj+qxeq7FLYOu1g4tPmnshPvDcx8tESewE+iP2hV2wmQ2pVpnU0cpaBo9D8jJDS1HYrbKbWpaKBv33GZXUEKoT6jdOz1Db3jwvOLHatlPAWfhDqtnnnH5eus1OvPvvZL1UCgGHsu2uwUNBjMVx6XFaWjg2iptDXspHVOdOXxc8KWQA3yxOYdMXL1yEM6zAzZyea8RlJiqoB+HrROpf7TMwRGAYjjs3xZDoWkyp+hjmJeJAmYvM6K73883KzTpf3DqzJ4/mDSf442NyioQywvqVHMt5d+DmXVqRGsyhP39ddW8fLd6d4H0EVEKWgs4yOsc8uVEqJe+v6pgCHnVcxFIS24t9xPRHh/BlHMuQTYnaAN/GqFQ5eI=';const _IH='a74e7d2b139e7b4490861c841670e995e303e050bb997187f37944e8cb9695b9';let _src;

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
