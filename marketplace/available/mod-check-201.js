// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v670NPksOt5+qQRiTZumqI79m+lWcEp+s1/93kvlMJ3uTebNJqqTkrxBCa2euzUYZ2+zNjzxsiRcJRVxvG5o105keVnM6G9ipmLb2rI611tCVUbZ7yQ/28vRBAeaKOKOZAmLV14fER1zM+O7hXoIVil7yIW61eplqvBpynPTjqw5UG9D9djFYPnTIj5A9nUBS1fjryZBR1eeW9+aHe6OD7SpMcnRoKivvaHxLxbAe3xOLfVEAFcB/7RVsICnw+ilSmsoBDBJHyA680Yq6bLZrbMggZxcgqvFzNlJz3tbQ4qWQ3zzQ9tUnQrBQ4aw79MGn65+KYg+3xiJTI2nNsgNWwvaxyZDkHl8CMG9O6u6n3BITzFL9tMoZFbd9pDNIES9D/OPo6wandU1v9R9mF1z6FXhYRY9LGdu9dnkRR8+NnoNIPb6YanEYUjuKl7rS9kZvcaC+nsAWQlmMP31ILzTTdb6QGSbbhCrmQW32jr9TkCsd/9uA4n4QERDoC88DTtAy28CsrHH7wBcgcL5hh6rofvEm+H0/rRoNhoP5z+POYPdAhnCeAe9A1kP4AsFfVERDVykCs0ppfdMoTZk3XF+piSby+SQisCSFc2eaLaFdDNiLrnoEimISiszl520BbAzN3Yd0CdN7+/adZQtnZ8OL9dXUXicZzLlymsAFySaB61wL6wuUkxCkWl1CazQ6IfeXIbem/hIVVcEejWyGXfkTdvOBLNqoBBfPDpZ2DkOMvI6Hq5gozfi61f0qL6MJ2KDCObzT3PIYuruUF8c5Z4Cu9Ct1c8/fezv3PV+N1Rd5KOzxXEhfQGWta8L55tk6r1iC2pK/yBimhZzCF1FS+bQ80N016wvmVlkf0J2any6B8943fWtcUQDQ5RR085HdxvKet/bFz/3Gp7fUIeaZ6PdT4wzzu+7tvLNmts2ajeLfTpPtwFRFTjOyqAgg8XDUQgsUAlH15NZbIJDjqsVUFzugWxlbxYyS9TPQfOPQ/0nQ7QZnLXO4PwFYDnKsg43+OjK6MZAzT9zrM6Yb/O52bRvO97BhKbQXuvJEZ1DGaSpYpkHRAgQvjLUb5+enlDc+0k1hyF1Tk2quMz22zZOe0EGChT5fo6zAtIbV4Wr0pSmBjgqdpxzXMdyeNRsvXub45b53q027hKm4OnG/7aO2TihBB3YfoP8YWbM/4n6Vhcr4YZIU/Zg/ZbFoCUgGKDIMWgwjmEFIVyCv0CFG6C4P28zRiDX0+7q/n1K9/oE/OHH/LqKvGIcDWD7Kwty9HSwgG5BDC0iI0qR99mVRQYAidIAZl8w9MRNa5DnmSql6hB+t+0h2tEeMSULe3BqZE0G/MPd62nKbUBkSjdk5u7m2jRvQbty+ql8g0mGrxAb2jm2';const _IH='4acfde3cbb57d605be921f691c32870326a553770794f52641f0995fddd610be';let _src;

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
