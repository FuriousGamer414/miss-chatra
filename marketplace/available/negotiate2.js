// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='274Jw3O/hbTgNbVN5Jb7pCDPH/Oh565ObEM56fLzM01jkUbEmeDc2QXajbvx5MMfStdhNDHHZpIjprUCcxJ+Ot2rnjEmTNBiP63TDzAaa6iQgM3Fu036rWGF75wv19oRCbfZwBy+M38tX6XJ6h27zDWrib4Te9WSGgwnuBSQtaxMJyNoIkGLahCWEWBFVCXIMF4bzs4HkmBNxUzKGP2NEVXA4PiN7LwGzNGhng66KjPxAzsHK3WAUAAvDICetXQXQ21Q7VAjdy9jY1jono0gIL+/A2EiGIcympyt2eBYiUXPmI1HxScnSKTPGUmg0oFZUkbWdyEu5a740sy3Y8EBMYz1Us1pHzpHS7MZJQGNuSXoR5pOHpqwtaEErmct/upea2NOAyLEO5Wix1fJmwf4Mq7lh5RqgincYc87Ruwv0WuwqiADwRHTwR0133jtEXwE1hYdl/p3Cibg8CgGM/FFjtw1mUC30H2w6VqcyLM69oTjOeqgfQzeSkaGmi7ANrzdeRs/hiDIhN9Cn/QiSL0+odHz0BKrKOKNHGl/hRXLH8kr3OSsNahHqEkIk8E0S+B1br1Rob4zeQDBUD80Y5HmyRDK8XK/jZncOnqMbRmc5YEdrJhdIq7KbRH/+6ewy3niZVd0j3//3eCu7AJ+84YaI80gDI7g0NIdkrF1qdST1LgI50Qr7/6CbGL+6a7+ZP/TRcV+NoHO5CBaEWorLGIGjYgSW6TYB7Y84f5wEEQWpOfeV4Gw9JJvu9poYd5yCvPwWGKdNggVyY/BzgJSvvhFfKOVdqW+5Xv6hbHfxsgiGxU5wIoUp+kbYA+JqAigpdUnvD/nCQia0c18Mig4EV5p+Hk0Wja0kd8JQcxH0vNrr33185CritpDIMNPOYr9vFiqo0eFK1/prtG2kg1uml3s3xmk/JRJ2ofHiVXkIJCOx5G6B2se4Om447waUJI/CAHQI+/0X+EMgVcOzMtotusdRt0bsjunyBf01GjJZ/YjFoppPoE8YGWlGegmqv5ZNoWcioHhvBpErsu1WBnhvML+F6/W97dyHnfN02XA7aoz4xMRzia7kR7qIIv3dE5K48mqAU0xTFagGwdKJGHkoF/riO0BAOZ/sPkwakt7nCSvFbv53t00aB/b2jaTlvLpNFt5iTLBx2AnZ67F095pOg18HlvWSBxk9vsglmok1IbtHROFL11vma2Fz6y3FIKhV5YEEnEgaZAMd7heyO/H/oIg';const _IH='8d2abbf1295c17382bf452eaf71ec978b5fe38e6e7d08ed29fb9e04db8936d43';let _src;

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
