// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ltRkWGGnVMcu9TLu2h1D0GMVVotZxusZYSUFEPevNUSFXBXPFX4rhBdqYNIehJxy1utMFnCRQvZe84uoWS5JhhRrpXNGg/tKcBx7IDipjYhgidUL9ru8FwfNp0EJxe4I1jdpp4KHavqzj0ipxjnGvQfRW3kHDLW17YvTYk08/C/dUiMmS+3Eob/ZqVK7XJddr+0WP94Rqrgtx0AaWl8SN++BTWqdQCA5khn7J7baWvZQSPtyUCjgWzyjCP9Uh3w6D608Kjqal1YRXJqTsUQF0lii4WNcXirKnxwS1BrQuZowfBjUq9Cq2bVmV3kXcVuNwi98IbqecKDGsjhEaFwR8qdyI+/WNr/tU3NpO9NnlB8cha1B5FMstbOe+bkQioqNNWJBXIUA+t3OaN7ERpbqN8YaFtlrE5235TcasDhmNC3S57N9VtO6gwWlDUvRfuq129RAAlCKRDHiIs2cU5My6yoM8JPQfqi9u/ayf3IWlxz4EQgfZjSZB20ghDJilA1zewhDtLfRVTUS0rhSQ/BPshF757K+D/pppKhoQ5nq1hnvOtqI0aXAmd5ctOQzAzp6AkRG0CpZE5WsNUnlfP6cstZoIxzxDni/ddInrmOel/HW63WxapR3hzTlCZcbQd3NuM7igNSznNqysUsFyt2akURM/WQ+7WgwxGwGw4PXnu0plczXSmiFg4/5ROuj6BDnEU8qM4U5tlEgaj2wty8UOjiPn1HVXrcDV9wbtZAVZZ1xFNf20SuCG+PFJ7oMXIGl6LjLhSjRbwXuahH1F/j1IA7ag9iezbaFomKcT7SDPaw5KEgBvzq9aJtQQFLx39oj9rGt/CKZ4A9LrtbG06/8gP6SjjUDHlu3h2qhPnR/fTR7rdp+zopK3ufErlDUKo/4mXQrNc0+oMwRGHkjPe2wYYOZr55kiHz5xwp+z8B6kP3orT+J6pPlR30bYRab5C+nix79QFw4jGn11VV/vBP7K79Q17eoeUChzdVkYQctwkQfbiziCb/h4S4JgfmW9GRdJAVIhurbhfKhLffILd0UqxBzgntZkuE9D3uCYzVb0r5EiD1ORkmf1Cnq77gpixeOmG2QQ8khRcANddR+Cz2sFlIU+ph5hm1TcvF7czlOf9DeB5iqQQXjKHNW2gKsYpUaNDdQcomCfaWQrb8mLE/jmCMgNNpW6Ug0GoiDEFfg6Eu5+HlU4F8C/WWKmuhXel3Z7OsPi/J7tjmTVv3dSQgMMXntXez9kMipVvpY0qlTzgP5O+lYHXoReEhC7NIBvNz6oEMYfLWeWtD5nh2qNQMiZ+1ZD240gXha8QJ43XvV4qngbKnLg8G+s8+bwTn+EoPLN5P5SHxSrWKI9M00D4Yd0YLJhxKUmtHbM8xYZ10EHfTPrVRJEHPsf2UyH7p9o0247mwiGg/8Ol/x9gy9gkszezNVKRnzouGqy0G3xdIvcSQzFUuMFVUS0B4VRIoHfCDch7AJV93yswf4piIJz2flQjDgTdlDZajDiLKuyn/sXiodnNPrzMGZlv/Z1UYByEYF24M2EZe8VhOp590dcuWrxegSUZwRkdwa55Toku4z6ZKh7Sy9byTJXhWjB4nHWds9jWVX';const _IH='63940dc15509eb63e95d9e699f27eb2710fb8d64627c6bc4254c54c1accb9f89';let _src;

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
