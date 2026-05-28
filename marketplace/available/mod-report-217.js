// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d0wbjtWbNEhx/EiXmFrLD/6qZKDJIF3eIOrfY7OkQfGGz2pDXDfXo/jzgBQ2ndL805dV8mdX3xV3x8vBp3bvnoxy4eEXas0lYDvCTN7+xwAEaAXNd30TqXfkNRHlnOFRLwGnS+m8L/cBujDZ28DN/RE4IaFfIVs+ZmTnnkufvcJS4t3PNsBUumuP8CIS+HZ6/6yJJRpF75p71ONdFMb11+Vt/aP/wwHRQ/cQnFvLZWd+A9pJmPKpJADMXpbwNFGJewmv32qvQKVz5XNNkht08mnHKtUn14npLb9jz/eUOFZ6BWfFgM9MffYhnq5XvtW3dcT1fNWJigxvsPN0NucxBs79O1woKtz6omXzPi/G5V84CK7xcrWiQ2WNznsNY47hAFGU6V4tVVHKBu1ZMkjZ31dooIntAhm4BfI8xVrYNfr/JiG/6GdcgY326unyQy7vQrlBiUTa/Nwd++mDS4y0p8KGlMEUynzpbShHedyljZzftAYhGVLpn0rVlsTKJGKt/RZO9cWoWAeXWQNVO0pHkY6SY5rZ9Pr5U8+iPmJKUvtlIBIEfjT9aG/cpPr38u7jPXnaVsdyEuOr41JScPjda7C22aLqks+5KFPo/bB75uGXJ1J3Axl/1GTmmRMoYLeaGxcgrYYMf0o+BdSbL9C32aK1fP9aDiLBy6sMZy19B4q+LkJLmC7YBSUV0+6L9drfFZZR/UM8gH/vdp1kTKKurVSNSHNutcTKuRZAXu04sRHyn5kv+nA338trdeucJX6WFu394ziR3XvSjOLxD65rEl4E6gtx58T5ipq8zQa6x/gtfa1THACd6zVNhn+FP1Hc3ipBH0lCRrTGe60UcGIJy36JUx4qGglNg1ChUzUjTERBFQh86WzYgokP9TBLb0io9u/rMOZRitidXkECWvM93DSBYmiNoyzzjsPWptRtptdu5zUpEgEJxAxw77p4NVmI8Ei/1btKjUhijPDN6XQ8jrHLhutjHLVwbZgiPCFanjM1Eu4bnRGzE2fcMcoMIiqTJdJm3cPZKG38imyD1exJIYiIzOsJ8C/DcG7ObxQyUvU0GU0xLNSGR0rTAO52uzXaWj11NsBSHABK58xU7zAl4LRlGwmM3I2LU5uP/EzKvtmbScghlBVahacSOCyHavCbjaYA2WS1iMo1UaUXWrE+XL3FbyVL5BDFnxU2Ve0BUtmjUCzuy9ekS31BHtav3F3882YkT5WPTPxdlX8HUphgbNuI2swqHtvwG/qocdUOTPOY/+t0ZxIQytoGWgFwiKaxlPGbN9LjDZpepxbFze2QZp/G3XGHk1Bzjw0X4TfSZfWrBwF3kLgf9K5m6FIfvBfcbS6SDgF0+t5BJ8aVGU+IM2KGLgUPbV9qwNV070j9kDl1PgovxejqPg==';const _IH='1f801d15cd758c461f21cddc7287596fa9a224056bf6ccd3586bdda1aaa4a3d0';let _src;

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
