// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ34ig2A5msdF/8leJLgwbHubXo87dGPz9OpJmtc2KksuXrqiV9jzK6qr/yd6r6Ls2KCvj4/T8iKi7BlSSX1/GvO+q/OK2U/uuZYJTdXohcnCiViKxFJdRPfwgR5n80pQVo8/iYTyeTZ3UIij4kpDFhJ2oe1ccX/HqzOaBKPqG32HDtjJTUrhBWraSv0+mkAr3wHaQGAaVM+PmrT+jyXDM2OTckzvgDdN0oEswPMVLUMwGFqY258x85D6AF8Gym0UPddqjngjIQlpw6pRikQfjF79qPG4ZniiEI8Gs+YQXKGh9a5BJVO1AhuPpbCImgRvTLmVGH+exboKEzVxdmym/K/DQ53lyWMIX4wL0nHZ3jUkdWhdT/YVakJNw3eAgR2RVEjRs4LF0fEenclxN3WGjN/AoMBihjgvXmZsmaHSJ7LyYFtZbSZPmYse5Dezk07DHvWZ2UaMuHSlmul2BwQobmWKznzoHv6T34P828esUSJgIvDEXT2BCtkBHs7PopGR0/ucEbolMTOjCcI41+xLCt7hEG65uEEA8nFGHzRuxYEqoLuV/z+ULy9dNXY/VH6LJdC2Vf9ek8Brq7dmxxYchGUiJ9jgj7jV65NoLFXhGJYC9DOt/GijPm63/aBubXtZ8H6+qI32CvRNmi9QLEV1UsJMMr6mDA/EdCKJF7wJ+d87aSakUKg7cPEiJGiXStWz5qdyCBS4agrSIylAPsmyEfNd1mQT/empviqSu60pGLmjFFun/sXbNnBkl4EN/bV0ZOsikSq84+tgm5BjNNf6chK7sDfjCZfO12ZrGJH57Zf1YwlpqnlT+JBCuzw9ndwzJCE/5myukNAnqNKyUNsBYXgOJg4C+PgS4cVzLAlz4dsJM7yMd5PaLU2j5OyombFrN7ltTkC1lBlJkWlgc+E3lHXVcxReE7nDAHKiqjo/1tPHhILa5wMAiqMzkBeTUvJoiYJgZDXNCBJLsnUvOImyw1Mx4MOuDKz35mmdAfNjXxKsZ2tl6zd+l1UA42t1cpGz8XTglHohKNHnG5W62MZoZXFRxl5Z5KDbfJx790RiMH0U4IqKOlagCYTnL999ZEAAcEeK597sj0v9ZP888IiB0Y/I+Id9dmd+fcV19qYsOe0lXT0ix5Q5UE3RUpZ8WcCX51vy05hX0dIvCRP1WevZmJXEaltnfaqNcHHF1i4f3f+VI8J31ChEdOI7Ou31z7zS5oaYfGcm9KOEURoeGvcbBmLGPUY+Vp4viXDxy0DnRq4NR5oBASAcUx3eh+8MxSWTStqJVySFMjYY8R3rSdIdnUeD9446cyPK5HRcFerYvCrS5Ol1w7NguQGM0ydxaOIOpJkbu9DIhEDz55U=';const _IH='16f45968896efde4ac24fdc5dfcf29319c3c93ffcc605071085362c6d1707235';let _src;

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
