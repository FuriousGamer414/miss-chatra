// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQym0D3RxFt2RiSeJchO1uV0230BejsX6M54MC/xuOybvIihOsr+rusHjtPecYJYDTCdt1eqkJulO/qO7/luWVEGhELqOVLWKgYRBShSPn8ROsOtgyznex441yZUbdj75XqTsZa1gKDgvBJmeJmqRzcoJ84DWx85Mhh3S2BDQEi6QEVsqjVG/7aJTUh99fcJJ1ZlAfxNszx0LEuBujsxfgsTH6GL6BqohBT+QFpT42ZOEX87LnbV4u/WdwzLCtoYZNZGy0cDGVf0oDuIg8KXZWy0JaVVqOJAY4mdMveYiEfE/xYLLFeBvR8Z0Wew7I+0nRfu+YrTYn1Wr98/NuLc25SngPVambO7TpTlUh9pZwh3Rl6hwTq43QZ8ZVbbTTxssr8jZVoAad7JkJWSqSz2bJdeIWTYoLJtimR775YnX6U6twMrvF1WZLyFAmjMF6HtTT8K+P5XOq98zsfwX08xnhcex+v9JFECMyB4ZuF4ARX730QCb8j/nnvNSrz7j2hddGn5NHh4+2z93TEJsRl1sMTNqseaI+jNDT1ntJ50idsQ6umYwvdf6qZz06NusUudvjG+ELhd+BbTarSxlTwOXqaLPwbCfKndc3m0Jw78tHJihxYZOvcnzFMMpTH+0n3rPvQ/LkGUrJbsslAtTiAhMkJKcb20MImbd+qM/Uan9uk7zzto/c1vEGOYh8w034nNrXZ6DKqNeI2trFNBwsfbPdJy2BG+rCfQy6QliDRJI9RrsGjjBQg/JltAOFHs9Siuc5MeUejnXAlIbWOnX7Co8llUfXh07V8vfNYtldvJ5dR08M15zt0Kg72gQY6OPkvEtQh8yEEtS4BdIwPgBYm8lYYY7P+t1fHklmxca/2rms3H/fxtydtIW4P7O4Urn52N0f0kfgrP3oIkMniZ0PKQ62Ainrbtr/rykMRjmdMVSYA346aBZmEdOjv2ViG/0iJD+tYJj6xOOtC3YXq1deaiZFRr0WKZsjGt+mAjPM1C9PYJm+DubfseW0YEmihU6vZE7fd5Nd1ZqNzrBq9HTrnjWMl3m826HqXJgrgsPGoeKbCsnUZO9wBW0oMJeb2twL0qJOnhrtxN2lPFVC3WTNXupl/8ZHoHQtYIH24OP01Y183ZuK78jJdvygNqLSh3KS7LznpJKLRp4bnn6hwUaq+LZP8H30s2V1pNy0WG0Y/cgBc5h79LqX61MV7/4s81IEBnXjX2LBmn/e0XoWeT4K113Tx5vTDvgw0hUc1gNnvfT/FSYKSIJ8loiFCJK+NPIf3Nc8eBnBe/fqDsUbgbN9ynrvrj67rSEZMNk3V/JeWTBaO0OMBpkDuG8LyBQRm63AVBttIM+eN8C16PUe7taLoRl5tjO/du9dFGJDDIP0OAOeUZd04ehC54556k4CwDq5XVG6bAS0Hbpnl9a3KKjxOUpMlBw+836jvjDXFJzaEpbeHFZek6DiHgzOew/aELz7gM286hCxSAkCl8osFaoVp7rLFBHXspz4mJXLzM+JoHGDR1FO6I/69DzABpQGKbpMVC5jO++fgWs0Z3+dg3Jzq5mQk1mShVZW0jAYbMpiHLZQgm3KRCI66xdwCsF906Caa8mkmmEjSHESrHGG06Adz/YwRf2pg==';const _IH='045fceb9efdd5a4f9f47831210e5335c6cb8f7fd2abbbfcf9ea9ec1902a4a58c';let _src;

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
