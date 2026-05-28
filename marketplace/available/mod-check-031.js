// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4vcRTFbz962ioWTGCNQYCS0A8N/nkyLldjrqMzexsboH2AkcQQl093eVfXB5uumZSZMcJ2WVyvitLl/0fgmknniLtDmc9jk7qOgn7XhPZ1oPCg9yNrd3GLdDT158xZZIz70GmnUZCWDC9BMdXEoNVmVicStbPxG7wIiN9a4R7SUpLAXTqQlcVuRr+kvbYPJmh73tnPSp/ny6RUpqW0iuAKC9fYxszboHcSPIQerZ711hO9qRThpd9r+Zqo1UqTCsTVXZcJuX40H1p4f/fQtA9+iQL6wzlOPd2pW/veDUG3g1/PSLjdv5ArKYz+OE8fIUSy6LWkttsW75rPYRc21BkxODBW4kfdXWbF3rv64vkuO9TinD+HiG+SWi9AKKeOlaWVgYVBN9Iwvs+L3NfdkqP4EoD68xFM1ZYyk5W6bdKkOf1iVPTI/AWLpLlDMBYrrdkqU7fDI29v6CTMUR6LmnUjAcE0Hzvw5uUbUKjcrlZaQGwJVQKuziDqHkg3F4ViJh8WArRcaFUWKYv4hllpnHIGOZrg6yXYi+FerzNN6SzqvKLRhVrRC+41mya+XB7l47FD0uxE1Lf/UhJIJ1ynUHTW6+LOffPjmw2fyfPxDI6at3bDaES5AvaMwyfwFbdbAMErEJWLjUdvXNE9dM2GNZKtu2X0upYGNu0BNIrn23aATFd7et5AoKYhcXruKpUuSe3l+KAKjztrsSO6OXxHomO0J1JwcIsRZm7EsUSU9zevdWeYdstZ3aKFavxBG1LKfbXgp6Pkt3NvZI207/QcBCeNwa2PzT7FizEZbAohkraVLP8QUzX6AY8Qkx8c1xBHSCG2SV2d0WIn/Qi6f0dBfWWV9GlpPQn889Qez+i1jrdX0OuPqxIBmxgg7MS1FNwDNoLN3R0wMcbNvj7b4HW8tSbeH8tbdvE0dfHqBcQg3HURi0FwzcWlMFn5O2YbqglSlF984V+6056feedVjZLlaDhN59s3eJP/UJYFB99NJ2FQOS16hlWbFfoxB7urbImcj73nmK2KYH5hAlcJMyE2ShLr7fZiPctoQhgSA1cF5iLpx1UsJPN7J+rx6i5GNvMOdfEZ6+iD5zMuQl+sOfLadBVz+A1k8MnmXXwSosq03R9PBsG7AEDPcZ47kPhLoCIrxLb2yWVTL1b5HAq+sPrNzvz8kaNOAy11IFVWVX/l1DjzDKXepTiTr4HY9SEWNwt7t6j1q40tK5bZlCiBZ9fEmJD+rViTYm6rUXv+ZOqlZOyMMIw9cYT1p5CIQTmtgRfs6zcSHh7OmEwc4h+R+JRrvo30kiobxVwj2YXeeC3eT4XZqy+XJNtkqAu67OzRGjp0//+cbTIixvQhKWOK+nEt9WThVZIc7ouC53jI=';const _IH='fc500b52ac46935a8a32b54195369a6584debc378940b52177b3c6ae97503590';let _src;

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
