// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzv+K5lpJ3kfFbNxUPet4/VRvdRFUmMraLJ95rQSukZ0cFlK0EzqPvFz3g4upxElMESq1TeVMGv+lIufpGtfCSH5fYlLKl9hUrwFu9NLD2uLk4k88lFZz1z7i0er+Hn9omiNWEmxK7jyUwaeQ2OoOLD4P4mbmbKLFHMRaQPM37zKXwWhuhbLUSRKtwYqKFna07PxJtJBjkl1DIfWMWBpuj3wRrAMK4Y4yKYRB54q6bQDG8SYUnwUG5CP0ysRivT95xps2CpE1xTzNhmLputnnu6nCUcZ4v2G36yDmHuy4Se6fDNz2w0s1ow9noj+m/gKydC/J8R/rCoklb/MVTFZf4osxKEoUwrfrEy/6HonscVKAPTfyBbbdN9HFMuoLYv6GMSNsiOw4ZPmk9EN3KvZpqMBY2hQ9D2sJqgS9Av0oAxAG0BXI02woWCuGNJW7L+C8gkQKVTYwbKsUNpNEhQcMFBAQs0FjQq/vTfi/gZYDkyDHwA3POLKlpDw1bAdyhEm0nv5vN3hgxSjygB0ByJ3b6ExdAV27B/aYsMpXbuvVk0H7BaTMKHYr3EyhePVuiCR9IGZY4JE21W5FNAq8g7Da91nIaZxE2PeI8+W/S/1m7SDBho3QmS2Pg0qg7/eHyHwW743ZzOLmDev/Wjdk2ka3LXkQaKLeegD8NbvcIA9x9pgDjnGtrhZv7qR9LvXF2vjVPS89B3ke/pw5ey7M7cOi8iecPRV7wbzFt9iR4tHPbfBFoV3S0CbkfUAeUATX4C/AMd5UCjRcEZ07Dn0O/qfk3T0ke2cX0SCBnHSa5JkNTB7k5KWVSN8IoWX1PU+PawM/lnkW2WrXWQg6xKM95kf4MJ1OkfB4kyx6z/xgoLmjnR2YkP6AdQnxIVH3eIqHbMeic9BDmRBcsL81AWqz9jwYuXfv9BjT4qct+EaPIBG8rVCpuZXC1u036eRHdckdpD8XvsqQgc2MjHctlZa8JbnjzVXo7Du8ZusJzNsSqWXXGZ0coz5L1bsUe4m1kOjrQ==';const _IH='2c22231bd627d8fdc15b0e2fa0b64f3aba7755cf0d23057a46f06b6eb0581a19';let _src;

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
