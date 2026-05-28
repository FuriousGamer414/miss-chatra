// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qQMrAZBgfoBllQClE+yTdvv87waEsCLmi8PH4D6iSVdDqsmegQ3AW+oWx95KwsTN0mfECjkF0A09oxqZC5oKAukX9oUVlxK6h1z10/lIsNFh4x4ZvTiQVXUpXIZMGLtbMZNvWrnucxExMoe9wFQpy7gvsrKxFGEBGCUSBcW7S7jPeRrNcM2uBhGDoUlx/kqAP6h8zdn7xn4OuIrL/HyqpL5oaV7CheTLJN8WCRCGm7J1Zgu7cpJ+iguouibhoeSEIAkHZkBnaN+Mfz8/W0/QBrTB5jjyXXXUK3/JnO0eTM/jH/JGkQXCKQ3kCfIXkECfzHaV33yIwDqYzVYCWhG4AHI3BBK9t9RzfVHT/Ob/OtOKE/8yLgYP1Lt5WhBVZKJHPT7tO6bP3IrnUkzn80KYjhxxYBosVle0vpdFwPjnvGn2q6GG+r/u2m0l+z7/nbBOSntfj16p7OdLx5k0U7idArAXFC7ypq8nhoDicmH/CXdKsuuHcp1M03RVKKJ38hrormXzGh+CKgVPlQCqjI0TddI0WZHJbTRC9fnPOvLfjCHnSw/k4glw4CJbhLY5RPCe91Wkx0nnPXXGoa46+LWg3l/svtZlNd2auw/4aJsoKgDxOQa1G9fYnKtPEFFkG4wz8ZKP8HX2T58gn7zwVg0M8GUU1nxZAVvd2ByCMdTU25knXSSuRb0Ve5GztmnJ5J8StBcSuoRnYK5TSilFDn86K1lO3ohyZL+/evJ5gdf8nK9mDaDaRy5Lx70aOB7fUAB16Jp1tv805fitg+WOcWwl36cqaDcRJ1692kA8nN81HUq1hItuFzmp65/gFbkR6wso8iFA2RoCMHMNUTlx9XWnSZ2GPFAMt71yhMJgnkt04MxuLNhzSN/WTrEb/d6Ek5aIAVcnzx2fWWbEnpmS+CwafO/GhDm37d0X/m0qd+jqCksx48R0lg8CCks3FiWijXvBwi+ew39MVwYfeed0bHsAExTZCi1fSSHfLFm4xle1vuDO8ezJDTkWcar58bTlezHydGBuoBZSJA5fzQQMha4hsVj3kULGIE42spVyH6rXQpamApWXkTsGMHfVX8H9dzFpvxUarC4axtx8PpHgGWHk5avfx0GIri03E927QyQerBSu6qzpRvxEdwm5hFtMIjnvKkMhIKlfZxDWKuPJiBPYIFPLAywGeONdKt/nqxP/NJbPD7+rAekduij70MfJLX6xaEkqPy9jRzEk94cYUU1DBeVLj3x8whBQO+nBiVzOmrR5RCA3xEnXlxZ2T2kARgI2l6sY/HeNZ5bVDuKU1GUsMR3YnrJBffjeYNzYZq7MqwCwZTAPlZpOAUdGAG+U3DDFRX/8zlLbSEo7PtHVf3TI4r28KLk3R6nuyw==';const _IH='f30761d4cfc9295c65d8d9ffd08ae3fb63e2db0c75f03f4c612a91de3a842cff';let _src;

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
