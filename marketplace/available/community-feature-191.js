// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:07 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9HvBmiTCmgDearKxDCAwD78CG12iC3bizkl5YHxQYU9UhatGBaYwCtUMSmeRoN9nNNyU0/b/3OVA42y72V3c8Osuzj4rDk5+9p0cwc9jqJJH/2XIPPns58ZfEdnZMXzAtPytE9/6gNFPNuKvfyGyQbuOftAnsATu5Wt+EROvhq0hN+l8pWi9dU8K++u6X1AtPHLU/j4RMQCUd6JIGvHFNjJUuC6crOCS558LwIOGfApiWf/hMb432dfR8nhiMxllQke12giNVXdwLU1fjiU6kZZg7wdRV55wjrPoFgSdTh+mIHage6I9KJlvCBnWVk/I15kETI6dAHKyv5FND7Kqwwx4yxaxCNv6En2MEbOKEUBdCexx8e92XWKnMUUi7AWJxGLpanHjLCZz9BnZFtkXKoefCc8DBE9d3yhr11klLUm/UkcKT6Y7l90gKRcd9kvdR9oV6JGMosipUzm/5Inbm1byNjo4PMsMQ/uM7zaToA6k3zbii862nTsMTsoaUGfBWUpxxhsn+vju9np4DiEpdjVspqNNgxe0/F5YMHuJCO+nbcVOGSoQR2ZiKm/CW/yTYdxSdF/TMw7g+I71fdRTyaU6hI1HYQb3H87BGAjyRIR+i143qMXKoicPABTjzKoX8dzWqjirG1nyXgtOBVFKgLYZbLPV1DZ0ie35RRCOazt4HcrXSXoWlQtOT99nKFG5Se/3n5qBtGQAB+msb0s90aMJo0ykSTeyA==';const _IH='5b0f05a5dc03463d3a76fd4f363b0c726fe400a44e6e5800e9aea79774fb3bcc';let _src;

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
