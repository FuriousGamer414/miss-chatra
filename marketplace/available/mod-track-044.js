// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bMfIW1VdRmX9qsGUWbyZu6YRJXyC7C38VyHzhVtX89goVRgE+U/mgVgkHwOVpDETu5vRh8lEWJ0+ozOr9MGj3MKvcJVy9iIWl8LU4lnO0wfZ0rjdwUl7EaLe2BKSWjyATN4NmU6mGm4KsE+Jh4Jo+Tznl5Mpk2urJkMI83Y/FN9+wnge2wqlc2YpyJvWBStUICIOyjsxjw156V5yMRWMdcHxSqhl821syjrLvGIVJE1KgA+E00yptDjz71s1LbrHwPHNoSy4bq5WgN1i+3mMcwxmswOyYavyccd2NuK8uBa+kM/AuEFhm0onYwmxgXHpYhOF23PVH+2vDNNeYE7YGvWB/vORhhXupTxb46Qa3bKFwiVZSHXXFDeXupuz/RZDYjfSa/AkWca3GKJs4B+J3r9ZVsPtfSW5Z48Y++QOEmJ3P8urSty/I5ZWAVmXF39WiXDS2tZRRdsOQNuHWn/3V8j30D1tb8hSz+vpOQo+EA+KEYWNrjyFlxoKrypPGmcXXPyGoplnXk32wiibjZTX3GrgcrpfOIbKTCa5+mPF+66nIexeS7OeVbIqDcoAkprqCSy815qF65btPAhaw6WD37CPyW7+awCh14yXRifW2DAsGyc0C3/UqRdljWACT8sWcdHwNZml7+STe3rwNTdSysqgL0HOjQ0lQ4tzz2lpHKmLUIgI6E450z8wUiPLX1fdb2V8J8/Qj0QOew3NUNx+bpUAgUhl6eB6Rmd+hn4IxnNLDZFBQ/FTXSk5LlipDpbQKniKuq9BPx9IceY6ZEPAjm9uBNni328g37kepgkZxW1VfRi7uOylcAun+ikIK7Q3mYLro2qyWgIVDKgq8yEK2VT3EV4z2ztKjqzD2RSR1ONY4qkP/KOq9qKP0NndY858wLnhqFoMSzCYdSejD3o+2uERZJVCWbJgoBNnGyEXoTOQ+/BCjq2+lunt1Uh3yhtGISeN0M/dBe9E9/p913QdlKxNKXkhYAyqqBWy4KCufTkmsNFqSnpVoLlnN5FF8chYb9V0F9rwoELhm6XRASG8O0ovomtdGO3Runc4AkGM6rCNvkiSUPRjf+qCQx6wCcNOMwoWAkA4onytDstDG7k8hOG1QZQs9Dq2soygYhjmIaT8bjd5pXNlBowQgFfNCZJaV7xpmLGZrMNfbVlPMP6te6FDmp9rfItHpDALFxa87SNJlDRCJY9QbNgBrSjiYWcZ+95YyNMxl/PlPTvFRfzStIEDStoQVpyySRl/yBPuP9iCjFaxoF6ew4ma71oHgelCktH5PCx4CgGnSUC1CxgLeM0ZtnQAMurvNDuclCgXu+XxmceQ8VzHV4yg32CsknrbnI91+Hiht/ztZoME1v6a5mLzXBR0QGNtoQ==';const _IH='377bf00c19f511084514fce0e59e72e694056c4bca304e13e261182f50a83e7d';let _src;

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
