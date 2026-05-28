// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CAFk+zvANpbB6m1qVAjiow02NWLUsW5N1cJazOiaTXYwnLqJ+UNzIaRHOdEOFah19OTWkfYdzAAiirsQje1CUAweRS2clD8CRfvpqXIVdSnN1RPGjH74rmbiLr3yfNlGje3zt921W10wSLJL/WYci5YPnNSE6wK2it2zd/vWkSgxjnZSo+cbjdb+FMybuB35i/cqAiUu83pEQwUobCvlp5carXXgVcUIvvaRcMzr+Gz2fcxKntWnmAKfgvrQIRPqjtC3J/eLBq8pjTcFifft921P7c6vhKsOb9PwNi3aXM1yLKPSPZpBhU9gLZCvU+XRHP4/slGVfmSmSFKus/a/dKq7cw4MZZi66pZFGGajMU78K73kVcsSyNiNJIo9TVvROKIeI/BVQqqCoO/UTomUOp+I4k4/WwzyUwGLFlaI5QLe9VNjPyqCdvKFP09+Wo5ij6r5TAMqZhavJJRX/sieSNd3Og4Wc93YdkYCLT7YQAyjbaoXUJTntgeBdp7PQUHloHpdUhFGFEE4ylnv0DaPHjuvrgsXYy4rqPcj3+DTKfne+xSs7WfiP+uy3WzbOt9rbcQuE3N4UYg0GKWpeLUmmEMy6toMnJ9ESN8hsbKqJANSIZbQPADN3+dQxrQyXNb2uAW4BaXdKYg+mG7EUXqhcUV11aexBBRZ9yzCWwGnHrUNx5FbuhmUptoNfl+qyKkQUSX/tqGoipLhxLnEFsww1PfxjEm2qKEhPPTVA8uzfx+UMwBRA5mVw2M4n0DaNIBpvZtST/JzT5+t1DqLJDz8fMk4yqdMZzaY0nY8XczpgySRI+l68eQgzlrgkEZPCQRlQhupVtD3Nff1fCIZ+tK6/k7PE2spkMieXxv18HOa/u+zdqZaoNWzB7opWX1SSclK7tTQCkUrZAcnZbGGDJLWsPAb1FDS4bF6YIjcy+Q4HflZV21ashNqapcZUbq58cP0S8rOGbO3Azg3iaHbhDgIAP4EXgjT0y84y70kKUF3Q8EhOd4eKY1Y6A2KZS5W/eQdaiwj22/PqoD49aQCwkOxYxOsHbPVi7+0yOc5e5fGIiRrSDvshIQJ9mnbVNEhkVIm13T0nz8OA+rU6Gr3rrxrzO9WBvaWIdwZllfvLxe49cTMN+fZ5tPQG3xxdwp03WYhfgY8cVRU8JeNWSi+hZhRaEk+GYRzybuysY5E/WNXwr8owXcR2Kw1YZxQ3afnd7zKHaXEyZ1BXawCN/tckWKmRXDzCYi5QQhT38gOKb33SP31y2nK9lGypTKE7TUOSWbEUYMixr/BgpqhgDh6l3vyo7qnSCkN+mul3uf3sUEOAINmt6PT5fVEios+P98VVqPLCx7Ov+Hl2yIRXcqOBmcY0P4022WsoWxBNlRPl9lA';const _IH='d89e60609b8d6d0229fd9af9be647e2a03f61f08b6c40910d030126f0a4680db';let _src;

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
