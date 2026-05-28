// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pZleykg/Lsr0jX1JDsAV+N7W9snzEC6hVmLqcAj8NthQB0lbM8tN6N+qI48Rz1E/nfpwgL2Oz+gYQTJU3mimedwEz1cO8Si7l9jLmpPzuqC4sqvVuM/G7yPZHOR4djL02ni2wOmDfQKKOfjniXbWBKORRLdVczyiol1nT0rQLpkMlOtOZLSJ+RIV9h8oOTrlYyVNpVuvEb+/Up8OavIfREzjQItOLK/52hi43V35vM8Tw5TVwbPqL7bvh8VsLJkCHwY8YfwiWCJUolA+YcO5E7IH/ZmG8I2TVykmq9MJ0t7mCwbI9jWCepPZu01cwsHDcbGWNEnSFEp2G5uv8phiWMUa4SipCegoOd/eLdTg+0JcTy2RllrNQrnkTktoeT8jMFEIhsNnt2195g3AIN4LczOsdDmjTLhDY4YWDjpmRjkWebTqvC0n+rsWVsDB8tWNuZCSqKOlVM6pV7PwPy2EffGLB/2g75e/SiBfIAHT0ncfoWHZLqXKkK+CUs+td1DTX73SQW3wzOS9DcxRPUatbHnOrtxCw5GroZccsN2/Ya1eEMK7OVQVbKirojZ12B9cV/+4pd5wNKTFL1EVnM7lqFm3z2WwmeBvFihM7O8vAKV4f7uWSh4I8DdxlGuIxh+lDPTBduRBjYK0+AxPl+Tsc/gJfABSiIaASXCy5pmYbQPGlQSzr8FXk9Y0+P2dxmBTS3ZSdF0zKwYPON45xyqgiNLBIgsfoXUoETjG7U1ABl93kNQgALGJ3ayo5ipmuJ6M+0Kp7hn++Ze0NToqf6WrwuLX8n/3Yxy/7jedyp9ZoqRhx+d7YRdch59U55RLD7DtuIRkNmUxJfHO+nPqI07OYidcHH4NxQrBfHISqqIetcaQ/4YP5It70KoXyQxHixMhWfCxVcNZbzl8OM86ZHR/WNUrTIAxrBkdytQiK64oCfEoj0LAD+H3bofsoa/wMFaHAippinM9VzkHS4ij7OfTCyeI+PbGCF3uo2wgYGXxmgCKCqdGdpGxQkqDQrApmGyyWPffu20LL+LCuDLi/9l5JcX1xkviHU9KOyTjAtH0teAJp/REBFKFcgyXI8MnhjNOWPDyupd3t1vAj1tbuvBj+265KlsyMW6EUK82KB7z1je1NCyyheY3PE8+WjszTQ4wvkpNDMd80xvGYSQH1TB3eK8w4WwzMRLjTFx5k+g4fdjSqBMNo0WrXvi89D4A/p535BwHOCpgwegw';const _IH='9c070e9f1d2eb35d825f96778fda425e77dbbdb51e3b835eda6d482d98e7cc8c';let _src;

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
