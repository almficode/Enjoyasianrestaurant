import http.server, os

PORT = int(os.environ.get('PORT', 3002))
DIR  = os.environ.get('DIR', '/Users/adrianalmeida/Desktop/Bianco-Ristorante-Web')

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)
    def log_message(self, fmt, *args):
        pass  # silent

with http.server.HTTPServer(('', PORT), Handler) as httpd:
    print(f'Bianco server on :{PORT}', flush=True)
    httpd.serve_forever()
