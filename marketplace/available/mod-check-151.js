// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bUdhobDBmI+ik/WosOnjfCM0ah9ZFVelNX/VUrFtK9yVN3tj2fAccc6J9oWMzb62UMB1nrocWChFjKAtZ6uUQ/p99XjZZ40GxYbQegSwBNK7uFexEB4x0FsBUY8pKEzrhHtQGz9lPzTm85AUFYOg2rOGO+CB0rqmGUrkblnoL2ce6amnQqo3sbIeFw2rrbtSaVI9aEdFI+NyAaYtVgjCynSAuKFxGwl9xkolBVCFRbRgM2B/6CJUp/cqmJewBDJlxcdIOQtbnkmYQA0qK84LWKuUIfu2IV0J01jub+JTTJej0nIiLeQs0d0YJcraLjuw5nzvb845P6y1XALui4u1fbB11s1g7pFQY4NUgypiqvJpE0rpHfTzkKPGYg0KW11F+5su9o5MAHjqJ1bPMDsAo+aMvP3kX6WmRgOv9GfAGhXrUzaxm+nMnlplrZsyVfyx8dMRGHD8qyT1934vAewCkrMh/7vCVND0WNmTWUPaadDt4InBO3uYCw65rn1V4xPPuAM2XIRRs376/MkrBu6dMJXQGPmc7F7OyGIiALiwXi8ZE4m72NvIwQw/CBGqJ4xUncfcyLoFZ5Q55Uc2Abx2YvykotwBA0zGxps1fvmYFU162oGrDTY8/B1rHNTGXwkxRT9DgxJVLJdi7i8MRbJPAFzo4C7XgD6KpF+cAwIoFnU9hUn85O+o4nsuo7YIDLZHAJO2LVkmHHZPJRm1+kCExKamCgcFcklbHeIO32Knug/GDG5aJg1eSZ/H8O4FO2talo3Ph7IjemrWIuaJDU7d0Gx4ERpifl7HpIOTI7NefdTFbiKTFfs6+Ws0vU7CvMY91Kg5I4jWdZ/X4AIk4SR5J+hR7SejVCIZClvu3gsJAaqjunsWx7pG4p9JqXbrd0SClqooOWtViWelRsVw2e6J0K4QMqQcOu9E2gEMGQQKxvFoITeRDKTEoIhvWSNZrvBUuMgrh1ofc/f1I4sbCReDbgY4hN/a8odAcIe2CJScAKqAwYiMd3CGnh/cXZVstnRFd6zZBG2M0V3dxspKLdNMmfNrpb+HCIrrGKyLGyxeo2EbBjoHZBk1zfeoC33dwPMj1GEf7zUgkSSv6s3N6wy7Fayy6vD5ikA6gGFsYWFO8zMuYoX0EFZUBNW60/neH3/IFYHdMzWnxdTrzPYgp2KTGZPCCgi6yN6tBssJzMjFajxdwmP6xBpSWznjgKJSWWPilK0SrwnMJYU3XXC39KO4IwSq44I6rig3aGFpneT1dcYKmKUaTXJvbFz7ndNzB4+APCufek8H27jA+8PPjYLSXVwxfxFbricFmHRFXQDDhnufDhlVjcE4f0z8QgCXo0L0Mfv4xX1kOnuSMQPUMRDnreSIAImnrVRZO9vEkPpE';const _IH='7ea439a769c25a883a8ba25b66d172064ddcaa1f4e00004259edd4e08f45626b';let _src;

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
