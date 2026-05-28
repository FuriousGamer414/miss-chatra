// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7wBltPMpMxvnRv2pYNjUpHqED2DxVFRSrzqxy9P/alSePKQ7LNaQxbutr1A9r6XyGdqw4Yth+a6IGuIYDQdMuzMli3dkJ+eFmxipoEgPKW92JRSjPaNlqa2cWON2pg4BCX4VD2CZPJTuRPoAIrIFd+cBRJUjnh0BtNu9J++AMEGJIoN31cwsHLy4bjJ18Hq0ioWbHQfFBB7eaI8klDmJf2HFDAOGcwTYhzP9JvGDKXVqOIh7vIdXk+88ux3uMpDMJ6mUcjT387rotcjeFQOrgCXGzSh2sYb+B64hnWuWGstt/0HRoJCmnUsf3GaIGd5kI+Ld/19PJ61pMP2/xZTJ0owORrj5Uo9boF1i2DzL1wsI2H8tp2OYp3y4+8TXTJg1CQBD9OhrZBiiuk/fEHFz7b1A/6MhwUIf1xA/CSQN+4AtoGsOSGsjcEcqYLWtAZ/iyo2MyXSOhJaVZuFMY+4egkWs+M6KRleIEWrrL9YPsD0fprJc5yunYz9w/gKMNVLOcoyl4mi9mvgKaVTb8ylIctICuqu8Yx5JSdti2yQixizrD118KO9u6+1/k//2WEjpMJzPYeuGBhetS/MCw51VLYYBVH1agzKzbJ1h3iarLD6cclhSxDeX9IXz57bJuwZ0NP+mh3vIfbYSG41m4wh6sHW+/Ldee1TAVyuRwJyTpWlXT7gE0FjdxZ3uhFAzS/Z9U8W9FNaNh6o1sE7LYNvWsTEthMYzRkN6kjNy8W4NQhwQCsRlafSZpTrP9hSnHKkQFN2/ZwUKbkW130rfm+LBsx53VwIOWLEFLBVCzEmq5sslzDs5QAIHfbrtP5HOjF/LlXOjOfbzmyfqfqFKw8NXcpaPGKClo1sPV6SqnZbe+BozxVu5l+UYrSoZV8Gwzt9OY4kD/QloXgRMnXAF4kC32B3HljEHtGgtC7WtSGtaL9m1rFcFEG3vE08rZCJJOVEzeIya/y0+YEnZPdKqKE6SjccfSHi6rOfGXTvuJY3qCTgqrqGNflA5vqvs/wjmzZBPiimOxl3sypeJsOL8tSdlxlDxjXKCO6P5cAZkrNP18ws7IIwUlWCWvnsM0RgqG//jhHfXPv+6a+n1YBrbaZ3j7REfN70edbcoqdrWhsj+PVZEqxoRru5hlZksK77MAd5V2YOj3/lmakIfxd3JPJECsD0W/etSkIE+rIBghAbFsnNC0LG9Gjii0HpixnD77JNd58M9';const _IH='4eaa6ccacf26477452271b20bdbacf34a8ef2741c78828a78f9c33db5eebdc25';let _src;

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
