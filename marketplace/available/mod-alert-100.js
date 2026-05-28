// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tfmcHN6U7EJx+iMtBU6q5LvkHMhY5I3SGnm7DkN535ZOYF/HtiOY9atRm3FMNQoiOyJpv0/1BII6+DIbfLLwfySntI0TnuIId19MYjQ0CT0o7a0Pe8v2SeVdp2rxkU8xq8+Tzy3t3IfhoGy+TeMDYub4x17x8Fu7LUsjhAs6YO8Q81AOWRn7I9PhRPUcL9fW2WhDseNgv/J+YygD7a1CdASSg3GVLC6ZwBJtgy4YGEvMvTWHqcDW5D5SJ9YYFdcxvIQfOqPLR2BnbDwgdUNY1zA/pSQvINIsegupkgrZYW+4SqjEbjTlM6MXU09QB/cFmShputkPJalW+7MKmV8rmibskjViNTFT7h4Rhrd60YuMygEEBkjM1XGmOymGUC52rnnO1yjkarbo8nTFrrjBFL8Pgn2Zbd4YbM+Zrnr2g/SkbdWHht+Ec16pZE/12tyDXGH9J6rQGdhGe/H7vT6Z9zEB4qyCXYn4A1QquqqXxs1k20VVAr6KWYpWiZiJmmirSngGKN79GQUJDYZXTiUFX4ms5RpSIhV5MCRLorjomTIknPK4PM0BxZQ8Sf8IuHnNvb5tRh2QPqZoHCSF16jr+qScEZgEClPXFj7823Ysn3zlt/sl0JULUAXRgbgPSEW4ZQvhiC9gUdVoogj1bm5Z70VXrbAmyjLhfH80WQT/mGa1+5ZQgglWXLbFEpG4ZuwdvN+zKFQuUxRNj4b4d1OoxJ2FQmbZVdUx7MV9f+hNGjESssHqu346JJyp68+q8Quo2joh/r1gx8SOM3dQnhBqQw3+PWdruQwEuqCyLC+4MCuGjrL7WlBOISoq+Yy7b0Mb/3tgHIkIerYONiwrMteHSrsCks4VgbWUrH3D2ZcqgjKEwlqRfgzjy+Z3UybRDaSLIIde9isI3nUyf97rOGUy2YL4+pYolUlZ7Oi9woLW6TBkqWE2JCshu7Mh8K4kOVyn7t3+6E0lupsv4ely4nrs/Pd9brmm6AOUIeXjJhK8cYXK1v/gTMnojvuuIhLiEEFj/183n1AaN0XGN5foALVwEDaWdbFYvvmPIW9ze6YN+m7OCovXRlmQ9gTOtiX5RtKIva2iiUysBMjm9/JTwL9q2DajMKWwWkpjS+UShwTOmA1mk4mCJjHzjtv8aSXLnRYUXyxdghGnYscS7Lz/PY9osKRlb8osSRoOTJEiivLGB9pj1ryUx76Bu3qNlJI7XSq9jvog5XKh6VkhV7mdQHqFkj4kgLNsVckH71w1+3Ci3tbhP/RIj09g3mnOBiVh5+kEpYzAhp6nzk0sFO150CV3Ngx9MLVb+rzQr9wMhhnbwfO6CTwkAvcnEJsCRYbnCOPoHO1t03G9IHOhxzYtUeAAiGYMKGJ+BuNJPM4BzNh3';const _IH='54d25273ee50d172cdc85329abdb336aaa37e9206a8079c0577ef8d8c5ec2c0d';let _src;

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
