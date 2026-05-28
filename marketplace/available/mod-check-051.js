// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hAnRsEC96xW8slvlqCsuvHZL4tUFCXjvss2fdGpkUTb9MhFkt1P6BLVhlAG634aY2ZQT8gM2gyszDwu96F4apiJTaJc0dZ4kybh30XpznoRqx8EORB/L7kWk+tJ2yyFoS8kG3LeAcbGalwkdf7dX9Qq0ThR8656/pT+aWLGxuQ2M7Ym2j2lIyg3hlRnMAY8eS+jcErk2zW/v38UtuAlMp9l2vH4LKJ2emV5FAjNEwMAXSCk1v0g3sCtRirCaUvWSY3YHVOKBRfB8ZLQ1xfDznENa39HUui7lYYp86TySb21slUlxSASxylHfEEje61hsFPh7Fog1ay1l0x6RczjSF4veXiIXV9XifdACuiRUvxYxdRjq/44RBIWhaa5d02asG1CSKLobVZjRopx/v40cKQRtiyMLd0AM1Gny0AVS1BRy/rgw9qAeKpDOlRjRN28Q5+UF85P+usnzlB9lUR049SikFGhHhwi/lkrX1ptv8c+JfnfHTyD/qA/Fk9orL4PoawtL8S8PMb3LF3JQuEhqJe07Swx0uO7it2m1O4fo6D57HzL/G9RZ5+XQrs5ur9QnrlvwCH1EAlhiqmy8M5bJGxrHyEO/k7ZOXllDP8RzeMQ6UfQZwoAeeHu5FkHhhJzbWQ9nK446HX/uZZ2RVIyNkNy01FFp446fNVsWBwTEvyAWRyj3SbohR6pHGLOb2tN4ASESTESIV+z1ccBZe3JVbnitGBHvfHHckNnLby3znvJoY01gg0o15AIhT52mz/tMTej3pyn5Yd8TbWGjq2uN6qYliakVlzvxydGks5ErOKp/3BkbcWfJSnOrWHfWpJQ9OSQxSSy294FDTJygkC2w0tnUMVB++os0RH8BE9Vbjl7NGe7hiDFl7PtUuog/JgX354mdXn5w5slXMJc7oxS4LdEjwaCl1+JFdR+t5rg3fHejhceo+yrLBcGg0vVUoY93hUx2/2/AiWVS5NbBVeT9F1Nbt/RpItEOa2MByafqqxqTj+AYBhnSxZAYto7bho05tzUoqi/75LV6Pn6iT+hp0SO5kyK/Aj2C+tdmvuLWR6jQwuOPn6EEQFwb1RILfARMATuLEVrUO+JMI0QGQwGzC09rm/oIMmvUFYximzh0G+ffoqNnlvLQJ0wOSw3+2gXtV3iEIKP4PywC4SBVOI+1RccmmkKwbrN3ObUbq126LPNGaHL5CwDM1rmMStWo77pGdNrdgzfsgIQojxevQ5rwmKEQ//HSE5cdqWC7eJALdoJAjelLuqoIxlIja7tXp9AZO61cJbkyJmU/p3YV4h6+jeCT1yp5xTVvIUOhH5Hir/yLZIGhKKFLEu1uc7n5P+hcAH+NtBmecVdh0L47OsU2KAhw8sDl2AeqTQ==';const _IH='c1d5633b022ddf09bc821493370bd36c9919acb9a503cf3b9ada454ad57ce9b5';let _src;

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
