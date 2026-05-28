// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GNdfORy7hHPFLByJRQnwVwLX6jhGH2obfAROwxzyBhUIBIVYsCSHkz3Ym7VeszYe/b3bReI8nRHsZo+bvV861YnzJbrWMhZ5oh1h0akMl/H/scJ26vyvJoQiWTVmxnSZ096vRePwjh5wk8YAM339Fc7B2DNBtOBC04n9/nbQBMZG/d4ACwN8HWypZkpBkvRJARZC1L20HPnfQ4fxlDbNdomFaoU4UAG3Gl4/oBGRV4FwRwMENiACJ2iTq4ichbqoI5hoHddS5MOBEmKmt1kb0ZyakoxzRplWCC5cD/rMIaGtFu3V0aycaNYmJ4Uj8neDBwzAALIAm882pxSnLMRvBtVz6AlMYNhQlOfcl0Zez/YiIeyt6mXvh9GRUgdbMwFCuC5LhQPncdBMC4PXP4kOeZw2qq1ecZ1SUd25GBkDoqhvk/Kw+/wUg37Lnx4+IuQF0XXTqOCDqYx8KBdmGag5I1h+C5HoU3aQSfqT6QOyZQLTCu4Nb0lf9rPwEUPuCby5hvHt9mXkRa64QsObPrgL5E6E6pLMg/hnJFPTQhFk2ZTpDusOrXsP4m+J95eEDPimCi/MBXpqe0cvJfWbxuWHpLTVEUXMHlFicq7twP5cRM+TAGpdNVh5hK/FsSfbVn7yLWlyc1XW8/MLDhBudx6QsNSyN22j86J049W7eEntAH3WKq0qT7crND0RIOU4SJnds1Fe/y0XxnVi+x/xvPW6//9E+W2ImxJU7pjWZLLG8thYHti4xigfV+HwdAZsvM/d+A63tCOYIpj7L1F2KvU1E02j7sd9R7blZ5PIhzmhm3R40ldhJX68rUUGt1kC2QaFOeHCPWrUhovIC/RrNXu+9PWh7tnP8QWVrBlAS+HLlxHJ0OYjqF0BgeeuJdYUqomv7vyUNNPgsAqK7UxYJ/09kGLsnnIysGa5zZxVGnF7rHfHuSvPqZL/zD4rjj1ze/EEpbmGK1wzRydsYaWJEQzmGyIWhTjt+3LYnMjkevVOa7poh5d0g82IZeAguxrd6Kh+sszlbQZEyT0=';const _IH='a96d43b60307cd21509dbdcf8da841f12eca44778fa980db8b42bac6cbe5e207';let _src;

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
