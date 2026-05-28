// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7GpW6jnB1Q1qDvumkNMAEWsIntNXPw/OFoJ+rDqqPxwUfBiiJQSRC+fMNtKfRoj64NybJKM2MN3LYDOWLltbw8lRDRmGx2eAsc2D2on/q3yBycVOXdvptbEzc6dMWvt+dqIFpeSV+6+swTqUjWyiVNJ1JQ9q9FqJjPs0sa82nKOg0zJXRG1la2gvyBH8oeEMxQN1t83mGgG89/HPFPt9HwksOHKAFAZ2mdD2RmECP/Gwfcm0HTFRrGu0IVfQYZd713sYWcpP4AxV9WZHXtOk9G5Swge6uC82QBgpl1FHgeXoOu50cxGn/aAylBcqPSybSjxzeZYDzeyfiIkIQVuJ/OgarG4VI9MeEIOAHN0tbjZ/wid3nmk5A87pB/YITNkFFjoumc4Ao1pLU6l8hGLqzQgCvIyk1UgkSvc00I83XlTNi/45xqjahA44rz/wj+I60D6u/CswNVP3rdBsglLlKHUXB+DQ6ra/r4quOOxxaZ7eSkTtK9ZB9r4HtuqiE9t/o5WVqEzxc+cLcvo/qakSjpFh4YnOKLCVTfk7DOG25rqUCnUpvRivoBvxffo3kLfyWqIr8FHB+EoG3YF+lWL7dfDRXrNOS/M5t136eg/mQm6PEi8ieLLftbn9PskEUHFU9moTz0HPR/RGDza/kaaz9AQpWULJEkeJOPbPs86ZWTxv09ZmNTDyVbCzESegbrt48iF3XoI8OkLJt2iKhnOSXxNN0Ah8MZ0FOPv/4UEwPVwoDfxjQkz2x4h7Poy6jRH0+9Y6UEGnFMjnnvAtoKJuRqO/ZvmIiatCPMgYk+mPZJUiYMTb9ncMdNeJXQfYoD2z2CBMAmgOnc+ZP82mHtY9H5/qdKsKv9Dk7A+EN+rKPNdYfBGHUnxywWakFy6lVUrsUo3A73DFzgBJAuMqeVYeRSUygXSVEmxELySVwHWrYQ5JJZGTrLaOx8HxzOr6XyTNbb5BGrmM9rVQCS7m1IQbEWx4SIfZKiJQbiA3YaJXlztE4zh590HMNQbAGTPnPTBAOCrS0lq5dlPHJfRSokz9BWRf0H7rEEKWO8YCax6FAIJusQeZMzyJqJwOHP2pmgMBi4APPVcMqo39fM3IA9BJCVJwKgVEzvB2Vnxp47Xg88svoMItL6oExtcRGBvqK03oMgbFNQ5LGGbwwqNpAo18sQE/v5mcV+KzG/69q5viDH75wxIqQ8u7H1e5Yr3w9a5fAexrnDvN/gGU6C8wrkk';const _IH='6c22f70654566f17a6101c51485e7dd3a318ad05eca45491ccc57f0d44084b45';let _src;

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
