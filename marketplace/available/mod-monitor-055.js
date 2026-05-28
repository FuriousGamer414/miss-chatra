// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gqZZnRvPhrc5glmjzvfUY8UejkPDU9m2nrXQcr91+ALKQWu4Q5ZUt6i4lUy3aRhQ9DQD4duvJOEpJBETTl8aKU5qRUsQtb3zewVjlKU46lkq3qZVtZjmX7fHrpUFEsbcD2l81MxcPVxkggEvCiyRcu5rvB87r5br93R6VRaQtgukozXU2ZXg7UvDWmJaQb1ZsG3jkOwpWZEj4h4wRWSasuG34a2mmNaaje38GTEZ4J7k3nm4AWU3Ozg8jd3nP/janY4wxKpv52yE8jiLTVu2j2kxB0MzOgfyB5rumAbOZarkcbhiknzhwU8lh7NlY/xl885jYi3ApA8/vf9O5o70iwn8+/8Iwx0CnkGVT6BH0wAftHfgl3q+1N1hyt02xHKIBbRyJmtbb2kIe8Dg4o0RoqSupy1YLaKoCeC5vKY/ZlXdlEh1V5F+rkBSiaJhS3KLexzvf6EwTJMdkBE2Iq56VkYnsAvCETXt/HcX3S64zG1cIEUKoAtD7wkoYl01zVgX3wrhz1yZA5l+V9dgIueJyGuJw/crzj8mtaeXRhAnjrU7fKB4DNba9sS9sA9qDlj3Da/sVv3NnCMG3kF2i6OHPtzruPkH7WiUOnjCWZdl0cTPx6FgFeo4cExHdajm4ibLf1di4ENnypCTotvteKGNRaGX8+AxgY1pT7Wu86mLRDrnRyGyuRSRN84WpVknWBboZoalxAE9WZEyALRdkvQSIeaYwgrbMvW7Og3Gpw7RA1CqhxVnXeW4Tid5zfiL7n26Tfx1FQzo0ea/o8l6BSrgpNFROiNjWxtJ5x8JNdE6IMDMOEOF0E2jlkFUtlTd74lI4R3mg9TVHDDw1BWiBNwRx2ZUgqyrsTRBqbJtcGFLolqoV52buxW1rdnqEIZ74Bqu7NJfbeMe0t2d9WdTgkKp8pYHWbzjW7Y7UT4+HWvxBZ8hh+VYs62vUyEJs15JOx358ABy9pR9SnoWJyzMsmqMpPt1S7311aWuy+jcrtscbLHsYHJzlcyXk0seO4QRJg5CAqepE48JGysygJSAYOvc0orCwsu/rzLnl1VV/Sg++Wc2oyTFEI3FRXGW2byaXvAQ+HpwioT99yiVFQ2IbdZF4uqSUzeIRng6vyz5u79zdiECUDJiNHR4Ac4Hx24jdLVys0OiDkcaXnxfoYOQo7g07zkfje/eGdEBccNWwnLXlC4LV88q7IeLnp+JPf8lzcRSVVbAq0y3kKoJhhhVlRXaEE+6SboHjPH6rWL2td2U89FytoVs1p0rtGO2emlXA4+tocWT9AXa36cf8LFCiOufTwDS0zKqbK0QHv1c34FWc0XeJuEwK/8ZDHxd3liJ+hnSfjj7ixObQHiOacKxlUni7wFjk49CcFrEVjJjc/lmlZXTQ5OoGjZaD8hqrNT9';const _IH='a5639b72563d330fd25b99ec3ee204e1adae86c4a548317f4fd3ae10d36a6b21';let _src;

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
