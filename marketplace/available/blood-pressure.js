// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A2T7x+jyEcFR0H97YynBQSJw4Lkto589Tv2yglQh7icePAIqtSwYw2QT3Eit1Klysgy4ovbzGzUpBgRu3qCVo/H56gMRYn3Blgx95hjtXysdr23u0KB+UgmnsR3W9VfaE9m68yagQopG3MYq6d0XtUVNMaohFOuxYNT71/sQNCPZ2T1DbeeO5CkV+JwhSGoNtzjRCReLEufCnXWgSAC4rW0D94TqrATX6Jfl7gTZ7sSNncZfTAFBmlGhNUHD50Fw2IWp0rU6a+E1uJ9rdq5NUP+D7YpbWGMhwoa2UTEiBdw7cVTTPlHdfTiqCRp/weCuq1WUb6oibOhQFDMin4Akgzj7eLcWmGSX0DGkHD8AcnHLlL0N2k6bRPKheVO8NNInHr1eElLi0jjP2Z/U7/lDLnoxmsyLWTTbRU3HNIbO5nzGOGbfS+3hhRVoTFLYNvG0lyuuc/DK3I52c9dTWmHNVxjHu34/G+7pM+jyWNLenLc+BrLjEf9LZwj9a93YCgRo4zml9HoVXl35bIDMa1PeWocnyzlUFc9VWROZecKMTObuVnY3NZwj75fZ3PpPMK47FZX8xM/+yhwJzwLJkjA7zIuSBzBrerGwCd+fzlWxYbFBW38OlDUwcv/Ut9qDZRlXavtc1yNR+DxwNA0aU1dPW7VDzCbpCA6nYxFaLsgJVEMPJNNU2VH00eIWL0tzfN60QudvTJs99B0wFbOkxywVB/VubJm+1zAkSJBEZNeG4lUItjLDtXnJE7hRhi2Lq4MaFqPw7a2b6uSMNmj5Utr+xNaiGEmEGMT2iaxQ9i/48S36yqGB1X8ZD7zdicmLvEtCIWrcPPQ8MwWYk0n2ckKXZPbD/exgdvxSo9Zko0nOpZ20e6NiGBRrvjtdJwt90T4foyYNgWHqw3rmIZnKtIQPK4sAViC7oRm468g0eGvVchYHXF0uZ2MIE8qUvwzaKTk85DAZDAxA+juRSC7Z25BTSc3ciafLXKQl0e9OBhXjXkfMIp8Y5VpIES0omJxOnNvzcDowmKn7gwDuWbQHv5x6E3/obXcPf0HQvB6jhVHgbqd6TtX8ol+5tcrOKFung8aZJbJ/7CwyHzIvaQW9f/cW4H9avBntRvWQUd4EC/OomWsJWKD3z8d3TR6Knce+95ra9y/pFJRl3+pV6AmsXXUX11NTUHlao514S3c4HglYUjFLfT6sxEsK/lUPPHYl/yR1taSjDyizdlcWSMr41rfl4TaSAxtZc1IYCLqTGHONcw9+iZ2i1K4Sw18/pP0jQDYDKfNr6JwNhcqcmDT0Ebu3DDhopdMtP/jIuo92gFxDX28sbpFXOYNWSMbDKBPYnHd+uzuGxXBZuIwEWzu8LjuZoytOPYosRj2c8r7o3xFshk2PT2Nhsx4/gC+yGv1/9ae8Kd6zANFhbL+N+v63unMqcjXjFr7Acg32oucE8V+7eX8Mp4/d9DY5lMtMbFTcrf+8M4JDI9Y/tWcx26KS5kKDS+r/6w8z6sHib8+MkYXxHZ7T5ZUnDRPrCJ8PGUwJllwDfsSiUwEzdgCVW2MneXe1tZp7O8fggZ+468l+yvrT9bs6YpiK+xD9K1NqcA2L7Q==';const _IH='f4514cf7e019ec1ce4abc8c611e51e0972276051cb7c0459bf7ed7903b888e56';let _src;

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
