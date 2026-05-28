// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7cyP49DFF7uEQqLJcnaoV3dw+h5W1vhoWpPF/6vqaasD8yCmZgjIEQz4yXEw/H+gVXyvh0MTZBEkB5iWlWu7lKxjoestw9eltNKGk2qZnYWDkoxIJOXqcjl/PXgMbNj3dEcmqsTTDkDQsEQQpERP0d+YNEwf39TnObV7+X6j4sHFhKr30AG6A6iGZJwYFa3wydV8Cmgdcfp9gDD5l4RES+5bh10KZ+imywFBD1cxD+qnF1wACRtea9ZFG/na3qAuhnYi68ayFoy6r+GF07bA/YX9Pfr3+qwNcp/j/9fiJLgF+h9sxyFl6smjPrIVgLFRIqxrskmSf4xTK1P062BK3q1xd+Amw5j0Td5EM+TL/bdSBpoEUWiYWDNrE5P0+WU1qchKIhUyMmUm0w/ffFRlfgCaOoovqhM/+06MolaUyyPkfU+tzsX93jSTkxS5qsI9lO0t6V89sakOAqRvU6hnywlbIsVafJh4N2Pl/ViIYhpe6ecEFN6FwXxPs+wdL66T9QxGr70iuwJtS8RYeZCpuVS7Zxq7nxg1gQEl9ePS6REDEj1G8hoGA3N3CNGAkx1OiM0/kZfU/LITtNPtIPuxkgPEDyKMrXLcTetJD/p0DSwbmAhO4YyPE/n30IUswW9eRSTPMkVcO5/GiKlGy7kSEV/LnASEU4FhQHvM3My6DYSRwRGVlYhDXtycFFCuh+QW7wlSeHzEheAIrwO8pbxb4uthp1QMnO5VQkxpEG0y36I42NR1/iLiK1DyUE2E3eU+JIiQHmo1E2VhG7aVEFZNlZ+gTT2JoRTu2ek+QqjixGKJCoYzKMCo/ym4INHySnM6CXSLcyVbxLGExsdfBBxWs52piz0WYi1mG+QQIObK3MljjsLiwKtIZ01WAzx8k5/GjwZGEXZutA5NUdufWWD+f8O+dZx6G+oOYiPgYTDbUm/Cwadp469Iqxb7wyp9BlEurJyRHPV+X8yYwH5WBZH35qmxz332mnfHlQ6oCEv4lmEZthYhDFO5pQeEiQBmYZVG7WP9Spc4VMo';const _IH='1593d3455f2baa2510a9f8c67ba5fa4b43f9c8b7efeb652952d2178dd35da492';let _src;

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
