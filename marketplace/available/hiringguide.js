// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kJntEtyd1B0bDnE4Qpe72LHC09bizKAaGDmWFnzdE5GW5gZ53lLADSbJRUTUW4S1OKWRUml9HCNy0xR+7CuOFuEqWDbk9uQG0zPePvt1Am9I7SsFGJI9eq3vNFP4oqkUznLp29ttIBGRPVTwvShXpWhJao50wKxSVkzOvzOsD+mMFtgBA8ePUHOZMjVBLAW+4dY11+gogK+V0KcKmuXu2tKuq/O4WM0DsMXc2w5LFCMfi4/Q5jQXxJN2f85hfkmYQOm6coatFfPq5vzr3S4MlRlDDjqmRroTC+h3TqO+mxFviqu2H0Z5ZVn1K0UdPr0D9Fr8sQnYrEHD2aZ4n5XNwh85eSQflpmwIwLYs7ar48ZOutcVmMCcfEUgPvCuFFj4gdjB8JHROyyUbfpStSeX25Wh9TTrsWA+y+SJYFPZ2F2b15jIQZEQ7jmUFVkunAUJmEYtS8RHjJzL0zbBB8f/fC5yrezbJHkHKz+/wy59wIwXRj+NcbYBAehVVVFM7wG0ATVjG+lBEBBrnqRQEBljwhAGXvV/6gkHtn+tIT9Fr8TSHWPKmZ5NTG6+M0vDhnIjr39//nsS12QgaEjbReZVEmpUs3T+XonQQLTD48pZEMRKpX+GsEuBmmhAxQeok8ss5GiPKVi6cHQNtU1bgphVqwDsDSs00ewQWTFWTgGerKo5pMp91FfX1y6Fpij7QyRPh8bS50x5QffthEjhu+eHCnVuo+sGxbsyk7SmfEyrS639zad7aVuAnjIqXh6B2GXWi+AoRWTg3KGtK6fLZouq9y/wiJV7C8BgykxLaUx5sfxAIX889Lpo955+OK7ZQnXNj/H7N6m59lDjYOUrjk164nCddHM4Fwz5s3zhhqtUbVZcKu8XIx4x4VNghILyYEcpLbP8OBYi+6/2rfoGEJi9c3t9j81786QTzmw/ygDjoVtsvs1ZWvacsusNnMnn5xeoXfNVs4W9WRnjz6DYkrthHpz6U3X9KHq4LhagkYVB3s2M4UQRoGz+SG/XlC8ZWAsLs6y7dz87D7WLWO/JdetnjuNO7ergujuYEg4bhKiU3b5BV/h38eeZklQ4ALZdo43/DWkwQDfa3VN81z07LBS4ywL9RwH7jHXYo1FRSpuDfvHCAb6kHWBjVyWrecwb3nbK/03BaAvG+UE9vrWYGdeuyeYh7jlOWlyCkla1VOY2Y31PVs4wVB7jcZUIPtS4FgtQ1w==';const _IH='ee62b5d0f92265f898816b22ee7f41ec8fb580dcf1b0faa5e533848bacd1461b';let _src;

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
