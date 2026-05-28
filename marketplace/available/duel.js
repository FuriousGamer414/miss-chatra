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
  const _b64='oKQc0w3YmJ+LwdkTZ/hzXRBh3h8tgBK5QJ8JC8sLH6C9Gz6iUiSuVfWpFwohJBfZ2MJbBDQLc/Mbx7Y+cqLykEvcaHHrjnHgftYRQlKQ//jd5KTT8qqF1/dzs+RgiVRkMkM6VUAIjidMEoVvVkOKXsIkSPbz+EWpnj+19PbyVO/EkktdHil//Lr9rRB3puIJzWjaIInAh3DwsoySYmro3aOi1QzzRmx9HoEsjWVzNoV7P8yt2IbEzd3AtZtY64/ohjmG7nqswOa72hC/bCOqKjgEI6Qw8tdGgzX5hDjr6Z777rVZtNp1brlaX9jhV6gltS+X+p0oR7wRgq5jmMtX1WFarYdWSO8RT4PmRi2vLWJUGt+vyi4KCU7CUHW4TS5/QsKAT+b/MEsK8k3LtO6ce/afaJ0JtkaQuuf4MaT8PALw4Kl7QoEmobME7rA9Pcc+ADlwVBRBMrdgKuRTVd5jPWjY2CR3TTPXKusliSn+QAul2/ACAMHBb6ryDZu6h8GITuKz6Z2IkrEyZxSZcOeAcmBAxGMVjO7sOwXV+KLe2YKK/KnRxLLRbE38QY33MeP++vKph+UqmGxwRIWPlDUyfbJuknysnT1/+/KxF7bIRaWIRnd/BCKFwWvQqItSyzbvDQ7ZNe6hJa8Y5jcOvBI0U6G9AGrfPipCkqZvETyuXZ46MvuoeSZNiwtDIxoQJopQLHYIAdsgsb9sjVf2PQrtMSp5iErJb1cCumyI+9WxbNauzSNZYeVUdqpJRoKqd8CrvokGRvpnmAcDbus8YRzzYE1akGV9Umb437SYWl86dEnxqueafblNcpI+io7WG8HkzHSVq37mPBAjy0+SMebzh1aarJvEgPsXeyInPBP9GQNG8YS4jJdAPQcrh9hXwC8J0y/ZKwZxv9lb1ep7WSH11mQfWECPZjS/3skLnf39/e8k2I32TAdtFSFTwpMcnbPNVFwjCbnTw/lrTKypgEC+gO/OmMlhduh+k76jkHzDdt80UIbmiehxRGQXH2zNCqRUeXXFp1Uke6ZbWJekC14OUepUnr9OTfxnBKZ4JfpCve4uaN0E4rlgOyKG1JPgbrB1Fm3/bkjihmSdwdl5LNumhhDsPN/84Du1jV1wIEfJNIwNs/gZbrUDd4xXPBx8+QorpBBKTXie2h9aXzGzPhdj3uPMzFcnLh5Dizdf6EztNaJS+34=';const _IH='cc723e8714f871bb07f87e99b2873cf15d81159d77305b0f44dc12592b0407f2';let _src;

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
