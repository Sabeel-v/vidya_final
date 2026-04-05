const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'public_html');
const destDir = path.join(__dirname, 'src', 'pages');

const files = [
  { name: 'index.html', dest: 'Home.jsx', component: 'Home' },
  { name: 'about.html', dest: 'About.jsx', component: 'About' },
  { name: 'blog.html', dest: 'Blog.jsx', component: 'Blog' },
  { name: 'contact.html', dest: 'Contact.jsx', component: 'Contact' },
  { name: 'course.html', dest: 'Course.jsx', component: 'Course' },
  { name: 'events.html', dest: 'Events.jsx', component: 'Events' }
];

function convertToJSX(htmlStr) {
  // Replace class= with className=
  let jsx = htmlStr.replace(/class=/g, 'className=');
  // Replace for= with htmlFor=
  jsx = jsx.replace(/ for=/g, ' htmlFor=');
  // Add closing tags for img, br, hr, input
  jsx = jsx.replace(/<img(.*?)>/g, (match, p1) => {
    if (match.endsWith('/>')) return match;
    return `<img${p1} />`;
  });
  jsx = jsx.replace(/<br(.*?)>/g, (match, p1) => {
    if (match.endsWith('/>')) return match;
    return `<br${p1} />`;
  });
  jsx = jsx.replace(/<hr(.*?)>/g, (match, p1) => {
    if (match.endsWith('/>')) return match;
    return `<hr${p1} />`;
  });
  jsx = jsx.replace(/<input(.*?)>/g, (match, p1) => {
    if (match.endsWith('/>')) return match;
    return `<input${p1} />`;
  });
  
  // Replace standard links
  jsx = jsx.replace(/<a href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, p3) => {
    if (p1.endsWith('.html') || p1 === 'index.html') {
      let route = p1.replace('.html', '');
      if (route === 'index') route = '';
      return `<Link to="/${route}"${p2}>${p3}</Link>`;
    }
    return match;
  });
  
  // Replace onclick with onClick
  jsx = jsx.replace(/onclick=/g, 'onClick=');
  // Remove window.openWhatsApp onclick function since it's an external JS function. We can just change it to a dummy.
  jsx = jsx.replace(/onClick="openWhatsApp\(\)"/g, 'onClick={() => window.open("https://wa.me/9072514040?text=Hello", "_blank")}');
  jsx = jsx.replace(/onClick="document.getElementById\('contactform'\).scrollIntoView\(\{ behavior: 'smooth' \}\);"/g, '');
  
  // Fix nested style={{}} conversions where original was style="background-image: url('...');"
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    // For simplicity, convert simple string styles to react objects, or just ignore if it's too complex.
    // Actually, background-image: url(...) can be converted.
    let styleObjStr = '{}';
    if (p1.includes('background-image')) {
      let urlMatch = p1.match(/url\(['"]?(.*?)['"]?\)/);
      if (urlMatch) {
         return `style={{ backgroundImage: "url('${urlMatch[1]}')" }}`;
      }
    }
    return match; // If not perfectly caught, standard string might fail in React, so let's try to convert basic ones.
  });
  
  // In React, style must be an object. We'll do a basic conversion:
  jsx = jsx.replace(/style="opacity:([^;]+);?"/g, 'style={{ opacity: $1 }}');

  return jsx;
}

files.forEach(file => {
  const filePath = path.join(srcDir, file.name);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract everything between <header> and <footer>
    // Let's strip <header>...</header>
    content = content.replace(/<header([\s\S]*?)<\/header>/, '');
    // Strip <footer>...</footer>
    content = content.replace(/<footer([\s\S]*?)<\/footer>/, '');
    
    // Extract everything between <body...> and </body>
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let mainContent = bodyMatch ? bodyMatch[1] : content;
    
    // Remove scripts
    mainContent = mainContent.replace(/<script([\s\S]*?)<\/script>/g, '');
    // Remove link tags
    mainContent = mainContent.replace(/<link(.*?)>/g, '');
    // Remove <!-- sample --> etc (optional)
    
    const jsxContent = convertToJSX(mainContent);
    
    const template = `import React from 'react';
import { Link } from 'react-router-dom';

function ${file.component}() {
  return (
    <>
      ${jsxContent}
    </>
  );
}

export default ${file.component};
`;
    
    fs.writeFileSync(path.join(destDir, file.dest), template);
    console.log('Converted', file.name, 'to', file.dest);
  }
});
