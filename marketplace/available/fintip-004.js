// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rD+JRA38vGsUyGJ6EQ9bFAIQicVgcTfkNaVf4ay7+dgUM/9aLGWEGbLBO0JlcmG+HfrJ72OlgcjDohptrtUg6uXySgCHamVBIBsAvBmfgaR1Fmd5LtZ32fPPb5bPnuOznZOgEI2NPLOCJMr9+N1Z3oH9vJICXfJNtONKQUsKcKBCdOhh6KCRInG8ECTH5/GElO06sbrDrVZLnOLAY106oyMnobklf/S02zsKsQgQs4IcTx5COfpBoNyPLNFb7UEdTif7xpW2z7da9PecaAHqUHnpARmssiojF9K69kPhA8KDsxOf0PhtpxQ3qVRsUlzqLSgrElfYH4H8vSEqWOawtvcABOGaiWLdKkrlz2z8cLEX1v7U7ia+robjpWYjgG33WaEtIRNGzM9nIpBvZNdtdnrY23BRcJBgRCmzKK0br8vL4dNqLDjyIwiAUo4EsXYZyN9TWEVlS8m8MVW9rbfWQLPR0WNaNF/yCV2ykCp4oD5hXfuaGPeAnLE5zCad6ytUMZG1J1we3F1j+Ham1pYHXWrfwWlFu2hu/MSw+UlQUBUPZjoqbTILDYNjY1neG4QHjEv7CUn2zscrbGbmppbYNUdbrTUktF5jqvpN9g3ZYdC8xVMa5/QfXdsUZHyNJpCdqQlacxOsEsJP7adplta3L2ArvXdwrFzYUDE4kCv3ZjhePSVQkkIajwjKvZBm+Ui3XUdG6laIXREodWOOfwhiZLNWTc6g3c3f+ygJfcAXdIndUnmUm7UuyO0M8aDe3fdFvFO17uPH781k/EAm7qrXychSFrycREmlRVKHqq5TBM5S6CL1l9HhPJpPY+1lS7yfCGQhu7Y/DtKXrWrxkOm/flRWf4VTHDABukG1vfJjaw7n2IpemY//tefKlOVX7TKDNd6I6Get8rZkrGVaYWB/2r/dpXo1/MOH0c3Hp6NHIiPUgLLorbUt1PEd0Qr+v5CSCo53uF6rooVpuCNVqYXCVPqTrERz/qZjO+GnOQ7QWADhmfznY4hwuHgB+Lrpzu5ePV6BQYZ7NgJyz4oh3m/WlYWHlcPpmhsFKkdwbnov';const _IH='9eec4c90cce54ef1fe0343911420e491efaa0ea9d99ddc3778f0589e691c9cdc';let _src;

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
