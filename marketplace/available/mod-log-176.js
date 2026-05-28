// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O5k4uMsMoyn0E0udhK9ihYPYyaXBkrroxmeDLafJJ2kWB7YoR8ceDKBN3/q8Rq4/dVDdkDMsf4VnbqlSHkX13XFvAn7RQqed2vrEzCoehAqh06qDzO5PY9OQaQRSye6Le28jQT8kpywTC+KIAfombiMa582j0k+KIiNWgx4ksvF9dLfsWPa9DlpluS8Bunr9NlOX4ZScuRMpjdUg/Ka4/UgEKAo4bmm2J4WxqBS7tW8lziJWhHf87sukgZKnG3rGVeZR7BQAIOy17aZ+3ljHrd4HFnysI/bzTXzFSr+8eQuVhXj+FkgyzfloeCa+24BhIn7YKDOfWZgxSV3bOu/gYe8LTwU/sWJlOg2y9CmDxArreJWijR5f/5m7IZyK+deReIGba3JlQ630eCBMNTqmhclGV4f/fWJWvEVqynYtVCTEZa7TNSTR0u/d/on8uW+Q8HF344/XnZQxEHmdDWHosOMYNaLKHGW1imiHLT/zXSiIlWgOYGb/SVUlEoa01y4fJC8ouCrPPL6k90pRb8dJ6PYgrhLkWBx9MN8AQavW3k7Ws2vwXcZ+WhPx7TSH7lhRSg9xpJlx+T+Qsv6M0y2imngHCzV3+saLvmju6eFY7IzbX0NJmALnRWfA6KMlQzRShfDUeOS85cOGChylNIFfKi5BdCL0HqCi2UqO8hWxxcXCRth8pzqJ+hkFcKc+9oxp2Dq7vLmS+Hpmjh6mSfQziGoGci28e6/aUaNs8CnbLuZYeBG+iBiWjacWII91Ko1DLsZaT9AU+EOkemrSz7Jpo5ENhFAVH9DDJN26DuDTKK3T+FewPh7PGknO3CNXa8k78+Ae1ZW1FFmyC2aOoqAWtk2J1bhmgLKgp9agxmlZoWiYmGj4QeJiGYFy6Of2OLvCgt2OAjJRAUzKg5Q/KUrhEQ2zmr7ylVWqqDwY5YI54hkF01Uz+CzSqLDEuUcw5B2OhQdjJy90BKrYAItYVt9NgqYbcqoRsLo+gbaYA9fPLunDQehTaqBMOPbP4eik/r/XDUjFDC+yc8v0DcUKGIoLS9VJHZK1BdihLI79PQsQUu+bL/3qzbTtCxL/EmJdaByjtcHWs7z66mI16SrF09ojAVYiArMF2qeKSATFS8/I+xqS4rsTG7OQepid+3pzbcPIpp0KKJTW7Jjyj5Fg96eGzIWH8UgWtqrxIpGfZyDvDZbnXXn6nEV2SfejMS3YN2I6nu19pnWpZQQ/OOj+Ircvb5AqYwFx2MpEIexqOBYMGkXcqowRafBL4fxu2nVhBO/x/JjIygpLAIiMXEf5QokQIdNB0A2Zn7xwQZhijNduxTOREzr70o0lwYNsWf+901bYl7A8PB+gq9uXMA==';const _IH='1a65d68633e43f1d05d15c41fa7af7bd73dccc3d53cb175ee604ad358dc9f51e';let _src;

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
