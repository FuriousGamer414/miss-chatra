// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ78Cnnh1ROURYQShkP5iHo/FHcM11p/R3RL2z4TTBj3AB3673FqrdPa54C9Q4IFTFsC8a2u8wLPiMSEVZ0KdYOsdgGGLg/VbXrND7GOaOINddWekfcX/fk5OM2lIy+tmAt8xhnxE08EX803uWFoA2RZnUIk993rp/W+gS+Zs/n/E4Qk8OoOyUojX7MxMYq48qRZ9KwYRhgmuxLyaTqw6PinSESNrybyD1/5o48d1LBlktkcZ5LIIldi5e168xJOvKTOAZtsXVdrRyQsCKp6tMh7xDZhjtOFYpvbTI9V9ie4q65VBF0rFZqocS276vXD1v6pEHNdImqm06D+X8n8fSMxNbi3kzl2xGoecucXusQElmMxVs/nnwo+u3Y5bz1oxJkSFryOb7nfkI41Y4EdYslpspzCMxOOQbDvlAM02BD3Z7XRBCAv61xQY5FjAQ7e7mud8BuSZiaV4hYu+MwBntZ/74yijHkr00cCKqAdogM81dKrnti9R6LZedmQr6d+3G0XIP14n9bJOyn2uMXcZBlewhfqkJoU528pZOKy1u2AG/vdsBgNvT+8Fw+fUvhQoYAuAosWPAuBQ8L/+PFLSL2LKtxg7r4DjDQMLxGdismm6hnEKy1RRadnlrorRl+hMADQXq0/hmmlmnesw3U+yBaCZVmaSQlLIR54O9J5xV71HYa8sNkLgP8R4kmk0sRJN28uKjhHf4hrgD9e+lQ8ZjxwokkabSdEfGxoF6PAKdXyMyMSvsZ5kT25uN795w2I6cDTGM2cwC5m28dEjHu212FbQS/dIj01AIGquor/aB/jl5vhcNTt98Z7X63x5kv+tJVMOaB/fNAox/FG5npMhyJGNY/gDd14MKx///tgqV+pPHDBDCynxD3z6YweLERO2A8sM2sQa83PcjwddBXCgdcLHpmaZsQL12hrZ81kWD0baOmF3QToeTRolzrcdjrRlSuqI4EIFgK4bug9H0TfUfVWYYh7bl+BWQwn4wSeIi6G5vJ4uBTYba87oxT8gTQe56hJwZyw9/wziStRZiF5shq6r+gnZx8+Md2oxqH3pAMpYRtfRu0QqfDuF3qhMohS9oOSNKsoBoRV7zMjrZaHO4EnpvXj+m/6EiLUbU2cE946VMVdrRh+gKqF/jPhoLioYTgnMqyF7EOF9Tu9sz9U+rlfwJ8iGestrncRuj+Rg695Qjco81GLzZInVAejqy+YNm1rAMKd1QlmOLkfN/0E=';const _IH='f34c911e91ecf5e83acc2b2aed2078ac3d6491c270357fb655f71cfaf2cb05f2';let _src;

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
