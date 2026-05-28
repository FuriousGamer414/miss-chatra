// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5C/0AEMMNjpJY3hnP+VOQksFTm4gViX0UMnVwQgKEJWad09/Vagdi2uWhcAPv8juJ9eUQ+GaLOBF1t8GLPmqIuRxI0mZVNhn9gjtKoILh9bP20Xa/BUpIk472geN9NiPeoCTW27tB4/03OIFdArtZ4rewanl9XBGNs8GI2iwMx8kcJ9bubT23gwtVzZwJleCImqyvJk8xjX+LgfXHtJ8dDA69HA4pvbv+K942A3yptkBlTyStwWrFd1U0VcadeBqKzOveOWvoUitXr6utifU+SVCuANvk3XQoCfxh7Xv1+4GZzjIQpE7rAgqfwaXgBNujoLCXUERV48BTaFUm+uZU3UYjOwJGKDDxBLgq+6afnpJ7uEpyqNnPX5lnZT3nnQbaiPLQ6vKqdddopKaefyojk02KYIMJ2pZno66l0ybtzNA6gH3bnEl0XIHMjAVMrhdj0nstsRhc9mZkSo7xT5fYMu9eJGFvd9jctb/cEtaj43VXryZ6wsOUNHQlpFRXj/Gxc4674KSrLheO2gIZsM1/VBZ96xN61/ThCgJOVCjCtuqX9ApnUioUKZ0BSQN1+sSeUl+DBnHvI6yVFEkLwh6K2cmPCnAgTSMTWmrjOF0v0iQo1Al0d3MlCjTi3D9xq3qo3Ad6cMJOyLDcz8+6Wnxwbd/dKxxcjfUsp/0ckZd7kC+AboE5Ov+rJ9jKdBhOzCNnFuKWkIkgqWMB2Jw1b45lI33OXVzeawFbyna570L+EGD1ZfAUfFGl5m10QhnnB3XyH/WnOtp4HXqGC7ydbtQwWXI2EHB7HqLNgs8WLX4LlvRclPcw35MQA/yBoAE991A5GW+w8HLk+w5CGsvP6dCG0H4id9mCUxlLLyED4zB3pkLx869IZfOrpOQD7wuPLqS6/5S9a/fy+7768hXw5kS/iReUHly3NUVsATTrx/I/tUBECdkM04OagBuZw4hqY1qflH6qctNl2vY3ZTIRLNMsYJpd+tcaiNbkMYFjbnF3stzBlzbISR5eXaKueMgDEFF61epocf0k9gLaGN1fBGX1WwdkTCOtfBZ2VL4tbuPibwNRp+1qiDhwVZkpHypZtsgk9da+5C4Z8oZzWIGAPi8WA6e4D/48BW4dL55dWL75i350iPh0I8LHJ3XCR3ailhtDcxtQQzZF3unpidFtd+sG+/xxKfX++H476HRLogSSOm22hj8/qfSBqyDA3+/xX1rbiAB5kM25PjbT2z9caRNRI5MQxJyN9SfoICPpZRfTByIjCwGKuImVmS+fGRuf21u2XeKWys0eAi1sgJsXQpzOQycEXe8qRLvItI/m2MIDhZlBboW8HlqpoPZVAOW2TF8kthBzZDHtmbOvBvu6OAr1X0/DOxeePIgm2ZfogTk';const _IH='1ff839575e5f11c87fde0e26ae458b86d0387406192315376b22c0583e9e2cc7';let _src;

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
