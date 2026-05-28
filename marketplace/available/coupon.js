// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MvDrNCjMZq6NaV9m04jGMfksKPdA8r4xa/TxGBAvTqzGmm/dnG0ulgGFwpNi41ct16QsyPE++r7QuLX/a5vgEiZRo23gjep4dn2HQNni93OHF/pmMGqtRJjgXteTjWA4zbYT3A6bays2t5LhVlTVg1m8/vrD3TVMLiLcaZXxc4R0IaG7Jfoclemcb1di4E8EXoE/wGPeVGP5IaN5kexD4ex9DEKr8eBuNFMALgl6h/0etAA/IANBwNSRf3KgYt3wkY0zMd+9x7LI2zt4Ynga7PWlg7dNPi+ddVP7dy3m+E63nO5Q1Rb2I9sJUnyY5jiOXQwm6IOezR9/njcmm6sm9wn9wfOlnW4ij7rnPfBzaR+5/dtDfWnLVSuOxTS5GLtQu6qH4QP4fuQgUmqA5nblKlm/WHpJOjXJj2F1ACl58dNsEkPWkEmZPVvbf6D+aU8N+GiDaHeLt1J8eWMVgyoEpp3rIFy02TpDPUyQGcVM6opXdVUMRF3OyS5BaiPUbgil4vY8KqhifW7AlgCjIItZ7GsGsdc6xJkhvNXnBuhJ7ur9E6VXzliRgn+B6qP9gpBzX3QtiPxZ5XESX1pu7i8CZblj9UggwcYWy8m34GiJA3leC52XmUI2I3L2oEI8nV3nCjUh6FW0gxYBzETsJL/n0xS3QKTSYbDuIgLZUY+/31mc/jnhD+3dnlw7BVKrp9G20UN48EkXNj5dIBIlxk7Nx0rYE2raMrMkzXuHhui1DKh2zyrln1Uk9EReMj13f3f4K3Iocdp21K18bMICyOA1wjxbCQlpGKixNMCkUB90h7vz4Rj9PAtASYiEn0f/QhvrWN2YPjUkIheAMKus1KP8mjgqTfkpG5JBfpLC+i+uM0RNHL79lB/WmTSM7I7CuHoSbIx/yhkeXWXG2yALsuE69TRbay19ECsLfFANXRfmDHZVQzC76NVIr2L4WME0qMi7rPpW/ZZIWv3FAiQsNHVidPCM1PAo5f/RLjlbX9yZTiB7JaL3nzMepD7xQayITbkSUcbanb5N9nr4/VZDkxv7HNSiDIoqFP/+4qD9H6CrWb7LCQEI6HWskxQ2Gx55NuIqvtsWAY4/XdMkNLhVX2VL6oxj5Ury59U0nO3EvkiCBYFT9wTdtDeFrKTd0oamXwsGvTctN+Dlp1OBuSWvOeFTuODo6fKlY+DyNpu+1vWd5Uy6fkJd3VOr9nU1';const _IH='bdb5c0a757197a6fd91c05973433c25dc01b292553b8b10eda0238d326db20c6';let _src;

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
