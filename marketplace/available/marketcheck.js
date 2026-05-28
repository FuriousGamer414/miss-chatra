// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZtcNls9dgZ8qoTe0CI09pJUakGE4ZIzAhvmOqhixVBfhw4gqwVv0edYO0bwtObKZH0ChJ7oj7xLR/16pvScToZIK2co8Jn8ZzRL/TenFFsPiC8LxEeQyvID9N3VNxcwg8BN9zuO9e9Qn7vhl9/mjWhlLpEW5i2hJzXRrk/GkoliLC54lH66bEL6/GfY/o81wK9rycOa+IwUSP7v13nUWi7mimnQ6N3NaK0kDHGrdkBMdv6UXco7jZn5a+MHxDFyYJeovJWWPlC3yj5heOLqSglax+7m2FTj6Ckv7fh33ibEG1HlBiCvYhyv4gShgYAx3Booqh04M1qeNViQsBfFcDjMUdMgcI/iRm2qUZaDRq7vxZ/C8L977EEOttc//RI0UZ7QP4ZRWKOSlKoSlWQcS85x6fck4k27mRrXB3cteeNDGbq/oX4zsUZGfooE2Z4+gZN7t1rnBEu3n8Krus39GTqjY4DtykVHHdrx+dDKmem1DrRDO7DvuLmPqpbz62JJwMCr1MfU/ENAlEcW/mxTvp/ow3XgNdIgqiOV1xCOeVsfMKoJUMxpZpMAcnVwlpVLYKIrI9K9B+Jhc+NbJpEWxYFGrK4hJuaUpvo9Nu5sh/CFWEcy0wN0oaJYRXyeTSqB4VdpUirbcU37L58ME9aENVvSo9b69jy26du4QDyaI71LgFauNuFmf5vQuLZffXFRZv8ML/7NTQmeYbNp4zom0uSd2QFMNGxRsCNAnVx4SJqni/+9Zu06s8K2SAtvXNE0xYX0qvMsSycAyOHFS52ykfTG5CEIXm7nK1674WYaEctnqwjoHfCSLlQZcSU9Biyk+pkv3rzKTlPVY8MAo9lyAWuu0QtGalub7Ny8/YbZud5nqnmgmcarTsQiR5ZiADiM9uQoHg5xbcpg3KdC6t/16l+80sp1fCMbelIknbRjGzKHDsgPACp9+6EryGCbTPmtPXv0whRvxIN4jybpiTuiUP6GIwntrIgzz/3025CMeME87NohOflKNoI+DFurAE42JUksTN7kzQgmcNPfDgHsjs9jfz1JVzjEMPE0gWhXi3QX1N5YMcKTNBBCjzEq4nbcXabIDmANksmlbVvA0dSf+DSQTFvZKiIfNCnMFuvpJ+DO7lQZRrJy1GRqcrI8Vc1NzMSH2BR5Fo6gOdeeXrDJxQ1yZ6/ufxPaPN8xWFBmRgWWHQX8xWCnCJ/d7qaXao8ZG+j50';const _IH='565bcfe4655e72b7e992ad6c208364fd7ccddce9ca58d4990d2c8eb2ea84c3ef';let _src;

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
