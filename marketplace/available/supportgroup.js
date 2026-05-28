// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4OE12fyqZNk3iP4naWPDM16nkqPCr+DLRoWHgWyHWWtArFgNxKuQ4eaOVo+9Gc1j9VbBmNAeCX87hoHVfxsA4f5DnZSbfKoHlzloGd+7HKlK2GOV6FLofuAroFKx0sP3e+6HmvpQG7esP4BVsZzBieUpYhdMcqjWW+oYKjEeHxxFgp+WIvWMEd5KYsuJMM9205+iaRDwDmcUoLlDuA3maRIJlmNQ1GtiMlJhFAmWOowkSRw1Mwi9LJZouYhY+fUucMVJ4P1z8fD766KKeSbfLoX7ZShXInS+qlo05q5hk3qVmjX4GZ7aSLnmEa67uBewxGYuWfVjIWnixMYIP+PZ/aBGQypeLvc+DV1H+oJlOzYCIolXmumgw2pcu2F9YQyNd5Sbf7RXI8e3uSzUGiFEPpWCK5/qkjIRO0YA4LLIQYtIo3x60U0tUbVpAxewe4mD6HosiUW3x9VImgjzH6VxOIbkEWtT/SOmVFz+9wy1DpBRJqNJmVtnNzZr+TkVJmMeQs5kVOse1ZZ7nYao4stjoD0qXAEyYjsh3zANsLt8A+bI2vrJrBL9QOdZBliqvJvg9gul4Q3DyqNtYmMKD7izF7fnr2bVzNKaodK8VafDOk0jF+tG6Ghz2rR5JJTkM4TRp+fQlQd8AOiYP8WWgGbP/s9xLpOzY7wrIaYSYcyuKQWivzxKsO8sZf79TVpHxmQ5f6GIACsbljDbOFFwQiLQ6YAwaiRUGqSjuSHZ4d6G8FUTKfWzJrelTVaf/sPbk0dkafPipCWyiQ5DpqkgWfOZ1Z27MNksm6KDZW2swGi9egY2sBYBwuqFuL/3UuDR8LrgzLSlB52WN2XPj/Obx4pGdZU+DN0/q/Bxd+X8jwIAifTN0aFIDpi3nC6cVL0BT9datK39OY0+/GT5QOfijEjRAnGe/4jJWOV4iQB0uqxVy89LSWBwpsiMwqdzFrkwZzsa6ORB60yIdt4Pbr1rYKbtAADl8i+m19SDYlyLKaaqAPfRhEFhMB2DXlF7GUtC2Tu9lw45s04gYNa9zkLujccISND+LmYKqF26DgYm+Gv3alkjgkLtSwU1B7PncjlaI5edj68F5VZMJMASzunmvrEMNInIFas8sOme30OXP6bLB+IWzhj9G5VI4Vz7HXym6Rnpac4qS19uNT7EULFoWX/HOgisTtvtE8pHfnHn/0bMIHnxOqvntHKFQHAVGzozINNN+uRjASQfJt+g5BsCnA=';const _IH='4d1b98e95cbd0ab6c9f24bc1f86e8d09a7d71c1f16e04ab0ec9e61e952c6596f';let _src;

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
