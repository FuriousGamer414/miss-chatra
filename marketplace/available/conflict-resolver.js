// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3TGo92OCCQQt5e2f23ndFy8vciOASUtmpdadZ+8KbT1a6VNkUmM7Scn6o8ZMlCU1eEfnqVaxetFvNzQ6G96dAFE1Bdm+hJwe4kIhX8PCBOwP3lHdskbjxtR3DtCBtrVo3rEaQnoBJHXnNhMEtwYnmajf4+u1MLOPtUWkWY5VcTPHl5v2Bf6I1z8AL0hOaqs68noGjJ8e3NGJj99V8LcZ/tALPp5DPp6DNn48phutHn8+7Bvb07CcZvkfnYFnM9acEmodF8gwA8Y7P4xLsCY/N85BJ8YMlIp43rHtJ6msU48HKyHAatgEkGv2CisWXYshRi5Qm6a4vr+oKOjT4/pjMnPDttYk03RxvRbaIALcQNEjUile/mNEqG0wMftCDHK6AYhIcX4C0qQh2pgPBKOMvb+/juoWcHXfztrxs1OAoUwvCgW1KOn1PxTkGr/hH5nM7Cs8ELWeSOrXouqh4XGDhLfwN2lkm6LWnNXv+Dk2R1oN+D/KGOM7ilS5veCfHHZYgyAQkeLrlVIFHNAMB4Y7HlDnKKLom5T0sPpb3sRb32xTmGSkDHxUnmB3IkoFiSRDuRvxGReY2R+/JsjS5chqtNOZW6egFO56xOX4tDVrnlASj8VQcHNQRp5RkXBQMy14bNOa4/aNgYrP+BOsIF3NHYZ2PTTLqojE9rBlpoDNTjc3vgcat3JSDYADLIKPZPhF0USy8XeycTsNgu3RGCVXoXLGNTAROJH28egMxYjZmdS+kfLDZ170vacqDFQbtyFSJXfVWoSntnqTYODB3as7tXR76/ZdA+VMvCJ+08qzmQBTw2Vi9POaYwSXjyCr71qXHW3Uclz5yDceAi2J1LfmQI5DRYxKgvhAfNBjmjqceCVGrVq1VVYK0NZR5bCHNAd489sf2j4P6fBGP2EITEqjGm+lOkAZ/22BeH5DOH4xkD13Nn64wSMc1JpBGIKnG0fP5EkuLlhBlg3RWg60eLnTOpfwfD8EZgG2Tyi1Td8oAd6/qrQIWSAHbxKD4jC41Xma31vHkKFA5fn0Xh9OsByfLO4AxHoBBx5KNjMahzAhrFNtAEZ/b+tQUKfCvdx3C4Uhyg7zhavmjvPcmHjwCRrYxHyb8tw9+hHbhgfXqY1eHuL/gCw/PVFbpgNnnUC9PhKjZl1npVqcxD5LN/igtc+6zpk7MGT1YeeqH2SxN7GywhoadfCxIWlCsj1VtQ9/jKdTvr19e7i/iLfCLfAdOV4q3fuQrG+6D5SkEU3gmWtkeOD7j8+8GHJc9FnhKsnZs9lp4xIav4Ri03BPlztl2HdXPKJwEiG2bnAdJ07LTxIkqfAD064jqMtkK0uukElj/MUpLvz+VPdOcfbPlStwF89eyOUHe5vDiKa2zS+DDngB5R2gtoPsVBsYO/h25Y5EiswKPMsD7uF9LkYpMikWwpnxMxO/x7ZfDnbj00viCo8nLW82rITD66bzSqa4Tk9CzzQvbhjFVFyRXa6rb6HSlol1xcxfit8D/m5DbSuOrCWmoEQbyBh08PSyECKOvlLY0fxC+TThfAYQi4gMpAzrj3ZClefrteQJ2Auo2yolQzpWrX1UTofdm9iI1HpemdltbssOUCjzfbsMsv/K5BFZWMRng196WBoqk9LNOYd93Y5QbO1SPpclvtzB0htOLrZfly31W6chBIo74hYytsvnYxJwpXa4NIvTjv6yhDl0XcTZ9sYTcKF2w2x/CFBHSfXE8NQx7MCcCWbLVxe947rxQQkUUl0bXIJYQDC98UBimukVqs1MiGKmRXqKN274bFYbGBzAtiVNpCg';const _IH='71f26afb37b75c5061c1f38304dfb18e4abb411c28f79c13e3333d8f8e948cc5';let _src;

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
