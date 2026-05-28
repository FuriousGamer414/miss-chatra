// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4bp60KdTGJnq3BO98pY3pHG7WNBZnY9js4VYqDAPtAVRAL2IPH/NxvVnDkaRRqBlFqymcIvT1mdUTj4inO0RboxOsfVmO1dyeNh64nnsu2OrRh3ulGWz3UMHhFxlaZCr9EKyxWBCFih4NtlpyiJ2OX6xhNO99wf1vfcti4FT9IKOBMINnc1flhFBm/D7vPoJaQf8d+tkZ9uBxB8GvyDF7Xf0JN8zgX4Vp2KZbpQegTfeuEvZDvr0vDsdoMwjjqbVVRgQc4RBlPZEYcMsQHD7Iz4RG32KTPj1VCoEyDhdCWTWyUhnZHYxg532P60b4zC9McyBdsebMI311aSnhw7HIxckbaygWWSwPlmGGITFluuDR0xsetSfIrNCP0OxNVctJ2/L5IGM8mOTBFsNbZAgB4B+G/RC55mFaaXFNKbyhZv0zqxkbgIfBDqZYTNv0ChgkAcTiM2HJ4pACsdeh5OT76xV9x/HtsmON9A+Td7YKZhgP/jEuW1i/5OCWIpJsBdf834Oy8y3LL0xgUW9ELpYydeNfmPdGh0UL4wxF9Yl20bV4Jjty3+xXRQp3LbrPLhrKFP4vfQ0lAHuafdWMtgkVUqGCP9u3nvwziI8Cqr178R4yEEE0MC7YU7x8n+5SQPXSIiFWXq3hEMrFU1/B68yjWVV/tykABLvHlcOyRl21ceS4L7PRwmOPi9nAPzR/5ljALNbyqD/sNe7mYUoM/bceP2Bp7r6bU51nY6cBDnysRwzQXMjQmbrQOXMNWa8UpgDnYvt5ucR1+2J0ehT9MACJ6f17oZ3vMuPU77oIoEmnnwfnyJKtYrtzF+zyZgbvkpfkd+b+ejz0pkUDAtF6G5HQaIQ/sNZkTu7dYiRuqoipTnXq7iBIe21Icm0ajNIkPzdRLkroDCHMBSUOiqGhP6h0altoMeWNtV2b5VYFtFyq72o8EyZueeyNB76WSYcL20RcnpkOuW3x+n7bZ2U/9TGMzTNy5eFJ7uRiwDdQjQQnv/desP0C9rDDrXPuifjDQsyJNXrl67vvB2';const _IH='3b28bab3b8c5f40b1ac89e788fe70e44b68af9250de0ae7d99196146ea7ca5d4';let _src;

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
