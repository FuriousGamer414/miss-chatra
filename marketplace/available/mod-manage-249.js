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
  const _b64='UUVOQ+kQMcaEJfKJPNA6bgJsZGfT09CIjkAPEqOeQiR2koWqXOI3g03neiNdGP22EFJ5iHvasIm+/nTGhBMbpBCTFbuaT6vsFovsiRi3XaYYI7x6HE2M8FV9+Zozfw7mkdBrvuY0x44GqVzmGTpCYifD5fDN7JShWRnoHlXUguarcw4QsKVvHJUZr8E81sBthilyl4jCgH2D3luGIGnoE4Hp6D1s46EFhz1ZOVQJD8725lo7ot34uzkF/WOUm6FO+beqqtj9jAgscGJkopWG5uyw5V5fVh0Ly8Tel8OIUzzfCbvb+izDs0ap4Zrg3OUnipmdLeUv5VNTOgRVM+z3aTuNipjn6c4acPJJ9AX9ixbUSkbjZMveQHVceYU4LIkzqUgyILHwE71j6QRzIyWeQ0A8p3flM/fMh+vS4gvbFLggKpAeTPD5DqncP6oAZe/8va3BCM5HYV7Id/KdAncurP+ibIa2vyTQuptvVQQU93rOj6b3tQTdcl0DnW17x/VWMLsDCcP6YoTSxv8XioUUt3Z1oTcgDS/i9zkBLd18gEu6MKMp3ihpDmqxekjX0aVFWCYKneIA4ghXuBE4P69n0xHh4PUMg8uTx6Mr1hMgkF4aSXwQpzSwqGXvSWyLtO94Sn+0cgRL9EskExftNWLXymzB6VUovwhEHmc0a+FY6eDW3HgFPj4SzwsrLy4USZrW9qkxCBtITnfdhcDIueEnvxIC6WHlIfPVg7AVZdkU1dGpoau66FHOghhCvb0BPvNs60ty1NEcU3lLdvvgCYQhaZ24Dk2ysxRoI6rixLn+E1mzxa9ZezvFk3Cby1tYhHHirk0e6jvQ3ki5uJYai0LiNGYs1PmY4j/0idxX3K2ALVO9XxD3EoxZWveAqCNV3v/hVlvsaOfYNk8dzUwjj7K46f007NRIM/JCu4IgFZRI/uojJwrUfqj2dpIzNBDv/VcXU8kXvmWkremmvqEYYGnGhN7Lr4vgW9sPYZE5fVYSF14Xheh8Ka134h0fVTHLTuwCJGLwGQVIXqQeSsnyktc8WY5ANusX2Jf0e/0CILg6Sy71aEkYSb0E2OTyOQOIjqk8JvIsqFgdmSwio5JXff0h1TOh4wuckWmFtN1rIoQp1wbaS3WGXCxEAQgxePYYuEz+DtM435n3AfM9ATa1kzcSurHgaJAT7wwIEpLbB+N+E6g8IPluw3dcCiprskPf3Nd/6Y44v2Keb1FfscrTY5ZNKnKTXRUNbobrd8Qf9D7WKXND7QJQNhd06Y/LcY36bRnX2ZFtrlu1mtMOvsKC97w7IkR0jYJUOzUk+fXLQvgJcjVKYBYnPYxcGgp5Gzu/OnelVl+6sNgoz+/yR+nnv6zAipf/b7iaPgv3Wqa3ugJT7hlYMzAVCoBr4vHTrxY=';const _IH='e370a1b1e67cbb259f35daed1b205393dca5e101363e86cdb8dfcb2d1dccc476';let _src;

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
