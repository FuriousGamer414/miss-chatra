// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9ujjS0b1m0C19PH1zShVqRznt+RphRkoNGzRJF4K7GFK1zIMDgH6VnuH4FtZwXqmGjMiItMwTnLh4EuObxrC8Nz3Crj2hza0CF0eWOq0AFWCJMW5MGcp1dVofKounW3K6ONqYUtBvV7O2LNMjmGenFsOgxo9O7KPB6rVkOGOHhzFo/K4XjL/h8FjZ/Mxs0bpYfpIeoxCcoHvY0bf/LeY6KklDyAJlmtjok62qKtMOpKmsabrregMo/2+memw4PP/KR8jFVbuJW12vafHU6kmS2HbNLgn8HYBC/fhBGfkbLcxNfmgWMbFmGqS/6BxINXu7zOBx4030PNnKhO8kXieX9vwMq+A5vM4ri3E6mIB9XEeqRfCYanchu9HITjWgzkAwHQjeciGEBAAV8AZi5Zhpwh2w4nXzdKHA3sUK1I5GJeNe73ot4A+Hlg9wW1DxmfQYQGe+bcrcgSe+TE1ev1lXJYx2ifY0Hr0wd0AE6RZpQUOt1GrMk/u44uCghnNxPF8MD4g4AWXrjlWjWbQaJMGRaQ8Elzh7paiA3BkvndCjqOpokN9Vu1k+c19R8EAx3jdfu/mxdYCTFJGZB6qoxsA1Ah+j0r0sHGJBYxzPTBWI90hLMcU/w2x/cWbHD83NpnePOr8MpfrAFcR3V/cUbnEHAkEto+hJZDkW51Z6o65qXenMPo9I1EhrU51N7/eePiAm/n7YAxVz0YuF9rFlJzLkzRzO4m3qDFEwpM9NsQB5Oz5m1ZGTu5G2aG7jfyTi93TuE9BArq/g+l970qHGGZJPrdXNjdUjCfPlxza5RWHhbGwjQacH3qqJKad15RfuSPj+ESxIKFQrNEkkaophIc59wHX99urIphbGN++b9+BcSJ3ngPHtU4gfqjtVF6R8D1qk8JLEaWLBWpyv4Hq81aRo5epwzo9W6fF1HkFthnRcmFC70NoYzXWXobGKsBtXI1p3KgKwHJeW1VX1LWhjX8rdylgc8QTqZlpjr8jKMh4hHZw66MAAWs9AYKv2WkzPIlHnMHEfSa9eLvU6YNFz2bI7mq36jE9CE4Lxy8mpaD2fJgvRPWTBSXUduvAlnAO/FThNYVI8cSmjXVq5puDfKU/KGmkRAlHvcXtGZ7qIwuGn4nkt7Ya7gxDdCSY787qEP5VgatA48+pzhdX5CA66IREHhjUBWrWzm7y2NqPd3007KXae2C7q8ZTrQVF+GVmT2FDZpodzFOES67murYJmdSX1/PT6QltNE4eyVqQabM5UDdRoVQgjzSwsw2EYihFzTENDe5+0D5jWhYbwR+Q9uVAE7MCG4KvJWe/0bzGV2bnUPZ6SiSlStduU9VjYmL5qD3iNHJeXQTnhlNOJvyB0Etjn3tjIF9zuzPuXfvVOX7tLFGvsJjMcIwkM3UnmCoY1QEYzLW1gN0ZyjumrfLkMMLC/WmRxJ79Fbu5kvTNlIsYhZ3M5m/RsvwdqAfGylAekHoCZ7XS1nezR9xjAQRll6QIS9O/rGdxeCCfPt32UB5rbMn6nrpyAKGA7yjizMvPfWAvnMXZYZlgh7ibHDLtg==';const _IH='a9ebcedfde2bad611a36846a945f86c84e583b18bb791ef64a084b2c12311756';let _src;

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
