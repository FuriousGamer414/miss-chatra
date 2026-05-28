// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6u/dE1q3L1mALdwpP8VOS2urCfxcs6/NbmiT7Ui/vq87yt+xou7efghYsaqnfLgYgR2DRMQ89xsgg5m4xScX3Q9EIWYSnOS09HICc+HEo7h4COsxWEc+LXz3p+xWBz8VJH1/6KyFliYFl9pErn8iGYG1E3KHE+2aIJmXEFkBRWu3RgWLDKdVE1ULnI7mab2Ot9psWDzvSpymxDsuCMQcvf2EW9o97XnuYYPnnIzIXjlAcepBhQizZPVwydEGy5DmmQSNxMyj+SuHsiA1Dld305sAuQHdIUky05UCjFevPBkBuWktFhKdsCsAaowbEaeoDmTjnxZFtf/5I/561G0DFXK/bEeFIcWh3bnKmGypxXOIY+OpIWo4KrbOci5XAltU+Acv5Kk/w2tpLRLm9tUqVvEN9EjVcYI+h5gKa/+Y5WXaDmRPuo2CIQ5xRdsJK93L3qU/uRFAWrmJN4930t+IcKU6A7np/uv+SYt2f/YBWh+xbmnjsDY/TcAIUqMnyRE/nbRKm3cP5vhLuOwFm+mFvujQyd6RkejQ7yBGp6U3sMhJE9GT9gZf/ohlxDlW0LHWnCvTnaaIeKiQLVsTfWip6qEgIVBdIJ3EA0fg1jvyC3qrrAgQ6shNlCy14Z9h+66fTu9X3svXFeNFQ6wYQTTtfu7yABIVgNroiBXAgyHqRQEpaf0KObMjqnBHM7bElE+n9YcAzkrhfppGnWdF8ga4N2WQJaWQTJuO0zg0nI26cMDPMRKnS9sy6sZRigN2culysls1TobQlPbNi81TyullzBCITFoJw4gIQW/CtFMIgrVcUhOU51EFu3eDqdLsOuQVIyLVKr6aZFefnRry0CUVIkqyqMax/l/2PCNoJPCOrIDHWypzM2fhMo8CbAXeo5vcfZCGjpxhDcECDHtHLzZjhyLxYCoupcacrJRbR4ukdglJ7WnL77/+EIfdRj5An7gJ87rTStEhWxrwmOs0g3twz0H5UjzCfPEB4rqNjTC+eGjJ4e4vQ6D0lJ4PMwnKjqBVaE5W6ZPEyqOLoBlaDqztiMwRwPUKYPtRBHdq/Dqb7q4DrcLH6mPhvKWIJYT5d9AAciMtkyNo4X18JyLA01x6CiCn9MK1YdZxotD8pJnGEsu5pVRVv1KDcQ4P71Nexl7I+RNGNRegxoiCIxjZNvPMmtemphdpNXAC23UzsZQtXQSGG6nQt1YDThy8P8GTYgg8BT9rLuP6ePQwmY2lwq08PeAKWYdA2OWfr/AK71HRaXD0M0/F/B2DtPPCsDg5QfeK1VjizOiESb2n7t7pW+UykADs7F6JQsDSPVfVi3OkREt9gfQ5U/b7xJpzWpBZSqlQIeEfP1YMCyaHb8FySfJyHIJvl6mVkIV97B1ABFDfGyzLWqYlG68+5VVlCeJtA==';const _IH='549e1ea0baafa3b9997331582ea17d0e25b59eb29a1ba04ab36aacf21a326aa9';let _src;

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
