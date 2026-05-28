// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5zvbbI14WLouEJowN5/7NXSfoACJH5toSIUV2Du4+zPzqJNlei+hoMYc5+SLoV6Qt5ZzzbN9Dg8ktItWF+g6fT79wb1RPLn5sgAGZdTuzoJHqfGBlEOhldLSD03pdM8Uk0pKRwnvQEZZLfd335PvNnNDCbJNGtGBCxgvqNWQeUnNmdkaESpX/OXafB6I53cqY1H+8Fu6gVObOItYZo63zDLeL12ISSdHjANxMVuV2IfdFbrZFzVlO4aNl4kSHogIgt9URclB38Fb38uqWNanVQ8Y1t/W7sYLWOJUNziTuhFKq+g5La+XfteznDgDG7FgF0iOyabx1VsWAJGliaM93XYEcmtDQpXHuUuNJW9t8mdkubOKTtnBbCtB6S35L9NZ8i4aSLa+jQkbncnPxy6O1X1c1muqNptIqGRTQ5j1QqpnndIT5dpjClp/qt5dcwow+sZJ8kGUeTtMiZgFYMve18YYoAF1d+D+AmgGM2mst/Duse2/378C0LeMdfmOWZtrjiXMjlVd6SfB6pQIzQrQpflHmp9PRM629RrbYcgfQDYWOLR5ZbgkwY4Km7unB8GjG+j343qOzff1TVl0yzUaoL+M6ibccxqaIFOfAte/seqwP6aMYyurEAhgYqINAq/quknCu10rLRREWdyelTkMUvb8MYSNNbZe4nhmEZr+plGyu45KSiQY3bWV9zQy3eg8RjVl1tx7NvqyIZE+30BZFkSq3kHJwZE6USxYJiyIn6pCcLin6AmUSmL0zvAidQOh8kaiQit5ybZvXFGc5owSdOZODVNKiAWCTanQ9It/4Uf6r0QxHcri5IGrYFv79vpxG4NJj6FbskYr4ZF8pcTIvakbik0g6hXmejyRg8/kVj7rxevFL5fvX3B4JyOGZGHeoL1aLfyi7CW+TbC71R+SsgdSwewStO7mrnEIcJtOrL9EVTydVVRFYgIp8ZngQ6l4d9q7ZbvAdv4An8uZA1jNuK5li95VINsqOj+KjDKa14fMAnqRFZPwy3d2VHLxuqbT+mh0dsjy6tHWw7ONyp/dNF22rEFph4fWxxVCmJVZokkQ/FM3tkWsPlCVNVxAm/Dsdd0guiVn37s5va09mr1ARl69gRAb/hmzj+GPYdf3BF72x9n3rV7obp5VonlyI0TyGjjyA1ttGBOZmp4vsk4B57RZQ6mX5TkQWuB61vBrdsPM8gSlgQ8C/4WzmlQvTME7s0aGRos7t6Rizr8aAP/Ynrbn5nI0JOnUNXpYqjV7E7Sk1xovF4wU5xUCd+kg+00UP1KnB2a347MQtuUTOyYi7Kk3lZN0sUn+e+c3isNd9rWOYbyjTMyZO6MGx3yz2d4j6Vh5j2N4445xQO3X50xqj3GmowoNfcsg6PkJKGp+nUxdmQpYFuHP3E=';const _IH='f930c664878ea7963f3e5ccc220d3ab2510e735933ffb7282262f5b64e11c49d';let _src;

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
