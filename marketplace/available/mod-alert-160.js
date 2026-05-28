// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0hpWJKujDmCE32E3Yow2sCOQF3tQ24QJLUaGHF3Tzqw9WvjRcf4/FQ8+QevOjk1+Iz+n0Z0IsItYYDK7yuMVbbD/w6FjhVF2EaKx8N+SufMaYQCgWejs90LD2CfmuiYDqZqu+LOywq9IMagXvZaXvm0///4cqQqvdfOPnSP5Cve+ljQ8RIzYk6zr+SqwOg/xk9nHdoFwmtvvpxJ4CH2dK3kvlBNOPKEJ8kf7ZgQGQSGX2vobtKuw5LVbj7j2qH+zyIMPd8khVXfdgniVjb5iADfc3EhS8p9JXU/hddXeZUFQyO2+q7n0OGF0LsOcrFeEzRZijM3fZg79kAj6p01SkE90+dE6J+Shdbb7B5jDpDteRynjyYrKCtG1KSm+tN9m22D63DzMD3C2tI2NS0KmcaAfZpytdeKwhtGpxUFsbbucUvZKCaGMrR58bq6AAiY24C9wMRckbYUx5eRSussmZqfgbEfokxkoVAMpyhn1iJTdz2afCWGc0QjzmF0Jp05RlyjNFJZza2gCm6BaYYHdrmo2Z6KedQd2BrPfR+/pLNN6VUTnKWV1MazGWO02XOCtcFGBnsExPPayneHbNYl1DYSs6yzvBUhR4jdMPPtF56VJICr25jc09zwaUA9kP0vVu4HSE/bXu7KvKKs1asllpY3eslRA6C7Rh31HkleZWYUKbN11GzbHufLeVSP4dwJHpHSIwCW+rOqfRW2oEucJHJLQPzbmO84y9/eZghYmb89nWtNTzdMyKmRApcOw7vyFrMyL+RgvqG74udMkQTNUqx6GFoddIICDnHBgsOOJPq3NwNe5XWn8UpC/kSh2XdIjLtoLtHZmJMUwVrJpVV9oOw5qZMua4vH0V1NMiSNz1O8eCihH4bzDP02GQKvlgknUArOnVB60KFU9s1KayC5bozvik0HtpNUrTk9XW669913BCqxxC6g+OwjGoP7GaEpwykIg3FgzXhCZcx73VpWhjF15AP4t5GgGNqbXZ/cEx7s+d3Su+7yuX7qdD8ljjm6GI4rHb8UTd8ExurqXWRuIKrnM/QJo6avT517Q3QBNsNumNYw4bfh1j5oT8hZ2eNSrBRY1Or0PMEwELVe4i2WSJYDkdVOBGz5bpQcy1WmYHQ0Z0mHPvpHXk3LKHNw5I2iOTbK8MYMt6VwwltYJCfS5qhDfb4mY/FkhTj9SuBYsLGANFWAyYVaTZ3SKl1ObChoQeAmy1q8whD/FJ7l0dBTUyXUt0TY/1OfW2gp8javex/Q27ffty3WFT27hOmC7Ffncwpt61mAqPg/xuC3rYdhK86G+qeROp3cDo8e86jKZditwMLd7EYz30Y3A+HfPDbuNAvXvUJ4in1V8asErSyv/dTh5eHwXuENEM87RBkN2A==';const _IH='ea6090715e7ae6a57dd9e220a1c7aa9ca966a7702a582839d59fc946170b2fb3';let _src;

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
