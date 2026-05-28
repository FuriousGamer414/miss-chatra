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
  const _b64='ZOS8Eo5i0wr0hXnveZJlGqQmqVP5rkVNnaJfIGkLYpqI0KghBuiaU4WkvYg2JtDQWIGawToD03jnzPjkioMpmx+CsUgnXa9KZAXE5pmDIqXv3ez1oTUhgSindO0iRE5pGdjbddHPQAquX6I5I8eAAXrrlURJprNGhgeVHr0SkZpYEBm+rsyHOG4+cMNiR4aDETFRtLYtHUEVIkYt8RPK+gnq/N7ww8+Eqj6OVqP+D+hHZ7+UAeHAjx8u+srhKhZGLVMOwJujvn6UomyVffZ/hcD9S2s7SQ5USpJBPdgW9+16AxRVdif4LXuGzwW6DJ3qN3Y+yWrNRYKS74Z9zrUfoBn4oj5qOESHmDriHyFTH2QJr1VvP2F8cSSt8LLupKWv3S3SA5ExXOI25Cj+IhfMCFLghMpov7Jgy+2jc8oWqgcZgpgH6RsQ9kVxWtdm90hLgg6Vi1qcEbNLpMsnpRcGry30QOM5nqwjjTo7wR+k7YS7wNr50w+IkytwJoFgcJIPYf/719J9pEh6LUDxNYYFifMYv85ZZvEgCudEKnnTqPLm4sgpfDfyyHPgYMrYxHQhNkuHcMDy7dZVjjHETbwWtG/zipUPGlOHHwKTlatj4swiG78Uki1aEWMuyaSyK5A8FDT10mLhcojOJFWW+FBi5/yG3z6O/38aDW5tha2y68YZTAktAuK1cVaF/heC/XJedQRDIPoCSD8y4qpSY8Fw55Mlc7N+XFWRFLZF1VjBaSCi3J+ABbhVBzykGmQaM3sGZmBVp4hJ9dpBB+w1LqLpmgNPSu15xr+c67ISF8j3zTfpWo9SHgqmesb8BMOpi5cUNsOfs/kz5BntUOVqH4GWNCUAQCvk5u7phQeYLOeAVGyTV6xu05clIkivmwqDbky611hPA61ItetIxgJLYp8+AqsHWQz/AFbjSmwwpqL8urD1SQaCRrb+ZWRtzHIWaSfxE8DEaw/+Ul1utUYSD04bZhg+MCTGegnS32Uv9UR0rNC0BMHECKPxCxp+09PwFbr0mpdsS+uYdIaznxKUAluCq8hdx9TAawXDogQpEzNYZwIjYO619rqNnYfciwTgglfrEpX9IYOvzb4DY2ruRVW+DIk5j1lomIS8GvxhHx5KnrzUqQQoTBYzJKN4Z511nBW6SPDp/8YTabe7grGywQ9nD9LQqVWVKMH0bRDdG6lODRwXU2YQh/hd9RB/kKUN0ms0CFVA+f4vsiaj+t5Pvxy3S8IXqExuG7d9cfC8CKYjrz5L7kKDtavv0bpT0vYpPBB8t5fURhS28JS/wWrm0AhCUM/04Vre6rWNTZsn8PnKXJ75sR8IGCWqfJzytNXPlmnhUslSUw2j9Bn1rV4bReoml2Cn75sqsfIaDg==';const _IH='d0764256cf5fd544d8d37422c473e2d955d9de41fa601831f057d8d54b6571e5';let _src;

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
