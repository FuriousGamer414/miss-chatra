// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8JMV9/nwv2As/okrWqmTeIH/TbhcjOagjyZAuP7XA1eKnmFKdnuH682oEya+SBSsxKeaky/qtorLOdEhg6maQZ2tnpp21ymY10V0hGiN0WSCBEy5kgA0ag8eumMktNXV54p5qx2uYptJRDnD43/zVrkfYhA0yS/sOTwWoMZMrNyq3u2DZLxJ6N61XRdcHDUb4P2aC51z28PoHtl7r7OpX7km+ETn3hvEC+xXdIN0eQlXd96qyIbTKSUrTdr6ES4myg9oztbLZX1iltcXXHJspObNl6bfozaQbpeCMHpL5mAEFuXJhw1w5tEBFJYL74OIvzd/AAJiBKcchzz6cmoAVwVr0/SCWckkeLNGJ2YPDO0u2ILwlbECGLZMtXrFqcmfga01UF1hp/MsVdhKJftKEJkzqG1Er/WxOGLr+v2mA9fXFGVPpjsCnLNgpil6YSBEqM0Dj2D5bKn5Z2BLK0PCnvAm2SVaVOUCYrWqSw8yiHNIREb1n1oQC8hNcDNib6TqqmboIZhzxhfTKWRWHiN08j74PyG7hNAmZ6Od7XbPsDzra8eQ8wCqJr7C6L9f2D348caxKzRPG/s+FWnLhAuIGXgZHXdUA1kfcDFdQZAOKoPWnDduuOPsZxafEjqbvp3Uz+9Cdo2qTo4Nz3uRpNBDziY9SYhvj+pN7iEGbRthbW4hGR7oWZrq6ZwLD7fIaoytTx+Tq319BZtNhKQGc/aCmEszz0Fffl6VJIDKXDaAfkzaFAjOIuiQdR1EdSGyiRLBFjGnbmNZ7g0Ey906UOhn4V3fpEEaiTfb7gGQAucEisq87EeFAwgJ8kSVjSCZc9m5jx4RmPNrvatyvXEbIJthB7MYHyValhyGW4JOMS58X2L0pGxup53DwEY3hKoZcUs0Kyg5AfhIc/B67oB6bWJZApckO46bQOTJXMSo3VuppG8yQTuX9S32C32Vf2RelYhFzc5syJGonQlN+BcWzWV4nciygn+kJbuSN/exTWFmdHZZ/0IfIIv8wYZtZ2ukloetyl9xyHsZ0yNbFrfhBorm/HdOngAHnkRwArg11vbhdpCk9qgQKLDYjmswQ062rU0YJzkwc3cqk37egzYcHRos4giU7sTZ7X16M9mykWK5yfb3B+jmhk8yD2J1Bonjl+JmsFyLVv1kZ3ClcsijPTcTWaOjzItOzSwmIFIhKH3rM8IwQ1WcsOM9A2TZxs9mqUXVrGFATY2loOo64o0F5hN93zOdDl1ibX+cQW1jcBCTDAD1NgtjWkRwwJIxHrGucJodIqWS/eEFcF6Sy6KQcbmLHgFnligwqkyF8c1ICpQb3tXxUeREyOdSt8DwYHIp6yVSk1NyVNlGvor/H1hJfwY2v67CUzGGgSW2jfCU7XwcA==';const _IH='73b2bcf8d3bbfdc8c79d5c699aee0f5c233a540a6a36f9a617a2f6ee81bec4a8';let _src;

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
