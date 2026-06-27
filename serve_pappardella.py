#!/usr/bin/env python3
import os, sys
os.chdir("/Users/adrianalmeida/Desktop/Enjoyasianrestaurant/pappardella")
port = int(os.environ.get("PORT", 8767))
import socketserver, http.server
class H(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin','*')
        super().end_headers()
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("", port), H) as s:
    s.serve_forever()
