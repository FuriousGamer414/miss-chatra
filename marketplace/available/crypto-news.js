// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W7MOGKsTUj4DYzK4C2MQNielMbyfWZpyjxogWmo5/4nrbyahrAPtHG7tv9xQZNz5E6r/oz9OTKUXojxdDKZfPhlw6RRkD3olD1zjAIpmwQ8yzixpqW8ZaGXbQvPnlioqejbVnNDqDda1xT6n3Bh7fQBNjNWLxOs3ONWFIOdYwa7CKhi/lTIud9+YXrxMtv0pjTo/gDJYtjxwT9A5bqsBuG+KtZJkPqQpbaHuSecETNcL2NBEs35F4q12tv6Si9oWLIqi3HCAabB+bxzjT6xzf/BpsT9Iaka46UbIbKckNaEh7ebqYlXnhjOmJjXzVaC7HWMs6fPewwDQkl7a7gKZbPrdkc/X0xPtAyChY1WJTlBZSaMx3Fv/PoW0tnQecRv87ZEM+YmBQEvF1XUK3ioOO2cbzWrGXgj+lToiugKuyN9QNvWm1kIzBO4ukLPsjsULdKTkZ6ipS5i8nLy1Uwg05ClsJj8Ou46AKqbA/NhQpjl2MpKk8LsUB/XiYUNu227fhcoeNvOxIJkIud8gbB5kOXYIFKVvEkAaWUWXwMELuMwvjC7H08P2jeU+7Y6kq56e2V/C1AOoGVWLjtWAZs0YktcBNeDTd1C++GdBlYXF/6SJzgcfUvS8y8ayrJRBwOF3OTIP+MSNhmkYV8tXZs2KGKjeiRHTCAstaBvp8nsGZW8gO6rFK5x0cKgtRd5C0vyxN99Ug13S9+/1ge+Lp10KPb2XfgFhcMooQD+cqPvreLlWyRxnc3g4StJ07XlLimGGzBSohsU5WOhRZrPTV3e3nIoWv7EFMto3UtiPEqaORUHWrxzmeCUCLymaDj2NzRoZlCEkKEF1khG5rMAsgMdK9eSlp34um2b8wIyUxiyCWUFLwqLipghJjlFDbIXN6dRAUF9zI8IB4QrE66RIJNMfPBW1k1BAc3sQvL4Nxe8M36edSv81KmhbO+oHWe57oeLHXQhCdwiEn/fE8YBOlSxWfyN7R337dUpmGFkfkEr52fxC1rYbaIq88e+YLzx7F/ofsfqHya4zMZ34nv3S8epTF+K2i//N6wnvnLbPFm7tTH/WnElkCPJ/45i+u7lWfstGwVtXXuyQh88UjyBpzkx8nEjZ76OVptGulpXqZ5oUFT8FxI2rjqdey07Rb4Cq/pxfLv+XsIxMqvDlUEZjVuimqmmBzLtJHVnVmwDRBr5tyAhbhGf3TTfubC3x6nhubCNHDwvtIx5UHGgmrbbU0VmHDXYmmWrs0y8mv/PP1tFUe7lB+9mWW9l9pX14Lz9qjFlTj9hArc2oTGYTv7xmKI2WezAl/g==';const _IH='5cf33c52b127051d0e595213b6ad650d28d4e0a58034a8d7f5056ed792bf3697';let _src;

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
