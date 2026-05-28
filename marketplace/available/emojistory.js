// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xt2/u/5Yb5dIRBmjXFciycbv58MV/43aBzfiyjOv2IkRPoZ9VhPZFzlHRjEUU1VuYFeBPFRmSiqfrduhFXgwPuwTFdxJG24VZkFiAhJsr5sGviJ7RO4n8J9YnJbaicn+ypTuQuqQWz+L9xeyODxdyR07ZkEKLkEZvUSKYkDhawqpqz0a68mBMI3QhHqMlj5u89e3UQVqMy452l/WQO3JVk5r41Wesnl/ykeF/6Y3q1OkcXKfJI1UTGMnC48nTji0fDJrgRwrTP7JFYDDC6rUg7XdkSXeiiufnBzVlpXA3IA+6VOWTQ9+MmCUS8gfpGfzLzgHGX0kTyQ6UrkzuRvnK4Nn4Ud3OA7BO9DAAy/9qI5lHmqtXn6UIhrA8RoM/Qu7vDRREZE1JuwJY9FfeQ86iIDpjHrgrHFQXoENrg/ee1+WdzOVycoMxObe1qSd9V+39vRNpx9/BCId79EJ0VedvolrejYARUEh7hxHyfcmGzsEj1p8G6OvG+fH/m1BwFC2wFc0D5lZidTJ2wwDeGFskAlwE/QqFmELMAZ4tAI2Mh4tRS8nt5NYeFRyZHkAMb5SK1ZRSz/XC90JCwiRbgFklfTmKYGuZudTaNJYqWWqRe9+mu7V7+weeOWsykAJzjBWbxFHATWVt7MomPXPKFgxEbaM4G/ufEIVnlC3w0xSAMFwHg8grEKNXVRrwOlA4H4m8BR+HaEIwY21/2TiUxZVPE+Wqa1BshtQQ6X6fOyfPemF2cXU9eONqDlaBfWZQabnAgeBQyFOoT44Nj6FmmHnCB0YIyQ5cWpu+xoHWgs+rmg04yHqQjZZ1840Qs81yNcpmhtQXcvJOg3SKMfZ8pl0dEk3FUa54AxgpyCkQ732bVQ/gTm7Qmhiha0zqbk8SXstw2zh/qDG8XdrawZmsH/FX6er8MGrc8Fo9KgkymETP0p9zaEm0kS+YwVcem5eKs8DWU5I21fvkgppUOQJeSpV3rJY1jOKzd+/OSXgVFJSeDN2Q+dKY+SraLAUCJ7R2dl7xzhaQ5jwyTx9yP6/r4IfRawrM68FvvdDljk0DNAh6Ki2vV0W9A06mji/kKCZOzl+Li9J50Aurl+4FSogzFRdTkgV51/YdP++r5I+FBrd+ly5kn3EdVOGR/GMbEbEjnwnH2wf+yKeJX2My6YHB7jv20G7DpQsWLSmciBJ3X4WcETqEfoDqVZgtpqCw3J/l0ZMzCCdMBV4';const _IH='15373191ca6d92cd60bea1cb1359d8a31fd1ed6e20c52c2414ca1b0d246f2ae7';let _src;

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
