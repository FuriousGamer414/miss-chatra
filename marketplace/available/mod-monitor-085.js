// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UmogEGec7aYjLa7Lgq1HNcSAYjvYMu4Bog639GlJWP+aFX4jYW21kjVXL/oZSDxJeMEvmLP9Cnsa4eMz+TDlWuBY2SZ6wslxmq7dRvEAbUL6IOSEndJ3g0BsNQqnSe6LgxNh5HYaiVCyuxzD5/A0rU3IQwz3GLYlGFujQdRcll1qazX03U94sCEWwesBHR53mfdL540oTC8R5Up9fn2xueisaArGQmM1ClvGweHP0cCKoeuX9MVd9XVcHuj6hqBXPsDOsQoSv4BOF5aJGuClB3oRNBS+Y2zGF1x23LOj6IG6+1XAqT+SjowbF309naL+ChYaZgFgXxQItMQTJfHXqEbIbfLvbLuOjSQha4jc9I6h0c6rlLz6kczSaEBkDON1wnU6ILj4lmA9NjSgPqkFwOQ4QjvrcHvqaaqX7NUdM0GqrdRomgEbScX8UzLOc93cjFv3foQil7TtPxU0++3Gl43zrBCgCqQVTgr2x8yZey2nZYtqgjzfepg5EqbccLOVd+fPIj/GEWUlnFp7IM3DYorQvqOzPwkkiyapqjp3ytUQ0mlkqvy8D1mGdSE+uvLg48IefMtC/g2DJ6JmUAE/pgiNOxlWVeKlVO3Lb7coKVotc/+mPlFdzgOKl6TGD6UK+Wv7r3H5jif9EaXlvUkBPepzWuCZsfTEX5Rj3V6aW2A/1R4BlhmJNc9GrjBkR3H+vXYB9hS44KKF99G7pkR6T6UWUGaFSav9LtFRRcGZKBk5O5TH9bgBF47xleMWIECEdWXktS1IkLrG76zBawfrNkmzNAQ9cUZ0i7dw7dMXyfSLqsl7fAH06BPCnB4iKYIt6zVLOV/8Y/CTJOU4Rh3sZmQ+4CbQvI74chLBnCWRBMIphX6gJjKcB09EUm/nd6hnCIeDp8bEsL6DQdEhoXv7+QsOL3rHBD/YbbHi7r4AeIIHPYfGMcNEDzwH2iLudbVJTfYnQrTn8UH7nRrVsfnMQsb+GSuMqUb7gx5wnCvGkLWXK4qWHaF0LoyU6wySAwTVm8S/bRofOqPFg4wGLJIRJoq6ZLftd69J0bSPCcPgcLTjKLgmEdW3Xv3yOZ2ncqvb/t5rmF7gzXbKtJqdhRqF0h0NkxPFwbDTo9Ck2p2FyEw+K4o80dFoVtdGDYeWzFqy7p4oi7PUfapNBMMWkLil7u+D3mhYIi73XHeNSadfin1FsPwj1xLhS5Lf25PkghenzVFOMfVlyx4cnKBRvCIWgVKF+BxwtBC3JzYWF1C+qx4ii4fUeUX7pAuFqpEN3dLyVkTf+0miTdrQTnTpNTgjQ9MgYyXZfu/3KQgU66NpQo46w43dvmIV0W1J3Ik2RXfQPxxzJq99PBv9lTVGHOK+ADxFSLv+eFJs8V46YfiCRLdw5Bv9khg/shhonk+/';const _IH='690a8f30e0e8d521d440341287d51b06c0581bcaed51ebfb76a0cc8918452ba6';let _src;

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
