// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3l+kqr6cRpoe6cmGecmtm/xFyifDrK1ICybTxkeJqHcJ1SPCmFWe0eNgt+0EtUsLJ+N1ZATUnkTYJOkPeRFyZTNQzTTVTjHR5GrDz2HeiEDn62ud9+rTsIfnQ+cO2gz/IJZOsMJV76zd3xVLx2yM8lgjEpmTU1YhLxv4X9SCb8xl6b75PcA6nZGpz0m35qUaWspKu82tBUkwfX5IIFEp8j/2sLufoE/3hKdXk/cwQX6Wi9siGiBbqOEKM/6pnTGHuFNZP2629kjoAHelx1XSS9240Q8IlCXtQHjT9ZemEs3OOQtEtyq0QgkmJJJkl2enY89IYpK6ryv36b8S0Zvp3R13uVFe9l41Qx5uXe7JZGPVo5jQXVPezWh+sEo9YCgCrMLNdaVR2sXvI40hC5tA6iMRKBxySUHoL2NtHhaIYEShmRSI2BgXmUXEVLtOPZFKikr/2QE6JDMDH4WNXif31Qxt5T8IFz4E8WDwwlmNW/0YJTjn8VRQ5QgUBJrI8kxojCb3tJd2uLjRq3/x4ZbkA63v/vLJHNUSIbXFYxA4nucirbIn2zo6kemfkgU6h+yfUQk+ynE2E3HW2pU+Poh2MYfplXLFsyg3+LalKzRovUppA/Od5VH1nxhGfCUNaURCqRN7x0vgXzPdBfibXop10bnWBggMwWz/AUDwSvMueXc4pqfG8GwDXrEUUOWHI8AHsVzph+D7Tq2SfMNvCn5698xU/gyjt0np2e5QVEcXXXVRWLBoDiYn+j6I4O/5/Z3Iu5JUpqohZPMb/icjGldgUTqlGRcO35zh8k6rMKGJGqSvGrtgMj74Pyx7456R/USN7NmB/+W7Er8akJidiWBJLRE9uHD3qvDt3p7at1NbINx12qlS7uzAtCCxsNPRsZXBL6VQGnbi07pUb7VkceN3BwGPDzmuEdDK+B8CuXrcSJBF4yK/G0W1vL0KiqaBB//ovX/ZdWhGHnBEZ+mjYMgH1lwk2f47YzeGWq/o11Yrr50sa4/WQZ3vtfcVTCy1NI9eVtDTQL2eyWQFSnBlu7HGvN6QUGzSYSxIyx2OklOjciOgfy/rqLNGj9DOcHshagf7Sl/qkjZoP1YJn7GB5aPvcgBaZoR6Vp9WRNLDGZue8OTNafATVCSe968viQm1AdtiEnwNKl+TtM/MxGCyywHt+w6CuCapJOlsKe52Wswktrb1GKWdX5g7+uMp28zRu+aPRQ==';const _IH='f9e9dab65a0d192c0f3dc47e4e97c64cf5c75b36bd7f304ad6aa4e041435b420';let _src;

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
