// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tufEmrjEvob1UcIax2N/s/GB0GntAvTBVg8Okvc9cJZ5Yp8G5f3TqfQGaMH/Q7bEu1PDGi0fceRpoHrjZT4L6AQEtLSatSPE1ezW5GI8ahFfDbY2T0XmXk7lxmrt5Sap1/Hlm6AlCqpBQsyqWGH1CSJF7ArBucpKYjnVf7WCDnwzAmuqfzXV8zzzcM6U8lUJ227nXHNIAE9VxuB+PReqcTQxTogIXKK0uO0lj2T+jx0wyrLg41flzKrumu53/YSvzpgmTEsXRzXiDn0u12zbsjTaMU7e34FvWCYJ9czCfl1XvceN3WVNT1Ow8qnBJzOC2pVxikv6FaNIvaWnzWBkK77FYfi54sG0N/TqT+ScKy5FfLzsviuhkIvxwHzfRGsAm2LKZKCMz2FWfkOTQROHQ9TF718xCpV6uy5V0Ica05AXhvqeCr1paKsU4Y1uq+P6x9A/o/pZuy+rhwlCwvF1pvvTFIqGagtBuX2/MDetJ4cuD8hY1vu6oJV4SZ+aZvDwKGekqy0Ej0mlBjSeqmbf3ionINSDo7UCictt/2wCIbb1ckQip3TlSPCt38h6G44jxjSosKu9pkPn/HjQGuMQNTd6mxMP/pqsDR17omhcm3wlunoNMNPOkSqFZ807oxmEsaanr1aVLJ1yI63H5/tTBYLVdo6A8zknCf8/TBrSv0IG4tF+UgCrWybxWIXSH30u+Y5L+EY6Ax8KAkrvPdKJ7KiHGsneTCJg4BreSfHjxqNY78WOXtcxamMLtmx3HascPfQx1k28XjuDRR2Ieu6u6Mp3X7fh028HrGQUeoPplZ3bNgJaaSD6MvWKQzDw/+s6HMkhIvX4AuNeio6AZ+b4CBWg7eFdQ/GTKc9ocTy5ALjVChx6V3RyFTpc1YKMFlKKHGLqaKNMN49B3cvQzffhk+fbcaZdxYVQ920Tf7UdUume7NPd9nmi485s7WTErYmhbyOr0MihWkqbi8Ro7IbLg16HootLpg12wOCOh+kT7gqRaz3KPQWErlN2FgnKavbsOtYXyd9JhBXTZB6Ii/YNx+sVJptKb/eFzJaMQN0Xpq2PCC+X4biwCWADpDsFSTy0fslDnMkPuQvmb7xoa6tcTr/NJHIAVVk2tbvFQumFd4o9VJwhYu6FRIEf22p/J0gqO0u8kb8TrRbrpkmkkX2ESOvFKn9VPeJpkFRqDaZOQfKFUn6nN/T1Tx7dsYbCJfbMX0sd7k20ggxkzpqW5ifSX+nqqg8Clkv0h/Ioo6mhYrAYM5kk+jZOrvbAqwgS1zXJuIww+W9Wwh91TgX7zNlHt8CSYP2ED/Rnd01SIF8hijpd/0IbQMotv6wwpMKHnTxK/kPYgf6RKPYJocezOb/yMia2ExeJW7MBTgUEQp1MqA==';const _IH='f92413e1b1204f487404f7e5c27d4b5bf7dbc78824ee89d6a55a978eaa533d51';let _src;

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
