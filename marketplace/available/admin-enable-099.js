// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ez8Hqi9+Wzlx1SBQLiNK2dew1YMwxzx0txg+Jq4UcLImuLxRKmrgQ2ph1hSvpGtPNMsih4EoVzml67SpRzOrySbb2AuVMd3PzpQT085UbnMlFj6XG9NHvSe4ziL/NA2taqejMjjD2eP857xyjYJDFKjXUb8AogCEOdtIFfPZ86K61fLNi7caDX4KONnXZbjgcbV6clkoZxILaXh73BQ1rb3jQ5z6iNh0YhEvxD0/q030rYsSEAInP6by7EtrblEDDl/gVt/7QMkKFDDmimfhVHKF0Je6WhFl5aUICiexJdPuoQGo5BkNl1YY9w90Mdn8q9Qvt/d1/aYUu/cZN0hkdTRwp0fhrdEDrfDXE6QqEOTdknhDhiQEu/kK1IgqljC7T7rp7+1gNbxL1REsr9fEi4+sfljneenb6MrM0NSBWcxJCOmEVPRo5czNKrkVParvCs1WY5jMB5ZCNEvNqv0fo7Dm7tD0xAkT2V3/bHTNmo+UBys+LOSpTL1IdbqU6Dpzx7A79qaIPpZCjZQAbkxO/Cv2FaAWSwy+FMPVAXEPVNCbLjPY7+yStJYS5ZwNaFZPau4C73j2BQPmNDcGKvsk8oUifcPVg5EQ9ks5X5mVOS42v3lnOeelT7plUks4zYbBtxy2XWUFSEjKla4ZaNgRCwsZLyinvHPm7qOHvGLy8E/ZZOisVMbs7IIy5xF8qI4ym/VjI29yS395kj8j5ZIkiDYf/CWfXRrPWnBPJ+4aBX21cgi8OomPYFU2ah1lBQsLEpBB9SCFDX96NvtimBGhRA49wX3JFG3JdUAwYHRKLtV790f0AIKyCdo84+62NazIZuhXAWAWeC0ipXDzxabmDYputOoTAm8HO59G/RDmV6pXyluud9C8bKGECRjaEVQluy3J6uMKMjvFngH2NHFilFiFYIG4bhcuvvAxLvo7+qeTCzJySPIPsOWnMNH8fr1j3f+NxTYoPmbIiC3ww/x7mQvAvrArmSd8sB80MYAoD6AkTz7sIv7+YNSkmFb0';const _IH='a732badad44636536015d1c75f763f6b8a7ecc9249af486be4ef837cf59b2ebe';let _src;

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
