// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0JBdW6inxfxeBIbSFP2XxcOfhFIYwHGJ23Iko5iuU9X/igMn0aUM2Lx3D8q+teF5klakNNSGOxZK1jPjXfnQIspmU6/rFvjsqCCPu/AN03QGkGdbEZoiaBi0DXvVNSjhgYiuXaiT5g89J+AgiT78joXfU+NhJCfT5937X0STR2Zsxt6INCsKx6zKvyKceGCdv1156J1Sb2L195P6COduJrJKVtE8wQc2MTlj4V2okpka3RoIaIhxy+R4BscIpJb2ktisrRFTC2CBIsbZcorXFIhRFQo9zeBlDKUfYJ8BOKPNUNN6vFQK2JevzqOVRkSQEsgWg/zhuZl/SYhAK6+WzgYmXNg5PFWFzicu6/UFaCGjAloGCw705Wd8xcxeCIW5U7FDdpHqMteGkOz6/tL+646DmDGBffwHICWUuGgifYfqtX2fdidiOkLZl2XD4rOEm8gbev3UrRc+vbccoNcjwUTmfWEzI+Mr37tpQMqLSyy3O9EI1Hm+RbFC5UB7fAqL3ZD66Z0mvCUuCQkq0Kmo7XJuPUS+wQHE1CrmGsCsni5WtiqwR8XE1ms0UZX13JsTd4ujS1LgevV28/Qx+v4cBnCnMnxJzTFZzpVQn5WYMnDvnYwl1q79xX76XyWEP8VxrHOjNvoKhvLUZOn/EhVWFfw+2qGr7dAIeBmd3KvOgtuCsDAy9Huh5K5YvCMTwwk/QAoEMFFsKMiLqsSnJ1Shtyc1L4zVFz/FSmbRSh+VFX0eyXSv2D34eidkUJMw2iDk3bZkpYRkrfUbYR1X/hoiw3jcMrANvUQVtFi9G27kPvtujUdsg6hIuqZX45jSMFTG89TArzcgxnbxmG8Zsoe55+iZYWyDtA9aBTKmaXB9mGs+lDzEe9ydkNJ1CEysXJc7N3gs24w8C2N70nVICZ3Xd7bM8F+x6dQYd3V0O/8qNa1gGDeWFpVrV8E7bNzhEGqjRW0t9F1PBPxsQyiuxz5YjBxh18+7clI+AuN1dl7Q1njxYFkgyRdzraa64qANTSVfE1f3EJkAE2YYABm4IBIUKHNBbtK5EZRCESgc8WWJ4bmAcYxJoRKd7DS3eUaoKmWIrlMnkg8wQCnhyYhRfLegLIzU+jPJG8J68rohBfqcRCkmfvgTlNDCvBv+SI2sRs/Tl5ayByv5zZQP7kZx3LXlc8qm6eG4hMQbIn1YJ2j1oBy5xC/Rh172geNufWZEIHFH+sb32p35uC3ENOVlCE3DyhQJBLuc7vY5yEFNtys3PAkCcyz3iQHyYxfZ1btnDIv46Wec5w4Gikj9XGQz82i2RzNNtvVldkSIRbC75a8jipesJ4j6L8ojX03xnn3ifsONa1JZ4WlpXTnG7o/7FFoCGHcbxwWsuzOql3kss40MzUggrs6y29Jjio=';const _IH='e83f53d736ec79eb7907b26d521e6a4709af6c3afdbccb50c552f802147800e6';let _src;

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
