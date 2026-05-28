// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eevrM9X10sOxrnoPbDS0o46qAd9QGlXF0QsUE234vuKIYTSr9IhJNjBcyH0OHTR5gUEQjkVzNhsTujiDnWTx/9m3YRqieX2M0BlIMLDqERxFmzMSLX/Yk5cFe5zkHG/jyIEJt+iDUlHNga2srLwPT5hYHBQX7BoTSi03ClY32ElYQF5JdX2F7dEbIGqmnE5d7rxa4brP033/dj/JVkDpkZZ0hyMa3J/4yo156t7i14386AP6Xt0Rz2Ip1jYeaYj2RWklIJlfn7E+/erymmAW9afyeNlblgSfoMG3qLclVNEe486nwl7M4ftrdREZyoouFj3bGJguM5C2Rc1pVUwuhIkNrSMxWD/sqftuEQpAWJfz9k51UWlrncNel/G+W710jue5ljoxSgfZWlTnxuG9UYGX3cN7T0B4LCgjJ/cZ3pF+zse7V9fHk6PpGN6xfWeJVCBU+Uj26Xf1SbZqeUuY/us5ZrrNInpCwp/y2vW+COxj8q02XXpNJwsb6IXbZYoP3useVLm65369pEfLOGdFrVYitBptGTkuKFOUaJvZVHn9ks7sh9ed6Nh9jqfHA6ZQhrsJuwQ9pRKlnI1TyCqWkqZnjcevLlrXRmtcxE4Hj63ueJiiV3rxzQD/umsu+EH0wQcbe4fGIoIwRt6Whlh+9svJRePux5R/qtzyR/itRBjWt6KlrzLFWoEGMHVBmyUHUPOsp1kcUZPL2+udABseeMf3tBUulNeNe1VTSyY7pzuGuECBb832epbZw18wwrRd8C81zoeHi5RB1BG9RpawaTusUpZbFoEnAvROGUtSOYInOE5Ed4bKDJyyKJoygNjGOO3PNAZRRajhuuOnB48ohtw0YbFJ0GoenDNjawSDoUJJSWXQokBFaWzrh3RLZ4Xf8B12YAFfu5RTHGgVxBHW4iB0Kp76GWwXwTdk8upPP9Ep9IPcYlZDMxDLl0g8IF25NiYo2u5eMMYmHvKSUBQwI9yKbaCs0siuqNXeud47drM870+9aWyySzE6XdmWw2obbGoTXj5r82vkdYVD/N1W5JnWugzvQooeVqEIG7IsRi0Qnj8T1Gi2Ftig0AmabJ2cCgc37LfYruaRwC6FgvIfG6OtBm/zRuxlTOXGG2WhMqStQnagwS+QSpOjImGVi7xln31leU1WaKdhJ/KmlDpb97magigkgZZISL2LnYu8kVLT1a7EF22VO4c0DaCCCGdp3mTGL/tl1nbqo2VCy0roJWQpYd++Dli6SAv8OirA4JEMeY0QC617gRaigR+uQcqJYF8FXAT/mue8TRWIqT/eho7eFMehM7rgPJF/mjFfuJN7FRZe1OxAJsaxSJNOcCoB+xMWQGVeoAvzwNOJXTj+CxCUealIp+TMkg==';const _IH='d0fa9ee902a486dd4bce2f6fb99a50e909e3878a064e68e21164b4fa7476463d';let _src;

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
