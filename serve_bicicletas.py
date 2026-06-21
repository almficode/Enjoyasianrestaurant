import http.server, os

PORT = int(os.environ.get('PORT', 8787))
DIR  = '/Users/adrianalmeida/Desktop/proyecto-bicicletas-main'

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)
    def log_message(self, fmt, *args):
        pass

with http.server.HTTPServer(('', PORT), Handler) as httpd:
    print(f'Bicicletas server on :{PORT}', flush=True)
    httpd.serve_forever()
