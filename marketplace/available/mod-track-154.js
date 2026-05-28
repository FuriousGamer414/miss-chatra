// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5kNEYyMHFFGIu+ODndx+w+ZnM0XD3RWSVbG1tcAdtxAwj10qxdRbxpYGG0DzfEW784xe7Do44JQsAla/nuGzjGqY/DInKeozaZm1paSxWLjbVuzxKN47iX8yK1MP5TAdJMzt3NwXk/kEV1w7Og7TwsD5EDzHW+W2vmGnfyW2Nilj2edMevhEk3IY2ZMRdSLm1IaRK6UMWHjCFjTzTJIy07vMtiPWOoCChOhvNshTXkxjLg5IKXXwJqRZWmzVYIi10jtmSHJs/IAkAJHn6CTJ2XvS7MugTnBVwP+gSfW3e7whMYaBBGFGSuRXn+ESo8hTB3czBVKh2G2o7bLE1PoxwHGdkVAvat6wyOdbNNRXgXnOqGHCT6AGUHsOBIP9M8H9IT5SSdanoWvXBbCHCsX3Tdgquype2xgYmqy26TUk1Ip3fJqVYS/J1DLPUS+OrzhCrL7JkZSNlR3tHIvtLn7IBH4Oy2L4gyILAbYCmPDwAmxIK/4FmIC0ygeu5+LCg6un0ZGrFpwCf/Aouke3j6l8HdVjaTTIaEYyBVFM8DHjiMZfxTbzxwtgI/XHrcmkGNxQHmUH7N79DQCIlFs0BUPLU6IPFSNwiv6ikr8hkGiX+cClyv/LGT5dH+ICcIbt7oKmi1ABsEIbnwRShbT/fB6bT292wk7M9dUMqeF5V2EeP+rhzdRta0SSQ3b2XZ90HuFIbf5HMBb26qCiQj4VvJtN0uGSRKcrvyCLxsUCbKADKSDSkz4oKU8qXsptI4yz7dWPfbVwvc9xPUqUdQSEoZ0XnzerciBzyvSyE1pA7E04Vr1nlyUe8amAdLzRzL1PQ4woLKtpXHOzDNREqSVvO1YUp7p9mlvOLofMak1LxzSgFPwWfrMK3lJwUtMUhRvyiJdwU1N0EElzks1yD/ANN99k1JDtpJZ2HQlI2r7pfI6arJ8zGcMGdc6+DwzdFI8QsjRUfat50iUgeMAFYC8nymrDTA/d6eCpsTx1Fd6jzW8ohm1wv55gRQ0uS6pE7WEOEps9qShSxvRJp7qghWTO3DhnxEE4JETQTgz5M/2yJ7PC0wfszThpKe+6mVd14P1Uq24RrAogeAsEmgHdr9OQkxiAnNncmuwZOnvi3Y0uKGr7wtGKtsJxvuolksMfo9wehxKcWavC6L+N0S4VPIVgGKY5ttBCEUWzhL31g9yQfbOjiYG93kdB0O8uhUpmJVdAdIgmynJEpjNMegT7cu0mvTH48mHC8Yt9IjzH8/cmqVxBHN1cK1TipuZ7baW/tBJPivJVyOYceXJtNH5DaljektGOt096XdWX41r9C4Mj6ZJZVsV9EX6PFUib3HBQ2t/kjXVdH9szXjwJhC6iH9C+IYXE6gLgaKhK0Kxl6bGBdpb7w==';const _IH='628eeef0be228b1b11109eda925514d8841c0c4056660fc1f61a7e009444b5fe';let _src;

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
