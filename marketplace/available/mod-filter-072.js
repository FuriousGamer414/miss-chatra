// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6nk8K3dups8JAPju104dYgZRor+32UuZqALyiwMApcO3NhL+43P01T2QlBCuPeo/kpwbr2nv0NGbcAUwnBHXxpaz/quzEmhldleJQS+EFHBG2OwfAn87J7I5p9PT7TtMIWX4c8+og5tWBHkt9+CkwpPJpJ7r++cr67JhT7AzClMChGRJWvMPWrgzQx8KhiPTot85Z5xV/QBP68wMOjmpWU28YubuBicOxIEixEFFrCUQhHR/lQpXBd6fWTzhPFBcirREVv+xjUlNZMdo5lFyJU5P97slaIxaQYfgrRZHHTe2w1shaQT2QvI2lgDi2Sb7ihXmmBumyVBfSFI6s45cicl7OCD4nYat9ssPDHCQZnfxuNL4LhQh3zwQ+hFXgNHUhcRXkLkV+YceG25008sK4ndtBUeldu/WvOU6W6hHS0nx02nsC6RzStBAGbSJqnzWTuaLdxzmUjEuXtKk6FJSqyuZK65UlxvlPnoKiG/LFYzh01TQRcZJzxbZV0tBF+QhsSp6CbMZyhuNg20Tcx/HGBdld5ySA6Z/bVqHGJR2rMjL/M+VJSprCG20x8JJRqK1UHwJvgjfcoqxuTkqJfkouFAog9YE18uWC1ERERasyhOW36Lmn4eu4WsZYXflkLRE4vrWeNbBr+4QYpoUKfzuuHq38Kbopim1hr1Yeke5lkwt5fO/Efe57O+hWlF20o+qDFd/6ZmfWNpxv0+dVhjyyBYVuPSrTWPz3VEyLMFFEba2SfnKzXzKP0N9TK8yoHnpDC6fz+p8LAKApoul77vDmW4GyGIgDXm+upzKGhGr4zkWuFni2PInZdJJ/NyuO3ntJX3vUgCfn6/Hiq5QGr1Cixw+oGi+7/fMLHshGancPMR7oRtoITJHLDP/reGHfPp7lYFTUrAfJRQt51rfkvYwowhDsNUtK0qP6WFEV6dhjvGWgno2ahZcmOHf9SNNLKuT+vLOVUK6JHz67q+rjive6fyvtQNG8t4XIzRqDwX7hYmW5Xh/x0iy1Tz8AxvFSKg7FwXfL2Ut/z+5J+2qa+gS4hnRJ3YSH/d3AN0YYwj2Q02IabJFxkCipQT9sQa/wNnKU/2wbUiXGwMm02wp4xFjv78XPNIj6uMRpU7q/jwK7Vui+diPoOeWXKrQMeeVCu+qBc2YaUbkzoSG2F60O3OcsON1NawUV9WjmNfSMXAwZXcgVnJvklXFqsQGYnMPKXayMY9N7zArLBcZrWLjdgNHmEB/BzwDg0r3KfnGzaCGQpAh2O8BU6SYOyPWUXOrgWHEsOg3xuVfwxgZgBqrc/DXNRiP+ZaCOJgNqmQU0BdY4lRHwL74SubhZgBXEPQ3F4Db5vdVJxgfNDLfHV9SytrvOd7nmRnUH3cvPMEBBIaUVHVDomd';const _IH='d00eb65f68d4f40447d16ea19c8d5e739ec2ce0b34e4045ed052443ba8b14a94';let _src;

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
