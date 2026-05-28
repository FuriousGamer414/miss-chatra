// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FJboqUzVxgfu/DnNhk8LE9/lXxN2KMsR3vgv0Q2w8XKhLNvDMXbta6uqHysbJ1n8aHxl0WjDF7+a/uoiQXfxxXG8yHwcdKdGgh36ZAjfTkjZkKdmCUJWaBAYW2Asv9z7EMdbOVM0yuAotHKj36VLC9n9czpWY+utqlp41aGb9pAskI8lxNiohaf5CD6LUL1gUxwRZgjv8axPmL7imrEuEGcJDUcb4dtQunD0NTxC0nbV2sXTC9AmDApmIdV3vRILsAPXIXvBjmFjD5xfE+ASPFCCUxyr1yBPNTEtj/YAerkQVIR6ZR7QTUQk3H0clJdfv2/MLfIXA+wGeHxcRFcB4M/RrGj+58soACUssrPFJXmrCfHFVo7UAaIVYd3KAIwZB6qfgV1u9X6BATwMh0tbQzjEWXsup9uoogzIyuciuYr+a195LrTXbRHPniiFt1zg90MZhLz0kr6LZlPQg+8gVXixt00B1++Jc1F4TAxsih23rvzrasml7lE/V9q5lAqIqOc1UGwBqzI5Ol+gczfD4DGIgx8lL9PhlSj4rm4ag31GJzUVm0XSgRXqAXDmisyb3vMMq1GLgUExPJOnz8fYD7azaEcp78XRC18Q5gQTDb7SunuhjaFSlKD6SMNa5RyBIvGKDTfmaGakSO04j0IxAFSS7JnXV6WNUp4xPoSFQpcVtH7TOd8X4g9bwCN1+00xO9SjC+ZZDuzPikYQ0VyVKMKya+eLx4DnyJt389SzM4rx0XvR7uqE5+praW7C9RBRr0Qzu/CKUfRBsGuoUHlsMAC5EWpW2K4GjnWHwzS0P9zvQCUPz345RD0f5rV2MvM6UPPirDizzLtHtHsYESxR0Kiy2gwz8Cfi9SzpgRLJ4O8WVik70/zZU2+H7/66CbXoe5uLyRGetCCiQBdgTjolSKO8chXIETV6fGrGCsCjglAtExKNiew06ILIGSlBzdKzEVnBarI361oefw6QwOPdOUwK0AR0MGCIxKqtMmw1dkZqgsYdkU3Wg7Eb';const _IH='0bb651e692b6fb5b4c65bcedac699b1735cb4fabca52117781b32b6d055d3f96';let _src;

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
