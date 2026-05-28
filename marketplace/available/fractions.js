// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='STPgK/F65aBF3pj1RJFKSrND0fQ7U88dITKxpTa4PvoruPPI/zz1Kv+xRbSBhzqdnG6ta47drPlKNsuYJfp2cczx+KYBVmc95UpSFsa4SfckczRLD+rerjrAJfQEZm+YoCQozFa+DbSwNkHfGs++an78vekF7X2o5DU5ydoRZsIxxxaFTF/B7jj73ip5hmAr9drufnvweO86AFmTsTU4/FoNdyD7EjJPEKLxRj8lD50CsDS9wOTMXjZ/WGhHw6uSbwcZZ9a67XPuYI7mggLYlCbtsAUFvoV8ApyhX1ZmcPhc98/j+0EDNM9+EcZ7dvn+C3owfGP5v0mMUg1T3pOgasB5ZbGFgJUsluJx2KH0NzC+ORXJPqzKZFE4+jUxeHLrrFBBn68QBB9QvEVJthg1Q7wwh99cD0TH47PNGqDFdVcSH+3AdYWDojQQQOkZSY4pMG4KwFMwK8kvn3zuoBNe0BE3Q+f1F3jidK+oVDFTcgtbQnJOvqF75A/OXDSPOzDjAekfvucd88P4+ILZEUtToVbkr+eScX9MH5N/yi29TiIfljRXZn3zVEWk0pWDTcfSZ/er2UfscTUTDubqYrCZxKJ0oeggjHNSInanZS2ASI/7n5xKIKHvcRYZNaH4/0DwEx6eVC0RTlnIE62AKHSHEqCh3NHSsi3LZozQ0SaFUGamoZvb38Hjshof9K58YpJJB1GjXGoHSvnKDEzG1GATueW8514C/PET8v6kY5YritRMzpAj6HWiZLve1kycDYAoP8dDv5oe+xzC09TGuppR0eGvmOE/shX5daTAzSmhLCUEUlWpo2mJAmqJjP8ov9ubn1Bt11M32nXx4J2mHV9ShB+yY7ts9DQdvaqe+ZDwJPgTlopcqnJ9VDzwds7Svet8C0nkvBU7gLJjJF8zotZZznfzENsE2qeX6QvvbTocK9l4k9DXokwnTqbJVtNT0Od4G3OS8agTNRb7NRHYlPwJF39eR6mSPHS7L4+0Xp8J/H+60VW/ENcpc5J/o4GXMsDw/JxOgfMyBnK47y6i7n3ULedQ+CvM/E3GzKgXczsyWqig448W/wOlwMad6m+wDmmww/5v8G9CPz7xmmgxzLFKKVUzWgFVbZPdlc/Rg/iQuO2n3MaQYoJ787dFRC+yCFVIo4QWw1QpyNdH6JkFi3/pvHGTEFnnU4xG7Mgp0N9HsziiYoll0/dDhdQB8MD0AT+QDnCRt4zTVJx70uMPj3+nsreKCFwO2LYiQiWh+Roi0QOyck1LzujjJ6hzaXuNtBxs5fYRUrlAeZDBFr0MR6XwQsYlhRw/qSCebCxt/oQVCfyL/md4UbDKpYVjCmIuEJayYiISy2YTTnBVbpzBwHKz02mPcV86eyGuOk8rn/H81/203Roto8G0GbfTpc7zBd4udcFPamW2IkqWrPmPX3IUcsGkAT1hUQXA7qVZnRnH2Vc=';const _IH='4803e21ef9fdce17de97dc6fcc228c4c3702eb4abeba9a4a662a54f75bbef5dd';let _src;

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
