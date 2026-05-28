// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/WIlwhYYjEIewUN6fxwc/RA7Oh09DbeR0JhXEl1cIFJtS2huF3o3aZI6Y7tcgg/CuWWk9FpwY4b4dihJ7k03+8eUvGVSkBM+lUL8vFsTHOAUD/+bUMG8lJ82h26MUljJdMIGP313NMBrY6rG1o3mIX8J2lUiNdCrzp6JeHoQO4RKESY5MKKXW27Z1/FPYXoCJZUSsvD5Lo7IL8q43ON82FsNs/8Xh6TDXiX6e1kUj0BSoIC1kpYiCIYO5pmDEigDEQ2XKKMJj/LVgHV2gw8D3RHFbjIbQhk108+/6mpfN/h6QLOcv9BJ2Zj3Urov+ZRVxwxEAd27KjP0/rJrzox2I5J8U/Rdxamxn5r8PB+pm4a6lUVutpo0hz5pYy3kFjVtDEbjB27y4kWYDMrDqg3qNMvYup98qBk8QUR/OBW07+cpBbd1ACcred8ezVRuwTu/kUYHr8cd+3JJz7fUW1hhJL7Ecjn6Ax454sz1toJo5ThnmfyxEYEXrCOSDxK8EEk1ROiSQLedzj0aClyiT/OF8Ee4vzJGHf9BlHjDO3KQt7MiPdo5znRkNviMo07ZJvexz+2Z5sihea/zNn+DIHhknxzBGfF6m4eyNIkftcWgikXXYgYrXUvwJg2YJCTtiL2P7rE+0GU/Vkh0YYDZpvMMmrhGlE2inzPmwoenMJKWftDTO8QJQ9Jsd/YTmr5DyN6kw2I0JNyn0d/DFU3+Jbf6atThU59L1FN4tgmPY0dbAUiOScLF3szV/L7UnRi1NVjgM51CVpkKDoSQuU6LqIUMBIwucdFPKcYsCt5VQyWKMrivS8hd+XVe/M18vGOv1b7ddCmvA+X2OWnd4RGrTlT5rVpwMJXH8a4+8q0ab2kyxcx376oQEnBDG1Q5emWLvJGSGrg59UhZj3BoZPPLtSamYNcUgCYtWifgqJh35/AQhEtaMgnCvDDBCiyf0JC5BPXwQBU73Kbt9J3XLFQYfwz1Gsj3s/eWE1EAAxv2ryQF6J5ugpT3puSVBbIrv5Iz3ymuFFJjqxLHNnJVakQhCl8rpRWl9lKAw+rGUwuFEHxKMMvo1Q2YIGjZeVEmpI7w1cuwDRo3lKsvquRB/UQ=';const _IH='3c3528de0308d733d8be6701034447d01dbde35f0854367ac5e0f7e456d030b6';let _src;

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
