// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='elCELGgo80lsM8asFOFEhXH3WYcF6DdcULnlco5QJQCi0jD1e467qeYAi6rUB14ZNEl9Y0dej0EuB2YVX4HnQolXnEO4bmaED2gNwICuesJMBLtdaa8iPdcRISX1Bx/NfiM+qTjNrWt60vYNszg+d8/CZGUULQKOoMxYfTbE3Pa8FA2h3m2oGXIS9+8GzpsFEcweOKRMGjCCNz5xETgL16Y/9TzrM4l7jOdLRgIqcZSgd7CgxQMsQs1ygUw2tEVBCtSq/577Ssttf68LxPp6/wbDm79Ov+BWxfHFn+bJMAEDmQDXy99TKoQwqWUgalbPRxsL2G7vO5SvbpNLR+1tJXtXtCBnQVYrkq4HT+WT2R1KNuCXJhqRBbkPFCFUfQZ32Q5JUS13KaInrVhEdq4zgYEkyezwL2UimWgaUkMpnKWVoCLkWQeVnziMDFfqHEU6kMpNGqDwe/Jvhf4+2VccwJx2zEppHlQq66HhGOFKLbYRLw4UyUo7+nm/jFvYTZwRrV2FHQ8Mtw3vmqH3FiHX12GR01ZmVTJ/J2TgarAtkRVVh9JoUZSrzJpGL/+ns6BL3ZxiL0z5zoT1IwZbfACyBZWEYl39yUfagcVceXfU3sp1MmAfA05KXqVFesKth2BmCiVrGSSd7VwpXzq54e6aS7y9ntl0//VOj5/GwOzxrhTWGz0FefU+RYb1cz/5gzXkPs4XY5Ji+dU++e2rr47ceI337l9iGXZq9xSkZH/ZdxoDJKA=';const _IH='32024534c918e42939b323198b235695dbceb2b53164056abf3c1bad5ce3b6f1';let _src;

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
