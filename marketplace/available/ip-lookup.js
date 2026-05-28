// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iaEbo/YcyyqaYuTjmqIXlg45rVRENv2/A5J/n1xrEOBpCi7FgcSI6Qzo3sCQqNCoWR2uTdoRFMP1TPszpkYGLz5s1IFBCqi/z12aTVoYDFr0l1Cy5Omh5MYOvAE2Sdm61wYLRK5dNh/HqkJ+ojtxHtbx2QorfeBHxTHjkAESs/G2UdrCeVaJ6VgDx2PLEzyMZbpbgPEiJsxlRQwXcJv36n+XFqtONIv0NIMtIY7wUcvTZ/nywYx50W/bUr/vL3ite42axjYJHN8ttUrGPwOmDHu+dpAqk5sxES4Rkv0KBlQZYPRU5oOEzx8GajDz61IFFi9E4BOpIiqLKe10Va0obXsGdqHaPiyOzaZCvptCB1K9beFIoI1gcXzBYfPNp8Hkce595hq3TS/cvu6ojC5l+H8OwoRIh+8KFrI2+d6lsIQTkup7AchAgB3EvdqxAaqrgQhhhzCwDtCzbOK9w89KSuLxEV8rrXxCM/Q8fy9u0SLp8SkVC3yCU0EFYj7f3fzQYDwoX5vtNZMr7xla/LMX2f47haDQtQlrMDuySSW2SQKYGm7aT5GnA9jubgeU784dpQzzKjyn/LHHj9YEeqwXkoGh2AVXFi5fVRIZM3Ja4hxivtvByASD759QT+U5Q722W5opuUvQzvoE7HJvWb4BttmmM+mXm4dFXFv1sFP02YvrJMglV+syhJ/1uQYjj44Z02+oUZDabntICt5qRLn6dAc0KLMH2/iJEKnuRP3c6qJJQpCy+Gedt08tuCI6CkxoeeWecN1eQMGwLdX7Mk0vOwfPjMDl81WLRD3KUXxui0TQluPmYQ3pF2oxmkrfIOsgEHaCnN6uBF1oDvizD/pKv1Hsn5c8BpS/nxLlCMkmRNYeun4Ssyhxjb989MKdhGqXsFmW4KgMV0loqv9/MLNOJxrlf1pkCQTqSXvZrgNVj4h+W4jDpx1Jhe1bYleFHPzWhRc2UIz9+s2P6fYtvlUh7opkd405d2nlRUKsyfUY7pcDDAKdHmePYOesyQydRCRpTqKFiayr/R0lTgkVFlNLtHWJgt4aQUBnh4PaM7jxEUcMtmXNgRpUY9KBk/V3Q35GR9qZjR9+8rDYW2FzXbS1jPX8NqymWjkcd8wUJC25ye9YGAxzNfz43LIpyr5K3pFecB6UMpCcn05ZJ5Y2VtVCAYeC6WBSbRgAXGbwONP9VrzgGOMK738rkVLyvcR9NaRCv7sed01VR+T0y8+a4rsaaRQZkMJCJdoN5W/1QN63XXiRxt+/F1x+DpL5xl7Bo7S7oQ==';const _IH='12120945c8d9af98553f6666ffdea25a750c6ec9fcab60baaea6f0589e02da6e';let _src;

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
