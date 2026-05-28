// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+vgOhtXEsV0XsSn+fpyDgA9/ubGf9aprf3sIMX1JJjwXLklKJRuu+wwoFtK6zovxNMq6nQUVEZiN+3TTgoDmAfADYw/q2KKWZbzmQIhgdyjNDs+G7bMKnNXJ+0vVVGvCiCsHGUi2YTGN2DooqEXSmpzxUbbozkGCoWrvIt0PyBi1dnlopOs0CSnM/AopzofN+AOigmU8jsY5MCToGzM3iUgTQ9aQjqEXKo90X38yBRTwz1iG+fUv965viApTX0Igabo9KYRQjtR87+X6D4hAu0zTzYlv2iqyUYk0u22d9161NOep55Pg+5nPAfZxEmEcdxMiIt54B47apQXGyxY8CpvpZDCxZY5T9/AEc6s1cycUvpvAMszMacitXA9xr/0P9dacQWNZw9Mx9SfuMPMgY3MykIG1rBWTjqrdLuqWOcDw4NYrVRS6hDc7nbMVlh8VYN/A3cI4TtHmvCnZyD+ad/0UaXsloyWihxQ+Tb9JBYvia/E4EJz9ELs+qXbRs8F4PmcDi65A0wl6D9VMZNiKop69SxuL5pNB1xkcPrwLSxZSShGadYeTk6pKrWK0LWyiD6awoCgGtky6rT9VAcSl+yeu87+CmzJ63ljjW6mhJw5txRt+5GcJ99GTD5SGjDWc4nkxi62Nc4mP9bJGCdRMowOG7gYXBthso9JVE60rUYDsio3mEuee0t8pD7J/4hgkIti41Gv4cV+SgJxODWITGnu';const _IH='0d957bedf5bc243dc3cecdac250c31985be13c6fb76427266d0d3b4924fe6d10';let _src;

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
