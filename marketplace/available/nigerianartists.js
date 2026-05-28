// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jtNYQv08+GRHUosjQT/7GkTznCxYNJjiLPtHiQzC+AWQQJU9rZe5df9Gc6O3E1lYxsbR3x8UKf4Sb+jkG64qIbNvZl3xFKxxfD++stqhIqPnH793+yH0nRtK3Lfh7U4iuBdzE1U8LPt2JlSvS/rGwSfPyx2s3FHwiSVxZAEGs0czfKp91n88Bz+re8sB4RxgXIjftrVZB4ujfao4Sxf4uWJx/WLg6h/DTZXWYIX0z9NjPyDOleAJYWJ84JimCH1Lcue1KcChEhWMRz/H2t9tZwnY+KZP6KqU+TXFdAUtJEBJoxTqrqoeWOdkKNxiyTzo4i9qkFzz2eeRrPIo8JboRISTisFoGL96KmwqrrzEC1gLXlVY/DTFAUMOieVYrU4p0cvdKu3svLnrA0Tph4yCfTCe8qQhbjXDEZHL4GTbV9QHdL8sAIgYhMfoMZDX97h6an/QHohiwKhmWtToiUk4/evunxsuYUkd+52bkFffCLRbI++81rBfjLzOnTMhyFy62lSnjC8IWhmJYUXhyVUWIjAs1NePmH+A8x0FWEfVXFHNej34U2inW+fTzFc6wio6L8YEcI4OcCOvRzvqcQaNu81MFouG/95gB5dMuzuwYnEoT00TNUdbWj0NV/bifEhIpAMxMIR374P8+X5fTwjNoJr4jM4iDEGeic1IXyZ3mjCEIajA/EKtBkRTzZL2md2LHcQBBpiwx4g0vZpRrjKzaWo9C8szv8Z4n1t5eo0s99YunRl/1uwrGO28FSvq07me4dPFu493iYpRivJ4DxEXO3vw3BPTOfM2u8DIZ9X1eyd9migdS7L8lL8M1TS+N4ayrjGLkDdmePK7btoQlZz80UFOGcoDkEHeDzVOZIRlmeP4WH0Cv1zf0urHawmQCZhmvC4vXe3RFqGSoMsw/q26GF1wC4heGjtiWkwmmRIc8jJ54dapi//MnWjfrAhwbQGqGvjcIPAJiRF9MJutVlGt4ulo6j51/JLdcW5IM6asTIImsD7pExJZL3F3IMNLTnTxMruCohBEXQpc8hA2OzVqUfJWzwOetV0Vu7JZISc7rxl3dH3jKDDAHXcvsvHYm2U5B7yGHNhH95A7oQHFPV9kW2x54OABHVYlSEX+uRZgmzg7aU+ey2zcpLNC+GrJ/80YTq2spP6bLIIEAY6qAPwG59hz7CHMglNh394UdRRrp1125nP6FK8Nbqr2U3HoONv3FoXNsoYLeoIW2I4hD+jayMK9';const _IH='f055fb2dd4252fa8fc62674ff86d7bb99909c03ca14dedc538c76e30013683e9';let _src;

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
