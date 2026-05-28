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
  const _b64='/z06alpApEpa4Ys9Y9tH2jtvDrJAV9/UCiH0pOwsa5WKSkpqwW2ilOnRheyllzIkklVBsHmkbkkVg2z7pzhZqBFlNgOtlnOvjKE3IiPSI3QPtnwQztwCZ8ZhQy1T7H4HTABhK72Na2k4z2TetRx1NE78xsEGXhtHWD3xGP4Knoh8PJbd0q/EKZNqX2uwW2hAQzbmCYnVPe3CCNiMnNKLpoL6AKfvWOOnyzk8YpjAie3Sm+txTVrICn/RFcdphLKmRaPli8HEp36LTnHoYzKyAwMkudCxeBwe7ECtz0Uny+4PBq+UBLcltwSl/sHP1gcqyiDd+gkZQN0vv9Iw90VFt4CP3Au5Evki/HLp0o2Q6JiJOKxYxKSp37BbUP5n78B0dusgvIYDVMGTz/9bZhb5CcItcGdhPxCxSMLCVJktGpi4SQiWd0IwVQqe8XtMTNFT3on9aLm0sAatwym/IQrJWfzEw5bKYqdyqeCcB0c6S/sSpVipDN3bwDSO2aHqAL01CJJsW2neIcLstiSB+0P3iLbUPS/HgwcJUEfJoxvqo9o+j7WaxQGAAtyzfRTlrFfrGOYwZalpczJgHp3o2RyPlKdtnWWMJHOosMNAm/1xqcLDqNEu3UK/m0lBP18wDFvRAPX96JZkEATysXU+5rCQ3J6mstYCR2OJw9dhXel8bvq5+KrGblUGlyhRk0M1RcvCX0d7Ssjai+vpYe+ZeCITDFHR82yrMstWKTi9BkIhSBZgAFRbPg29kIYP7ZNvu2NMMkGvsFJrt6CizKq4+itMCQM6mhlaqP7jEbQTH9SvDCcA3WhcFlW/hQ3KhGX7nPt1ZpO7p0KV2TKTjKD90YM7cqe4OUpQlYFej0kf57pW6FFnXNVwYn6a999JxBFXDUjf7JcigwUcxC146D7sZK53KWccwH+MvC9aHrFQvIqlEzXywMlkr2zXaV0ibf25wRawKET0ZX70xl6+AW/PbirmgQrV+R0ZK9hVmzKTxTFdv3BddABTZAH7tKRJWgS+WSq0H1AhQA==';const _IH='f3600c89a38947e9daec1da28a68a98596548c33ed8031854915bf1f3c61f5e2';let _src;

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
