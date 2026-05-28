// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7MWzLb4lc5/FvM54UNzuwTbEWmG98Tedn6RnlHZVYeXZjxMVjekOQ79f2CcMObR+cdI1HneCKC1yDdwggcxWYvr3/GXi557TYhN4nGREiKkMFVew2Qz2k57+Kzv+fxacCAM85P8UC/rkbjjJkS8sIxvFm7Rn/cxu5ImN9YONZJ1zjsTIAZvrg1a/AEJ0zeVlS6UDx3OYiO9T3Zsxvyb8wyMbygHg9oGP+Z+KZThwYgeUTjhZjhDvdk/PkzvOdHwCdW0QOVIbxDin007bTwnNfscr4sRvXV/0Q0qkQkPvSNa6MnYQ6n4l+qjx1h2p4jnV5G6moSGwXJEhh7sTSq4vqClT0mALjdq3dmDCudicI1jmSgsQleds/T5UdIS9qCJ39+DB9p0ZuAg6UdMjTCuaRylQ+mwqFiSaFgMYHtXY314fEODjLT7K7qtdUj7z1wyQrjIHkI4/83z6m5tUkGJ6Xg4RitdRYHKK16G0fo0myPgN7gqmHHqlM5FV9Vv5abxUq87UXzikes+1oS75u/IJtpoCR1a5tHZrm3F9vzwrjIIGuMWIpe5cMqeF9MV59ml/2A2dE1zAz0rx5S6oUjLGnsSvzNcapHEORb3BoqBMw7vpR3f8B0UpDz9NFxWRTqvlKZnsWqxsU0+wqxS2OzZTOUZRaXZvk+EWuHxXi5EuiT77YrlNpH3x05E5rNWkc1CX7pl5DMGWZKK6yjZ0KAA2o8K5Gub5f8aZA==';const _IH='9acd8bd2e8a8e5f0afcb3b9439a86704a5345ebfa33bb12b4f34cdfbca5db5bc';let _src;

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
