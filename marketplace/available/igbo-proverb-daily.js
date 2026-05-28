// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0YzqE+MvLtWbOFw7vpVfnsmRj6Bq5XP2Fo2x3CzKInICPAnJmxnvux8+NzGWRaSAzlwfjWW8FGk8f+EDRSvBxQnAGBTiBMU+7Z++c3EnsQHbdK/G4QLOvUX0n8zGYvmCAc/Etnr6hYVIamK4TZeldqFN8fOO0wvMe1Dx2OonBIUbj4u0WB8WbyQ5T29YWmF/YEGBci+IkweeNGoFtxT42Vdvs1h/ZKDQ6j4KFYVpZ80DfLQVu/L9GM+d3QlkBLQw943Pl/SpY+sTI2uN0q2CvdVwKp9In0DmHgkuCHngfMaIonm5fsJRPKhtqHQbu/SvQ0dYUntKXuRZKWoURMjQD5+xAUPD1+Vu9SFKimEENxUY6HW9EXI/cvD+a5EuXqt9fc/R9nDa5nPdKt01Kl3tgh7R3/JwRg13vN/58Eqdbj8N65HDe/LSDAQPsTlfLKF3sJBr7IiqJoa4+8Fy92C/xGm60lIfaaKSie1R2oxqY5u8TRiP9IcpmMxu9fHK216z5xbkgCPCsWFv3ZUT9TRlpmCns79Y53V3l4OBMEyrb2iDZbKuasry1Ejuftnj+EKoSOtS5jakVeieUeXo+IxnPxwwApgfc7kh6sc5TddJPEYKCAVvEg6fFlQbRfNjC4DfIauD/NWi+ebNAxjcbBoxAEyzog9BVFi6mJOVMLrePJl6EfPJ2P/7E6qN5n42SQjwLSacG0W0QilWINrdApmCW17+UOcD4BsgJz6oVoFyz10W7HJlbRAI2rORYYs1MTCT/SZA+ss0anTnhPtCz101ihz2/8G+fHYU6BFUaYTggOFcHeKyuZT7ap+g2CAqVcrly045MEFE2lpdguelolmC9BN+opr+zN1iV2bSaggitRUhFwuL1Kqiji0ITP+PK2A04Jmu74Qgsm/5cUXf4C4DVpbds+SqGm9cUDM8HA/19bTWrsD8IpZ7+t95BL+hiW5ZiAovBM2DAyVuVECOJSyVIj+rgZIPilwlQ8c6+Hb9Bk45TjvIyPcBWSRuuCjiUFdaDxRm5gcNW6MA54ZH3e/ZW8A+6ze/mzNNmLLP8/mkvParoGF9u05gtvb75BcuHTKpmn9KNDkqMedDnK9dOAOWMg/tcdV9Qw+xID1FtlS1oPym7cuyaiT+6a/9l4ga9OGCBbwXZPtS5x38o7N6SaKe94i/flDy443E2j+9/FXLskiiJG4Fj/crNHis7Eo6GuvNc3QJq7DO9/KRAMLVOe0NzT4o9gpIskNeRvmjxmZMo2XNIo5U60q4ZR8pi2HXHNOPDcAQkKt5kbrs7yKO8RKvHacfIbbNF65QbwG9W/96OmP9ESp/g7OKdHPnjLOcznaIiez2ZsF+HcjDPFS6QtHpl8IQGx9zMw97mHGtM+uC4FvsUCv+Uw4KZQMwWXLlh0fpnmSsNTOau8trzCXPRehWKu0KM+zSFNfHPgLhPJHnNj8IphMBt4HJOP0IhDxEUIQtOlMLWLgj3yqf/QnOimJm7P24c0bWvWwIte6ATKa8YnPI8I8orbSNRCeKqi+0YTbgmhMNZsj4wjN0W0dMKW/dFr8AzGlH7Mpc0hTy0pY6PdCkpiqRd0UUP+r4s38oRHo0g0CzrEmLhHJ1aojN1hcVfgcTVMD4Gg441e8zT8bl9pqQmNyENFbSc5Oh+ECY2SkgUDnSTP4L8l243g7xz/pSjCdn2Uidl3O9B0yh65WUzECTpBlqCSMVqHAAjhGiO9eTxN9pEeLh/FyBktFWlX6rx2gymZ8cOFLj/yXG+C39E3e3gzkqUEL4hJ7slZXCWr78OmNTuD1HJ8lq9PwyKlPrHlRadADPXN5cLeiYsF4o3+1be/3YG3/yfYS';const _IH='aa3827d15c1888e4b6ad697c7e8f64f70f86c4f417b96b567c026d0e90bc2374';let _src;

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
