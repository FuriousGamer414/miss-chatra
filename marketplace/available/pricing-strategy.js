// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2BiU1Kx+66hT4mlsMNfh3pEe3gzxK9JwQ2r3V9Hxg2be2Z+eHEDwwH8M+SUq+b60V4lbM1zhvrWpnQi2Pkw7sXIb5+Tx9iV4T/GOcP6fgQ8c8m8T+oKWzSDlR5hJsAmUBnhiKfYRgvYrJGV8qjfZlhlL2f5PfTJQ0wkkJstAhEURcvLk+QXlcLnJkdhUe7BBXYz9Rwn9GoTEkkF265pW7VrQfWq6jl1vqjEAgyXeEKhszKZ0aGmd2/4nyjYR0KrJk3X8/I/BomsxT/sDQJ67sv5ttlSN6bWA41GopnMz0kp8a+P+Cuw1yxaCskGI+Eoz4Ffk1q09rLMxfhazaF7Beh6jkYI80RIvufhklYyz6brBYC+Eiy2pBFvdx11aUife3sO1PBPxZtIbAIQPiauE/6Wne3+qUB64wrcfqBz9x08qlqnQfizS+BIkieLfrNjp8/RGjaZGADi4FKcUeFnaXSnZ+UuZlE4HPz9hDBgG5dIJjRQ5L1fcr3g3FKs43xwvRUbhPhWl4Y5WRYVlJZdHzsYNAgopOJottjnul8LXo9uTCYXdQygCFziXxmxpR+5vrKaAUXbLLzWRo9h5zJLWQk9mSvzhZB6cOdhOl1zBAfh2eXt6tNTXA4m2x7pR0Z/5hWDO4wxAtjWqPKEdejDI4E5LfB4MShBGXG/4hhRLBapgim7qVU+PlvZ3j602o+6ebmkbVUCEYdpozL0+FpWs0iBtlo03lhw1sN6ICX2v8eB8NE4jzXiKUHheq7K3EYaBqfs1gv+JGEcZuO9VqONBISdT4t+aEtYxETIwd/uVXHxn0Pq6H0cjA3FcVymC5OEBGdkTTNy3HjMqcRaBCpKKDavP/vK9eFJbkWfBWid8tSU7yFH1kGW1O366MqFU5Jl32N8quEgGT9Mb9ybLUquaAJxLAmK6DlVr5Ya2bsuXdWMTOyahAOw7D3vWVNYQIE3k8MnyrcJPHTHVir0mlBy81RpQj/C6+Ty5il25hFuCcLhZUp5AbOb8g+y6GwCW1NvMYjunK1Iy5eVB/VT2T1AqVM5os6O4U1GlTq55/X23Txtns42Ib8FVAK7sWTwvwvxhaycBjB/PUUaQkM/o2dUUQ3WF7g3Wxk3jqs0Nzuq8Cckvx7MLQN3UMttKGNOX2RT61ZQdiuNT3G+0RXzxwwCYulmvDgjYThX9PduW3wMiCICA+3L1bTPHPoM+L+QMw1xOmfV3E2FN3B1lYt+5ut+5IJaGv/72I6+V9cY2Xr7faWm0fXyN1C0q1KV3Hgo9hXOQnzUtCWBkmKaCD8nJB0WQMmOG39aqlTj/B9tJp+JZYfZYoDqfGYpljtH5LyAV0XWEOiybSrBh8AMp+r1n9BtDsE4skrG4VR6Gfcw0+IEur4+P6ipGCepKt9rGtBYfKor2j6CWDmTTcUqk0F8qAFf5iOBUID8Xk4MZXheMHQlgSd2/h9cZMM4Ejq+LzDC1L5A/OuF1DwpM3Q4lEI2ipQjHQCMuQv1dEyCgft3CIws/7OkO5HcLBzpctckzeLvw0wvKELD22N3CetZkCq7cTW9U+R5h2PmUqwTZkjihbnfXcUo0WQlFrQ+Y2ld4mMhsVt3hA74Yj1N6MhgaeR5ShU6Z3CNvgW7bi6xTIQmBCAG1pKF2tE4D1GgQF4v9CHt9FFzLyS5lgV9rzY=';const _IH='fd1c08781a81ab4c5aaeb46da4d2d57ece5e327987e96f785c2eaf7c3397d819';let _src;

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
