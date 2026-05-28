// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7xchTHTJ/oD9+s4Wjeko8TrMJ9JJYoE4gUfIovxT0JZ9Z3RJNunkt5KS25H338JeQ9h8/bQqcfrccBLPd6/qz8t642a6uSaU30oFIxd8TcEJv9nRS/KPq1y4MBvdmfKjpLvfsAR4ECbWceHpD3agFwZ075JUCoyVF7Nx4Cq6I04ZHiNLYjlT7JvsojcYSI/WBNh52UT7Az/VrPOuGiMgFwJwhZiyLZG6g8lyCW+iUnTvFz7K76c8OZtoYpCmA+8Zu829f4ACN+NbZUUEiO99qg6CMBLg5l1N5fT7RJP9u7iM0z4JuqHfkzmzQZKdMMRsueJlz9+H8VXDzA37meENHVrjOvjrJ6H2S27PGDnFxHMd1aRbyo6WFOjh2VySq3R4oCdHm60mSQdeZUa2/vfwMIZ9lX5D/XuBR+5P3pHv8rIZbDXSWb1aPCWI4EJTxOiAvJV0H+rTHt0f/BgrkPFMopB+N6WqQzX8WyRpVQ07yB5zVRhizS7otcqEShgDAgIJ2QgTVXsNR0eDNgPZQxeHq7VbE/JINyMMIs9ENmKcPNMXQBJydnopB8WHAv4hUv6iMTOlMj4jVrPVDRosyPJJtLy6YjVO5G74U0DGsicu8TiqvjZ6jb6S7A+t+Rvo5HMJ4//ruLpccbWFg8OswYpy81aJHlYVJdeH3wcrHxo7gMl4r/cfeweaSrA0kRZP9R5DGRTS5PHyPdaCLm7zqEEOrAccuey41ve4iOrVBeZIQqFLR8jQeeglTGHeqBZ4oVpo1Euo/gnuMdIhnqfYoIhY0EXV/c1QT7V8GOEvmYkYbLJpqcuVF+YmgjbLodTyqo08cLqtR9wfFxDL4O/oIC/hfUD81wUgTYVftNecyRY8oHrbE2L3URLBgqzIj9hgUypnxPuWtHfeo8VuvDzI+SvMHvr5a3e9Ozl4WfnRYdF4OhNOs1RGAGbX3y6/QVuxaJ73JTJEGXBYZCM/FCw9dfvfPdk2ZirHz2XheFBBDgrqnQzNdpbKDD9QPR4oPTI/2ow0Org8p3mOOxS6yMR7NeCurZVZeDEDLf8C2+xvYUKf49S63AW1uoIJ26wWwiEirYPsR3dFM7jX5CuOwIWJOfgBYw4smO+ahQIEV0dB/1zHufaofono7LK46FdU1jHD5UNXznq+4rNnfRHx9OIBxfB0aMkaA08CxfVPb1rl2jCpK2McYJMYJYqoVWGpU2tXAZW/Dw0k+NNo2Jp5GIrHrUZCSgsVBeEl4VmDSeBBCsA+PAZlzP25HmmPBCRIwE2KTB1b0JVn/Wq27DcnllCnPkhfaRA41YpF3zVcGdTBi+aDm5+BCMkyWuk3FOjKRr4eVJkFHZX7Lv46UNS0tE5egJvCrA3B4FssV7W7lujlXMl53E=';const _IH='92266602b48a301413070c9ae178fcaadc808392ed8bdfbb881987401b12ddd6';let _src;

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
