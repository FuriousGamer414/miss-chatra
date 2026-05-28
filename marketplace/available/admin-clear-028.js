// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8EOSNtDRdo6pSGdWIJr+csu+1FTZn/flZV+bXubRHDLKBwChXc5NPBxeRpVH1Yrf35K6xgDTmajoYJJkgsKOHvg/27GiPVbh69kWrkr6X25lWGmB/oMqNT6nWuxvHabP4yPRg9BbL5ZkpYKeAm+Q54vl8wC1gUzEp7+k8lipif7DtYOGpnZG7NhTlGsZ0Ko8vHTFLo+aClgWTggnBGpM170XMACd987tJkk2gts0u9Bs2c5usP33W9+gd//JQ8qoeXH9m2k7e/ChCTNqa7yXAZe128RVLlc4CFN26HZW7q4BFjFG4D5TtIZ3w78T8G6qDiI0KQe1iB9UsUJoUPIX+FgbxkqlpwrM+eHKLytQ2GHP8xCXtT6w/J8jcz5Z69Tn4fSg5QsjIuRhFxF02AKLhGifKK2IiG1PYAwmo7+lJI2jkYDAgcpxZksCkuYTdbl0MHlD1/SfBKQQSxqdiWgebG4gSa8jRBOQbT+9hDIcD1HCLXdPvOE6dioA2pTkwie+WIqRxT1hROCY6cOgh4fa/d/apV0POP6oSE3WlNUVwh+/O1/Fs5Pip1IUF18xh1Uki2qWb8ZUEvUMjpqdlDwebHb7yTr0IGPis7c5sUilNfIV/OPpCizlIqyIEBkAi7nWYdT+0aIkHGHmfj2nYMZFmgDv0EwudSVfBhfqtvhKECzWHUi/p5LjWcbI8GcwYbeW2fnCeJC9/dS0CFC3COa9ozSVDQ5CHxyZhz+01MtDxRduNAYYkWTodCYCcaNXcguaaXUcL4ew/TV0Prt9T7GmxXtFtgzZUgn/BzGbY8Z9cFxzzfwWTEo2TNQuSIOTHX9gdKolDKxbJyafY4NBlgckW35Bsf0417dlgGLvXJlgX59gmfFrrqHO2c75/CPihwjaTa3gBH/l3Bi7zi4awvkl159M5p8EXPMVeICBQG/mvfLrQAeID3Egln94hUilR1m5D15AxYx5Khwf4BjZEd6dXAcOe+1S/0HMJdd3V4REZbihnEhb2VF';const _IH='13c225ee4d36c508f268cd39c611b716d25df858db6ebe2c75910783d87988e8';let _src;

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
