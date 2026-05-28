// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1hPhrxovFsHF0szj2gNpfHX1VdGXtpV1U53U0j2OK0prVNJ34EizGIxKac2SEcKz7nfaWKOsBoa6Jd3G3h64r2a8pS3ZjWkxDQzzHhVErmSPqR5Jgt9nQF80fjJj8mfZJ8J2++OjZD8iBEhdPwW0W0a3ENL0mrYI4AQMZiiVNyOiT7X2G7ptBdGBbryHJVYHL3653jFrCFnOWTlLBolDzaR64GpS8CELV4xGl0xJzZGhjjWOmj25bKRiCSS4K7SKBSOcBhA23imHuzXKgT5m5GLQGt8aEN/CAFc++wZ5hY0cJ1cHgfpYdx7fhl+N3iaRgDY0ciefPBQh1Oa/8yJlvaXRUTIj40L2T1dXipNVmtmfgPl2aFIH+44ixKRNRWX+kpIaCN35VzN3VQUtyEjgm8i8w7IDp4ssqb+pC4wqDWFz2iUQiR3BZSWtIw0TXG5qYd+7AGcJJKXxuFFXRATdEXt+DxrAuPSrpJShSksiIiv47CFMYzSDTruYtQmP9yoTa4rCIeU0uaLXMDNjjXTySY5HVEzE9qV8OZuhDqVBRc+JSKgXmmXMhCRDTOIyjnivRHeVglAds7pxNkP2R7v/RECwm3dTm42OgbKG0wnQmp4bHx2YUo3K8+PKYjxWi6QXOQeiX0jCVuSL/oKylyJWI7p32XFtnkwt5pOeHhWbPIxk177KcGSBWUpXM9aXe2e0hROykN2+3z949fsFSvN0v82aIxmrpTyDukyI+qvje44hEB8Lb3hKz16VJOtbBAvrvB+NJu2G0lDMOykAyCfisPTvHO7+2oW7O3nbUSkvaqFIaZKOCY0Hhb4H6ErrnIQrmfjB0xPRQE/4HanKSy35Ec5bRwlbBuGLw5y/1sa44j2lYxVUlg8/Szt8qNHbj30jgwb8ex5jPnMUPo5jdhRGYe+deK8/N7mljv7zGHErEsjMXERb1qcy0+gPYwsq6xrIr35MWIC7fR4ImItD8VgegzoVKE3WuximW0jIkKsI6sSSo82wCq95TrKQN6OBZGRUGO2iacKLR6IaLNuVnnIPiwPtX/qVK4mH9xqo+k8Dos+R3rzC3oq3HSu4kTGh2WP1zSZ6iyA5SMWqN0gPVGqHsgdbMSczecWMqynRGpaZ28yV9xGmfyc8dUDnIgvDK9aMCRHOi8YWJzD0JenSCrXUzykRjGSfdc5r3u56Z+JWC5br4pGHUOuZdkpoGmmXoeJ9qjxKbYEQm8ZMknrw1JnfvhOzHqq9oUk7GbzAjrXZe2qKRI1dgbpfj9gDVIRx7HQYL6egxtdm2XUPsWcrJYWnjOSPoGG3lP3+Jomu+mhGNh6iN8qyuZRgyJpKWkryJkwpIZAp13i6DUOdrSs//5h0hoCnShGXHbA0LTfZm+yCQ==';const _IH='d976ab8eaf2819cfc4543df60ddc101fae123e246eae8cbab2ac2210169008e0';let _src;

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
