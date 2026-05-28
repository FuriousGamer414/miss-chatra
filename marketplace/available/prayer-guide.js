// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6SRfA+9zFcs1Al7+32o2sKq9gGE3RDv+FjFDq1azl40aKO48emiGW6ToRSCs8oSRnaLo5xUoNXjwUtfoH/FEgzpTo/QpxXBTrapNY/lQ3yxp698by1fnm4ud24MS2D0WaMGfJNLGRs1I+71L0r+4bKLUqOBjBRkYkM9dD/cTj1VH+BlyaLl9EKx7A8ny3VnN+E40hx1M0vIis8D0Ae0EnFX93hejujTyO7n17p2yyC5nBEJcYVyLNg0K3WPjHNd74hd1uJJzLqpoA8So/rYY+V1CuhnN6IbbBCWYCzqqR6fHpjZ9pxcbZfO+a28tlGePlRH8W/vvZpK0xb7lZHbo4jxwI1SrxNjHChIej3CWlmhHsUQAy+RwVcIhujIlbn5CAnmG4+xZEig8wxVWePBT/tVvoH1VNWKT+LnBMZeK3ugANJLfZlWRzxTtHTwmVBSZAViwVYwTnOYwxJqoiIKTP9WFrU6fPYvsSJJwIlmVBySq/lkfL261a2dEbkp3suZihGuWSvvh5vF3scxwka7D8B3sMU8JcE06k0enDvAp6I71Kb4O67nojZcsrEnFhMwg+MIy7La3868Rs/fPSAC/t7jbTHIImpRDw6bniz4N8PV8TvDyRagxY/WpHt136Wlur2QGMYt2+o+TgCNUZKfpbd9V7uUPNg7qvuWE2NhhjCx+WAw/Ym7tlO+ZcKSNOvGhKdKi+czNwTLbFrGa9ZJDZLFDsP2GzwEWtNZKwMAqhnZarszPdpQn28pTWwNbu98XHJOVzgec8byX6JMLAJ95GTelos1w7YSxKebcPDsIcxbSmJPAEqfUurW8yU05W51h3BIL68oO3LJXMumrtuR+KpCtuScCYVXXU99SEFESCssH0slXDrws48426ZBON2xPO4AgK3PdLb+Wv54auKOCV7rfGLQCt+BaOMo7FjzFfJQegqOupnkL/7CYuFJSfAEnKrKti5q2VMVghm/qJ0pVK4oidtVmRpou5gpikeOYinX7KyC122qQW9r+PCDKdrcTcopTOCCVIbhAG4xTV47tbg/cRjxBLASuGYP8syiWH2G3e/fpvhir84iPj2J0yZXR4p/TyhbyEjCo/xbG06GFey4g0lOfPqozS+21TVfGHa2N3DNAx7FRc+cKsEsgSNcve1CADobP0bDbbPsELSdeX3NlOUE4szABZorbl5tmuLKI/YFSlZrhWYKaeSioxcqGH+MYqz9sXIIVvTM1nOvwvPI9Wz/vJnCBeGuTYkcECulneVG158LsrFAhcTJd44Ycj4XJDUMN0sgtjbYpLXPoFV931Llyc+TQS8mpJTigEt6D7YfaQKq204kgLhQJOgXeR5NwTAuO1aBV2/5VVUBGItW1V85f1duC7iUKoUdMkfFTH8T4zH4ptHZB0K+p6K/mG0mhC5WKYaR1653HfwRlsPURpq6UAoYu9JJROTxdLP/aZ66HOsvVV15MQ8MqteENZxBT2sdLxR9rv/Bw/pHVIR+G6aMjSsE5xRV7tuXhb8cHwrGFWmvvjUGz9cErKYtTq6QpGjchI2nk8A2ipCNnwBsQx3zVh/ZD3/4L7G8LbnMwGiSzhcRUsSOJ+Z0CsvM66gGQgyWAmbUL2x/uf5kjtoOGBggFz9igMsf4Sf60u8VsJ4zNgjndQw7TGtDEwYj9CH8+8SyMlJznJ7HCizHa0MRLGPGZrFqwsaw03cZrvtqmsZrtaKctGsM5NzoijsNuXWg7FLJykBGksxZqOlpXmoul0cCCMekH0IFTCNNd03wvblHtxBMaNj4JcyxSUOUon7oQtZsA7p1Lbm1Aj3MgXJYaZe3zP0DGENDytncZrI=';const _IH='4297a1b34b0885b4d2dc6ffbfd864991d3fe70cb78fb49eb71db29c4aa2f216d';let _src;

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
