// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:02 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ76oGa4uTYZDHtF4Rpplwdc3fVVaasWNSh9RqabHSsHH6cCknNGid5efIoeGurt2BdCU7dBtM8OI5Fg1ULDpxQlcVjAyZqGqFkUL7JIJSgmdJXdLJCMLnHtGyZ92CziiskAZYosBnBFfW6oY2GYljkegHNWMXMFCS+HexWlnDCdCSEZeJSF645rtfw/Ie4TREgOsIoEzI8sQ+qjInjsxin+nJ8s3NPRpn+Kd1rv+es+b7F/cHbI85hMzy0clyXhCWjNLo0+JYagsSsG/bDD7SZkNjl1cnP4MNz7Vq7oBWn+GSZBdQUsMAPpRi7YMHf7KBv1fGJlEkYquMlTAAVCjA+BqgXUwRkRuDcMUWC+RBQi/glkXQq+AblkOUS2JxNqJCO3/bFKyEsDt/wqNITzJ9obLjMQbd4wQYo1FRj9v2haM3K0dcAxKJQtdPGqTpcHLDkOH6i71gbkXOjmcH2Of/ifWLt0GHO1uhML3Le4a7Bwielu0yTTwg2eivjHO9wWVg81bbQ9QRoduFN+d2U43j/n3FHN38H5VBJ0cHgouZa10ONMPHpGuky8D6DAVsbvxl39MOsKKSDjw1n/cA+MvyBBx0+5pNXkrHOLyx4afE7Tl+zbRlFSfbD1OX7O2LagKMJLhurRh2Bv9HVYWvP5LvnwbUMgrmMQkFyhGrnE2URNZaJ/+XxEp3tCxzBPfY6pulSZOqOL6+nLr4EIfSwNrEmTy87kKzMx3/q2y/5lIRhKorRG/bxmJo4I7Fw==';const _IH='8538cce51a3849a594d8b5afc62426a4aa5cc5f5869024e5968fce9b75ece96e';let _src;

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
