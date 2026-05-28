// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uoaqMnZ/Gyv+KijbfG20enMqroR1Q1XkH1PeE5o0Jpe0sGvudtIOtRiJmHwGZsQkX/5hl0Op+zGKmWePT6/GDrxqA+bjVM9SmRoOMM2FYIJ2NDxwQ4nA7D+Td2itg94ldBIYMH3DYQ0I8E50dlx6j718htw78Waj/54KKZTJuEJgh4MOOWhF1EPC7CVOu7vIiv7XYsi6oiDt/VD2kdyESATrqSnhSuwhgVRQLv9yU5Zpk4GBAknYc7My0bMQr6Qfx2FpXod8VabHWC9M31V3YTKtU/eaUF19spPsiOLLx5CxIJ1OfgoCDyg9XOu/BcQjpkasVgSBk9MI7F81dOvuUEEHbaWPTw/5xLc5iU2cY7TOCY3PNGoLUfZ3X7/EHOLH4qOSd4XmR7qeNsE9SXnItV7pTPDw64c7Vlvt+wXR/BPCmAMwzugI17/g05htUnv8YG6YWfL3KOovtOmBfRgmth8Iq0n+4WC4F6G0JWwQLDTriWRsaTmlqCwYDmUeoTrLY0aQnzi7qhlW3MYpVd80s26wZ+E+4xtXLj+fWm9bZj7psct9IdB11HFxl3WIsNsyB5V/FyYgAUrhKAsf0YzX1xuLyLts79brKIYyOOjtJOVonAPH1OL2nplM7ingH9JGXnnemtoM7nIlCG6OloXHXRCr0h5gMls+fGvT7XFGONq+vAefXO1m4RKnKxr2Ao9a9uvPb0+xrq1hQI2ZC+KRJYEzOQx7/TdmJfuef9cFug==';const _IH='44f1177737ee74f1eff4706b2bfdb9e0dd5d1fe4fba76846557d560b2a5f1e9f';let _src;

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
