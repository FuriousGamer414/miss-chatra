// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy++kGz3dimCmgHGJ2fIkHGdX0JttiOkF1MB2HxZ+Ht7/R4y2vq/jQoUYrvQz/mFF9ZRxiXFKvbpHnc+1q+g3f1tuGDGpG2qGHGLsIbLjG1Wh6QlU5LQoVD9Y7HZll9o92nlUZm62lOge5RNcls2qV2OrjPSyklpL44N4jF1XDDmgA9siElPZIFSKaI3F6x1OwHNTVKzEvntU+SgwCh2dyvg2Be9S8YJbfkc8TmIg7ilanVou21WJhymxqGZWkCVn6WlbOSFeTyCUOX6fB9P2DAlBqj7oyryj6aDh1JJyh2LddSDqD8F0EDxx6XcyunN/MZV2JOW8+TEpN2cN2nIJ9EUyYZqIX1bCk6OjIdTWLSUQfqfsZIW2NDuy8jeN8wIg8EucXGdHZiJbqV21AFBJ3AMA5mBimPb7aNH1wHPsardooEJW+dx64Q0xNP7+oPxWr1UIyB2xf5rZ14/UJ3iLKo+BLdzXw1qkK87s29jLWZ8T/ykvmLJODY8LKfLTkD9uB8ud1Fx6Blp4qJiWAbceYUYRB73j8L0LlCgWFZXVyrI5uc/nBSmMXy6wZNCsNBxJdLYuzgAkhR14CynnMlKJP8GqUBbbBxGuqxaECq/R2tEjH78/J1mquvzsl0fP/BXdBZlaWHTpGots/7PZiEg0dWVt2nDAm8AuoG22CegL1ylFgXHc59zscU5GMe7O08+9fpnuqEtcfOiFm2d7fxgn5hoYBY92hE4QbjTb8YwluTFUrlhvd9EE954LIm+efITBvyDSNp6w2kLaBU5gI5v8ZIcrS3mOJqFZSB6iNXOtWVCrFmJsqVO+P8ObZFupqxsRoZwveWgHgtBuRvAGatQ+MsXBv635NQv1wKDq4iViJ0mlxSIwVkGls5ChM34VFebCclrwu8CJUTAfdNV4KAXH9YPTfBsQgzo7tY5LhZjmEfTugUQzfLB7jb8RknYHWmL8hRZzDr/D0kUXVyb68E2N5S52vdwKi6V9QkrOqPnikbtBTfbb38q';const _IH='0ce0605bb2cf3ad459b7007b6673553f669dc449bec976c2d8c0220f536fa803';let _src;

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
