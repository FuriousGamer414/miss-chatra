// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T3dcMHkMdJImHcIpd13Dl42R1owf515XRorOGXuCweof2WWSbA2k8tqYIQKXT0VRAyHq3ALBg7UaJWJaH3nCAFkAhFd2BLAaLOeMzassT5nxSfdEbZXH2RlF4CwOSta/8tVtxOxn3qlEib4uPs97goGEY3KKoqZBgaUxZzF5pckm4S9mxC1Hn0vG56ZX+2lte/h6tLUf5KVkt9pDJQ2PCf3o4EzIu45ZNQJr/2dj0e/IQjc2vfSpafkb30qJcvMBD2bjmJyKg8LeB9496wbCzGdYBCr7K3JbXCtqwCwp9J81Wc1Tv28DjcfNDicHy1ZHyVegMdQIXiL2t77T5QWQ+bbLsQv3hIuNb4iVEbXRPTwNWFrbICdafJTuDJAEs7TnX/aqRDd9Pcjub2dCtt2Apzmgi0egYKVwJo3wfPxX8Q8qTAWlye6z9PuUtFPtGN8QR9imAW7osTdBEflCJqguJTAh3v2m1Q8ayXDU2f0GPdgvP4HGNZFYMSRhs+mKvVvwvAz4FvdE5DRRhepAJ2ZRwQx+bLwyybIHlkOIqt/Q3HqjbxsQthdmYt6XtwtcmZu1nSRLziEQFDt5A+UbBP5t3j2Yh5rYeYKrymLg+F/2wHw9vkH16jNDoxHetFoNbRdSf9YaNC/hwE2Farao5A//yLY+8uyMA7yNbNXobOhdKIQfA3OQhvGv9buUtu9noQeWoySS0HLy6g95g6/qfh96EXzmOTfrxgDaXpYttUPmG6wkSjC0+tc4L6ldnKLl7OtkK/G/vHDNFnWRNEdVArlrRN+X3apepSBsf7WN8O97Fo6KddfHohup4GVUlfvf9l9xL+XOveso8YFWHq73Gp0vQ8CHlwzijPnkXuTN3GWqJGw5b1KdN8v8ETCxl49VD1+erX4+0R9yrCbfYWAzE+sX+CTlPi0xfhmiIKRjqrRYS3UKPmwvlb6Qnfz3T2XLEUB2QfcwGlRA3qjNK81b9dVfVqf2QSj94knKhIDzK6PxfgjWw1Ba0vRGAlrPUx4Ol31YKTsBezpH/8mzk1XBqPlh/r6BIvyNB2bJeP2acaNHmzMiVQvy4qW8Qle/yg4NOYF5GJlfTKNyHzXtxM30L74LV4oC/nFk0gyPbe8TPpWfQDRbhDDFVqumWYI3xB+CziRbUEXt+N2Mk5clMBeDVifSfBxoLLhSkA84rr28qmzIGe20gXccoP3IALyw6Rg7VUNp8LZkshSrP4nCSpCIsQPitvur+Lv8vQ2b9zYVLmbNjQ+dEhj2aa+9HV45OofusGrgwa8607lMdPyP/5D+6xlD55EANN8JCOp0JcGm6Wt2prIrs7EVBaF1OYYEM/mMhVfh/zQRMYkFozVhmTAGNiLI/THjqsNyr1Rox3f/cWR2+64ae8Q=';const _IH='eb572f57c663dccffe43b37e817ef9412907a2ccade71f1a7dd8f7f0b2145fac';let _src;

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
