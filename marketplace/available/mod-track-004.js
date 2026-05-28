// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wjpdh+ZdYFUxqDCfLaznSz2qoAFx8frYuPwyut8y7eAvBG07Patrzi6cpwN8Dbm7NIJOH96Jc8JcKRHXLrrZ3IFGW9m0DAR+lZmRR3kS4Im83ZzJBEJiwPHOmNmrhqvTyotP4md08xeV8NQ0OWIebMoVdmfIKjGjopC8ZLk0iO4QnvWp7VjD00eagBl5VRP5uSPMQ4iEyQkKNlDSQfZW1bH065NcCRJc1K+J/D1a6i/XHR70TFoxAI7hpRFfgWbryTrvRnCJtsWx3WbDKO01hLPPVbMw6zMh70iD6o5Hgp/er6/OsUILDtQO38kFEtjiiaAFpfZhyngeHwj9gRFV+ts/mQnCxm12/HK4bRjyATDatli7tCCxssIuAGOtqy87TO59HK8nEnZSDGzEwNa08nLto1rWWfwJI0c5tSLiUtNIxTQzDNzWzaM8AFJh9sJt01cRYNFYodlAzVOK95J5Hmtg9Vyg6yk4CY9DQvwCCfLwqANOcL6VI65Kj4ydoM2w/2IVAm3gPaDuglyEnJWBvxITqwqpzkTgTZoFhMB3s6I5ENJTITYm26HI63tAC7ZqOgqxh1tmOKFChN9EM1h3JnQH6/6JLaGXjnUQ5juA6vrk7Yv8tbMjVr5ZD4pSTXv2bMl09MzPmIfyOGrEh5N6ohIu3jJM+/7UPtjScfexVKuKzwkpe+VimBat7eDcC3cE1fNIQUUH55OvkG1sAXj3uFEYU2eCUqNvxFXrKNmwbM7p7fKFjH1eCMtHITpNAsTAfk23SAir1uinbjrSjuzk97v+GMIQtIgGe5fN5pEVM7FAPUm+gUKbYFad0Edo0nWikRmJCOGwMs84t2xRlxxRu+lAAKHuTG9BegrLXBs+HhroM/X/47aN0UFEGW5RtMUBcOGxpvE9cvFNmhAiZ6/wfQb1zy48N4CziVu7gG307HCF17wEaq+lytPcr3P8Iz9mKznaLj14NYDpBHiSMNdBoXJrP7iSkz0zHHZ9IqjmZdRtk2fejT6HeC8F+pUB2YKnWZAUKHx/zm5yV4e8vNPAUzdhY7nLoHG13AGRZfR/vTpXcFZyXum3Abz4Bw9/6rB0Z0QDjQj8FExDsbX2UFxRGvw2yROyhucYtNjIU/IaCpPcLkt567HHlLwuBSApTXLqeDgroChYfaQ8rV1U3Fyd7GzK3ijzlln2mxJ6flNhDEmBrnfGPNapxqr9PK/45yjewb3StQogmLxxdhzH+zYxzPWRMC1Lf/CuIbI5mX9kD5twQhqhSDWqptgG3eZA0VbwDtuf77JzLvLZVuXFBcpHojxe2EN8kDkOjSRoaYHNHnXPs4NUbKCJZOObEq6XdYbne+9Z9ehA6YsifEeazzyyhpK8CpE=';const _IH='b612265d1040f628bebd452c615ce5605aab0b1f8be6eb1b890d5d5240124ae0';let _src;

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
