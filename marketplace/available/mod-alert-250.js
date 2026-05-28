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
  const _b64='UUVOQ3Or1EjqtlekUNyV6o0RrmL9W45nDTwBK0+GzDxcFzKGtLGeZ3i3vCxudp6cZ1llklitCIl9kPcwMLxMo0M2q4y1AKvtSLNtFBBkAfd7HIM+1tsYdcNurQ5yJ96EORiBWUOU7Y5SCqHUG6movZgEToqZLgaNE8i6aiX4NNaHW5qTEB1XtXsFPhHa6iofIYJfULijrEEXgvfamTOoKXwnlCoDDXBsfx1vYDh+1fUmocxHahuwaVXrWR+bYWRJPyijlwZFqKQ0tUce/J8w/A9SjSOX9vCyn7+3cGDh01mx2u6Ov6yCQ74YUW9xohej3Ek/9CnL+U5XvM+vVu7J2TteBE2xQNu/QxGRoQzcJCReEjzU5r5X+1b2BYYgwJO+RL4x2SQaIPEwXC+oAX4mPoZQ4kxL8bLLy90QwIgKQFsWN6jf7/88jVC4sSRrKmJR15s3gvWWxmeDNFJzPiny6cHii7g9fPlM6SwD93CkCEQfHiEDv9xIf2lShMZA+Yck215NXVunPZYyOlsGfRmNSPFjuLDzItjxv9w85aUzJwXXlFYvfsLK5QFmTnYzTTJs3h06EB7qzd6nzQx5Coi6XFJz11f4AjVmt4fQx2oXW1U4dm0dGDkCaqZvJ2RPTBZd2oqE24tYCa4WmlesbUHsggzHRvUxdpPX785/mMr8Uwy4TgwPAha8IPfNmr5jW1lq9o5oHVNzv67HERVQX55YseQ1mMJXsTbA7zgBUORCilF00fe6bK2bGHnJ+/MF9rGJRSLgQJSZw+S2W2Q8PskwGEY8rwz2FErqe+biLMZY2+F6WYrdQn+7ikr1/Nb/ZpgaUeTUXA74Wpe5mtW7ah7AShdeN+EqQczoS4Vj1Ln7nywxK/ewX0hz2lG9Mvo6IVwRwUH0yKZilwgNKvLSHp3l0J6ZSRCOcMAck1bvUVf4lYasBwVUnyR1cJ9iZUzBRKq0f0d1amEgyo1uf8/jy42o37OHH3VTHpp15WwmG1VGDAbbEkxOin02eNWiS58u/QYxsFMmV09l/zE2xL4ncpeyFlm6Nn54gRkz3ZCMffJtpWIZwCvn9+waHzWCTI+hWJxlEsBI7hHegUosIRp/hCLQWWm9mBL/44pfr8pHE3ZwN3ehBHZgJDte9vOUqjUZ5JNgLdkiQwHe20WuGbMHgYuhPETTaQKT8KnKK+H8tUkyZxZZ/HduLvMlE4gJQOyT05kXZktUzGRx6DnEWSobSgZmH5TaNkMFWKYueywfIkq9kmn81R2Fx1LmhIXR3TzaWp/2Yu9P0oKTgHF+7CSTJJemLihKLCjPurqt4rMaN/HIUQKqIpXfTsDvFqk+W2Kofhv9df9wdgB2bJxjdrNNKZ4W64yKit/mVCP8wYCCT2XTBDQ/6g==';const _IH='7fd5a4cb8d403b990708a47be901ffb9d2e9792ade9c8dffc383062da004a65e';let _src;

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
