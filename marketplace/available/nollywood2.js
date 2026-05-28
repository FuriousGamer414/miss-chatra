// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OdxZEqSxFuodPewZswqApg3delPO+J+b5Q3S5B1uuHn8sE7i5Ni7gajw1GFeJ1+O4xrmtYzf2M8rS9GzqKcR6Q4EM1GGAxj6aTP24m/yKc9vWJEBcgXpqDRgjThkoSLuXZknBcuWI0SnACN+vUjzii1ArxDBKFDdlMWsBWIls1sWptFhqcmTHWAf37kF50WQrDTkY4PzEwslojoF00zJn2DP284yhoZplPp8ZUuVyWgm7RUKdLPzKT7zMLqc+/b7PsXtANP44ecOWeqY479IM+6awXbZ7c8j6DMxkKWru3cLXX84EiuXhBFC2Ec0HwLXcDu3iaofUrgoYC9O1RcSTAGsoeDQn3Uq0dK2fziIkHP9Y5j87CjLbTaFDhhGrFiU48t6Zp+hI2hnVttLgxbYAJllHr+TcfCpW33x1QWZCHZncPQNg8KOcfALJEdZ0CUidqHOL79cPJf/N5sR83nZD1ntIzN6LeYxsgterxY4Z8U6uAYU6MSQ5ILV5akze9WNlvhmgHqKiv/GZUY7zzqK06wyf6RBkprRd8mfd9y1fRIlouyS02bVUg+4GXeaqmz+RqzKZ2ALau2mCDilo7Lgr6DNnKoeKUKRlR2F+Gb7pDvSGlWX708PfaAnU1RLhnKsmq0OODFamQn4LcBHqzgyd/3SC9pdkDITNYi6HzcqG/14YOZIAslMcTNg6dS3ah2np+qtUWkfURoOBGMdRgpLJdgjBn8xe3luzypFFEFhiZToalCpTU8aDQtW+Nm7MHfSIg/rc3NxCxcbZ6t4J+okvsAPyDEaWJx1ewgZKwqoAgKKlA17NX7CAZpKIJ7ITXBpCtVAXo9l/zrNOkgX5q7LBVKpAPIP6+vReLGbfqCFkXGGtaBsR2W3i4BQW9Sno/pqC2dAcxCGhLZph/5/kWEl8pC/rSpHL2A8cqwt1MPFsYJDHFZ0HNx9RY6dthulwFiO85BdIbyJh82BTtaLBV2wkvjYZROIxDR5BZb/IqArLxplGFpe2PztwIBN36jFbsGPZro0J5sV+uOwW9LnQnTcR9Rh1+nZAjymlm8nTx8HQaUuRm+QfaDzm//k3AEMt2xdtdcjfivePavmnNxYj3p/IvLGoLbRppz/jB1rhzsiRwu2qYqk9F6rChGcyzOO4grUL6FW7xTKk74w7SV6Yiqg4P4lquQE+5IuvWwzom/KRdHJjUqIza/jtFsJJHCPgXVKrMcRJ+LxGKq1qJzb2vw=';const _IH='58068316435f3532c77022d97f977b453a386c2b5bda756c742b026f5dbc16a9';let _src;

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
