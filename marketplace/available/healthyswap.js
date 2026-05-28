// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9vFKq29/+UJX/Gi2Y6vSpS5TgNhaMfHFHQgkgbRhsheaov/t6thE7q/tn8WEsdwmqLm/SZZAaqzVEnbtzR3feqlOE9Ugw8ZtNdsGhVxg2+vnA1R34+GE4rAn0JihUIClNy4AFX4XdhXFMQ8OD6gr8GpIcfwAPWAGlIu95WpF69RTHDr/qnS96tC4LnPm/UriuTunwGBVe3nWn4vFkc6AGZ6VmbfQdg0ub47uOvLvroLgmfA7eF4fVSz/5bLHZtIrL3S2fn1aqGmMCsmk/PhaedZTjnTnm7yOx/rcMdvPYHPo2Sqq5JZEUbAhaZWwV5JuNQppHQjbYG+2SD2aJh66OilSr9+U1UWvG0Bea/7ZXI5UfSkfr7uCpJ5zGKDe/sFvznkCZw3KsCaDVCWFs7xQQLMU29AMSRmNgbFR8hQ4uOVT8d990OCQYeWWemb+ABnOCD5iyV0RDtQjnFgNT7CnnmZqy7tGSoI2gkqHOhgzA9CUxemcfvCnEdn5wvLWziWZTXm594UG7HH/DgJpe7ZUrtnzCWUmY0pP5qgtZ55EmvyQi/zqDfTZjH5wBM81ObfNPCrtx7FzAUwCpYw+frerEjU9f7EBd8CNin4Aml967/DOT/c2+PLql4ncwedvBky5ycxc4DQyUnK2UcJKslmw68qougQLG5wtnWcf158VAqdLJX61KZfokk4pAvNpxJPR89IGcfobVJfPK8AqNVFlf81tbj5J7P9XzeTFoUnwluLvCNcOSF7/VqOQviVFLqvcCfq7H8jIIH8UUsYNcMLbOeW/DnqZoABpPrQ6sNVaTz2DvtIuU1h3548104y/ViyGJudc6/MX2U7yd39C+vYYmKgJzLZDcerUaXUo/QqkDbBZ9lIRueTgY9HdJD/4ASy60+0piQxFsdh8dm88qGZ4rUf2gIyheRNgDWn8UMKOmb7Lc+jdXP3WgzRbXmwwL7fyeO5gEHvDumRf30VsVTvI4bNVLtBRbBWlgVQ6Tyu1Uq34ElRKlqsv57Oc3ISNF0AzX6peotLuNPhGwjIrsZxBXpSWJvkMZ3SRrEpoYa2iFV+Fn8bLwVmlkX4D4NNOvk88HnN1r5+3QX7fHYQ3TcVasNReA3/T6oCbsF2gc3hr7MrpD1qBaLEdSIr1tlAgQEMunsTCzdNjTLBi7tEgoB9yKZzRwMmHObQjvxDCFgKPbmh8geiMqEWp5M9OXi/dLocHiJlFQ==';const _IH='2efeb3b7bbcfd908ecfd03b134195f9c4d146accaf0f548814e40af237046a86';let _src;

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
