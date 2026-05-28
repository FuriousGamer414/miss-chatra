// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1wJmeSQLQ+Z2lyjo9FmU18UfXElp/BbrdTQozDfjdgsm8LZj6hV96esfccdy3g1uMOY7XgCrQyDSMHljbqVXcc01EZuduJjA78N6FPpzpdKZmDzbYfXxXPuZrBnhZe0BXIgwtvoORWLnHaY2FXSQURI572bxgj7Dp7X064L5vuU2lakEeFfdc20cqxe8625WsrY9o9NDnSoABilidaApotrphTFHSVzogp5blERZmjkpBC7cFN4w6MsvrsSB7DNWbK18uNjauXR7zn9HyaSSYhQ+0+UzmegjhyyzensSeDbkq59DpGeSm/Z+ebGJPK2ahHxHyMjSYnJrvJMnAETc8fnhyFyGFc4VY+ParYPEvzaweiFVNqTiSZu94HI2y30kqKQOH5b7ua+p+yoT+f+R9/JD4N7w74yNMlxWRWbdCkQnFvzBzEpHMbwLxcrtK7hG8Qi9aq8OkOpGKUrbKfCwI4/8FLgsGoDQryvuU8YrEosQ1Pduyh6kxTFuGv0f+9yARM9NPsmsk9H3b3df7HJxmsSajZ8G3d6b4sbPMHqUtvTGeAyf3IMw1g29gN95q0hDnUmSWgahkklNjVAQXl1bWGqOJs6mEGa8E8AYl5e0MKFJ/+pjK8X0utaCNO2/avIPTP0Wvt84gcFb+QdqkjHPswL0cOyLA1NVGfJB0p3R/9BMClwEq8qGtWSmBNOQIWJJScHsrCQTsyn4D/Zwc6VGQL/cNFJ4gT41+ikP7ZgJwP8rpCeHLBjRiamGqZEiOpPsUpGCx9RI5/Mrsll7kSIrGbyrtrmrhkTTG2GWtj1ZLxwDR3UkG7q3BIY/JgdyrZp74ZPEK4SX4uGRu9YRzmQPRoIDB88FjyB4JxnWqsAat+Un16LfKGrbrChZGY65cqmrJTkOzKt2xZgX+Nb8GNtarRzTeQp4Hi11r4Xj9yF8A2R2bxMR6FL1fHjVD7zT+BIuSbH9KYvxFzrONwE5YPgGnLgx/anOs5wwYMHbxvz8uKKefS5C/r85hMidtSh6wADGhaPl06n3gW1qHiE63HN9J7s2nQQAkY16NZuNUulqB9HJ7nb19JAPzxuTtsg7JSZu7SFXTz1kphIM2H+qtU83wLFz2tLJUfMOOCguO5FqWMU3NMF9a6YSwVrDCNgDRkkH3piv4O8MfdjXYWO/rP4ieUDc0ayDOPbR2dUVw/eHlLzRrYJ9tdta/qkz6AlWhqMcSxDSpovJTbIf4K9EXg8ni5C9G6BhFHY98J45n2MRw169DA1MyIwiYELSOnOMXpIBPA7a+OaLapUlFW6GEOYPHu5lfvZDgN/RbE3OZ6CVBEq51WLJ9pQDRF4TXMrnn1WBl+a5iyiZ8W0QJeDcyYgsPpOrWfTfXCEWlZIM1OdfA==';const _IH='db0345f92bb82539c4c799ba0828fa9921cbbb5846893cccdecd71b627f9ad13';let _src;

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
