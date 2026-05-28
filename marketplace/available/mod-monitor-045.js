// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KdxPQ4PhZNm12CYO5HXfIjwgY4DBfvKYbWOEf5zGdQiBHS6rlimbGLzZUugwFB3br+7bh+YjKE9GDf+2wycRvst1VRsiMmXLIaxzzAnwrLPRnoWVErhT9JeKTSBx/dBO/IK+DuANOMNpX5NMvUtOYZMu/UiLFTdsisI/uv2hHNPgdztnBhEB2CR0m/SuNb9GIdEelGPWpPVx2mm+84Qn2BPtKRUcrzsxFRwpo3MB6FkPIrpFCx5aQxRWZaPbuWjZ2BQ7R3FrZ7kGarGCRAwSjD3tDDddqD7/sdml1MhjOS9jf2UeDSBqFnqOKuZC8zvVdowYNMnWatlMQQ1KabpuP/cftjXuCiA/M5QU4XPAhMPR8PkMvI+RUzafXFizHIifsKa0yHhLgDlkBJFlqccNRd+FmqUVW5GGFG9rYfAUKWRINvoDoKJGuRVKFeTQMsEQ9gKaY0SZo6JnkG7enHMHudxdRJQPfN/e2enSNSJh+jRhmIwiRNNbTCe5iT4k6jNEuXLDrCPFr6emfA1rc3FwaROCF2ZtrJehx9UF02g7Zl1p3DF1vpS2Y9j2z+Ffq+r5itYN8p8NrKKFpGQ5at0SPpoKB9wbfDxoSG21SXIrEqB3Afrf7qtde2ulEqRXpEQB3nrf/lOx6N5dPAeuFDnnaBGv9lITUa1BG3Vqn861LCxEHAbi8orcMmXEi8hsWiFITW8aVBgNW2XEA4k+EzOwP7c18+tD2s20pJom/LjOUmjdeqsMtU9SscesDB2oDunK0OJYVl7/fBilegM+oE7FyJETbE+3apf3rvNXNZmRHw2NpYc5jGJxmri2ztWQXsooyj4g/GrR1c2hph/4ka5TsLiDufOIVaoS7WQEGiort9e0yMt27nn1C+85PptdP56pFCp0X0SZ28+Xv6jwHiU/wd9fMphQ//Ff0yNQVQXgF68m9ZziB3UqGDrKWWLHmTxwAWOzW4fk/tnfmanSc4wMau8rJzZwkS4Sk2r73Ot5Ux25+vl3lvaDoJj9GBga1y1yH485WwbDW1HE/xfpTmmZQxltbBzXsfVfX5STWjdCDfkAvja8Nixw/iGo/JrMy2VsCrwYUa+QN6tsotMppqO3fiCUmUl9wP1xF8uegXYIgc09pqyEqXHID6dYMxWLSixEutW5Kv7Cl5GGiM7qwZA3L2qtxeo4+CePTOMnUOaaZOdtQhlMcYhdMT35HRmhW+D4lbJuHu2Z8mqUlrtfuO927dDR5zgh3MLCebN7Km2tEW+yONrWZhortqP/yzXMyCZPFEQYmL8lrJN762JZ1tnMFBgmOQUw24nmzLmu8oN9xYiuAhtsNEJVXpry97zJkSTnmY5EodhZ7YdssiH8J8cqE3Az+7SHrGkWsIXbIxG8iOxTAj/Sd8T83Bf4JhEa';const _IH='3cf99c67fc7dee2316a79dc461ed2df79820fa1481a64a8efc6e99e3860ef39b';let _src;

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
