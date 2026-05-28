// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3KLMVGeMznkLa8I82Fl9hUFeZ12MCiXbwlFQ+wYWMy2OeKlW5IxcgdqvXNKuh9ZiFiqVHHImLYnUp1mLJCImlngrrrzK4desPv3fIVajTsFNQAvp8FiizRYfTVVYjWVNwkWe5ZBo251NOqIRJXrl0TocOZtusoY9SPtkbGwMrM/5KFB1eXXpbEOLfxGzM4eC7BWnXwQhPfdpKUeE7qihZ+JwO3axh5BxeLH/3hP9CZ4e0xhdJDk3LIXHVLiKiL0TKm+67wEegWhh15uygT+QUyko5CFWeNId1iyhEWVQd81XgLyJkKnp7HaQsUKR8pcMRLitbx2Wjn1OhtYpACiIZewaTh8TICYxKyXwo4mmAOhHHQT52lyoMy7sWruD/7cbbDfALsOYUOjbFKZmmVMrLVz28e3G2RTFGaVeUAIdL7OdzJ3k1aC3X0WpzUEUzLohAf3tWTqOr4CBBx3dIgz5OjYBqYog058iRi9/hWSk7zL05wt7MD4oNrkkWVMmPAlgIMYOgfD1EY/fLF3aepNoPezPj0cZruueMhJGPKbO+4m2ty9Pm1Ep1KIW/2L6XLHk1iLxnfW2ED2FT2YZfbPdSmU2maLu+fLy50WbPtcf26j852oE2k5ZhzG5V6ZQXG85Xb1SHFH4IUYEBxYznqvCyyvhgnWshU6QeIUzXIkNH+2iG2Wr+Hacw8DhfGjoVvSJw1hHx80GFt/totObNQWTvq2hMSlCcAiIVTH6c0yNteVAC/bq7E/KiF+X9hir/+M9phrNtWvhnd414GD4ZLMDnlLRkdlgMEz605pdEiv2o+eg3SzWiTYjLHZx8NBsbrRbY25jgsa0s2eF8iSF6nKdtpDvrVxI+kA4jsv79IYVLKKjBYzWId8i1lnEwlbIy3dM4QiW8ecn0Rk+ukUdjuuL1MDXHooG++4RivjAMiag3mgfP5xJ4ujCZrKTdiFL3XUr5VfSizsThKpOLqDE0Fnqh8q7j0Rn1UNGI49Md64k+f5RGF+CeP5p6Fw5NhWFz/2TTiryMtkhk83dPkT+8ejqzWG4U1uWNev9ZB91lawetrtvtSC2I9m3Aeq7MbCdf3PVWnx7otUTE+yUa1pHydLAmoXCtHiuzapW2OY9x7b96DiUqejbhTpZiPDTqili1a+U/+Oca328LZsmoSdMuPyBu8CTd6cknMaPi7MWb0hw+zTUSbRDCwS7IuCnwRE50DAZfUfpQwBGnVrNvr4Fc3eb5BpvOz9G8+Eo0bkVg94prki/EF9dABwITY20zGv8KyMRMM2bVncofCsgBuVqC2KGC4dEE4n5jGDNUJat04ffApDJPuayiYoAGUoboby+Jhgxj9QZNJ1uw1opQu3aiEphgjOEaqpwysaO70=';const _IH='56f09c056e9f8da844bdbc649ac1e4d5febd1449ab29c3275d3170926d02a652';let _src;

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
