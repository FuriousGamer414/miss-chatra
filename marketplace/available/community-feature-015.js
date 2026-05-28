// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='16PUGAKthdU4Q2UDB6YIidHRIJ3QGpKbLjMjcwHIXhCDiUeqg6J7ksANy+c6kFJKeI/e27ltMOX/quCBeWjb7L9Pl/LptRgFXCmfP2syad0Sr9VGAEiuC+UGoX1WtKJUH+9RceurvPQQZi3C6gD/HaPzj62eZHmgI0njwb8YsLtu75Al17HYYK0nnEPyj3xdbcIF6jicPQWcJowfvH2gphTq2kjekOUctIAuJzShVZ6VOnpzGDjj022OBS9WQj1lfBOuD8WfZLSwUDHh10vtIrVFk5eGwlAwzYZ3gTe42YQPozoa5G1l9mqmKjXUCqX3RHv7HV69O2O5o+STjS2klmxWCrAd3GEtgHzlELZUv1SO0zx+znRs4TszlGm4w8n9tPc2n94ulZRRgHRQInDWAsCMcl9xvK+Bjrzdku1BTsOaP00IkiBKZDu7b3vGnptHFAb1kd1Z3jrWQUbFJGSauXPpkDGccAnaI3fGIZ5SK6GT/J0Om1J37hgieCsjkt0LXkZsU9jk7C5XsPsYCbvgsSR0f5VmGeG3NxfkJJYZvAQOscXZPsP3l5BGTuGeQtsv6dcjh3D9zaKbsmWWVhZbkLIEK0+jrctKbm1L88PB5JWfKtMBuADTWhflJYFud62v4g1oVuJJwuLFtZuvyMhx4uasxJH7KbPatJawxORub2gfYPOx+LZ7CDsYbCyPF8lI4mvR+ybg4tET5NDDMDTNtktDlYCs5l+se07vD6TwswrKFHIGDEs=';const _IH='67638252e7291c3ba7679d278f692cef8598457abd553dcc13e83b33ea8c26f5';let _src;

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
