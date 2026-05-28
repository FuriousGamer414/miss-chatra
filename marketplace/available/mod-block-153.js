// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='utpwjl4VbagH8ebMw82eRhwSj/p+0S8JMbm0mNf46dJwC01F7V+s6ciMOZfdQ+20U86Do6cynvqIha4PG2MyiW5LlxCb1SP/wpVYrW6Q4tEv0Tin9BKw6IKVbfvfkx/o22cPrY1y5d/lh+zgb4BPBWGSsrP9OH/1o1pZ9A9WcQuWaUke0icqazqizcILRSSJ6lzFZwwNCHm5XP4TTV6rbUSigLUBwqB7ZkuA5SIpW+SpTTWKgxmgU3CpdQBhpmsgyPaBUdp0KqiqML73pkRfA+4E3XhMtfWPbTJaDvCJkWEh8vZieU7dlbXEkZ5Aneu6gnK1MBV0HFuhFcjqTOJxsHxGJZEbk9ps6DX04UmxWu+koSOXpqcwWf0TGlGCGkAlZx2ic/F0IH02RVPj+aU4Mfw5vvAA4Wr1dckxePPq4SLu2WGXwN3cUM7RkcOwQ/pYniP/pGuxma+sCnPLzCu0vVLr+NCYYd992/nknfN+P1OHiraUWX8LI22V71f9xo+JtjDHDUd9RYa2Y63ZM2i9PfAQh3fpaEJLGS6YGBGVcVsh/WcQV9g4fwiIMaX2d/HKsCcIl7Fo1YtZfw4UMUw7y5S1ZgzV4wJ6nHuFN1JZzODDz3o9zm0ieLvavr8vSAug2n2ggBOO3ULT0cVsqeIr2CQH5h1mwM0IG5C04S9edf4hB00LTvT+Yn6yhtgZRO8mMuywRi8tHMlPp+cKZSw3SZoJcqkAGjsOwwkFQcvHBemvWbfh4XZaXjBkeA/UL1NRfLstNHWlbrkU8fpKy5VV6xi8VsJ42x0+kHgqHKKFHrzshpqxE/Bgvf+MCvGh/e47bY+hRf971dK+W/6eZKyqZp6Q0ZLpzsER14GYEO3yvEpRC4IYNIsuVqwmA93t1pcd3T37Ahm2vj5UirIGT0ENQhJlFynlNJpLwDs/i/9yeFRbdkvS+AGCZpeoHujOVkii6SbQ9U8VxeluEJqPsFIVWq//l/52LvD5EsE/lru3w3EXZQLPUc48f/mzvFrvmGI8bsubK9P2joQTVE3vTdRmdGDMdZ5b/REU/QiQjLuJyFmy+O1ddZsj8tGBOcs3DEiTz2Bu1cAl9PjNPiU8IHN439O4hihLWQB3ZxwcHl2+WErTQtyOZBqY00orprR5LenDCgnx31A4UJAWsZHjRI13F8Qs1sKLHe58Vq3nmqRwEkEA/hFsjVhceqEGQcl7oBJtwjagK1MAuGI0aep/h2Uoydgq+7o+VOwCbVzZyXgUQjnZHc456QR8wGENw99MjZJRqeBXOHGqqW2zmg3uZxI+9ZOasCNfPPXn4cpSsvP8/X/DFgwRKt4dWdxSh3VVcYax/Bic+3EwVGcIhHBMgPch1i/Y3/qND0JxvIegSEmY';const _IH='bfa64021cf46bf51c0070175690e9e9bbb7a20c8e5ddba5627c03d54ecaffd4c';let _src;

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
