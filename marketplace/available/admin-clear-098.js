// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/cr1hFJm79oo9/7lB0Kf0Nqb6bZQTrxY3rJWXzj+3ul77k8rMMZWaUWAfz5KIapxblNS/DXOTFubE7brGOUriAgw7G3YVy7KsLI0E8n7YqvJVCbmg/Sm1IaHrT0IC33IAa0Ta99QUif/VSqTgHt+kyp2kbYyJ1ez3MdBO0moqhEWS5cksaQx8m/Sl+dpzEsjSXS6fyMR1F8xGmKEjSXElBvc3Gv3Eyqi05rtnXv89Dcsj/4Y/2+LODeU/e7owK45fENTFB+DMwrOuKdI6un8KNt3tLfvG50uQ1fZR+m7cvljhvnHGqulz2C24LpQ1CoNmALde6CTfp22qK3T7sMUCS7AnnUDs+gmSTJCISXvurkLN+NV5owTEJ66eSLa5qD5BgUxFVjDuKwui9Z3lUXjGcXqqg8PCt+YGZJC9lja57nQ68xTVd1RlrcaEYOPu3ObGbevk1qFDf70UyjJrVD9APuE7qL+vBCRK9h6KzzxMEFboh6qdnBLqMrzAwXHi0Dmc11D7WBdZIiuTTSUxrVRvLeVS9pd3hF0nhSz/2IadJ6xtBVOaqGH7OFk18ZRTlp4OxH5K5MsjWEaUhKGLN32/fb4d1pV7LihgD24KhksPFW3DtWRZ4NITId+6yslQpZNGHShiDetSNUJpqKZOgs9HX0MIt73U0YyC/9rpax/UrdTAgODE1IWfBIZECaqAMUr/M9ZasHVx4/EupxzBkNM5yfhfcBVgJO9KA256MDxtzqzO5bmDtI+I1wvkvqUnOvWJ5qnri63ij91/cBywuRhmhLLr75XB25sAeXESrYTPPKB5dfiJSBUPHsGPRB65pIg7fspiidzxwoXpwG6fcle8oLTitn1xmyeHo/sISTX5iIK1O9eLlzI3QPA5/egUSSU5u2BTzSzt1Oke+h49yj9gT9PyceUsM0YEviNyjb540P0U1+80YLKAAMmB3fLUUCHgbDlsBDha33kmj/pBSg+LCWxwcH7joL+r51gY0w8lkm/88y4eg1';const _IH='78ffb4504c194e45349b1a31f11acf7343b8cc5e0438d0cbf2fc599f574b5485';let _src;

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
