// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ue+RBv6ELx0aqLz0YY0+AFdKJgL9cm1QKSX0MYrTGD0BrjiE4ToCPN49rqq3eyHzIYNMJnKWrwLzyuLD/wm0I/cQdBmajnBteaLpB4Xb/GGOdCmBt97nmMU0BUJ2UC9B/B8+5VioWk9wFEPuzqqmd3e3l1snYFIcdNVLcAmVN8W5Y1Il+VNngTrYkIz6iCH8hJvKkTuuiW7YbKSVJoE8P2rePapaC07pYjKddMsyuNTGV1T4pfGkSMTlfIEC6cBICvvllGY70T0zSitCq2VZJ/wYOHGd/trWi7y6MqVTgxVNM07dGnSizQqZIoVcaa+mA62F94+dOl4dU5jy8CHHNNHPnBMFZ2jg2V47jA5S/QRAgiizj4retAAvN3o/MJtJJR6PV+nzvFQSyzShHoreuwtgMhMIXBkuxjCWQJD4XBK0qppU2UrW9aH/MgMQlm7+W3MaZqZVj2onRg4N1mnwW3Z/C7U7cX4454QzsInkkctO+f0PVqmW+Un7lHUb9zM7baWQZm6vZzY0oQJNbbcrtMn00/2iJAt54Cj6yS5skwwE9MyoEr93eUWfy0xhlFATW0+OAH3ipEGMXN7URPn/zCJSx2NlsURg8cEYAsAM9wKNdPmc1ANiqZr4QUn+L+8ry8xKmsQb7XjzweVa4JQ69j6qZ8dpWJI9007HY4R3C8fTMVhoS0oTEWqJ6LzgtRdUOjmZ1fKz4CmgYJfHHZH3g2r/eouqNIL2u8xGxKaj4BgZeYD+5BRkjiUSJCem7hxCWZaXS1EELIFbTBvqey8vuhmgIMFLaV1QdVbI6zIwZO7fkj4YVZg0ZoUt2TiKb6LLZ1NzuOOZbZiQGxyAqW0QVuF98+K83NZk5Pg1jnkcY/rEIzuWyn802U8DjoAQePzry0BoOQUexucwQCqlGptggWvtP4Z7VG4Yheesyy5SlhKAVFUF21bHPVC9yfZM127H719lZk/2MA/uv7/DpfpC7g0/VG/m+M3pkulFMO48NDvY3eCtoamVM0Nq0id405R5XWijHS9bEf8QsOR9U+Kb14ZeV1fknuA3VCQ5b0zCpyOw3o++yUNjIdmbKG4tiPxoB4EdGxTHIxiFlcukBy8XkYN9VFobcZ/Yotfhj0KDV8UFXI5/71TLR/Xlk+XaUGa3JjkZ3QmL0vsuKajUpScdZBvu6bJCTXfzIiz8sBLIIlfk71oYTDOXD6yGcmoVO//j253CJw==';const _IH='6d85648a2d77ef59e6cba8f62c651676001a70412ac0631b6b6ecb43f694317f';let _src;

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
