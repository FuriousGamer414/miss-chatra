// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OVf5or7aLO9DVbfn8xMa9lQTC46MVP6qaWeNSQ4tdD7Aw3u92nFY5J3mKFz39+dr6//rkjrXUMnPIl/7JrqbjjzCHMkQ/FC/bkmkMr2CD/TWzj6ZJAtXZlGv9d6+0R4NLrMejd5UFAZWnBqHYvyIwl+pne/B0DRl9r1fK/D2gUqyZocA4AIU27eV5Q2NzRd5DhhOELycoMivGIKhduBi/L0J1ACp9V5TOR1Np5gc4vScccdHsHQL09S6niFBo+rc8GmVmuF75JGWtxCm8wmfVu/YfF8lDoBdJKhbnKqlFrKAOs7i7a6gza/XeJ3bzAl3g6aQDOCarvI7zMciLIzs24gYY38B0SAwOFm4laX/7bULIt93Qa57W784c15KE3plpQE+S21OB1p4ov5TjB8HFwe9hePR1wyGWajQ2ywElQtzgJMQrr09+8KM4UX/pCQySsG32HZ6tyBSxhhpXokKnocmY6tpg4eGWIdpN6s9KzrQTKi1GwKzxWM9aUky0Lw3wcCPZFcpvFQt1sym9btg6Qua+IXbMFrnOgw5AzhxucsLTO2uYJcEsVDwxS5LOBOxTVnfJodA1LdT47HWwiy9QFO24INZDvFu8QDxYYOir8TtjCX1ZfmFSQ334xUbelUhBthgLOKM3hDk1l/Zmb2BZOAkOiyJsqP3E5dXnyRPfe8oSV1n/5Y7U6DQaAZhf5b8kaVw/UfypzcJxWKN5BQK4YwqA7BkQ53xcx1rIs9HEdnEGq6Bg+xoyGS91u59qhojdmjHHJBz8dr+YIpXkUbmgtlcD/DBiqVq+XblNo7Dgg3j10E/UOYhBiUZrpSMbt6ciUq+fbviaQcUaEYNw4M+dITJfgQirbynTqZbIm/cg6Z5J4DiEovHIvH3uzIEUqPj5IHrNu29FhJAf7RKRa/9FQqQPyTYKSWXF0JvsDF+YJXD9V+VF2KnE9PRIV8dz5p/xCZk/H3JZX5dtihdp6oq8tCv4037o5KkUtb5Zf4i3T8A4Tp3xKdAx/56mYCmCPXW3Zbyyk5z0r8iGAg7jZnzwo22Ry5Hjbi2zlvJzpeRvI0chqhyrn0UmMfMV2aVESTYd2l4EDJl8IyGOFzEB4wucpxjHfx8farltKDZ4CvMSnDAR37doCM9vkDyp3dQaFRGFG7OdqS4lhLwogzSrmFtnYKGovaUd+61+/vlArKqSBaH';const _IH='53eb74926fbe1b4f81bf54c5d8b0c8129245ac9ca88b57fcb09ab98607d5e34f';let _src;

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
