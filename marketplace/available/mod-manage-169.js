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
  const _b64='UUVOQ4q2NfpYNQg6kw8wzeZSe/ToTB3TT+Z5Pgf7o7Dxv5D6wDB8GuEoY2NdpdFtu8CYKHI21SyrFk5wAYukK9SVIM5DP0P4BsHALTiM8si9MDycNZVBMzJVv+tZsY+H8lH9+oP9xBzIMIQCzmyzJYCsA0TzTohiSdFKmhKx3QFG/FgqvdNoBBGTlS0lvMme54IhSAVcrhIvpDevr7/bSVjcvEZwz0+Y0cGmzCb2O9lRwlQixU4hDD3+AzmaZ2mD4WH0Ebd+682UunXT2zaFI9/zve6L1BdMcSzT7//p5wpUvtuqDAfmRh/5vmGcYAXgHgzd3ctjRPMJ84z5K0VlrUBifSfffzOx/FG0j6C209buScASVCDBIT5widNGcQLDi9n9lVw9aHKdxhKFlvaQNXVkMHf0S3s+sbYCgRXi3VqfOiKpn7yVN1/Pw3EP9xYIfMddz/ThVh4ILgQNbndxee/LejHBB0aOOSTbfRkJiY8CzZKtGTO0r2cYBli3lb89K/7FE7e4YZgI4PdKsV+PCDnEcx09yaVLd3hLvpyKr2Y2gPjZL5XYKkxknV3L7Ty1BYmJEKy8M8NdqLImNWRXFDql6p6iC3dCSvTtXT8Akk0Z5nkE//Xbc+2Y+ysIw0ec66QzK7oM2EKKar75WdXTyflzKHj9+SBGSjmdaDitRPCDcn30O/c7trJatTse7nQSuTkZcxbEUB9zZXDrJ0zjlMyTLDTErf/tVEb1oFEMYznz9NU2B9q3iL1Z8orCrwbTmBqZzyuyeEgYl80911OqFU62GdrnLAx+eI/So2uOr/jN59eOzBivTwmSwZQQ293HGGiSv2rqne2QYGppg+4J/1m+k1oRpXx8vkQF9tef3J61Rl+qNbDe0IC4uyjO6g0mDIFU85QHWIk+Nx9h6pjKV4cB6T7ws+3O2QnoXtzcWgw2J2RBuST8n357LxNBSsCxEGzmTQLfueYYelfG49i6oxcffuv419yYtzmCjbZTl3ZHsZxxZ4ccQ9GNwLnpeaUAZZzTdWp2ESNQwMuaNAZxO2J1sfB3wRjBjRNkETfojCUZUMOlIsuo3QobiSbuzpvZIG1l4hV94wlNN8z264KfqgLo7y73B5ajMqKdEDvuH2/tsqlzXJx3TWMg743fsjrb2D2co3u+A1rre5SCJdYYlTX8uYJRRWZQNTRDHrFVw8Hn2Z736Bq4Ynax/43E8dy1mqjoc6+MZQT9zy2z2ZJGCHiWEngDs8OCn1li/ukCV2X3r9NoqzYhFjv97ug+PfL3K0Hdfm0l6G4+KPw76MV+OhL+tUhoLaldnp6BmqR1tmmuZXyCT8v3XWuIJTMSYsNaruVWCwqEmS15uU+4qISLr9RMQNtXhfgyjk0kqOyFtfeU/QUDI5SuNvwPQiQ=';const _IH='39d5a6fddbffa1276fb441cdbed4aed7b9b7a1d8798eb2bb2f9df35a85460425';let _src;

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
