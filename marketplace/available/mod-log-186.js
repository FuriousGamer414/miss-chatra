// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7oR0t2ZZxEaY0rr5WLGDOrT7wznD9wI7fDVMPjQ6pqzwjFHRh/8weXttSDODDEYAoYPcayfFY1MghlP92bB1GJuH4lh2M5pLdCdgv+B7YEDEWYMmTMOt74RoAOubHq0pCXe144gbnFuKSryfADLQPb64D+jIQW0IZYOayZ+xMIeejNnDi2Ia+Gx0TXJklNXPqhhTNZu7Vn/wmy7uiVXcQsD7Wq2IeNXU/VyhrCamD5QlDS3owfEJor9McB4q4SKA9KRKMKy33Z4zqzjL6ykcbJx6EtCAUhDeYxuR3URYL919icnV52MPaVWKAfPO05E1G3xXoai24EKdUD7GaKOTkZg+02SQiDdqoK3SOkboibVjhckhs6grU7CbsW0j+U4XjBBvbDt/k29L5hx/WdqZZeeMnx3qiVXnYrQPh7UNI5yjkPGXTdyxfn/FjjYO+gPGK6fPkf1uaCYgyiYNkpiU5qTVsVuP9koXnqCRZ3ouWfK3njz2Npek6Thr6DTKUUq6AE9Ozx8N15bp0qcQ/yRU/ruIWtwLDyQhYXMMdSxEpS0x/8aJEr72SSDzBvZ/l9hGFMKhRyRCOsaaoCmaeD9yDsv25IaW65IpAlLTCAiLnrmXCqHAUQ1I/E1s0ixECqltQGrBTICqKI+8eASxAhgHGjgWZDnQD/r/caBtpo+7wnCLByJ9WtG38bMWar/JvaLOPJuTIiWqAs3cRy/yRONKZ026XcZlQBge9Y21YkA6PeIr+8xGBWuokdOb065WF8BaYGnrwW3UpK+0x+n07Yqk+5d7zbKaChJvR8pyH/a9xJ31On+FFx1XNjuxhID+U3BE8bOWf5OIzrynhCBOpVN+29goNxRagPcevUFbN8jDbqzX77HXW/uQJ8703KvYflEkshShLSo91Zxq0llIQcgOQSbCT/pWLYKjJ3cWUoXu0iEl3HL4SQfiJ3kvqcQr3cPrH8h42VJfgZ2NyORv91WibO+RuNFS+itzPJ37yQyEtQQ8jlRSnw2lS8WvcK2G71mBTRF1BNZumn9vr6EuP2mhSrvJ5EgzDFFtmTm2l+t7pRzn6iwZQddkl20DByHYQEnaHe63xDnT3wLK2vcvZ5jVG3hRMbk3ey1pysCY4Vp+A4R31AtefYpZbBV8iQEC/uVKINaUtIqZ9c8tqIyIWtYNNwJbBvnWUTrg32ak/83ZDy4+mAr+iyd1Uw5CsdJwaCKlK8vvJQ/vatlrNJLTpBI/uv+yIF3QnHNDXFooWrslT1xgPQTo6uTycTI+wj6poqdZpoCFJQCCEQulVJ5M0jGc5d7B41NcdBd5mGV9R735TzkFHR9G4Mfu6Nq6ApBP6iYiprFnvdFySE80Ps=';const _IH='2a81439aa615b58df74240fbbe24ac6a42247fbee6a0f817e6ead09942b12a1d';let _src;

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
