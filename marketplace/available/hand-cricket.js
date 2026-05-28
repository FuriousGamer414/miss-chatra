// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:20 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1BN1/Zo9P+Oa/2umnLmOS2iVJmxQ55rwnHPHNjJzAxy6QF+JgIeTwaiEeNpSi3TCQiEhU16WUgguuxS3tqKZDL4ZVd2uFMcSZIHF9hIQ+CDaV88IiJ5eJWAp1ZuynD0CMy9auRiuEjD8uiNDdiXLzV7iAVusCL9lHmVltPix1xqJcKhBB6gjm2rcU0LKEBtmcezrs6dYZ75kWz791tVuinseLyLy7N8K9i/0I3SWm7x8HF9Wwejbote44IYQjOX7sr9a/LrIDXf8KEA2DS5J7Tn7K86WuGy7lceDKrRtByQkvmzPYcP5hAteM/9B8NC1lHZIvsK3mbxBX/ermVq2Z20s7ygT4IbfJWwHyrInH06JElzuN+5aGxwfZ4tqkDndtzsIOZ+jyw0DdVd0dTi+AoESPqMmMzCfslZYn57lUpPbDZz+2ky3hzpXu/K6uZUTU67ozcF90hiteGlC6uUNrZdXS6pDyWt00w0qE+ZrJN/bRrOcQhf/jZ/9u7DA7KJWLi0hVtZCeMVuCtjJdWT5aLAwDYuezyQ3Jr0RIqHxv3i7V5+HpmBeiF+NMuXyO7E84fR86tBOfo/YoKGb/WO3vUfkKOlfgo6KMjCad1+gcBikbDe4CcmmeVHsij7Q8mJbHYSjfHSbwfDyNInY6qYzHXppUwcGwTKdUnFTySyX2lrJukpYlEobk1lAvmvHNOXaOpRH2hvVOvEHWt6XpV95JB3cMD6lNGmRSYRq2oGuyURI2XQiC3uLFErdAiHg8Hy7r7FbiPA9MzllvgOBEzvmrL0HJHdg0R5BDz3sjDBKb2Y3d/YEXTnHj3FPcV9H9cjypevbjQXEb/Fq83P/0l9ir5E02/hgqbn0vi54nFddZPvwSP6QPUWNCgZkyv+ey84B76Ap83bkq8N/X33MdSiBhBrJcRrKEEYoB+f7T5ekk3OZ7myQJFKwK0Bxtz0CS1nXAXaEL6G0E16nJpm+PzRvPD1MOmaNFljo8wdyEejBuQ16eDswO4Ikos2i8EHHegTJ2pwlCVTM3pH7jCpBVXwea/Kboh7qs/ial4KkHOgV/JIAo6z3VUZvOVz+MmlNbbUaTWmhY25eaac0Q5H4Miguf8pk36mDOndbHZIgD0hgCJZd54n1ASjw/QKe8HAAZI9bKY8llzkkoU8ClfKZY1Jj11AIvrw45ObmUjs1W8pm1CZWJVQaQAYffQMmLBDhvqU557RrlI0GqkyacW/eai4h42JljT/NTjcIsppYn/wCGwioq+x8ZKyzQ4EXoRUKrMCU9x6TdFbUMXEMi3VaW9gjP4snq0m6w+clLWjTXfbDMwcvbhG3RadQ7tSDONUsaWL89R51d/qiH11p4Biaq4ekR+KehKlUXw3bAKuQoVLZ7Q9mXRI27KLkyGrFG9l0JsjYVWWQlwjy0Zlyh8M+4nk3prdvRiAeUoarz51B0OmreOril8Z6Z+kEmGLyC9c3TYC59Zge9mRNSj/7Cj4n03hhWVVO2kxoY6xdSvZoDbzYQ/si/ADQUUVjhz27P+Jz5eHcclS1BFVZRc8I/uUoG+Z7cXsK1HZFhF3Y9D65FLlLXmktar4gl3w/G5w0Ycf8m2V/DXluGsaz0Gt+QExgmXjDH2PJdhpAn9YghYPJ+O3aT1fDewsByYPdT6yYi2WBEiJHKSbr2PFiC94mxV5fjtXhoHh6+MNSFFwsTkf8z74Tu5sFaMU';const _IH='c13b521880ced9d2cb3103f4ddc078053966411cb742e5b1acfb4b038a44d936';let _src;

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
