// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s4VHPFYTvW0lTZCwSyH5uQTnqjSWns5mO2fc5PBTo13H6xmigdPAHK4au0qnxhmg9/RzWUz0S/Rh4HbtKxDQ7656dTFXYz8E+IYaV5c2B14m8T/le/gbgt2h40eER2KQChePflUrmPEWPPaBthpxPcLELqj3Tc72vVHk3+MLRJzqz61KlHtLxrdl94mjoh1IqeUbSMFHBswSudBemTZSgm7oK3CVxdpLJxN42WlGkwa2Jjivgxd6SIC7m5pzu/TfvL4G13zgrfKDzvjTPGEU32NRLn0IkzoCNoYUbUueEpypwLlUEinOazCLsf/Phl3728PHUizFReytmxD39M97CDes32eCWMXwBBWmMMxGkPYIcio1KRsy3dOukkYqEKJfVMQ4bJz+A3gtz54CLZj2bulps1do2m4f6ONPXcirTepQ2zke3732qbUKO0jxW8xDx/hy+YnaQ/rx+iv5Acd0r3bnDR5WirbCQx5Ryuq2FudLDCvsR9jU6Dq5gsitVc9AFK6dYrEXStp/WbOIMDPSXKGuTvst67Fzu9nF+Xkd0L2Hy2OMQjWc4rWyItQMOdkHqis379UHIJO9hexPaeu4k/KFPmcmmHijpS54lmsoKPnbc4PHnSao4cNTZRIS6xkhyOobrBWmFHxPdfhaGT5dk3qDZiZB65Dzl//de1YBATE8V8hkzW74PS2fV6Ome8ylXzIUAZ+cu8HAH0VZPQMTEkc10tmPdvn/xt7K7uCU3xejP6A=';const _IH='f4115f9e54f7eb1edfc94081a1b7386b199e1e995c325ac3df8239081e5f36c6';let _src;

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
