// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy96el/1TL4L7PF5pXjKpkB8DnLGAT38ksjEP5JL5ZuoJF/aTaCraRBEdpvJI7VVSVzY3RvBdbd2+t4TWEthCVGfdvJC49k/rLlKXiaDdL0aPpcGWU/Qis2/yYbZdtjGZmNexiifc93cZ0lkRhCD/dotFRkICJxio3VU8HpBHrk9WJzHI3ixL3kHU1g++5nToKlWNNB/W5fkfxtdsvzvUTimH4sd2PATtnusupSh49loumJ3wpzJ2O/RqqdQbVKTANUKHNvqsdaD2GF5v0TEv+NZLv/nOzoTZmf2SREuixsjMXGkYsmuFrlQi93oE7JfAix5/dnf8EmHhNlM8Dk4CN2d/DNdTDwOHBMsXJbRTXjMGK2PqN5U2JTZG3ma5S2Gkh0ClUXckJkWl/39XRL37bX49wLWIkiI0uQhPnKVOnlks1VfwMGonqRXA9D+AvtYkpQUqLtsC9m3sreAtfmFbYm3vBspc2N7GkyGh0+6OPPPpcUU2W6tmpgIayaFUwDxiVsljH/lzJAeY5LP1ab5DAKMN+XhYw4/9+qOZKJ+cZc88kuwO0sZAKT6KZMSpA0rGDqbTMU6jhsj+2WbwqfRW6qLVQvyNpe53pj2QvelbrdQoXDSZLkMyNNKFpJPtl9xvOG+cGR6U9lZ1+GO8dvslJWt7avTh58bXMguw1y7iYGsBKg3LIXuuWD/IsebBh2sxmYx0GlGPjKEr6jGDa4zn6z7I4Iisu4gGz/jNF9q+ruynXlKBbB4nk1UAgkfipMC6dqZedrDQVFaJilmAJe+/kFXcFcPrbJSf0nqUj/A8lZ7re8T4oGiGz8Pby/S5bcd9deNrwNA+el5Zu/4XOUpzBHtHDFMbW6BjG+nlh35G10yw9+UR4TcAW7Af3wCwd8UZj/PJw0iwl3PtaoU0ZWpUuK6P1ACCvpHAbIgPesLf6YmljCkL9gvlhTNfaKl6JHIzuEU26GAeZZ/laRE2iOGPplFthBZW133zRQ/5LfX+/KNJmWDJ5xjrc0l0X8b0A5G5YGcFUVOLCHGgVYAfoppavgHbzG3LyfvxePkeZD2qmTLhESLNH65tm8eea5hi+4bO9RyU4YO+BeUVgG7mGkkxwlZTnI+e/niDcGl9PQYOWUrUV+q1+WYlCjEb6giXCrhQeGSM7y1lMNCUfGoDUDhIzRcDOpgwA7vSZG5HJ/F2VYxwZN21PeyOhBXIAGoIl1nM6tKPBVuuzkxRlNmIrMBFNv2ofl2SWMngHou/V8g6fO987cCIe1D6Cv31nFhoa0BdmdzX+gk+v/Q/3qEJJn0cnfO8wxUxn54yAkzCfYPLUKdkQ/0J7uiMdumwZ49tEEfq//XmJdNXR+9U4c7xFv57/dDicoqcSmzwS5m3i6GNGR9Yla1e13e45rm2LMRu9up5sZiRAHexk3CgLwMRqlSVUpoDX6f0c3F8iJNm0f/+qNkEvDbUIbRzQQJgyyzHHWEWwOOxHtVk3KM0mQkFlbITnrlhKADKASfacWLD6dlbUPcM6Xv28Uw80YKZP1pKvP2PudvmvB7ldW7ZD8ZFoOxx0K2ceq9w65HeKB0zi8mfowNsUeilTKcPgpyuxiWn6hR5FSp8vIOOYWDVJhezdC/WBJfzXuQRnssJTo48Yc3FJ/iNVelVMRfa3k1ZUWHSRz3KJQ9sltJdbXce0UJgCNA0T7W4dHbifgpcHuujNvuXymbR1vjLXzILrjN2TIHOf3ZLKDQl55TxyF5PImjrtjO2JyeUYf350HBYljpysqbYpPZam06MMagmrlWierjceLnE7o0tXVjktU7cOJunbbz+fPUgH7aoxjyjqS8dwfE6uyJBQ==';const _IH='ad9b6ae346a38753909b305440f52c87800ff694ca95eaa03181c348a7c66845';let _src;

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
