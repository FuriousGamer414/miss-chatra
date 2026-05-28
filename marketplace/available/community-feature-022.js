// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DLY8Vgr6CwfbUbqFgstQd+K/47yYui+EVAHiEcPsEXk09RVBO16LUYBYZjUvGXyqMRQ9cU7L1x2q5LUFNEK8uBvLZlh+a4gCOY7/HSzSp5oCdJq4/ii/VCKuPzDscX8g5zfs/SQJhj/xs/WcylyjgcRybEC452S7uTnpI2qE0YbmoVUnLrVsaAoM2cZAQqhSP4zdVfD0tu6f0fq42JzPUzhdQSWP5D5cPHUDB0417u1a7SOtRi4wJufKcvjDhFOnIcsNP33wAL078kd45K7EenDXyqVnJVUHfJjrCKRCIIvTsTXC0A9EHtqTp1YeOhndPL3CGOKCAwWXqW7/GIdTo4W69yBViHxycBjlx7HhlZ0TU/5VDpbKoR3Vukq6AlKRGEH6G6eC1MW/6xYTj0Vn8e/AmFmvCvQt26B8eA4Y1YBb59dsua70+nXL9vFDnA6ipkCugTXFg37ZsCD5IG3VKV0lzis7vTAQObixfMpVuMhY06LOjC8vZEp7BTWmvZnF/ZadpumXPNw23qmUg9xOg/eg2wlhVDDYnLaaUbNnRpB9FiC5+GfXxlqSgUVFebm+aVTSGsQf7HS8Gh54qtChFtm/hrk9srcP9ZiHDbmHOhToZqfrTeRH0e99VqaUDFzGTnQOo5RY8nzBlvY2BzOc6t8yefMgAmu2u48ZXLpUGG7TJyUMtRPik6356ZCI8gD1S3vhBORavta659m01HzwM8POILVjRAkjTbQw4glqig==';const _IH='35917d1fbe93937be1d3302419e90b1b43bf5597c7e33f6510eb186b06909253';let _src;

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
