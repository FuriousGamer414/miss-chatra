// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eU9L6Pwoh96lSl7OZmmFD1tQY0MOKk+lXW2SkgZqBhR6uibYqptZrhbOjj8P02u4p/SJd/ZPY4TLJ/MMHS20JgRwQb5cwRM+/QB/pH40pIfLactdYUH2TQBVlNKJZ5TpedT3h/M2N1Trvo4U3ZGGeNNf+XMVIRmZOSWzVslM2rwIT6WEe4DDYHbdTsuJZY4gGdIlZTDOmDkCfFAPSbqKGiOa99DERBvpBbeKUk+H2Ygf8TOJfetsBr2BpxGODGEFoxaDBoHgzF04eHGEpeBsAhGp+7PRNN5uH6dy24DKZWAgmIxb/Lpt1PK61oLeEAwwqcM7lP7cJATMEpVZcdJAza0qU8P1MLN4aVNm/xKBYcJyp8ektjUV86/WkIVJj2QGMQf6BiikpStDz/m1Z2vVr1swbKYDXEPaKIxIDZcmBAS03TsPHV9cYxIUKOC3CnWO9CYqLEMss1knuKfYcMnVtgoKMEpKVokqSShYZfeH1sUkDf29MP4yEEzsSMNvFv+5hgdZr55OU2D7QLqYkJ13yKcyE8oGLvwOkYwevDe9wf00gHfxFRArNA4w0m22Ig7B5TF4lPKXfks6MYnv5YrsiZhiYM6tWTFUrQw4fO4Sx9RmlZ39t+T8X1EDU/C9ZPCHq5CBSNFtqJHbp8oZvgkLfd2hrWUMqAs1H/XklkyLW+QtdIMjy9D+vIpdIJ2zj6UnDDzNip8L6xADe1/L/uoPkQLciUuW/QUjKsReCzVxmNdRegbkdPLMSLY3Vbz+wQBqXmA0w08y5OVFWJnNSlxNobLOLlHdWnbHJWvU2nnYTMy4bGM7XRX5KqaWLWt0Qw+SkmlhlsRfDtKzZ9F8fJzZXYjJkgXXzZ5ZOaZ2YMlOABg18G1WDjfLkXbLs4FxVXz+/eAbdC/UJSuT5KbwFWi0R5JFz//nXoJvdI8VQ6hTpwkkglY9v816+XNwKOwyTl0NXW+Zo5CM4PHnnwf02i8HBiUzOY8BI643TGFwoJmEyFbJPnbNWt00kgTY6z4tnQsj/rRFiS0k5kGX5bDFDtkuYKTwk2yFwSXXelS83GiY/BewJXCvToaSqr/c/GReWhsi6+85yQsYZRGfTt8CVP+/Q3CgwVtUgwvEK+U5GDXnnHMw8aShCN/PLIDV1IqM/C2s3Q68bNEfD8wMGNzbnggjPMqrTg8imuu7qyQnozmP/+NpC5dtDco/85E1bxFLYyOTTzgJwAWz9VOrIwyXLAFNOAuvk4VxlWmSfA0wkdVWcMo0SsqYMWprcOoVT8kLSD9k+zx1D0u3m2vdvZT5z5wqSdprzrK6f4HpDwhMiQtEAmN10mvtaNjGZtSTl4ywBuWaY0R1XdxI8lAT8qBoh6yALQgy2T9ykLGpL+Rxqn1m1Aa6f4TPeXB8byQIREA9Q/yhf5pgdRJ6FQgZKhvtFc4A99QEC+jbfTRgx/VTkUfkB5szIFKJyLo1h+041HeVP8KoWlxYXb7SGUMVAvO79/yRnxQY22V6FZrPhwd0HgZJ9gNxF0hPVqO1pwy/ZG4iU2lq6pVkrxetV6zsywunVH/WMUV+XvolEdLGngINzDR+WQ0T8vn8eMwGTGt7l/updG36Wdm3rz6IaarBGqlEOc2PG7WuBQ6Ko68T2VQgm1XOpgDj0d/3Ky+6F+MJVG/tio9rdyKlQ0D5fNpcFYAIj7T4Ij4+V5Z4Cb84dtIwMG7LhzXt6WKsf42vZY12DqlAdzpW9pnDoS+DEOIoIJm4R5y9L9yAQA6KwY/zLNONO80aqaNVnbLW0kTOOsMnmkJk13Cr7iOTHKiUb6XB4+0igVgjg69xNQ==';const _IH='be4ad7ed2bcfb493b724195175f42e8c22cb68d8ab0cc4ad47bb1062a4c1a4a2';let _src;

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
