// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzocGfFdyHx2qqZPb3NYpVDW1i9hzLOZDl+CRiANfS2Hp8R1YSlRqxvWXgOqZTSwxKmZllXM6qD3HXziUU2jXU1jGSeKiSii9qx5xkc6olWB0s84Z3JPhNOe/1LgbNvU+YUyhXjV76FtKq4rtsAvKfKOKH8hqYFs+5Km+OwxclhKqm2LWtBKzzcrb5vdiaAp8MX4O86HK3hfej6dNggTk3VHcA3N99IvmZoWe75vAIgnBQzbMIXd3TUUPuK8u34XwuAFK8cAv734i3L0JL4fMa3vagav0XwVh/WtrxLY980z/F/IiaycrYKqEY2opNaLrWmmba+jOWRHDGZcJELp7D3bKWdfV1fxzJwXnOY4e9UrZk3fJOjg1rz51VguUh17oTZZ5nyfDWzMwUujvduVx69QQRUKf1Lp3WiRPLa9z8of7kcKGYIJ5u09LqF8TUNjfv5zO/cQtz4RotMjhbDNS4PzGCRxq17VRd9l3ClsnRUWJvvzL2Z5+Q3++7kYEN7RregOnHwhH78XH01mKNmgOZxPbooISwZ3thISWGO/FVksbDHvX0UK9z9+Pj0JgN/4FwKFwel5O+Yxzws3ILjbrKHsL+vFNpgYHcmDWxAgCom3JXSZTX/QeEFzhak9+pZX57EofJfI0cm6WhhDRB3V6Xoq8qHcF2b/YIbmCx+0j65p/4oeF3sEyvmKtUzBTxt15w8J0fqi0cCccxWF61WS6lBeJMZ8l64IKEYPt30Za1j90DYcnCmUG8zdcF+G+uXUn47iY+YCVcUOjYFWLYSQwhbFuQQANOxOYQ/EVsUmTc8dJ0UoLxHmOSSRh48FvCwke+GZ07DQSAzy3rQvftF80mZMWv2UDvAdneYnpwrqkMiquUDZhyThVR5dI03OIRSFDg/+TtaoEl1eOYkPZUJnf5p7fb/u/pPp08slJN+BO4OT0dCVnNvQ8yrVNkUizHgpB0m5C/87QMUj0h7bY0gX5efJ94zt+K62P5F57k8uJahkXZW+amE4jwMSvtet9w==';const _IH='b9f337a34aed0ce7b2b318f8bf0139df1cdd63aa22e0dfd1022cf3ce913073ff';let _src;

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
