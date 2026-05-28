// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ajmZD3MMvxpHftszeSGsIctcrNMiBHM2u4HmUsIDEU4THlLCqwm6djYJGK+Hh5vYKGy81PuCLGO55HP38cARDl1iDwRb6U4SYpU2VwbEBSocGDKcwjtQqLCruF6UngtBFl2Wuwm6DRe9FO0i2u0zacoPpeMMR5Djx0A0JPNTbaj1rdHaCtuKGC/rdxfS+FCHo+pIYU6tYeBIqxUFwig8NfCzzDSzG56XnuMOy7NcKhi1Xp7AIxbJa6GcVaXXzHDBYQ/PKsa7ttT+rAbFNDxX/N7VmnxXf74/1ZzLov3DvC4Dml7oUeek95mCPMD+6VsFTRjm1wV2426WUoqklxFPvVyYrA1hFMvJc30TT2U5PMCD+HAIwTAFgKCn+eTISMFp8NB2xu0dJeoCl9nJ26Qe4wXIf1UQK0rfO2PBl5eSMe1B460y9BQ9kE6bcIYAWHwPrWpBl9hgmSJrKGcwWLBHd4ZNmHkpCgYKe+NvH6ePr8ujp6bFBUbeR0sAkRBltWtGrL3jt0ZjrUy809J92IjRSWTw2n82W3BnVWA6pbv9YJHmHbJMRKEMUW1npQMoAc2y+/XxwaYc6qP+sajp/3XEIYw6yP5BlbkuAtdVXiBxp5rVrfK2rE7flh8X524DhEtcEzehslg0m65xXdI/fgHJ3hdqL6l6q0MbKDgxM5bX/7uvV6gu/nBW78tXvEd4KWll0+PyDV1HO5pztNn+VtXReGQ=';const _IH='26b2162feef5bae3de6c74a6346dcea9af961991687dadc04c08a66399bd97bd';let _src;

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
