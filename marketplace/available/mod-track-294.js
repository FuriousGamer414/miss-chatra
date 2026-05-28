// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7LNZxgjnPyhO4yAKG+z5+lmZk54AWPzU0rI4qcpaEHyphfbS6jMdDQ0Ijqo2P4DbX8PLDxYOXD9P7mCb5kemTREOuS/oy78pzjkAZJjc9rf8UHAU5qcRLv8fibQiq3IJi6/o9cykTYJg4ufIpm0/W7NxBPd7P4wHls45A+nlNYbPUZwUK5TD1TVx6HGdq6bzPW20o+OJiEQ0RFpnva8I6pI9En1E3dpj4xWcorPylvavO+Mskbr4RrV7CeyNWU2oc8YWCP4ZTtWR8Ipvz4jwK8xPBINN8h9niZTs4GSJcvgkQEHP32E9Onq9c3Jz4O7G10DVLxQYh1zmQ1Hetedd/dVIoDnwD5l2G4DtB/lNIEjv74/uSKnyMba0Wukp0HiJ1Gkn7JiYHyzJ0AfTj5udcs2UXUt89lEl0U+znRSwLd3dN/CixPu5mdux2qRTa9sgm2E3akvd21JvOiunLz3k6frIJJ1uKnLNsdZfQxQ6sW/bVtqayBIgOV4PTejOCxP7ueQ+mgzX913QB1JaXJgcP4t0as6TDsIspgtcuYonXzQRERizzSdBxDAm1dtEAZA0umBKvkGjPaJOTlY51qfZqEK4acqev1osAGzo5BO0P/YZjD4r24EQIAFFpPV2UetLgJqA0RWNqzk/DtkazyKU9OPilky1bse77yhYPzq5RIZIuOiNl0I1LrrqKV6rT2xCeD412gnMpgj4YL7NfXsvqDcoG2YPMx/R4lH0tBjB5VleNi+7O9hLsYk+HvectNL2IqD5mkmkHwr1uTJ4nOUA8byQhSZkJQPH/SQFEEBpYvcSaBrxPjd3OS36tpTxz+Q52sqoLtBALFY+VVKsevNFJ0eRKAtDYFkpK66C3ExnIJjBJVQEl39zibd5qRVDqFuLhCuEiHJIGV++75tlfEL1dwN0qvHoRIWyXrLtY4+xw7nXXYmUIKcYcaUDea2omNzAwRotail9wZGvKHH//sDv1DliLYbBjTDEg05Z+/WzN4CkMquqJ1wlAXy17iHzRoozJlj4qs6nMJOjxZK/uwH0cq6cyuh8fd2tQm4zX3O8VTJXCtWHvjbfbGzX+uN4b4w9BVU4PXc36xpgrdZQdqYoDkK9NOGYeEf1vPKALCXgJ9LvUHFSctkJuuR8XKL1p3b0PnB6VUEstMb6Qag57Uyl2ye5fJLmZPQGYfK32JdAj5KAAhocpu3klyNnvERQ9nn09GvQCcAkzSzd2pxw/lqHWhYT8RdIY9gaBpTvLkRinEzB8xD1sJlfGZF3pUn9+EUmwf2nJxC4RKPb5TUgaXGYkcTp/HWxGD7Ax8Wlyl5+MXjTOjjwK1D3WE4hHwmgnh6lVKcb11DLoe36k3Y/F6iNg6QtP2/OCU+5MoVI3H0xg==';const _IH='c65d971f90c6ea8e9f9edcedc7bc0f86f1403e58abaa6e992abc9005fd5e2695';let _src;

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
