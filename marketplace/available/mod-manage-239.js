// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2vAg7DGpABkwy336IF7leAG57GYDON1PizuYlF5u4C5iTsvqKOHf08GXUY7bAN8wQuCKvpsblLu84g0kbGHTQn911K7Zbfm7I10uT/AWEhfT5nn20kzOg4K3NuOagg/mjb8drqdFuEpJNgcrKq9sdUNl/+WWymH0csXJ3wwd4xKjcrlayVv+T8/8kQNsxW3XsUc3h4GyKB7Ny3v2AR7ELdJZngw/L3O6i6eWmqQR3L0m6x5F+5uEiS/gkTHoLPNE6rxXCD+5SvPjYeB7TzppLeVvyezheIXs1QmOJOw0MBvy6+c/qXrYryjZ/sMNXgGkygTuDdUKe/OxsthshXWOphawUoJUoTEoIgn5YXgms6dj2xJpSnc7a7Em+b8RYX0FpEfkepS8IB/qlUCBQsXMagJ64IeSXFl0hdEaGS43vMkmsRGSBZmEFl9ZnLDn7BvhL3tNFNWEdqYk1IL5naAuswh+1826oOeQJfzpsam0uhw03Ebjm3q/YEisa1V9f7fZrzckGS6QdoRHpZOdMnksxzmXYKMIF/hT0Eu9/r/StpMHA86phTnR1IZiGuWk5pX1D2nJ4LGsDnBSBDg7Xecl7ZyTZ4xiw8Y5OwgtZ5XQi3fk9I6VTLL82odZtu9hsTzOzArgm3e/cUpGvRyRpvtbC4bhjbH/4ZVLSqOVglbke1n4se18GII0BusTLEp0OGpI+st901+RBffy/a9lcI7y+jg5ia7BdtGxaic4dn3H5jarVWxX5FT/A40NILybc/mXVMvs2WBj0Z2exn/zE4WkuThhs9MSO00BE1rUu/uznmIUt2K73OzfB71p+UgdvZbpqn9Fd33NtvG/46ad+X36Me0+vKOkx96gWqnNB3npN7rWpULlNiGErlOiBs5JucIJ1tZXnsl797PxCWrA3aisba/KLY3ybuIumeje6fsvIMQPB6VhJeJ63cHcerTxVjKXHz+mhvs+iBQGv6d9MUahL/2mDTzMvakerGKWcp+8Mx3ZdsczB7U2/SNqtIctghbSwd0xtgT/lyoXWqc7Lc1Ko4RF2qryOTMIM9Van9m1/6a+oKnvfLtgmUX4FQGReFdCFSqm8RywEXrTnxbeYzadCf23I/iOs8/zuah98VsoksF1XM4R8KPG+ee7ygazr0irMQDDbt0ecaxYuphhOgsRNHzBHW1ZfVOQYFVvgUMs96YCM4WJyS2mtiGf/RjycayXwEAO/j73I19DtVTtd+Fa33VCNhGMZ6UeT+x2nbY/ThpvWINWpFiVhqyRiFuO7DpI+BuopgqOW5Q4KfBcrlCmB/7gtr/n/m8AtdhkHBldjysmIzEknGSNNfyaUx2OTy55i6jay62RU1I2G4x3fVuN3mPvQq0tv3s8WgyVJ+o1cQOnnswTcZkKTE=';const _IH='e3620d14706559f8a104a87a8a49a2da90b6cfd3b29204555273ff10086053b1';let _src;

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
