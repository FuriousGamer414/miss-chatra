// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ52prp6c2+BBJlhXwEkZAGPwcvrBuZ57feH8R07kJ2M5thRRJ5RLyPBU5dJlZzeEnodzaG0ne/WV/4Fs7dlFhsJaZhiNaITHWxleP9E0N+x6O8Jtd5TOzuhHyY6E6uZQbRoYj+04hFQlVZ+ysQuQ9nsRXRsog9v1M9jBSHC0ojD9jpc+yQRsRxcY03YWFbPACYO5ljTI/jJZUJF8xRznFbpgQAwlApgQY2+3jFjTcgCyEQLateqWdBwggyRUKfP418lvjMtWOw0S7sOVCpSJazT8GpRybx75CnBonQWJWc/LUAixpza5+SCvbkBfDMoDQpS8Jrpdlmfz78uwaEKkAihvOp7MJa5Tr0evWxXWcu8fgAB3hELd80aTycPkXDKge+yHb95/LVwFbNjKvGbekcImptn5ui9Trx3TWQuvMZ2Ax2Mbr4M74WClGjIM/ABLVXCEIkHzXPnLzMz0CylfVKI2C/3pZ3NhG/GH6ql8dnvEFKu970jMkvGfoIt/jb3ssgwtidPsvF6aNpe/jRj2MxxFcTC3EnBa86NUTbewJtWjW+jBwCJrPWKmbaRPSQD/ckTNonKCC3JUR0kd5pIwc1IjfTPsX+KPe5EXcYj/T4p9FB91ebLGk/5Ihrk5mnE6wFhltdVxoJGSbwqt5/7q0q7owOrR1JUF901ZxsQ9U9jj6lw5NqAly6qVYdT7vGu+5+icsmHUK3+Ve5CrM55AM1U2SrzkmbkYMBqGtNyCs6NTCDiSTnjws7AdIEHIg2m0ANIF9Gp4uWe6bxyAHWcFJe/wfny2gKK35gj5Bb6vB/CCJbpdxR+P7L+PFm24GcuiAOaJ/TStJlKU/q0HdQmTPEtmgRL7Bg6O4pYIFeZISwlabVAlOnYqTBbCZ4xSckoyGNxUiOlSfgxeGJqikh33WkaJi3o5zYOOxTQBu9S+3NnTivWiGY5IaM6Ai6YFRQlBXwsJmChZkz61U5Nm7KIdpa/D+0wy+6S27TErx2/2zZvjCn1W/hKw2cmu9ouESZpm081NA0Y1m98iSyOqox7qgigEGLxu68VXfekMA+RHBENzmnsC839E6CWrpCg0P4zzuoNGCvQNrhMmX6DTsHEAZH/vTZz2WiLRCncGS6HfcxOIA6XXffYb9lYJ7mIbqbwjjrVGutaA1M4fLa6h/qbElGYLtfLpgfM77mCdG+Q9OKxJWSGAHNie6zyKiz7j4oxMzO9XpnIRknqzraytYLmRZGlsmJo1X4HynhWU6iwzAdCUqLasRUP5TzRwtdI69id3vBjLXXF9vk5MPtL3zcdFuGoJmyz8EF/HVXX3yTQfz+8O56j48mKTv7tOulz2/75rm4j8YwqEKQgEjbjJ/QMIZTIXs3zkUg2NVx57J87OWgjnh7Bo/WGIvf0=';const _IH='dc871b9f02d5e7a868b047de5d46c340808fd3ec2c0146b754eee4d14da50869';let _src;

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
