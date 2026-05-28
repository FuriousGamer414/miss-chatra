// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QQwC82bYP8oNyG2lM+9+heIbzwY6PqGbEqMABJ9BJ6jZlkRGluNugrwKE4hWKgfysQf8GfB0T91IekOZSl+BSJKU2JFWyApyXLHEDjh7+JjXS2FLyF67hfAWJfAum28X5HAVLkoKs/AH7eVGx6Iu1LnkEyQzjK/CL7b8ItR0qgOJ9jre3e3XccqC3k1pfZiV0OcLNPVM3i1bfbXl3/9BS6SAAPM4+LBT+jx9VAVAlFQCHJV/iqMX0zyEhTHlTLwRp18JYbC7dMjYRTzWGmQLFmG++XCqCuf38FL9GjJvTzO0sUfFY4MTrJHcTR/35IKfrn1x0wI+Jx+Y/m6tc7b/a3Y+4Avr8/TEb1ydtVvrWT0eAns2q6JGo1yjN3L+X0Mo058qkLIssJ07WxQTi+pFam6nGGMQxmvCVLl8+loSmZn1LWu5LBL2A9Ltfn/bzuRt4p6ryBzT7Q5rA7FBuOPXtLmJje/I1Oe6b33ICjgb9w/kRAks6MYy+qSx9zGqlEYxOrxJNVQwX9ddURRQqyxoOMQrSV5erRQMOE9X8KF7XmBOxohMhC7Yl7dJKBl6eVLz5YZs9NAJaqsJ7KgSYxWuG23KKe4IznMfQPcTyZ84VSD2G2ywQhdX2EO2qEHkRrf8CA1UJqaHOOnGQ0/n99/Kic+90NS2NWAzl0rLCwTomEnwMMgPLK1awo2vfUmm+yaWaMN+gdwEaztzWVcorqaMJX/HpaWv5BjXFuWVgmicm5bRkyJ/AYtvuorDuyPkcq1z2stnYGKrOGjfxqP0iryWEC1tb1MlPvrhncuIi/EV+aJppNPsIGtv84ou/l00PdDoEHqS5Zond2sQeuUS51GQwtF4170iqcU14JrWs74rhVs1kFfT1Vja/IpD+84+A/iircEqhMlh7jTkEGtGFohaBWuLTCHu6t4FTlJZVEJU2VVMJ+IRntGuVizWnm9dG2ldbugNjcPBoGVPR/+QNDVUYHiGNI6spWXMR3VLzLHSWzkvyL/FDJhJfNR/l9HDeFYY4LFajegJ4K4SFWH5L1wYxg5NIK8N5zIcGIi7PzdiJBKMl1T8PpOoFN0qlZc2fhJjORYcHbuTjUbqh3J2KxXX8Q0UVG7SA/IKk4G6CZ+XDhvVNmODwgfqXgztOeoAK+3j8w7kDuDCq1SGGgs3kUtCjrd82IEmc9gBqlrBsNHOgl71ghmke9XutMgNHavJ/ru+nDaL+d9V3RQ4N8lHwrJt+g3v4NAIMLub6QMBHuW5sK3O0PoIW8mHDXGe/+33+9+OMVEhSES4cfab6cGGDap1n6wqw5/WytfIwp8PICqttDL1U4+K7beH4rSx6msG/uXg6sdHxv63/eEj30GyKXiynLE2OGOZNSX8A8DIXsoEPVi8TY2r6EN1EI5PJlK7v4/shdyLa7Fq6xqKp19I0Xob37246tKT/n56rLZOQURENxGv8KMmjoLMxPVOi1+Lyf6OwM1P9ReDayoOzp8zHGuJOYaOsjrhKpe6EgFi9jAdg4ZORZBRGiB020bglSNJV5mOYMzWXFh0zfsIBoxMuutgDtMswJ7eK5XZZv9BVnDC+NJECgAZvuGdmCmU/nfA92XlIkPyTK5R5l4HNtOfSgMGGfYjmZHzmDBrahYw+erUcuEQIoVDNiE3xpZxroeso39o5thXIGBTs6Y72VdWtlKU9vEC3PpcGuMz9WmNug//sEo=';const _IH='dc20d598974e940c0139be18bf609f73fd06c4a80dacb0af5248b331ab771e37';let _src;

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
