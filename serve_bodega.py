#!/usr/bin/env python3
import os, http.server, socketserver

PORT = 8765
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), "bodega-uga"))

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args): pass

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving Bodega de Uga on port {PORT}")
    httpd.serve_forever()
