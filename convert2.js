const fs = require('fs');
const path = require('path');
const { JSDOM } = require("jsdom");

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

function camelize(str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

files.forEach(file => {
  const filePath = path.join(srcDir, file.name);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Parse using JSDOM
    const dom = new JSDOM(content);
    const doc = dom.window.document;
    
    // Remove headers and footers
    doc.querySelectorAll('header').forEach(el => el.remove());
    doc.querySelectorAll('footer').forEach(el => el.remove());
    doc.querySelectorAll('script').forEach(el => el.remove());
    doc.querySelectorAll('link').forEach(el => el.remove());
    
    // Convert links
    doc.querySelectorAll('a').forEach(el => {
      let href = el.getAttribute('href');
      if (href && (href.endsWith('.html') || href === 'index.html')) {
        let route = href.replace('.html', '');
        if (route === 'index') route = '';
        el.className = el.className || ''; // preserve class
        // We will transform a to Link later via regex
      }
    });

    // We can't convert nested styles easily without React tools, so we just use a regex later.
    // However, JS Dom fixes unbalanced tags immediately!
    let xmlSerializer = new dom.window.XMLSerializer();
    let bodyContent = '';
    // serialize contents of body to avoid body tag itself
    Array.from(doc.body.childNodes).forEach(node => {
      bodyContent += xmlSerializer.serializeToString(node);
    });

    // Now string replacements for JSX
    let jsx = bodyContent;
    
    // Attributes
    jsx = jsx.replace(/class=/g, 'className=');
    jsx = jsx.replace(/ for=/g, ' htmlFor=');
    jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
    jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
    jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
    jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
    jsx = jsx.replace(/onclick=/g, 'onClick=');
    
    // Custom events replacements
    jsx = jsx.replace(/onClick="openWhatsApp\(\)"/g, 'onClick={() => window.open("https://wa.me/9072514040?text=Hello", "_blank")}');
    jsx = jsx.replace(/onClick="document\.getElementById\('contactform'\)\.scrollIntoView\(\{ behavior: 'smooth' \}\);"/g, '');
    
    // Convert <a> to <Link> if href matches our pages
    jsx = jsx.replace(/<a([^>]*)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, href, p3, p4) => {
      if (href.endsWith('.html') || href === 'index.html') {
        let route = href.replace('.html', '');
        if (route === 'index') route = '';
        return `<Link${p1}to="/${route}"${p3}>${p4}</Link>`;
      }
      return match;
    });

    // Fix style strings to React style objects
    // Example: style="background-image: url('assets/images/bgshade.png');"
    // Example: style="background-image:url('assets/images/img_ellipse_3_copy_12.svg')"
    // We will find all style="([^"]*)" and parse them
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
      let styles = {};
      p1.split(';').forEach(rule => {
        if (!rule.trim()) return;
        let parts = rule.split(':');
        if (parts.length >= 2) {
          let key = camelize(parts[0].trim());
          let val = parts.slice(1).join(':').trim();
          styles[key] = val;
        }
      });
      return `style={${JSON.stringify(styles)}}`;
    });
    
    // Remove XML namespacing potentially added
    jsx = jsx.replace(/ xmlns="http:\/\/www.w3.org\/1999\/xhtml"/g, '');
    
    // Comment out HTML comments! XMLSerializer preserves comments as <!--...-->
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
    
    const template = `import React from 'react';
import { Link } from 'react-router-dom';

function ${file.component}() {
  return (
    <>
      ${jsx}
    </>
  );
}

export default ${file.component};
`;
    
    fs.writeFileSync(path.join(destDir, file.dest), template);
    console.log('Converted with JSDOM', file.name, 'to', file.dest);
  }
});
