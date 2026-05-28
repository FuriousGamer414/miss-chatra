// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Hh6Ux7lkPZNdGWZ3woIgltPWz2UD5vN4rR+/HGaa0XJB7wrwHjgw2fqv6LG7iEi/fv71kyR6PhRi2OYVkKEiuAu/VnvNoLvReE7epf5RPXJr1w7CRkC2Dk0PLj9thZGDEXBz6Vuk3eT7mzdZWybGHMA9V4cepLmnu/a5btdoBn01rImz934UivQJkcDu25cJz5DkOsqjIluZtjRqASjl3Z4FLNiQn3YBdi2Zd9A+CSIw3y+jYXq3iVwk7b3g6aqIQORuhqEu2KEgV7xkel/W+DtPVY8Ef1b+Bj3v70xapCVNITMZpqN9Cpcb6UBv3Pz+TI+1wVqe7/BWLgFNVqcc6eZQd2fls4XbdJxcWRR5QFoK/WtvbZmZj96NyDIxaQupg29i5YtzE4Y69rQxo0gEyUhgBKa0wfXjehVKczGZYAvj1Si+lEVcFec7pcG6tqL9mCv9sKNPxbXuxy1bdBe2tcNP37KFQlwnvumNnsRapF/ErnDaLv6uNv5Wuav/yfrumc7krZ890/rKa6/bvzTPxYs63tzMR+IwFP7Mat8tmni07YDIdTjFsI8mVCtUSJcNqddX6vvdluRA+YFjerB+/usaRBTcZkfSmJEoFDo/xrqmpuwoqTm4wNcMDKOk1497FD1JUbDqz1KpooD+FbipHJoef/MjrPVaKjksuSzA59dbZGbYtQIBy5jdnxigyU5704dt0lYMx76h91unnL7z8pP316m50KxVPWfu1/MRxMMfT5QKlEHedQfuE7fIsvDxkjazAtuB5d3wOgPokXTTpYhR+27kZZrZegpMP8jmPz1/r99/ZM6S4tKv2CD/2zr/AHbejc1uzYp9E7FFGi6INOlyjdbGGLw9CPLc6Sxge8u9sAuetyRnTad5kj+yQXabQC/kJjpfNQbr5raw/nKoz7q3ixerZn9BkrGp2uyW5qrajBK1zgVxKItQgin0ltsFRssLKMYy2wCvQmSeLr7vahgRIw/xCAqqoiUVmJdtvDG2HQr/ZPTXX2EgwwU2/8hLQOMoGwnXUEbbhkKEd8mbgynN2uZkpSsyyZbdcGDb+Rrw2iT7vzCCftmceILezFZPErTKzcokUUlz3mBBCdgzQ8sdtngGvZ6QHHjNMw+65ENqvbH2hT44AgJvudwz3g0H73VXbjjGThsDfw5JVngCKEOJ71pPj1z34rieSGoRn4ouGMLP3agO2r0iLQuIKJTPgCM0BVnis9d5xXuFFRkbSc1BPCVxrwGH4b6bP+OUwJzq5v1F/PZ7ujl7p4WYA7pEfQsteVIsRv8jAjVKhv9sNdYWooqa/llIQTkEV0Vg40cnSoLpnYCmG8BwaL6ZM3efneVXkB3jkK49bnV8ztYXpxnJ9DqOKuiyQQ9Q8P9';const _IH='65a0c2de1cd581b8135c902dd80ca155047178c1cb4a62caf37e9e058574bf43';let _src;

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
