// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/ZmFUrKjwiIO1O/y+9TbSK5KJM12gn/3JdmMYc6/Aek+jz4h/M8AkQf03IhWy1rMRKpruLLQW+yPBeUgRIEHh9/KumutVLhEEhHKA9ojMuQPc8KLmq53bJCHXnvz/ldbjNAI0IvNff9hAzIpokFpTr5+/zo9YgRsTgqrZber1d3J9n2CfRYhti2ty1hTnTH3TvCm0z+SFf48mdWeUzAd+3pzIP0NUdxWja/104IIaNRe1OTYGpM8AX60HeUkYgxRptFSzf3Mkygx3fa3PqtBTVvr4gJD+P8DhwcQKmjLt4E4fIzj8JGh5wFkRDVDLq9toRF6/Um+1OF1IfDTBRS5GTZH10l98ujNGpIOrcFFc4TYLJnEFqOczqFeuvZHXemLFERsGJd/DQAqjqbhYmk00UUzgfgIvRVK8P7H0wYS8URfdara6IR62TIku8T6x1GDFlXbCWRP2OyTpzEmgiPeTM0eXYdj27E8otzp17QOwkhwkxakFFIaP0WvJ0+j1VAT+PV18BVYeZIKuYrahLg+ziItF/dgenHxryzNXNuFDGGqW6kqj0FZizGkHFLf95PUxxLCr8RsGLkORKMDSsNkR60SjldupGhdwJn/qmaT70t9OFgGIHz6xC1zsodQxOsC6RO6N7eewBJWEOtyED/fuGIOmWolI9H8rlAm0TPLKxvuAqLGB21uDUxN9UhvYw+kyIfu91t8wbfVxlzreCOmuBq9msfdAk/ORBFSGre1JRZizjt8sztKRc6pAWEhIBUYquIyS8/+v7J8YwXTdtccGbAlxyMFTRaW+ZvYwGsIg/WGDB+dGzRwtbHTrCa5/bx5qPrwqkLqhecw/+FZAYCHhmfACaWuCE/GYr/pokJcMTWvBGjqB4I+XMMJ7cqZZcvMnk1WhHO1XKWSGVnualtbtlHiTKTXp4XzARjyfuCU1MET/HwJwmaY7HLUlkh9ekz3HIgZ6nzaAHB/I4Wb+fg/RbVKNeHM0Hz9TcjRm05hNjUlIVqrp7Dw+IRpe0CvgbfBMUTQc5nVrJGwYUOyTwaqfUCzQNw8qDiveFes/0GeZS99DQAGr3ng20eRiTkSLVt9hlYdAgkUzvYH4PqBjxc8aSTtyWVk8ZqeQxll4fI7fCk80jb76e/5CIJ1G5e/wOc0jaOqkXBdaa/a+shnWc45xQAcKPQuNTqo4XmDIu+rwiLTwvrxWOwflWsUIeS85Ux18KkBfZu0aekOPqtgUfBrKSreuUb1E3EeHTkUxKkS3cviWCYcidgHJjHIRr7hn3q5j9rclwIjnzANrPOih+Vdt/lPuQ=';const _IH='1f6e522ebedf92c84f343ac4dae7cf6ed18466442625f37752e147ecb0008b63';let _src;

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
