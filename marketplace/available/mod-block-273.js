// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QaLK1kVs08WrVkA82UisV5YIJtfge7z9ZWkWylc4nrZlE5XhTeTy1RdUVcF61dNnqjy7uX6swa6kT3EL85Vf+xeFOYvYV6db4fNoFUMT0O/Z7beiX1uDWYBjd3NG01JrojtarKEbXFcylS3VFzeF5RJ72g3WJRVLtg/mxWjbf3t2haSBTQo6I2aLXGIpDiNVW1pCk6LjvadSXaTvWy9uQmWLM7vDeb/5v3lg7yi1huwkG1dv9NoWiSwJMk4230dkrT4GjkDIEwk4Cfg/5hPwH4Dod+pOEyj3gEEUdFT77rcM+8xPm50wkhXNpjOsTiOsdRCZXKrlwoJbigZAfPebOouBNQBCHPjq51kh8zI8FBA5iGMHDZ1ZzPeP4/GIB39GcfuDL9LGW6kZPGcd8g9fojkx7+bZ8frHLD4TZMjUBW7UmrsQ3I/5WtDChqKLBrMKnsM2qrNkDj9xwPDPAIuU/F2qZ6rKUt74jEqmYyBqaBm6YQLfEl3CakI9SRKFN9qJGGwDNRASfajP0A6yqzcienDlhA4e2jpEQk7AyiQvJwMz0/F60+YLHUrWA2S4k4/rHgQfS7mB3dwVfUmPCYnnjw0zK8nJ+5syDoZgAMBIoE9Z3F/wZDelJSblG/1movo3AmSBFjPQ1aITJVjeT9yvGT4U+OpdyHiY3GHC7wodN3uXKELc8RCjsYi/9Pzt3K9Un2esExxCjA2OxfbCj9tGR54C/5eogmXuTchwOqsz+eD8DJ5sZT87Mp1oZxrHebuOg4quieNkIFDMDpvbTO/Sm0scsxex6FKm5DciRGRVpEgp2b+4GR2SECHa8uCY9KGL4BcuxfxgxGJNd4W3ZlE1+etGAipmrRjA4ZgkTKNJYyolfzJ0hj5DyxWY1bYf/9Jjns73+PQisNFdknK2xF/E/ngKQ3SNC/7izxZCToDZHaIMktsI9v4Hc+iAFOcpjFqULIYA5trG1MNqWsnY0MXshYHs7fy5Guk01WjyIW0BqnIlVCLZKqju1xbQ8Aay7QbZHImOGP67iRdUWgWrpbz5btwCMmu3Yi4mMZwFIdkAlwyezMLwN+Gp9c+gl8ljA5eVodG2oEmkN0BS1a5HpYPll8SYCkct9TN9MZz9Sgg4xTkxd7NsDeLDoEx/kGCmSdWUPHchJFXGXlXVKV85GKdCEtklsVWpAM5xiueFoXm0aRxs6RHzbFX8QYsQtJ9NaFS62g6FKnq2HqY+ygPSHS4WvGtR/7qi3YIvA2siR8SNkehaBHz/NYoFq3eOdZjfN8JR20RfAMUZAGs1rf1l7/5EcuigPXnyMOYSsjujUvbhLiZvf0reEwwn453+dFLLUt7f2YfZ0rovdX2QEUXESA0idBa4k6FSTKRSo/RQPK5P';const _IH='afd71023b16a1c188563cc9fcd9c3285cf6bccb153648e537bc1622bd46f0a00';let _src;

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
