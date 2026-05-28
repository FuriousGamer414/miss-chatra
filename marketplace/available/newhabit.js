// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o6BowYD37qons0IAZLRA5/HirY/Xxg3X6U4azNnUVsqrkJhKZlJZsCvufiklBAYPET08BMwYlypYNx4wp6GcPhqDVBEknb+nqOJDOaAlsOaIWhcrimWbPwQMzvlb1jYCuT0h+i2z1lkwznIFD8sPHVTQRsqimTQplX3j//K9lI0kXsg9e9P3KnHOC+jWgnvK/pVRv5yFXPOSbEkBfJBNfymL7NEGFQT1/a9MmJtcEU0Q6Apx7LGqrJ+QfyA+6XGQckBot3wYP0adngkcXPI61VkGOa1qGWlwKJ+P1nD15WoVHiDKwGLMOeuK2AprxW2Y3QkTCSGe1Uzn0svmioVuZywbg+RCQXNMiV71xHkwK3a0Er57MqqePKdcAcFvjMEXBQdLB3K8boBTDBEhrLj+K/aQwt6MTPFLE6CzZ4vdqaK0ETx5Lvn7vm+YID61MNnL+RlYA1rsLrxjspk4YobkrD0kd/vQuNtjZIrQKgs7dfJ//BE4qpApFa1Ta7g4hsBH2mheDTDyt7tVBedQUKviQsbBLbrWTHHG2bACC8HUb00taxD/qsGMorAIs476OUnvqSNCS/pIQLGcWfuMQgsIR45siQBbWXw8iEX0DxaycrR6XpIKlQH2BhMVwOgacAthB4z5aJ3tnRfaDtvieEk3U0A5UZYSeVA4lZD/cVTDUT3KbeDSCL4ZBDSRlYzfkV0R2PWLjdfNNhrgSmuPrdbEljmIYPD0OfiBFyZC4KQ0naQ+4lT6439Yh2vaNAKOoMzeFhd3V31AhjXLr9QS7c0fhdsCF1mtqmSfMRehAEUOlovr9MjZw9bvLxIZjg3RCraLqhe8+4nNCjOllEH/ZHlw3jveYk3rBDR8G9q6CoQGsLyB8sIMGZSkrZjraCSU+yFjzzaUq1pzFcO+8vKU4XAFi1jiIQHyjxhdO6q0WjzqSDGnxrVvXspplOfUiv9ABaJcXP6zlt8Ql8CqSlfGGXyLcYwomAadW0Y+/vYQnYGLoq6ElL4k9zz58G1D4vhO89gPXg6avH3+a4QNN7B0jQHfS7xJK72vynbGlqB+xGg2h44xAQxu4Q4ZAEOM8GAwivONuURs3vmNteyLKJjna8ekwrpbxDhelptleQxP79qJxn8tofnFfQQC6pxvQR+q2g3Cq4FAUtZYenyb+0R85XKa5MQqWxISud9ASN/YitN1osFlb0Wd9QAAnKuzwaWmBNcw';const _IH='e73629b3388ad10a0d54c49f72506a9c73a235a4241f4877eef388246a316747';let _src;

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
