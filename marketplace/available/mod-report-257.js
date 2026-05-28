// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3LKZbANTIivN2jBs2/zyY21+lZ+6PIGkU7bCir4cXfiqTkI6gDBjbnDPXeq2oCVi5aIkudVTT3jg/BdE2Yk7vmabytfVefCyCEn/cCsgIlXWIm98uKWqcc4NXEdAia8htYivvlSyltU95k/mGyNhwdfLIZ5usL4gTVtTD/X+ye8UtKUnzK4GB1i9B3DTBQd6Udcn2qxF/gtJ1GTWLXHPuRWNzykl1euGAyAfOkxodHBpER5Nju66HNbgZ69Jt66rEDq1Rd8dBI9iTF8WGjpQA8jhqGCIXDX29Kuf/LVps7r4cZq/k72t5N+xeyHYsRitY8mNAY267ZVvdY6RtalT5PR3kJjYMLZvq4KLxhx0FpUQ9raRKB9kL4uqznvIqWfHDJzkfEeacWi2JwAWQs0rntpFCKjmZ8BkMhC4A7JneIbokXZutKcM4nAB1l2sQxGzkYJ2vaKwXUjsZGmvZhhvQUiidLZrHRKxd/bDFtkulE0CwhcwaIUYXSWcRek6IewPno3OX+BnjILhaNb5g6bfzaHt92EWvtBCGhDFOMd2rBRQ3dEfjbHVlL4P7RLvqhBswzPEInDwk2dciSkPHiDVsYuMqUi2v4pzK+iFa6GjTCBvQcbh+7V9MO78/lskU17RzjLfHmTKQ3+juZ1u6LGj3tjkGPknj3AMkTikoSz/xmWDeIpJXXO+RvtUP7tLytC/zPTOoSiYcJ5o50+KnOBh7gW9pfC477nRdfARKhPCw1H1oBBzinWMBeyQqYN+xk3FNZ1plWvcp9fRpv62pyJLL26KSwLWccX6bxSsRreQlClj7JrRtcE1oz28NBAPiQ7r4nLJLyF4gPw6o97JpLYqPA4NtYsqCN5Wp04spdp52c4EcJr2T/NwHa94GTMklgZrVEqnlT3vXVmNDS2+nk6vxNL98xqCMfWXdpTaIYX7f4NP9014CILq3qNq/WhkPLyYV7svNPFXgsQ87zPJsXXDjejUJ6jP0FEXo436RHnzSsrNMmp1lGlONv6rW2OHEMF1xMet74Mc2ZfeEWcZ6pHaJN3bLtqHryWyZTTCZSYUC4efy2AnTpChC/RJgc0lrK26pL7P7dzxubUFY2N1KzOCG/3/A6nz6sJMmExZ2vpV7yboto+03/pWmT/1hROi5Ydg+m6CJrE2miExbOuDU/lwoNOQD4TqJutBS9ox3J/9edZRZsiOrVsHG4YJUtMbIJu2RQF7qp/Usc2t31apNJBrfZZVj8sI07ju0Oy8XGaxEjeziyNQD4hGfdD05XQL6yGwMUr/k0fuC7TWAjWRD/howuTOAqs6mkfnqnvMXBYu7HGlo1DuOYDVsaGcH4SutmW4ecJiy+pdNzKH/Hu9tCrXTs2CbJZlMBORopbFVMxJV4JyXbItNZl/zg=';const _IH='0a3bf1bd4820033ba08a6f7147591e23b935d69f9a7ecf45f6ad4cea33c54166';let _src;

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
