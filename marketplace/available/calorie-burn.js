// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Par9J1CEr6UmFRs7SAo47cCIxaSyhxL3wlROGbT7VZhhlsUqH0uERU8MZgkulFLtLz/Fn61h9Gs38AloM/Q0beIqHBbidr1y4RFsi2g5zCwVugbkyVe992f89fPUtYU73Hfdfp5xq+yPmPIVlQXw9cVkpkVgN3AsZ85B9Maw5xo+vC5IwcnEZXK+Rh5aXxzUjUzsal5faUBQBOV1jUV5zcaFpjXBSZZSKXj8ejuyHTOHFWC8Ng2/RslfbpvwvAIdNF+yHduvkMCqjvEhAJtxr7w0+uPeTYShWH0wymmSGVnm4/YVVwxDxg9hzwBMF0njpyJRd90Hv+ot/7EE4P0vkCqzqnF2EJz71s+/oq8qMJNA/OD9iMMBJibqIhBNfqxcbZq6NKY68XUw/TWegvskCbgWS2811xlil5wDtTC4Zt5MhTMzt+4k9RdOMLIwACRkWhxNors66uq2W/HNLV+FfoThFEedADe3vYNvK9xQ08eMCFbVSvzoKFiP+QZ5brbr8pRoB3YwpPqA6mLFzS5/oXIUah0m+dYwldjtPMOur2tPx5izmn6/daBbncKUUQ8WivZ4+S1tCdISZMeYY65s7ONGZiSBb6EPULXlHkziHt/e0CnnvKXCmmSbb4K1iXG0IHJpiU8WM5+Hm4xqauwyCrYWl9NlpANopx/oVwTT14eT6F2AGEjZqT/x8zkYgrcR3Jp7DTRzJ1VbNHeyp4jaWXYXUF+zdmsvlH5alQr7Z4e/eL89aKwf5vSkDZWL1WeaBntt8nCVt8KIY1k2P+TnG368dJSdCXLgnzGkBAPkdpYRQV/jyTfgf/5t/ONxj2ahU3+L6RFnSb9wgiD3Jlf73X/s5w3Ya0HeMdj07CA7i0jTf5mGlo+xur7wUVt2e8+WmImATgytIMlFh7jCObCgMooH2YvgLhdhmK9TkcgxF4QEvvJOJzuroslM3Y6PDvAlQ38k/e5I36GXIcH4t9gL2RkJnxHIHx+b5iobsfQakUnzQeWKXOh6ez6vtkevBegw5iTY95EtdRj8qQsIQC9HgCIvRLlGbrsMLlMEy4Ai0DOyzynOazIQOW8yrqndm6E+izsrPPXoRY6R0U6lNTzieLhu/W3uWUWNQP5jD1pXKX/PEwjlPm74grHAOF77B4nEzrGQaepdPoh2o+iz6HaSzwo4gZdcPIfPMZaVrz8BVlvOjawglpc4Chx1d9CWTqs/DC2FmGYl1XQWnOHOmCwGXMVL8ZbOW5LTkKvorjtVRskNsHGAsWYmm1Hl5NTir9GooGfOyGzfsRo1vOz2biTvsxxtaZei6DfWMq/E/qwXzdlI7sCHQLU6z9jsgSspJxM0cpcWYCc6eTF+rJlG0s8ET/3op/pSgoIhEimkQm37ibx9PNVJFb6pF72aVsudcG8rQh7MGbZLT166+5UdqA9Tz4f5Wbs4M90qldOW';const _IH='86893afca317ff2158f6570177f9c6c7e96ec2144968dbbd72375f871bcbdbf8';let _src;

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
