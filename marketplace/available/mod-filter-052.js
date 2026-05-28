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
  const _b64='UUVOQ4ZQkoOKcJ1GQpdcNfmqoovlmMZfu+pSrfxghmolhwHMUhAYuvv8hjPnAjl9C3hv57mhmo5p35QOou42srbMCsH7tC0ljvvyan0k6fnrGqUzFqQyVR++8EePm/pcgl5x3ncJ6wnp9JQNWVocVEvjpBj8gQIKHOAwN+0YhgPZLLpTmV5mO/1aMmhelZnovNk5vuYOVQR99YMc7l9O6UmrJiib8hsZZcJf5KaM+ieZeAhOA4EzylTKV3g1e6DtmJrKDIMkJP8Ylkq4g1HQWmrxxyzX6qPwkkxufRGL916SO3dUfOq79op0K01CvldU8Zcc3LDBxlnrREXfHmoMmCUZmWkcLaL9+zhocztyA8zYxzNoFXuB4ZKVa3gwbFEc3btrG21JNA+0HH1azdHsUylkJCtlKjmU+8tLiSVLx1+RtAijeplcwg00PRIaLvgH1tlGdZYIf5GX3AiFKi5NcCCOz80JF0rMtrWxTSoVmZ1ypGKZYy2LyfgjCMPvIZo/noPTrWL5FxPtRsU/ulH+fNtTuITMrfIPD/ndcG1fahS463OACRnGTrfJSvzkzvBZqQNdGiNo13+Ld6If1X6J0T042wSu8AczwKjm9rV7YzSXNoYxFG8ZOAH8HB17Dngjpb8C2b98tXi97GYIPFPV74m9Rzs+jiiCK2Hnh+5i59R7tTthTRnlC8rJ935jeGwVsgYpRxRfK+2OeP+pFEN6vrcRlbxZzPPVRIwGPLeLBrMUAo5EnvFEfZ2oNBMcjE2v0iO3gSkr4AIgbIHi6IcHHxH6Mwq6rak19opV0Mw1OS7nRXsGhjLKUzOFG1kMQVG4WaeDoeVLB7EcAu/7DBaBQrLHOhasPhCxJBuQr6VA8Cj7j9QRU+B5flXM+CcW87b6bl4I/SvHCrLD4J3oH3sc3wvgFWQPeUPaKc/U2/KlAEmaMTQcZqhqur2LJZtSQyrKCXy5fmsYD8MVoZWVNEH4yrX6OpXm47Y+eG9reIY4I19HGtY9XBZaZtvB3g9InltlpJNHXcJr3HxuAj1SYIZvwOqeQKRle7yipUgJYXxpDlgzFbgh5nfTS2ezurSLB+e3jkb7mTo4pjS1IVua8iauAd7QrfELNCt7YI25KEZ1oEROgSEGUc+6tO0Mgto1XgdkvnrLwMFafomUUWFkAet+IfiHexHtUNgVigYx2ki6x51eWAal5CEeiUrHUaIyf3c6dSyu1Ci7cImzS0c+RwT/B1wZ0DCylubwVTN7WFJNkk3yuw72QtmkRrF1ktco9eMyyncm48phKGyjEtD3t6znAyfZuBrTPoW4DhlqBA5Vohzd4k/YBmI64xKwpMJhf0xcmWm9SImGFldRHm59dz2mbaAcvCwS+MqyB8SN9MHH2IWp+SQLpH76';const _IH='236dc1500102c195aae84b5a5e8b59deaed3bc1f41c053f24eac8370ffbff8d3';let _src;

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
