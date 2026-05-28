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
  const _b64='ZalBFHGECwb8Tvxy2VJJSnxeeew78BbKZmPmMko+ZmR+Sz6trfyYTUHeA/SBpTeF8upAJnTKrPiF8DN2aDJlEMhETxBBmIA2fJYWntnEoAlgYEYO18y17MXw+B+IvvOmfymRhwpaCq+fMAcFgjBY0RjKMSs42QLuge/ZScGJDmieNsmnfgJpGHNBWrQBl73Do7WZ6tbfxWad8qL2vX0ncS6Ej4dMxGdvqdGfexEdki9JtWjNs1x2OykyilL0aH7w2uuVzEWQjyM7vPbKo4okyjF7VebzU3vFyFkBON+umP04sqD+owaChbdFTo9a95k6XhcxO3vB1NIhddeuW/uxq6XZIsZSmEznE90g8tlHVxZj0eUyQUfyzq/11ccJkv52/TGd3WVkQYu2rBe5PwRyk7PQUuUUWNByrEWFNbPTevvQgr+8UQhPDzVbc8/UXa3a4RNHZOcSBDumuBj98V+5GMZQTTwjLvI9KmrMiSoJ6XJkDQlHIoNQuwVLNsh0gXlBwKfFe1k+IVHaieTBaRj9u8BKMo3SoZHkKPbk5uOrw91c/yKuDdleCGgtwGxvVm/4A1pHlDFJUVhk5hJUFwp4MuzGY6NdXZaf0K5ulQiP/j4sFr5oHQGWbHGaWWRVNwX3Katw4Oucnatm855f0kOF9wh0p5+MMhUyz5GXYxmXCz4QnCO3QJJDQ4/3lbpUBniiuFXBKFdqpB5A0/wvzN6XuqCGfFrZ2Y27QhyqiFuSBeSZBzTRjtj7Z3bCUuUw5E4wvrdi4dkscOQZ94V4PVn7z3jW21WGx3USqMtZI/yWGULQIvGjMzNwR7pJRltLx4tusCC7VD1QkyFfh0PVtTU8J++ZwTV9JCcwVE26OMPNEmB/8jVgU9Bv23CFpm7Wkvxrok5INC9YK5TVbfxzLKhpGk6VGHz8p5X7U6OC+cGln9mc2DG7LDvhYgjEEYfSb4HvstodaLbP7LgQJXRpPXcl7JkAkgDz4SKUUs1urvaTRont7qPV5jxtfoQalQOfD8NNcw/qBYiKjNXfJgi7mbF41D2sk7sBrDnlNGTYxgUGEraO1H/sobPB11GgJrqo7su+Ew9FFYQxPRK2d+6MD3yr3rxYF3PW3H72BtYiGpXJkqaAkgUmX1KiWIui2YJ8dksP8qRr09CubEraRvVDLmYGK1j5LdxXI2VxLalcAn0d3PDyNgu0oXEmsFrvgQBD7Z/kwEYQcEPO5A3w99/1f/Q7BG99QqsskoVkaLIOBZ12rGhtAQCxU/HhFA4cYtO+GyNMSy4n2OSyX9WknJzail0dAshTRM9Ngf8xOqybNf7PVxSDZhE0FiHsAOORhlvo0tDhJjUh8UJp4i+xoS+Kl5Ah/EgAu6eHseyTKQ==';const _IH='8f60029ad2509ce5da1bd82fe059617ae2073afe878b4e51461fb330919a413c';let _src;

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
