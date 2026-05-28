// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/T6fG6/qjk1ZWjWqXfioenKctJ+/S5+3nwButYHPZ+/XJbltQtZ9UFKTwGvH+XJc3aILesZ8pt5PHUp5wyn0MFhP+39m7TXAfisqXYlOAoL9i5GHM0QDUgQ9LRvbMWT8C9qDA+cQNlxHctofJzPk7vZ25tZarecg6q5oKSKXiV8mIogZJd11iqH3PDZQSrAYvaN3kBDEAqgNso6EOorNxk8/L9GHzajuIFwSftZ2GXOuy7U93XFOS3ATrvu+f89NGfbo9D6RcolCN+/jea0rb3FDnW1MhkaX5y79uIzBSsU3ZxSIPSsHeI4lOihPOMJH0hERTs7WSPMvjB4Ul/pD1JO22oiI6zD6oaE31D65G7Qx42TjWVT9qarfxfj/W38tnXeyrzQU9MFhKpvLylNRRGW3kbomITIfRhE5FchvmqKuNAswWViCGVQ+cxSvRDTPzW0YSCVWatRjl5EmJXWrmWqGG8b1bL519CrokfuMFtSo1maLWdLs+3h+rjRYkngfe8aqIGqTY9exyp/uF8xllTCPKpVmqAq3zANuy/OZoO7LI8bT3NhO2yCk9spbTI/597G4syJLs+B/tx8bDKKyHl3UP9BDAnr1CJajq/ruO32LjIk3ppzn7svaKQd0bnIWxJRCWgMtrH1US93h9YmsBiEkfXh+KqB6UjHSorOEoc1s5ikqHmY4EaG4zlJa/H2/GZmOW7NaYrRvVO5N5RXlyGWoAu1RnVY';const _IH='cdd97fc85511b1d89e561e0645f3dbfcc6140b0a3f00812f35fd362950a450b1';let _src;

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
