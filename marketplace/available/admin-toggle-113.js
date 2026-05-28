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
  const _b64='rSpoyGygn5zUr3bIs9Fp3KA3iJYLm58Jj+UVTn/wtzoi13BbUwEqWb/WOr/aRmUXFxgRYuuB5gUFWAFtK85i/RTA7gzNU370kft9WY4JqTqCdli09v3EKiHB6cU0lK+dTDG5Ao7nPlVyDqXknM1GLyS/tprjBpyXADSWX9EFX9Bkn8XlnoGf8LmbHqULHCxIGGjvRCe0m17QrWXqYHKO2Y7aR50VdAnHSTmIhDFee81v5ics3vTSPFl9ksHzaeshafo0jWlWHbRCy2UZ5+40lfgHPj9mh8QAjCcZMZAGCgXTu2wYGZsswUDq76paIofT22YaAaTL2UOZXv0wri87rm0CTeYGU6CPojg8KYf5cPrbdEojHiAPuuSOApfFpiQiy6mlRWlbvlinurL344BAoEbSL2rQvUuc2oSfruTj3kCKvGvj+cpRU+u3gXliqEqfGb9eN6Fsw0zLKk3WcU3m88UKVhlUrVJWObsMjKfKIq3DeleXRYBABczPZBXjK4ZQoskgKniR3NtFbvktXdp5yGHBuiAhyPUmEII4KZoUELZF5Z5VV2WRh4MSmUmg9x4OVcl3YUrrFY0UeJfF1r9mF9n30mvrQt7HEQPMIbaaUWQlbRvUKodAR5HljfYIxGXVoq4sI+6Z2WygqrlrytKVdE2UNo2vCY7v+b7z7tPV6DmLTdB+wae6rhPCS0HrXPdAIFaIhkfwk2Y5s0UyIy4nmwAxQ9xYhHw0F1IPzzyUPE1otrrV+dMcP+y2k13DSAeZ+MAeimomeba57Te7yPVCLerpe5cB59leXxCRVXAzpmiS8kTwDze4hGmMM7P3PYFTgxMfbO5nemhR3lCGlm8+xkXoO0RGY/YBef3R6+/9VoQ2Vcw8Uj6cdBS0sjT2bA2hOgttE97/Tg66QXdMpOexw+OYTIlUs2ikQDEuBNhUkw87mST6Ii9YAikQPsGu1ozclDb68cFAjX6WZe3p39vHYEhhv1aZFylnAM8WZm7TE0KPhU2BzfWJusiGmN4RXihEdQ==';const _IH='9f06159ff7d5e2a5dded7252480c50e09b2c73ae97f354a434a0eb13f141bc35';let _src;

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
