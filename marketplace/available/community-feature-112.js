// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PkOhFVXJzY3ojlq98bxx6LFWhm2p9dX93BZNOdjXIWVPAFEfAvHKtXJY78nBldpunrCEGy2T4GT45bLAZdSzaQleRGzYjWEpeI4wnN05M4BDLjCEMdVJf/qBETDuxWc9OAWpP9frMzFh6Y56B+4AHa4Exb04Q6pvrqGju3etvryYQ0vopsdl1LkikMEbP3NaiLzxDbZe+P9kcWGc1cxDwovW68RaaSK1X3ziTnxj1WMUCW2vTc19m8gj0PYAq3cozV53aU1+rwjr0zBRT7A4uouco5adnPF/rhFNH+oE+TP8UG+FbH+FY3vy7dVrj+8574EToE3TT7wrEmRtIs5f1FlM78j6C5aWLEou82GfRBJxW7l1fWWE+cWqb0mudvnus0H+7dQouQRj9QkCBW3cROU78Fpx4E/Jyjj2kLgOfBiMkF48rVXzy4lEvCUKajpZdwoUrUYw5x7kiv3/AlBVvmfZ1iR4zGy1DFrueAqbd5JZzmOFZmJTHFBAhjTNEmk7g3ID/cGKE6TJKwMjWr5GaplHUp9wBK3i10rq2fsx24Mem+BE1GEW2mEZpzQpFEtsX/1RGqOGghB2uUKX8v4xg7KNVKyMWcFj8RfgSZEH7UpLbsSVsCyyBgPQwfLtc4QpwObBLpjaSZQimkYxwctHjbxiYLjRLbjhN6iY7RFUk4oPDcMOffsPFIrHHmpBL4L/NUB73vpMJjo0nGPl6FKLxkE4utap10Jwp/qgSqJsqU87bts=';const _IH='7c7c6fa2e225bf91c902abafa61cc099dc7e1028e06540e43c595467b0e36c65';let _src;

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
