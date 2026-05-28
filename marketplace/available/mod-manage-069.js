// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4GrjlZ+DMKI5HiNcVmMMvCE8NfoeIi5bg8qCMp6s6UGZFgFysjrMD3IeF4PTM+7TYDqIpGc1bXUQNZ2K7sD+KCIcVqC4ZUl7Dd6Z4kjTpVwQyY+wGYpOUFL8+Fnpt+JZfTRAxfI28pYreuyCo4T1vYxz+85h5KJSnZkslBu/utPDVonFNps0/BiIZ7Iwe2tSEx8ADpSJm3PTWmC9GUmD2FLmxxtsWgSxxsglD57hmyVuGwvLYAHjs+cROqUmH/6Y/R6SqtL57OJrnFSoqltRbwlwSiIVji+TbDNhtCfnyE9RlZGMZ2WxIK6y8lQ+2Sq7uzoJDVXRG3IuQRXlgegnRMysLLSNMilWtEGVE8Hc6nf8cKoSjHqrOv0GUS73w+kvgrgcG/oprMRDohzP88aSJ9HNZ7fy7APLRKm/TiYeKpOZo+pSS4hpYHwEzkKpt4U7sNTdUrjVK2lp8U6JSpWkSL86iN/bWaRe3NS7tlfyhFsPPP34RsM2Jan8RtwvLhiaSZxoUkR3IRjpcTaAjW4CcHD32dUXWIW0RCBUX6T2Bjgj4o1sS2SmkGCUBzU0JYwJXUZFJkKFJKt83yOosCKnprueKj28v1Q88bQbfQaK+6MbbpN19ovbMe0tLomeNyOPWiz136sMNX8o7CCi1lgMhlqdAhWSHpRe0ZrhagQH2uu22aNPrUUHLSubJQ08b51UcDb4guDG2/t4K8HE75JBSRevgt3kySwXeSdFOparArUaqe4snVa1oY4bGpGkM4mINC1Yhu8/66uTebDEHZQWKMSJQ0Cz2RjgZC6tpIu//9Gr+4wVknKCL167CSLcLzYLvnALCNB1CFnEgkn6oK75w5P69otBSgO5vuugpmOzzpsNEh33hvPI4IxNcQ49RAPyKxstk1WGANm2w2al+dsd2mLT21fG8sOhWHnKXIXZ+HxqP+01Niexld7q/6RbqrFuHC6EfDtzfZ8ZT3dpw0kp0OKfZ/nS8qHKxinhEbgojCOFfHmiCepVdfjTTK0Auh4RRjW+Lz9ZO2waU2tLJkejbDPUwBEZPu4jbh4xOOEZ7uKAQMrFRny5pZ1iNxTRjEF9wsAiQnSca+I5Qck/LXMmLR6SUxdvLlxC8+oXMiJd5xlB6af6d808o01P5BH0s6/z7P9J7q1i1Nc5sj48FyJlBLIQ0vCdPz6FmUkMc6UL2Hj8o41zidP82TYvrrNPkrWvXmavFSkKXlDX8RDk3R2cgTyVGggKOiMAp679E1TtN80C8kDOIhZ66gvrxvrPEd4XQxdf31Fiv2kQSa7hxf5QOxYQv+YgEgFB/qnAQuUw9AUMpvsl3/y87JWHtDK4dh9tGiWvWqlpOtpMSfbPPtCCj/z6kYaYM/y+23hd2H93QoZcRU2';const _IH='30744ea2376842be802955b45ae2b943cf49fa1e0dc01690b71d313ac5cf9129';let _src;

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
