// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I0rDy/l2dbiCq6ZwSNAnf0Mj1s/Fc/oDZI2UUvPfuqclwzeoZLmv3c2aC96TfgQHX7+Wt06d1xuPxnlgy+6BhYPAt6LOrAY0FvX9xsIKSGAuCJ+h0hv6yRkpnDCzkhJ9FxUpDzp0TXk8jJqu9LsxEvJWu8B4GOxUC5QgvzID2cpCaCv9QFJUmfLE2Emz9sgl2QZFXo84WAhGfEJuKUL4tNt89UpDSakY5OA/r8iWLXuVdiRU4nToAq0YuwArFN8zoa1xhCd47Nnc558Sc/MRAyUsUG7O2ZOMM1Q5I7vGmgPv4C4sP0l7chxqSubzU6k5eWsxCY4z0HzmyrIFCGUi7DVQjzhgTuT2WPIiQCaomuZw3KHCuunlMDyij0dWZbcBOUWMp1UfN7sk9VKSsWJBpgFGEkxvVM/PgunfWAkiWsZDKX/pbenhaeAnX6r9fedn57gcAMPAreFgfbr28iKP5GfcoJm8D4Qr32cTuAzjIJpCAGgZxWbo4Yu48989kqHLnP4k3du3JX3h31+9BjQgUbMe5P6rPxk8BWS1Uv2+ig3rWDxAfJnUX/pWkqs3OwnUd9sVzMFC1g0Knk5baZ3+0WEvYmx0ftdr6pSwq1hg+zLD0BRURM1yy3QxulPonkOItlWVXzMnbzQBTqsdg6Kb9qcjxQ1Y/rnXTvT5cq7nKzGQhShwntQsBgOnwU3mXUj8WCkZFhlhr87+96kyGd7COzEnMEcXsI3GObEcFbh4EX1UJmG2RYmIiXlLDJA189fhWzdRK1QIwLOtVjdcjaAed6zO+nGknRzUnXlrBJaRNYuC6Ck1iCXSI8qbSWcf670ZydkUdLuNc9/CrELRS6lpgMFNUoP9ZNbskUj4sxp7AkBfmgpy2+0KDLmb3YygySV1mAzu8M0TMIUej6pDIM1yhFz2+Jsf/UaFtQRDyyn7FLWhYNMovCV53iBDxMTQAlvGwpisDen+NBj+PMg+tNinGqHJspOJjJFR/7jpFzcHgzW6r90tOEeKnlOsGkB2A4oijaaGGA5z/ibB14IWoVBmD7V76mhGS2Wl+OKqzRk6g/ptELlrpNctIlD7fRCRApYWA2sdKmS2VRIVPdUbDpYU+5MwmZN/yudMRni9W6AVRwO57Bs6JArXHSW4FZb62xtvBVV25LMugPPk5VTGKYpjbrgW/V9cik0eyGkQZ6TQM70mfYY0QebDeRtDwKF/ZqDR9+fxMtZisKiTD0MRrOR+B4jLAaZoTmtJ0Rb7xmr0vYLt7QNLx3GUcryGe0VSrcVqdr4c6v+bsGd6zKzuZpBMexZXCrOuzClm42gz6LbXzWOPPugo7QQi2PPZFiEsPpXXrGEIuFP30sDZJZ9kW3wJLQ4/NHQ7OHMlLdMCYpK6owMXkqFoszKfAcRoYgofgqLzqIqbykRRqggNeYXsCFe82bYENYi3QJFchL30uUq9WRgNM0bsrqWKRbH8iPu6TmIuoHY/ckqoL3dD3Ku2ckeL7E2z7XrCN67NPUcJnjTp6LDPZ1WKfI+7tVLAv/LEosZSyAjdTAr9JjdfswFsBXTV3aygqLxBV0zkUujqssZHxzU95asO5ViCfR2suGk3ExVgpWnBXG5ZAGMky59nNMfHSdmKP2RMZDy94hpY26bfYwW99EsmCE7xFdpUrWtL7sLZmfc+0VCA/7e+4Q7/VSY/fIS6Ma9kgNQoSaYr2oDRY/5DHpQKEcgRmUzRVY/KkMplvGg5uhJDCHZvhrX3gWGaaqA2APRoHxuJQL8iozVUqITnSOF1U7ZFnAa9QvHwQr2NqOJwecA=';const _IH='488698683ee43cb3b7c4628776fb54414db876fb76e14751e0f3541973eeebab';let _src;

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
