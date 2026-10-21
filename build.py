"""Rebuild static pages from shared templates. Python 3, no dependencies."""
from pathlib import Path
import json,html
root=Path(__file__).resolve().parent
config=json.loads((root/'site.json').read_text())
base=config['site_url'].rstrip('/')
header=(root/'src/header.html').read_text();footer=(root/'src/footer.html').read_text()
urls=[]
for slug,page in config['pages'].items():
 text=header+(root/f'src/{slug}.html').read_text()+footer
 url=base+('/' if slug=='index' else '/'+slug+'.html')
 values={'title':html.escape(page['title']),'description':html.escape(page['description']),'url_metadata':f'<link rel="canonical" href="{html.escape(url)}"><meta property="og:url" content="{html.escape(url)}">' if base else ''}
 for nav in ['home','about','projects','contact']:values['active_'+nav]='active' if nav==('home' if slug=='index' else slug) else ''
 for key,value in values.items():text=text.replace('{{'+key+'}}',value)
 assert '<?' not in text and '{{' not in text,slug
 (root/f'docs/{slug}.html').write_text(text)
 urls.append(url)
(root/'docs/.nojekyll').touch()
robots='User-agent: *\nAllow: /\n'
if base:
 (root/'docs/sitemap.xml').write_text('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+''.join('<url><loc>'+html.escape(u)+'</loc></url>' for u in urls)+'</urlset>')
 robots+='Sitemap: '+base+'/sitemap.xml\n'
else:(root/'docs/sitemap.xml').unlink(missing_ok=True)
(root/'docs/robots.txt').write_text(robots)
print('Built 4 static pages in docs/')
