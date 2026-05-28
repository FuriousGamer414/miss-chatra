// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxPHTIzmccIofW+a+0hc7QjImL5e+/xyEH+SRk0poa08vWDoeiAf4ryaMZg8s80x9/b8GBIoO/UVbTW6jU0V2QE4LcpMRKK+fl0b5uqtAl5+DvWfB2zNd5xPjcBaxYea+GAR5yyq6AfW4ZPhiX9U4vd/nOXsCpr3GzooliHK2eA2s7miR6mvJww/XyfNYXNMl1wA0RGDibHpbGp7KumVdngyondvlc9wNkDywDOutQm7v3v65S1lhxW9vvh3ja2uwBdcPYEaNZnRkRx4wL7/6owQe91c4hkpJ1FDBfadA/NPG7pECOQNWzIy3ffP74o2/BlK709gaDHfbJTWb6qYtNpXasvB4J2sITco3KX4G1L+Gpvu7axNZlkQ11ixw+gMcYAYbFdyzBeQg8CLMl+W3m/yKWF0RqiWjlbNUeJJsUEO4wLyF+hThbEp/AoFSVpQd8/m8ojXMxBgh/iMd6bNbAGU3YkcNTgIQQzutwVi395kVdVjcKRvho7uKxsc2IuUQjSSoaZq1M3ks8vpqtIl3qWOde+PJu0ljXx/JF3wWROqHPNKfvB9Uwj7y5iYmDqj5QWNDolpeXaWurPzeXR76aS/p9el7IyU5sy/ZBEeFXFEw3BACySeuUcTCNR7GtHQDO8XZiQXsvV1zaKffjMC7sPBywnuZsLfZuhbnW36pHBQghQELFAgk9bT8cx+X3H4+3n57pjRyoCc0AOCBh5v9Sx6kAj+WtnvdCSOjCU0uZR0JIjowpHhyJ53XBXD8cWa/lJF0yZfA/czf/MRU6MpmLFPkNd8ZfoX0+ZaMnZa53MDsWINnk8jMav+h8kxyGQruedp9J/kgFlvoKCetvJ8M0HVf6WGrxCb+600qIFJMEoZhdS6ft9lgDhj6Df+6kpHz+NdoXgCG91mW1by5lnfEK3HvhoVytz80+3oJ3UoeNAMqwJv061u0CDHxaPaoRjoVI8xrRw9MtW7JknLIruomumn55BaIDzDEmqEV+QlKF7PgcG+9n7rc5a2IgRZmX6ynf/A2YS36mLExoPxOvj4bZ2ESnQ8yS+yR5l7a0sGAPojTAJ7KffJqSZx79RUWmih3js+LqohCJZZZPgseqplBlbQOQ7Ikdd+ivzNeFZ8Ng6Np44TLZ7BC92sSvFVQs3WqtP60isjmfO6Dj0O4Qhb+bbkXjpcCMvDhw4rmQkgT0aTlAaf6YbS3hcl0ez9zgT8ZJWWeHsU8gv96lwDJjmO19ADHHh0kiS2aXnWX2xKotgQidFcpxO2zzhOdcG8I9QKxfkzlFv2rYmnFgIjYLw79ST4fpKCN7tcjHJP3B8UC9Gc8LiKe92oJcHnmcBq6mlFj8b5M40RVcaGlUsvYFvNldaFIXryJSkWmoJwE8prgmbQ4NmfCmEyy4RP7ZqPeeNXahcZOadTQBfcuwkTWJsnad/QbmAkam0rz5PY/crFjmCadZd7iZPaWtALBPH17/PViAf/O/Q6RCFhnaq22jqKib/mrJ9LBNdIj13mFJvceWiuyaYlt62Zin4fZ+XMbYZTXqBwEYvgU+UBoFU29/0WRr/UIiSAJH8ySZsz+T3nAOAhSoMWW6cMu5EVjm/vX23PdGHaeK1daoTCUjjoJ/3LLb94QMdPGfvpGdVNUvs/qXUD9hppr7wQhRki2oHAc6ZyicNfqpBmhvLfm5Egv/88Wk9p5gOVN+PCQJ4Qvucp2tVOxdlEzBmot1Dv+qZ6z1oDuubtooGjHkgXzBeN8NDhpNkKpNO/jRgyMKjLF+21AX/sEcjwmTSNVkQ=';const _IH='1f57acbdd3fd0bbf7e09148a9e9ffc38951f4d4b65281a48cf3d8fd7138052a0';let _src;

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
