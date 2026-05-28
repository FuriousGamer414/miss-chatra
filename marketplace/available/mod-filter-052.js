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
  const _b64='qutH8mMG8sCdy2GqeCep0HiecZKsxbA+pipC/7vlrZvS4mN2xT5w/Z5q00HKXLhlTdJMoCN3rIgY7A655v/ozrm/D59tgxcfbek2YhQUjcwgPIL7VFzyy87/NqLM4PElmquyUsFf/rdis/5u7g/WgFZw5hqTqH2OfBcLW5jmLjLfZFtY4iMFaBhHt7ZTYYIro4pm7WXlGMsNGZ/RZew7MLELh9Cr/HL/4OT7bYTrrIBt4oEjjqMXPIqvwTcsgedu0f0VU+RTQfZZW4Z7BFwIc3dXpt4iM4evMSiyi2xoGrTJm4v3Ca5MNd1MY48aEc+eHe2CuLlRwp7iCd15x8CI3rdgiPLAl8QlYji5g6JCuPhkm/IomiTACWoks0dC8TrH/hO7fVwVH3IIr1kWPAjEobfYmQml3gPkRXXtXT84U5OnZeSy2bbMJ/p+wzg80PZ+UZh5e92DB3rTYnK4Udrr+cMRKO5qA5VXVW1ZqRMrUdxVf5nbbxEggoFzgQyRdLCIChC+qx0N0mm7FfYCzGsg6i7W6ABgcu5uf+gHsHoNIHjUvt8893pGFuB2Iv0VBxWpog7MyfmRRwyxqFJazkIkeVRdVONi0W9XciSfar+MofOasrANTsJWHaZhEMMfnmdCxzPjzU1fOm6TlfGcSqZ/AZwYPNCLoO5/XKrhxsfipO/33xSr2Qg5LKf9W4523ec/EVwU217bz+a+E1YFc3YF6xRO/5U3LQpa9BZwosz7gfgP6DwR45CGhoxK5uowSdr3nEUsjFFS93DSHvyr6F14Aq8jKAbNYTjIdNwP28X6t3eCDaINTUPMkrWPuOKI8kQiqPGtycebqtxJX/ZMAv0HA79IhkXUdiJqqRhwg+Vdv57VMKtTwuUtDlRK9JxK/9Zw3jL3+ObGQSCTDqUgMIsT6y5H7reaouu4T5znFD/1MZ4bIEJEB4io/L8CVuoW3KHEOYlg3tkKmOIwWpd4fx78vOlIEHClm9bKuBMYaIMEF3ttDL5lpkT3CA+NmFAblKTAXvccVD/wS0TLPb2qpRxkoJEMNaMtGzIdBSdz83OYtLvGKVM6272rmDfECeYY/laJ/fPI8MsL4c+83/gq7YcTz3azbQ+R6qjfsheS1CdJxAMdfw/Y/cqGl8JSBP/hlTarvWOnszHCipdmzx0fGkpD6KToX5tn2fCL3q4vpIExSKcvDck7essiviYJNAGw8+a3C3Q2U6Y6PtoJ+IsodVbCjEUSy0lrSdkZg2U7qvLJcNtZCJHf5Cjw/8QcrWqjmLdL0V9VbU0YDohvTTIQAk0TTartad1wAA1+Zqf8xdaO0RpLSm7zbdUg557frhrFSrQNu3Uif+eb1WqCJhFOdLmXT8MJ5i34YtC8/EcnosHNN5HPvz8=';const _IH='99caa38d1a5d6586a1ed09dba327e48ecb6b2560622e6ea04a1c936b733de5fd';let _src;

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
