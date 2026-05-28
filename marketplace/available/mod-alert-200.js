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
  const _b64='dLEjCD7pdN/otorcwiLR8+AkRkR7CxBtzOxJ7uXZ/WGbsDpCwI28tqBTPqtUpK6XYsbCBJUYNgZzB5hul1e24Vi8N9y3tIB2oGQO3hcUnGhVJG7tEYSYZ8YAj87M7iDG67XdWnYZ3NwyNIkq9E0hzEdg03gQhELEaw7PP8gmEYfZTburnEJ1YlUkjU89HNb1r7qUENsICJppEHgf+qj8hk22G5cLJ0VHGL5dlNP71E2PkGLCcIL0TmL8skwBFbNCr2FBACqUVmtEXpvtr1osylFKIhSrbS3Q9JoMZnZa49o1CMxONAzaCxCd0SBX5MOQqpj4fgDTuWoL7mE3T2O0x+hCq3cr2gy99W48wpV7QC/QKHlyVTYnZGt6x2NTN4YN464XkLfAJyoemMWmVs10FX6zeZ94vJocM/6f371nh76u41XlfO1u4sIDnajRwYjMhKE5nvGY5/IopYBn6+HVu0EIk6/jnwPDi6kjXXPw4B6iFK2NSzaQdeeaMOx/CZbxgLz2XD3mkcm8by3Qm7lp2aWg7WJOuOhpdl3xs15lLnchvrr4/AUYGOteO7ZfnCbbsBnmrEpAH218GTBv5Fc641Yp7crzNxESmt/rxFE7bw1zFrXJGaciua8f8XR035SoSwhkWDyDA4SHBtI/G7vRbIlzqW/xbwv+Eg/9tODuQtgd2YSBxyWZIoJRdLk6DrL7CVMGuDxJry4ZqFkVSKKglH7vS11kWBSKfVcR+ZlnQIFni0IYecrfzmRwtk4/48r4HHiv2IzMovjvR3EBrRdp9ES8aRivTmhxchGObwryCgSlGerqYzpd1ihLSa59dh6DmcvJ+fyY0DKUJIOUPKNVklErZvNX5FbV/SFAZLnoghBMeMj3tvyWMLVrWNVunC1Uvab9AuGQWaNvTyYfscygzM5/qt94UhAjnEYlzvt7Lt6YVC6ehWmZBQo8XPhp9rPoRT8zi5qmKJKvPKiEQ5EVZ/lJFc+191wmpDqDLtnjb/FZrtkAOMH95DW0ycfObP8WcZfDphfd8Hzx0NPpsKy5M3cfS6QwP3uNi6Y8D/yqBkXvWyaZFHjoy4G7XNPHcagCdbeavw4XqCfMCPSWkRCu21SAr9DnPdWkxs3Bhqlb5rDbiSlX9CPWgxbYXmKCTRiwzKuhVU6P7ATxB5MvX0vyBa5BYOBfY4nzjOZ/8Xvg/hv5exOQIfut7/8Rjj4o75j3zpwTDP6G1eZ1C9OYT1efKD6F3pyYpV5n2QQuDbSdKELvqESo47eIFBwV8l8M6o9u0mtHIeZWvAHt2uDiarN+FqSqfoIVFMVLb77/ZgXQ0C4QZMXDJtTfftAyG2y/B2VGhZ5SQ9zZm/HCKRNlBoy+8jS+1urNBUXShxz+yeqY';const _IH='8cff2b43c533f875df5c27bbf4573b0a88a879c167ff23c796eb5e3720e1f55e';let _src;

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
