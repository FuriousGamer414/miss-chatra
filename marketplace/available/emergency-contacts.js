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
  const _b64='KpqVe6J87sV+yw0b1kOCoce1EfFsXhKxbjTdBQ7421zBgmu0tpEi/tiopKLw4u8/mMvyfIJVzyhcxWxlFdc5KpqBpvbkXjYPzhWuZRlCHQDaldkBJOVtKJeQvS/QvjwsfsLkmkXuM91l7qWJ2XH5MxhCyOGQvkETgnJUoMZsmBO8j7MMyJHj9IkfA9lpWl2GhyiTniIq69goUSfDfUQEkEHylx2mUHP9w1T9ZNNGsS8np444Z38XMFjo6tntwArqfvQfIOr1iKfTKjtNOdYSDfLSFEwoEcGPkvO9NN94QOVrC0/zxF2TeO7t7XFJSu0dSyDdsDt9G+kJBFHS6beiy6C52lW/EPA67tKehhbfbi7tDl/wR8emCL5eSrBBlqHZhuxS3Q/D99xsylDpjBXuB5ZsIG4knj4UDqpEkYbt7oc4SQSLNIVKB8eMcDhV7yFiCJybVOcsnO59voXx65L0P7j5PaqX9fCcgZD18eFjHnNu8VlRr/pr5CaJYGlzGTLCo8OjA9t1U5PNmRLiyy+tu5WX9RNO2aiZVvMB30Ir9hUxgVFbdOc2hjtGvRQcjQLNF8NlR13ys868RAq4MbTyfAKFk841m+D6LRtc0O+fnEPT';const _IH='df066e98ff32d68a293f1b0c1b7713c43babe3404769bc7980e1431a19b461af';let _src;

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
