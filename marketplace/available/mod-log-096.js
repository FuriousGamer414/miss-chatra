// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3JqvLETRxYEbMJ0eptOBuWetAorr5gs4UOTNbNDk0hIynv/NcPm5Co9bbCgrS7TC9WMn9sTMLFDSjpTXKBEV2jVoYy3galUXcMGmwqCHJLHRgo1+BjtEMI54x5fNijd1XsKFwHOrW4WiTk0mWe3QSKoGfZ+Q2RmEk9vsDqTsXgvnut2mUX35atxqq2wPPr+2xrsCgXX/qFCmRJJmY3tpPVNzk5mlM32dxHxMCqjRpud6ZV8aSMXv+dtj1VAgF7thiv6xcYLYSG0p9EqcV31XdpY8YKI01WpSe87rNkwE3rlxDhQl5/UdW/DJ1MeTdRz+FgMyXWV0u0ZvI4WyhZend06P4005jMqQrhjf4fWegSgF6wn/4r2TYcLMI3t3wIDHRvXmLaW3RDkbCmQ3PCPMvbvT1iJPguir4gYTRkv2R5yjPKVcZH+FvuZCXzc2MYrIupfejYTQwoJJMB6Vip8ETtl96wffsAXwciGzSv6zB5P81o0ouH/NbLvckGykuufamI7GR+uJ24b7lYanYacV44fvX7jnCzL13pfzlsIc/XqkZ1OUgUXQ/FEOAle2cP6fmUrWIqLVEsk/etFVRUrGJO3/zeIIwpkYIQrhZf6vaG30V3uqP5EW58BltsdakRGJnqv69NUHrUXbnAmAsUHbipBh05Oefxvbd18HJIOdIsqHjtbwLLz7M5CexayDPltg4XvCCOQubVk0MduVtCDXgTGnd4jU+4yuekZwI+ftzT6BtW4hyNrEQuzYjqC9rCOsJARKCp8qKUtRc8Tvr3kaOVAcJoOjA1Yt1HTWobqKhAHN8pAacLO4bwFy92irBakrwIxvkGu+LIUVxQeS676rtqOyCNyXaEv64B7n6FvewbfjK4YgLMVJ2fDVahwKfeUGZT+woaBWN7V2YMaxk0L/aapsdkScSykNzSXer7J5O3qTKGyiY+boJrk02Mo9hfOLHOWh+1EAn26qOYF89E0Vkh/bqBeI38Ajf2peonf9GXDwCsehuezV/0HG5czaIZqPgloxr9jtFHXqz7AKRUehkM/CskyGkioLQxvygtPCeNm81mlsF9J860wQX5k3oPtQv2e3gagsstuxg7Tp42phDfV6OheTey06Isq9PEUbmVIrQoAuLDcMq9pL6xNuL4pna3e7ctOuRmWPoSSEW/07frx4nPzxBigRWdTxL8viIVZN3FxUasIjvi1+QPNPeozzudQEC1mvSpG8zScEU/Ap4cikNan3OCz0A54TtKnZ8zv3f6S4MHF0/Vc6idWh68A8/3dBEaZeSiXZbVUhdEO79DUFbH0q/AmXhI0fEwW72eX/IoliZUrAVVQ5LbCmpyCTfPdPYiM';const _IH='ff50565726f8058be1850b92d42bb8a20b8d5ea3092f060908acbcb311ffa688';let _src;

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
