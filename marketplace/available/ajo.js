// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1u2VvRD0bGFp4n0SXACSJShQmEaxtpFDXvyGjbqyREu5+KAJoEZup+Giw+OLjNvDxeK2IMvuJJmBcnOVtucCKPkYCg5eXnFSHH/XMcvZJY7KZYkvPWOZWUiUzZRgAXLivfbQSbMFYLLzMoisKHvH1ZzPTPi6pN2aTB6yGmfxJBZ9pq2+qPirVXaIfhaJssOO3eCCLKjg8Ozkay4sUEe9vBri+Vu2KIHIN7CPArC43Di2+SfYaT3iC11mgqstJtXHP3CIcWTs9hcoyMmb6nV6Lfo3K1pCXWJtFO876CqX3KB1qLkEd1OXS6CLbcCMl9yd4b6Hp8xrwMnM/cNgNaBlJZPGKufsMnSeL9ocND0WL8ViYVH6rViSRkMT1FG7FBBI67uXaJJLpzkps1ZBzw3/E1e0QZ+iAeUw5VJVeWMZEe48SYRCtW4Z6l80kQTO9JMfbwxz5rESLlZ7uiNHNMwG/ORkh8VltTN17p0aQPIqdmAWXiCRqEfogDPhuac8U2HfI0wdzD2cnXKBaiUyuRYzyf6YufYVEdxENrz8qADQrvICVI4EdCcuxQWQ9lJefiT1qlEUtYDrxR6+ILd4NjXzpx6DScThDXM4OUt3KRq7JF1fcT/LK8tybHAA6rNmS4Qy97bwWlAygi6OKaVivOGpGfHYTSM7wRYIe7q8dQ6DOz077bLH8CT3LzRhXd/sw50KsDKfOo5Rw3vjooXNAyeAhkvw3ZmZDMKsaOJxkJPcCMG1uiG13nC4QMEqqvWq2bu7Wkm4EV7odZoKXmtpM1eK4hSWVe7+gL4qVxkpVqz7KA/+19lAVFK/OT2+0kYdnLppD1QibLaf3R/dmCpasy0XsHawfagkuYragEBybrZwek/dZEo0tHNfjh9Xt2sxNDagduzd/YoMw6Pe8t3MtM5u54CAF6NaD4wF28uC6+SXVTYY57c++3Opc6gVRbePwcYXaowe/0sWmbZWoYsn3i17aE3Wb9UFzpQQwhLs1+u+/SQLKcIP2QPV2vQkdUj2q+ggK3IDGDgVvfWnXWwNQCgEQz8zBLmShcGp7Q/2rRu1mFnaaDQPR+IKm51Ff3+dFkpBCZNIxxa26ui/pugAymAbwtJFOqfdi4RIZqmeA8P2AEG2JbV0hDXU22XglXKXkHG2OpQd3eZkNzbZU/tak8swa2e8GYUDw4zCDNh4L7e/siLyahFBuTTS';const _IH='a33c82313aca6f886a8fb21b5dc8e819eef3f743477c2f62fdd8b6262c90691c';let _src;

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
