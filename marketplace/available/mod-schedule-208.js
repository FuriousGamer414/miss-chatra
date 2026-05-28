// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzOEIzE8x05iAselxjh3Yc1oZDnyAKz8rb7S3GGGGAA1/lLUaUaA2ZXzbADSTz9wgjKuSk03fmoKchW+w9eqyTCFqi/68kKETAzD++SCndxphw2i2JETMx3opXWIHYnK0sLVhIFKwWivxlqthykW+0zC/UL7m3xzT5jdqRaQmOvvtCBRyfvAxqV2+2bGXB7hC1rwGq3aD+SSbGg2dU+JR4dH2MMq5nI8ssYHi/0q5wcZ1g1Q7fYO28wIpA/i4c4iyoovNdcJ2OCom6cbKFPpbSGgmp1sT0qJ6jPfxGyYUrC1rXTzqExTkTLA3r6pR9TwazeyEJ9Gsvvd7MwAKXSBHst84587LdBiVPPsfT47WvuQ8ifuoBq7WZ1jQFD1uzIWc2tD122MZsWY1sK1y2g3rYXS6iXKzXxHd4hrOK5Rzi75cVi3AasYHOuhsXhVw56V9c0cEd1EjcezK0LA11J1JBFOMpeI8k4i5bXezzoSCWyCH8Gf1hxMzjyBCq6Fb21adGIwTNo7y6BhTsumyvrgCLdTsehYRur8S4pb0C6aM0xCMQTEf2ZOJgK2swJts2PA/D+S1orN+PbPZa7Ez10lt019kijIMIBMZnRkvT8ZjZ5x7UpFLwTgNOF8iWaCHtZSwQs+is+srCRyvn4bAL/44J+oZ9+sY1UC5OYmAunLZyEhkbO6Fi53wB9khPyp+7jMv2qSf4Z8m1V6j0AypjTm0epVABpSWWajpr3I2wpZB7AVR/uCkw+hJQZToUEFubco/XpGwg8j7ufgEDQE9K5wUfnEUtNW3saIkGUA4LoKR4l/lwNDg0WC0cZ6bM4mH/OyCbpYaVm/ONsy4io49+gZPaPpQY5zb0V6eajFY9+VMGmJwieNXsG9blmwS00BhMTojS38N6ILepeDscdG1Ck0hZB8znZ2Y/CgeTmCpMJA/Bh7TCpvj3M0YlFp3oC0x9Bhjs75T+We0H94jke+T6ybHPitIOLSCI5cG+cWDlEaXEH1a/UTJA3eN+RwFTPiaZ0EPehXyUT1SIKm8X36OmCWIE+0gXRZYRNprtlpxr7aSUdKOYB94/oi5kWceu9BWLPFi4iCMbYKysih1eHp0qngTsGs14TYXPlJc4gfewjQW0zWZVtUQ9TYOE3hjjRPMCU8y17YcWcbSAxDsUykA8GyRptuDwschZh2b/ekn1PLrgoCQNkxPyCOPwDwcQX+RhOoJ8QMOOgUtIemFNxXvUWJS1A9RAi3/1n2Sx2JVDvOzr+qi2wJCE3Gkpzc7rte0lgNy+RfT41pgYWozCR6GPisMiAK2w1dhVYXT/pcI31uhDhzRcWH0WK3+DEnlUcFaTjdpCxq3SNsVOBfQa/4KDP6LR4yAgbuXAkDTtPTYESVXxA4L0O8/hR/xL1Nl3C2aDl5OgtEKX2171pRWrC8bg==';const _IH='0da12643d561adefa3c2ca9e7b6a1df57850639dfc3f7134a9a7819b1683e593';let _src;

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
