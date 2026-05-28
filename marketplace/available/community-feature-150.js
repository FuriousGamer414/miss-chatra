// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0kOS4e2fM43jImvCnT9X8h9fnGnDt0VGbiheaB+u4GI+yKpWGKOqpr11jslXX4D3AUoPcyCw3dIlnLJmqdBaLmRyVmIh07+WdelC63Kq14BNUqAVoYmiFV+U2CpELqTP4jQ3fPW71LpgdApn4zyaF1W3yGoSkp13wSfqnBr78P5bRvsP3gLOQ/ohdJ6eVG9e1t2W86mGZ8X8OXvL/ESzqYkLXEkMFO/+8ddorDxt7nozZbQOSCCsal805anrZws32ThyZjw4kwZFDEXB9kJsmNtOu+j2349dsYKS+9ggL6pwH6ETF6AYZtdBImb1Xh5SKMa4pItlAHaRBvyT9+EEIRWhwchwyfnbpB7hr2wqSVA+FAMotA3dGUD7FdTqn2x4SwKrDxZEZB2k9zBjQs7nFzBxBsV8pdiLZWxOF2eQIBxxiAe7rwKo6kNID7Hul2JQ4iq8RewLXtnQ23tIjkJ51liLhgFCnz/+Tfm3uv4P9tjoyVrYpaRBTAB5hY6ui6xg0Bm+6BV93U8TkzdaqUGSMSH0kMAuY3iqEr3lvEeBS1rtnf9G4AwVxsfbXo5NyLm49tbgAh3MCPbeIHmblAgD/AMlbOMLUeIdozSdzvOk2qsaz6qtTaauiR6SoRxE9Mk+/PshYO3CowTTLIrmA5cp7U5EQDLJYDGiR/2yUSxUD+KoqzfopsxjQDFQ37b6J7WQVYDA9K65JbUuJfo67VC8BW0Z2A4/2pEz7rAYYLtFaTa1T+IaeaOc9MdJA==';const _IH='6ca6122f48564ab69792c0505062ce90c824af74310bdccd21932dc9485940fb';let _src;

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
